import type { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

export default function Heading({ 
    children, 
    className 
}: { 
    children: ReactNode; 
    className?: string 
}) {    
    return <h2 className={twMerge("mb-6 text-xl font-bold", className)}>{children}</h2>;
}
