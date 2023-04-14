import React from "react";

interface ICenterContainer {
  children?: React.ReactNode;
}

export const CenterContainer: React.FC<ICenterContainer> = ({ children }) => {
  return (
    <div className="m-10 flex items-center justify-center">
      <div className="w-full max-w-prose">{children}</div>
    </div>
  );
};
