'use client';

import { useRouter } from 'next/navigation';

export default function RefreshButton() {
    const router = useRouter();

    return <button className="absolute top-1 right-1 text-xs bg-slate-700 hover:bg-slate-800 text-white px-4 py-2 rounded" onClick={() => router.refresh()}>Refresh</button>;
}
