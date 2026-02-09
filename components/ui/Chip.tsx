import React from 'react';

export const Chip: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <span className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700 border border-blue-100">
      {children}
    </span>
  );
};

