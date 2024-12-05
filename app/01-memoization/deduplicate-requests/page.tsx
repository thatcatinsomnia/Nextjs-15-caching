import Image from 'next/image';
import Link from "#/components/Link";
import Heading from '#/components/Heading';
import Code from '#/components/Code';
import CodeBlock from '#/components/CodeBlock';
import Quote from '#/components/Quote';
import { List, ListItem } from '#/components/List';
import { codeAbortController } from './codeExamples';
import deduplicateRequestUrl from './images/deduplicate-requests.png';
import howRequestMemoizationWorksUrl from './images/how-request-memoization-works.png';

export default function DeduplicateRequests() {
    console.log('PAGE: [Deduplicate Requests]');

    return (
        <div>
            <section>
                <Heading>What is Request Memoization</Heading>

                <p className="mb-4">
                    Nextjs 中的 fetch API 會自動 memoize 相同 URL 和 options 的 reqeusts，這表示你可以在 React Compoennt tree 中的不同地方呼叫有相同 options 的 fetch function 而不會重複發送 request。
                </p>
                <Image 
                    src={deduplicateRequestUrl}
                    alt="nextjs deduplicate requests"
                />
            </section>

            <section>
               <Heading>How Request Memoization Works</Heading>
               <Image 
                    className="mb-4"
                    src={howRequestMemoizationWorksUrl}
                    alt="how request memoization works"
                />

                <List type="ordered">
                    <ListItem>rendering 期間時，第一次的 request function 會執行，結果並不會在 memory 中，會是一個 cache <Code>MISS</Code>。</ListItem>
                    <ListItem>因此 request function 會被執行，並將結果儲存在 memory 中。</ListItem>
                    <ListItem>在同一個 render pass 中，後續相同的 request function 在被執行時將會是 cache <Code>HIT</Code>，結果會直接從 memory 中返回，該 request function 則不會被執行。</ListItem>
                    <ListItem>一旦 route render 完成，memory 會 &quot;reset&quot;，所有的 request memoization 會被清空。</ListItem>
                </List>

                <Quote title="💡 good to know">
                    <List>
                        <ListItem>Request Memoization 是 React 功能，不是 Next.js 的功能。</ListItem>
                        <ListItem>Memoization 只會影響使用 <Code>GET</Code> method 的 <Code>fetch</Code> 方法。</ListItem>
                        <ListItem>
                            只能作用在 <span className="text-pink-400 font-bold italic">Server Components</span>，這代表:
                            <List>
                                <ListItem>它會套用在 <Code>generateMetadata</Code>、<Code>generateStaticParams</Code>，Layouts，Pages，和其他所有的 Server Components 中的 <Code>fetch</Code> requests。</ListItem>
                                <ListItem>它不會套用在 Route Handlers 中的 <Code>fetch</Code> requests。</ListItem>
                            </List>
                        </ListItem>
                        <ListItem>其它不是使用 <Code>fetch</Code> 的情況(像是 database client，CMS client 等等)，可以使用 <Link href="https://nextjs.org/docs/app/building-your-application/caching#react-cache-function">React cache function</Link></ListItem>
                    </List>
                </Quote>

                <section>
                    <h3 className="text-lg font-bold">Duration</h3>
                    <p>cache 會持續存在，直到 React component tree 完成 rendering。</p>
                </section>

                <section>
                    <h3 className="text-lg font-bold">Revalidating</h3>
                    <p>只會套用在 rendering 期間存在，不需要重新驗證。</p>
                </section>

                <section>
                    <h3 className="text-lg font-bold">Opting Out</h3>
                    <p>這是 React 預設的優化行為，並不推薦關掉。</p>
                    <p>如果想要針對特定的 request，可以使用 <Link href="https://developer.mozilla.org/en-US/docs/Web/API/AbortController">AbortController</Link> 中的 <Link href="https://developer.mozilla.org/en-US/docs/Web/API/AbortController/signal">signal</Link> 屬性，但這並不會取消掉 memoization 而是取消 request 的發送。</p>
                    <CodeBlock code={codeAbortController} />
                </section>
            </section>

            <footer className="mt-12 flex items-center justify-between">
                <Link href="/01-memoization">Prev: Memoization</Link>
                <Link href="/02-data-cache">Next: Data Cache</Link>
            </footer>
        </div>
    );
}

