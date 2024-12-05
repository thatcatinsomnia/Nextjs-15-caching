import Image from 'next/image';
import Heading from '#/components/Heading';
import Bold from '#/components/Bold';
import { List, ListItem } from '#/components/List';
import Quote from '#/components/Quote';
import Code from '#/components/Code';
import CodeBlock from '#/components/CodeBlock';
import Link from '#/components/Link';
import OnDemandRevalidateExample from './OnDemandRevalidateExample';
import howDataCacheWorksUrl from './images/how-data-cache-works.png';
import howTimeBasedRevalidationWorksUrl from './images/how-time-based-revalidation-works.png';
import howOnDemandRevalidationWorksUrl from './images/how-on-demand-revalidation-works.png';
import { codeTimeBasedRevalidation, codeOnDemandRevalidate, codeOptingOutCache } from './codeExamples';

export default function Page() {
    console.log('PAGE: [How Data Cache Works]');

    return (
        <div>
            <section>
                <Heading>How Data Cache Works</Heading>

                <Image
                    src={howDataCacheWorksUrl}
                    alt="how data cache works"
                />

                <List className="pt-4">
                    <ListItem>上面的的 <Code>fetch</Code> 在使用了 <Code>&apos;force-cache&apos;</Code>，Next.js 會檢查 Data Cache 有沒有 cached response。</ListItem>
                    <ListItem className="list-none">
                        <List> 
                            <ListItem>如果 cached response 存在的話，會立刻返回並 <Link href="/memoization">memoized</Link>。</ListItem>
                            <ListItem>如果沒有 cached response 的話，request 會被發送到 data source，結果會儲存在 Data Cache 並且 memoized。</ListItem>
                        </List>
                    </ListItem>
                    <ListItem>對於沒有設定 cache option 或是使用了 <Code>{"{ cache: 'no-store' }"}</Code> 的 request，會總是從 data source 取得資料並且 memoize。</ListItem>
                    <ListItem>不管資料有沒有 cache，requests 會總是被 memoized 來避免在 React render 時發送重複的 requests 來取得相同的資料。</ListItem>
                </List>

                <Quote title="Data Cache 和 Request Memoization 差別">
                    <List>
                        <ListItem>兩者都可以透過重複使用 cached data 來提高效能。</ListItem>
                        <ListItem>Data Cache 會在不同的 requests 和 deployments 持續存在。</ListItem>
                        <ListItem>memoization 只會持續到 request 的 lifetime。</ListItem>
                    </List>
                </Quote>
            </section>
            
            <section>
                <Heading>Duration</Heading>
                <p>Data Cache 會在 requests 和 deployments 持續存在，直到 revalidate 或是取消它。</p>
            </section>

            <section>
                <Heading>Revalidating</Heading>
                <div>
                    <p>兩種方法</p>
                    <List>
                        <ListItem>
                            <p><Bold>Time-based Revalidation:</Bold> 在一段時間後發出 request 並重新驗證資料。對於不經常更新且資料不需要維持在最新的情況下，可以使用這種方式。</p>
                        </ListItem>
                        <ListItem>
                            <p><Bold>On-demand Revalidation:</Bold> 在特定的事件中重新驗證資料(e.g. form submission)。這種方式可以適用 tag-based 或是 path-based 的方式一次性的重新驗證資料群體。在需要確保資料是最新的情況下可以選擇此方式(e.g. 從 headless CMS 更新的內容)。</p>
                        </ListItem>
                    </List>
                </div>
            </section>

            <section>
                <Heading>Time-based Revalidation</Heading>
                <p>使用 <Code>fetch</Code> 的 <Code>next.revalidate</Code> option 設定重新驗驗證的時間(in seconds)。</p>
                <CodeBlock code={codeTimeBasedRevalidation} />
                <p>當想要一次性對 route 下所有的 requests 進行設定或是沒辦法使用 <Code>fetch</Code> 的情況，可以使用 <Link href="https://nextjs.org/docs/app/building-your-application/caching#segment-config-options">Route Segment Config options</Link></p>

                <div className="pt-6">
                    <Heading size="sm">How Time-based Revalidation Works</Heading>
                    <Image 
                        src={howTimeBasedRevalidationWorksUrl}
                        alt="how time-based revalidation works"
                    />

                    <List>
                        <ListItem>第一次使用 fetch 並設定了 revalidate 時間，資料會被從外部獲取，並且儲存在 Data Cache。</ListItem>
                        <ListItem>任何後續的 requests，只要還在設定的時間內，都會直接返回 cached 資料。</ListItem>
                        <ListItem>
                            <div>
                                <p>在超過設定的時間後發送 request，當下仍會返回 cached 資料(同一時間 Data Cache 中對應的資料會變成 stale 狀態)。</p>
                                <List>
                                    <ListItem>Next.js 會在背景執行資料的 revalidation。</ListItem>
                                    <ListItem>一旦資料被 fetched 成功，Next.js 會更新 Data Cache。</ListItem>
                                    <ListItem>如果背景執行的 revalidation 失敗的話，則原有的 Data Cache 會報保留。</ListItem>
                                </List>
                            </div>
                        </ListItem>
                        <ListItem>這種行為類似 <Link href="https://web.dev/stale-while-revalidate/">stale-While-revalidate</Link>。</ListItem>
                    </List>
                </div>
            </section>

            <section>
                <Heading size="sm">How On-demand Revalidation Works</Heading>
                <p className="mb-4">資料可以透過 <Link href="https://nextjs.org/docs/app/building-your-application/caching#revalidatepath">revalidatePath</Link> 或是 <Link href="https://nextjs.org/docs/app/building-your-application/caching#fetch-optionsnexttags-and-revalidatetag">revalidateTag</Link> 方式重新驗證:</p>
                <Image 
                    src={howOnDemandRevalidationWorksUrl}
                    alt="how on-demand revalidation works"
                />

                <List>
                    <ListItem>第一次 fetch 執行時，資料會從remote 過來，並且會儲存在 Data Cache 中。</ListItem>
                    <ListItem>當 on-demand revalidation 被觸發後，對應到的 cache 項目會被從 Data Cache 中清除。</ListItem>
                    <ListItem className="list-none">
                        <List> 
                            <ListItem>這和 time-based revalidation 不同，time-based revalidation 會保留 stale 的資料直到新的資料被 fetched。</ListItem>
                        </List>
                    </ListItem>
                    <ListItem>再次發送的 request，cache 會 MISS ，所以資料又會從外部來源取得，並設置在 Data Cache 中。</ListItem>
                </List>
            </section>

            <section>
                <p>下面展示了 on demand revalidate 的例子，可以 invalidate 不同的 tag:</p>
                <CodeBlock code={codeOnDemandRevalidate} />

                <OnDemandRevalidateExample />
            </section>

            <section>
                <Heading>Opting Out</Heading>
                <p>如果你不想要 fetch 方法被 cache，你可以這麼做:</p>
                <CodeBlock code={codeOptingOutCache} />
            </section>

            <footer className="pt-20 flex items-center justify-between">
                <Link href="/04-cache-and-next-revalidate-options">Prev: Cache and Next Revalidate Options</Link>
                <Link href="/06-full-route-cache">Next: Full Route Cache</Link>
            </footer>
        </div>
    );
}
