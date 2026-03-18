import { ReactNode } from "react";

export default function Container({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen p-10 max-w-5xl mx-auto">
      {children}
    </div>
  );
}