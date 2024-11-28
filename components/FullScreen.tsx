import type { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

export default function FullScreen({ 
    children 
}: {
    children: ReactNode;
    className?: string;
}) {
    return <div className={twMerge("h-dvh flex items-center justify-center font-black text-[clamp(28px,10vw,56px)] italic")}>{children}</div>
}

