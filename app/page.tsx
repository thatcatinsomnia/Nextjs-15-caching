import Link from 'next/link';

export default function Home() {
  return (
    <div>
        <h1 className="py-8 text-center text-4xl font-black">Next.js 15 Caching</h1>

        <div className="mx-auto max-w-xs">
            <ul className="list-disc text-lg space-y-1 underline">
                <li>
                    <Link href="/memoization">Request Memoization</Link>
                </li>
                <li>
                    <Link href="/data-cache">Data Cache</Link>
                </li>
                <li>
                    <Link href="/full-route-cache">Full Route Cache</Link>
                </li>
                <li>
                    <Link href="/route-cache">Route Cache</Link>
                </li>
            </ul>
        </div>
    </div>
  );
}

