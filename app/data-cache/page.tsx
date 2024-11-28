import Link from '#/components/Link';
import Code from '#/components/Code';
import Quote from '#/components/Quote';
import CodeBlock from '#/components/CodeBlock';
import ExampleBlock from '#/components/ExampleBlock';
import FetchData from './components/FetchData';

const codeOptionsCache = `
fetch('https://...', { cache: 'force-cache' });
`.trim();

const codeOptionsNextRevalidate = `
// revalidate after 1 hour
fetch('https://...', { next: { revalidate: 3600 } });
`.trim();

const codeFetchData = `
export default async function FetchDataCached() {
    const res = await fetch('http://localhost:3000/api/random');
    const { data } = await res.json();

    return (
        <div className="p-4 bg-pink-500 rounded">Data: {data}</div>
    );
}

`.trim();


export default function DataCache() {
    return (
        <div>
            <section>
                <p className="mb-4">Next.js 的 Data Cache 機制，讓你在不同的 server requests 和 deployments 間持久化。因為 Next.js 擴展了 <Code>fetch</Code> API，允許在 server 的每個 requests 設定自己的 caching segmantice。</p>

                <Quote title="💡 good to know">
                    <p>在 Browser 中，<Code>fetch</Code> 中的 <Code>cache</Code> option 用來表示 request 如何和 browser's HTTP cache 互動。在 Next.js 中 的<Code>cache</Code> 表示 server-side request 如何和 server 的 Data Cache 互動。</p>
                </Quote>
            </section>

            <section>
                <p>在 Next.js 15 中，server side 的 fetch 預設不會進行 cache，可以看到下面的例子，每次重新整理時候，資料都會變動:</p>

                <CodeBlock code={codeFetchData} />

                <ExampleBlock>
                    <FetchData />
                </ExampleBlock>
            </section>

            <section>
                <p>你可以透過 <Code>fetch</Code> options 來設定 caching 行為:</p>

                <div className="mt-4">
                    <Link 
                        className="inline-block"
                        href="https://nextjs.org/docs/app/building-your-application/caching#fetch-optionscache"
                    >
                        <Code>cache</Code>
                    </Link>
                    <CodeBlock code={codeOptionsCache} />
                </div>

                <div className="mt-4">
                    <Link 
                        className="inline-block"
                        href="https://nextjs.org/docs/app/building-your-application/caching#fetch-optionsnextrevalidate"
                    >
                        <Code>next.revalidate</Code>
                    </Link>

                    <CodeBlock code={codeOptionsNextRevalidate} />
                </div>

            </section>

            <footer className="mt-20 flex items-center justify-between">
                <Link href="/memoization/deduplicate-requests">Prev: memoization/deduplicate-requests</Link>
                <Link href="/data-cache/cache-and-next-revalidate-options">Next: cache-and-next-revalidate-options</Link>
            </footer>
        </div>
    )
}

