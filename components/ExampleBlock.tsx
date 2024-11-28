import type { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

export default function ExampleBlock({ 
    children,
    className
}: { 
    children: ReactNode;
    className?: string;
}) {
    return (
        <div className={twMerge("my-6 p-4 bg-[#3c3e4e] border border-dashed border-slate-100 rounded", className)}>
            {children}
        </div>
    );
}
