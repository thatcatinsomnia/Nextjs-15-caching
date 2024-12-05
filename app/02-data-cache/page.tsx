import Link from '#/components/Link';
import Title from '#/components/Title';
import Code from '#/components/Code';
import Quote from '#/components/Quote';
import CodeBlock from '#/components/CodeBlock';
import DefaultFetchBehaviorExample from './DefaultFetchBehaviorExample';
import { codeDefaultFetchBehavior, codeCacheOption, codeNextRevalidateOption } from './codeExamples';

export default function DataCache() {
    console.log('PAGE: [Data Cache]');

    return (
        <div>
            <Title>Data Cache</Title>

            <section>
                <p className="mb-4">Next.js 的 Data Cache 機制，讓你在不同的 server requests 和 deployments 間持久化。因為 Next.js 擴展了 <Code>fetch</Code> API，允許在 server 的每個 requests 設定自己的 caching segmantice。</p>

                <Quote title="💡 good to know">
                    <p>在 Browser 中，<Code>fetch</Code> 中的 <Code>cache</Code> option 用來表示 request 如何和 browser&apos;s HTTP cache 互動。在 Next.js 中的 <Code>cache</Code> 表示 server-side request 如何和 server 的 Data Cache 互動。</p>
                </Quote>
            </section>

            <section>
                <p>在 Next.js 15 中，server side 的 fetch 預設不會進行 cache(在 Next.js 14 中預設是啟用，但在 Next.js 15 中預設已經改為不啟用 Data Cache，developer 可以自行決定何時要使用它。)，可以看到下面的例子，每次重新整理時候，資料都會變動:</p>

                <CodeBlock code={codeDefaultFetchBehavior} />
                <DefaultFetchBehaviorExample />
            </section>

            <section>
                <p>想要將 fetch function 的回傳值進行 cache，你可以透過 <Code>fetch</Code> options 來設定:</p>

                <div className="mt-4">
                    <Link 
                        className="inline-block"
                        href="https://nextjs.org/docs/app/building-your-application/caching#fetch-optionscache"
                    >
                        <Code>cache</Code>
                    </Link>
                    <CodeBlock code={codeCacheOption} />
                </div>

                <div className="mt-4">
                    <Link 
                        className="inline-block"
                        href="https://nextjs.org/docs/app/building-your-application/caching#fetch-optionsnextrevalidate"
                    >
                        <Code>next.revalidate</Code>
                    </Link>

                    <CodeBlock code={codeNextRevalidateOption} />
                </div>
            </section>

            <footer className="mt-20 flex items-center justify-between">
                <Link href="/02-data-cache/cache-and-next-revalidate-options">Prev: cache-and-next-revalidation-options</Link>
                <Link href="/03-full-route-cache">Next: Full Route Cache</Link>
            </footer>
        </div>
    )
}
