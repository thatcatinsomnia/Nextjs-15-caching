import { twMerge } from 'tailwind-merge';

export default function Gap({
    className
}: {
    className?: string
}) {
    return <div className={twMerge('h-8', className)} />;
}
