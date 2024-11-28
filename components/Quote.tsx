import type { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

export default function Quote({ 
    title, 
    children,
    className
} : {
    title: string;
    children: ReactNode;
    className?: string;
}) {
    return (
        <blockquote className={twMerge("my-6 p-4 bg-[#262734] rounded-md", className)}>
            <strong className="mb-2 block capitalize">{title}</strong>
            <div>{children}</div>
        </blockquote>
    );
}
