import type { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

export default function Bold({ children, className }: { children: ReactNode, className?: string }) {
    return <strong className={twMerge(className)}>{children}</strong>;
}
