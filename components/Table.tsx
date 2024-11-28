import type { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

export function Table({ 
    children, 
    className 
}: { 
    children: ReactNode; 
    className?: string;
}) {
    return <table className={twMerge("table-auto text-left", className)}>{children}</table>;
}

export function THead({ 
    children, 
    className 
}: { 
    children: ReactNode; 
    className?: string;
}) {
    return <thead className={twMerge("border-b border-slate-400/40", className)}>{children}</thead>;
}

export function Th({ 
    children, 
    className 
}: { 
    children: ReactNode; 
    className?: string;
}) {
    return <th className={twMerge("p-4", className)}>{children}</th>;
}

export function TBody({ 
    children,
    className
}: { 
    children: ReactNode;
    className?: string;
}) {
    return <tbody className={twMerge(className)}>{children}</tbody>;
}

export function Tr({ 
    children, 
    className
}: { 
    children: ReactNode;
    className?: string;
}) {
    return <tr className={twMerge("border-b border-slate-400/40", className)}>{children}</tr>;
}

export function Td({ 
    children, 
    className 
}: { 
    children: ReactNode;
    className?: string;
}) {
    return <td className={twMerge("p-4", className)}>{children}</td>;
}
