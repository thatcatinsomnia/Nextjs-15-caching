import Title from '#/components/Title';
import Quote from '#/components/Quote';
import Heading from '#/components/Heading';
import { Table, THead, TBody, Tr, Th, Td } from '#/components/Table';
import Bold from '#/components/Bold';
import Link from '#/components/Link';

export default function Home() {
  return (
    <div>
        <Title>Next.js 15 Caching</Title>

        <section>
            <p className="mb-4">Next.js 中，會透過將 rendering 結果和 data request 進行 cache 來提高 application 的性能。這篇文章會介紹這些 cache 的機制，以及你可以用來設定這些 cache 的 API，還有這些 cache 又是如何互相同時使用。</p>

            <Quote title="💡 good to know" className="group">
                <p>
                    這篇文章可以幫助你了解 Next.js 的 cache 是如何運作，但使用 Next.js 這些知識並不是必要的。大多數 Next.js 的 cache API 都有預設值，可以透過零配置或是最少設定來實現最佳效能。
                </p>
            </Quote>
        </section>

        <section>
            <Heading>Next.js 15 cache 機制</Heading>
            <p className="mb-6">底下是不同種類 cache 的機制以及它們的目的:</p> 

            <Table className="mb-10">
                <THead>
                    <Tr>    
                        <Th>機制</Th>
                        <Th>WHAT</Th>
                        <Th>WHERE</Th>
                        <Th>PURPOSE</Th>
                        <Th>DURATION</Th>
                    </Tr>
                </THead> 
                <TBody>
                    <Tr>
                        <Td>Request memoization</Td>
                        <Td>function 的回傳值</Td>
                        <Td>Server</Td>
                        <Td>在 React Component tree 中重複使用資料</Td>
                        <Td>Per-request lifecycle</Td>
                    </Tr>
                    <Tr>
                        <Td>Data Cache</Td>
                        <Td>Data</Td>
                        <Td>Server</Td>
                        <Td>儲存的資料在 user 間和部屬資料</Td>
                        <Td>持續性 (可以被重新驗證)</Td>
                    </Tr>
                    <Tr>
                        <Td>Full Route Cache</Td>
                        <Td>HTML & RSC Payload</Td>
                        <Td>Server</Td>
                        <Td>減少 rendering 開銷和改善效能</Td>
                        <Td>持續性 (可以被重新驗證)</Td>
                    </Tr>
                    <Tr>
                        <Td>Router Cache</Td>
                        <Td>RSC Payload</Td>
                        <Td>Client</Td>
                        <Td>減少 navigation 時的 server requests</Td>
                        <Td>User session 或是 time-based</Td>
                    </Tr>
                </TBody>
            </Table>

            <p>預設 Next.js 會盡可能的使用 cache 來優化你的糞 code，這表示 routes 會 <Bold>statically rendered</Bold> 並且 data requests 會被 <Bold>cached</Bold>，直到你取消它。</p>
        </section>

        <footer className="mt-12 flex items-center justify-end">
            <Link href="/memoization">Next: Request Memoization</Link>
        </footer>


        {/* <div className="mx-auto max-w-xs">
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
        </div> */}
    </div>
  );
}
