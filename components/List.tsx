import type { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';


export function ListItem({
    children,
    className
}: {
    children: ReactNode;
    className?: string;
}) {
    return <li className={twMerge('pt-2', className)}>{children}</li>
}

const listVariants = {
    ordered: 'list-decimal',
    unordered: 'list-disc'
}

export function List({
    children,
    type = 'unordered',
    className
}: {
    children: ReactNode;
    type?: 'ordered' | 'unordered';
    className?: string;
}) {
    const Component = type === 'ordered' ? 'ol' : 'ul';
    const variants = listVariants[type];

    return (
        <Component className={twMerge('pl-8', variants, className)}>
            {children}
        </Component>
    );
}

