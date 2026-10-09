import React from 'react';
import BottomNavBar, { demoNavItems } from '@/components/ui/bottom-nav-bar';

export default function Demo() {
  return (
    <div className="flex flex-col items-center justify-center p-8 space-y-4">
      <h2 className="text-xl font-bold text-white">Bottom Nav Bar Demo</h2>
      <BottomNavBar items={demoNavItems} />
    </div>
  );
}
