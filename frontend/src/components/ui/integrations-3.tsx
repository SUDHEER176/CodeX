import React from 'react';
import { Gemini } from "./integrations-3-utils/gemini";
import { Replit } from "./integrations-3-utils/replit";
import { MagicUI } from "./integrations-3-utils/magic-ui";
import { VSCodium } from "./integrations-3-utils/vs-codium";
import { MediaWiki } from "./integrations-3-utils/media-wiki";
import { GooglePaLM } from "./integrations-3-utils/google-palm";
import { LogoIcon } from "./integrations-3-utils/logo";
import { cn } from "../../lib/utils";
import { Button } from "./button";

export default function IntegrationsSection({ onGetStarted }: { onGetStarted?: () => void }) {
  return (
    <section className="relative w-full overflow-hidden my-6">
      <div className="py-16 md:py-24 relative">
        {/* Glow ambient backgrounds */}
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="mx-auto max-w-5xl px-6 relative z-10">
          <div className="grid items-center gap-10 sm:grid-cols-2">
            
            {/* Left Column: Interactive Hexagonal Hub of Integrations */}
            <div className="relative mx-auto w-fit p-4">
              <div
                aria-hidden
                className="absolute inset-0 z-10 bg-radial from-transparent via-black/20 to-black/80 pointer-events-none rounded-3xl"
              />
              
              <div className="mx-auto mb-3 flex w-fit justify-center gap-3">
                <IntegrationCard label="Gemini AI">
                  <Gemini />
                </IntegrationCard>
                <IntegrationCard label="Replit">
                  <Replit />
                </IntegrationCard>
              </div>

              <div className="mx-auto my-3 flex w-fit justify-center gap-3">
                <IntegrationCard label="Magic UI">
                  <MagicUI />
                </IntegrationCard>
                
                {/* Central Core Hub Logo */}
                <IntegrationCard
                  label="CodeStreak Core"
                  borderClassName="shadow-emerald-500/20 shadow-2xl border-emerald-500/40"
                  className="bg-emerald-950/30 ring-2 ring-emerald-500/30 scale-105"
                >
                  <LogoIcon />
                </IntegrationCard>

                <IntegrationCard label="VS Code">
                  <VSCodium />
                </IntegrationCard>
              </div>

              <div className="mx-auto flex w-fit justify-center gap-3">
                <IntegrationCard label="Wiki & Docs">
                  <MediaWiki />
                </IntegrationCard>

                <IntegrationCard label="PaLM LLM">
                  <GooglePaLM />
                </IntegrationCard>
              </div>
            </div>

            {/* Right Column: Copy & Actions */}
            <div className="mx-auto max-w-lg space-y-6 text-center sm:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                ECOSYSTEM SYNC
              </div>

              <h2 className="text-balance text-3xl font-semibold md:text-4xl text-white tracking-tight leading-tight">
                Integrate with your favorite coding & AI tools
              </h2>
              
              <p className="text-slate-400 text-sm md:text-base leading-relaxed">
                Connect your CodeStreak workspace seamlessly with LeetCode, VS Code, Gemini AI tutor, and cloud IDEs to supercharge your problem-solving workflow.
              </p>

              <div className="pt-2 flex items-center justify-center sm:justify-start gap-4">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={onGetStarted}
                  className="rounded-full bg-emerald-500 hover:bg-emerald-400 text-black font-medium border-0 px-6 py-2 shadow-lg shadow-emerald-500/20 transition-transform active:scale-95"
                >
                  Connect Integrations
                </Button>
                <span className="text-xs text-slate-500 font-mono">
                  Zero setup required • Instant sync
                </span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

const IntegrationCard = ({
  children,
  className,
  borderClassName,
  label,
}: {
  children: React.ReactNode;
  className?: string;
  borderClassName?: string;
  label?: string;
}) => {
  return (
    <div
      title={label}
      className={cn(
        "relative flex size-20 rounded-2xl bg-zinc-900/80 border border-white/10 hover:border-white/25 hover:bg-zinc-800/90 transition-all duration-300 hover:scale-110 shadow-lg group cursor-pointer",
        className,
      )}
    >
      <div
        role="presentation"
        className={cn(
          "absolute inset-0 rounded-2xl border border-white/5 group-hover:border-white/20 transition-colors",
          borderClassName,
        )}
      />
      <div className="relative z-20 m-auto flex items-center justify-center size-fit *:size-8 group-hover:scale-105 transition-transform">
        {children}
      </div>
    </div>
  );
};
