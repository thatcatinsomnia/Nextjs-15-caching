import type { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

export default function FullScreenText({ 
    children 
}: {
    children: ReactNode;
    className?: string;
}) {
    return <h3 className={twMerge("h-dvh flex items-center justify-center font-black text-[clamp(28px,10vw,56px)] italic")}>{children}</h3>
}
