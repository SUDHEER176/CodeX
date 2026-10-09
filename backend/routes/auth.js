import express from 'express';
import { db } from '../data/store.js';

const router = express.Router();

// In-memory OTP storage for demo/production (maps phoneNumber -> { otp, expiresAt })
const otpStore = new Map();

/**
 * POST /api/auth/send-otp
 * Generates and sends a 6-digit OTP to the given phone number
 */
router.post('/send-otp', (req, res) => {
  try {
    const { phoneNumber, countryCode = '+91' } = req.body;

    if (!phoneNumber || phoneNumber.trim().length < 7) {
      return res.status(400).json({
        success: false,
        error: 'Please enter a valid mobile number.'
      });
    }

    const fullPhone = `${countryCode}${phoneNumber.trim().replace(/\D/g, '')}`;
    
    // Generate 6-digit OTP (for easy testing default demo code: 123456 or random)
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    const expiresAt = Date.now() + 5 * 60 * 1000; // 5 minutes validity

    otpStore.set(fullPhone, { otp, expiresAt, defaultDemo: "123456" });

    console.log(`\n📲 [AUTH] OTP sent to ${fullPhone} => OTP: ${otp} (Demo code: 123456)\n`);

    res.json({
      success: true,
      message: `OTP sent successfully to ${fullPhone}`,
      phoneNumber: fullPhone,
      demoOtp: "123456", // included for seamless immediate testing
      generatedOtp: otp
    });
  } catch (error) {
    console.error('Send OTP error:', error);
    res.status(500).json({ success: false, error: 'Failed to send OTP.' });
  }
});

/**
 * POST /api/auth/verify-otp
 * Validates the 6-digit OTP and authenticates/creates user
 */
router.post('/verify-otp', (req, res) => {
  try {
    const { phoneNumber, otp, name } = req.body;

    if (!phoneNumber || !otp) {
      return res.status(400).json({
        success: false,
        error: 'Phone number and OTP are required.'
      });
    }

    const storedData = otpStore.get(phoneNumber);
    const isValidOtp = otp === "123456" || (storedData && storedData.otp === otp && Date.now() <= storedData.expiresAt);

    if (!isValidOtp) {
      return res.status(400).json({
        success: false,
        error: 'Invalid or expired OTP. Please try again (or use demo code 123456).'
      });
    }

    // OTP verified: Get or create user
    const store = db.read();
    let user = store.user || {};

    user = {
      ...user,
      phoneNumber,
      name: name || user.name || "Alex Learner",
      isAuthenticated: true,
      lastLoginAt: new Date().toISOString()
    };

    store.user = user;
    db.write(store);

    // Clean up OTP
    otpStore.delete(phoneNumber);

    const token = `cs_token_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;

    res.json({
      success: true,
      message: 'Mobile number verified successfully! Welcome to CodeStreak.',
      data: {
        user,
        token
      }
    });
  } catch (error) {
    console.error('Verify OTP error:', error);
    res.status(500).json({ success: false, error: 'Failed to verify OTP.' });
  }
});

/**
 * GET /api/auth/me
 * Retrieves current authenticated user profile
 */
router.get('/me', (req, res) => {
  try {
    const store = db.read();
    res.json({
      success: true,
      data: store.user
    });
  } catch (error) {
    res.status(500).json({ success: false, error: 'Failed to fetch user profile.' });
  }
});

/**
 * POST /api/auth/logout
 */
router.post('/logout', (req, res) => {
  try {
    const store = db.read();
    if (store.user) {
      store.user.isAuthenticated = false;
      db.write(store);
    }
    res.json({ success: true, message: 'Logged out successfully.' });
  } catch (error) {
    res.status(500).json({ success: false, error: 'Failed to logout.' });
  }
});

export default router;
