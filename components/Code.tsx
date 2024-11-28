import type { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

export default function Code({ 
    children,
    className 
}: { 
    children: ReactNode;
    className?: string;

}) {
    return (
        <span className={twMerge("px-1.5 bg-[#46465e] font-bold rounded", className)}>{children}</span>
    )
}

