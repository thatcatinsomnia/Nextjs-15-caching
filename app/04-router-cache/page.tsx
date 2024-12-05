import { List, ListItem } from '#/components/List';
import Title from '#/components/Title';
import Link from '#/components/Link';
import Heading from '#/components/Heading';
import Code from '#/components/Code';
import Bold from '#/components/Bold';

export default function RouterCache() {
    console.log('PAGE: [Client Side Router Cache]');

    return (
        <div>
            <Title>Client Side Router Cache</Title>

            <section>
                <p>Router Cache 是一種 in-memory cache，用來儲存 RSC payload，透過 route segments、layouts、loading states 和 pages 區分。</p>
                <p>當 user 在 navigation 時候，Next.js 會 cache 訪問過的 route segments 並且 prefetchs user 想要前往的頁面。這讓 user 可以立刻前往上一頁或下一頁而不用整個頁面重新 reload。</p>
            </section>

            <section>
                <p>使用 Router Cache:</p>

                <List>
                    <ListItem>Layouts 會被 cached，並在 navigation 重複使用(<Link href="https://nextjs.org/docs/app/building-your-application/routing/linking-and-navigating#4-partial-rendering">partial rendering</Link>)。</ListItem>
                    <ListItem>Loading states are cached 並在 navigation 重複使用以實現 <Link href="https://nextjs.org/docs/app/building-your-application/routing/loading-ui-and-streaming#instant-loading-states">instant navigation</Link></ListItem>
                    <ListItem>Pages 預設不會 cached，但是會被重複使用在 上一頁和下一頁的 navigation。</ListItem>
                </List>
            </section>

            <section>
                <Heading>Duration</Heading>

                <p>cache 會被儲存在 browser 的站存記憶體中，兩個因素決定 router cache 持續時間:</p>

                <List>
                    <ListItem><Bold>Session:</Bold> cache 會在 navigation 之間持續存在，但如果 refresh 就會消失。</ListItem>
                    <ListItem><Bold>Automatic Invalidation Period</Bold>: <p>layouts 和 loading 狀態，在一段時間後會自動失效。時間依照 resource 是怎麼被 <Link href="">prefetch</Link>，並且 resource 是 statically generated</p></ListItem>
                    <ListItem>Default Prefetching(<Code>prefetch=&#x7B;null&#x7D;</Code>) 或是未指定: dynamic pages 不會 cahce，static pages 五分鐘。</ListItem>
                    <ListItem>Default Prefetching(<Code>prefetch=&#x7B;true&#x7D;</Code> 或是 <Code>router.prefetch</Code>): static & dynamic pages 都是五分鐘。</ListItem>
                </List>

                <p>當頁面 refresh 時，會清除所有的 cache segments，但是 automatic invalidation period 只會影響 prefetch 後的各個 segment</p>
            </section>

            <section>
                <Heading>Invalidation</Heading>
                <p>有兩種方法:</p>
                <List>
                    <ListItem>在 Server Action:</ListItem>

                    <List>
                        <ListItem>使用 revalidatePath 或是 revalidateTag。</ListItem>
                        <ListItem>使用 cookies.set 或是 cookies.delete，來取消 Router Cache，避免使用到了過期的 cookies。</ListItem>
                    </List>

                    <ListItem>呼叫 router.refresh 會取消 Router Cache 並且發送新的 request 到 server 以獲取當前 route</ListItem>
                </List>
            </section>

            <section>
                <Heading>Opting out</Heading>
                <p>Next.js 15 中，預設 page segments 是沒有開啟 cache。</p>
            </section>

            <footer className="mt-20 flex items-center justify-between">
                <Link href="/03-full-route-cache">Prev: Full Route Cache</Link>
                <Link href="/05-how-cache-interaction">Next: How Cache Interaction</Link>
            </footer>
        </div>
    );
}
