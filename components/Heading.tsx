import type { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

export default function Heading({ 
    size,
    children, 
    className 
}: { 
    size?: 'sm';
    children: ReactNode; 
    className?: string 
}) {    
    const sizeVariants = size === 'sm' ? 'text-lg' : '';

    return <h2 className={twMerge("mb-6 text-xl font-bold", sizeVariants, className)}>{children}</h2>;
}
