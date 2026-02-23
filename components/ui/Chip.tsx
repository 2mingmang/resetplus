import React from 'react';

export const Chip: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <span className="inline-flex items-center rounded-full bg-[#2E75CB]/10 px-3 py-1 text-xs font-semibold text-[#2E75CB] border border-[#2E75CB]/20">
      {children}
    </span>
  );
};

