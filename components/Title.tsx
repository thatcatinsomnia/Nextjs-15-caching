import type { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

export default function Title({ 
    children, 
    className 
}: { 
    children: ReactNode;
    className?: string;
}) {
    return <h1 className={twMerge("mb-6 py-10 text-center text-4xl font-black", className)}>{children}</h1>;
}
