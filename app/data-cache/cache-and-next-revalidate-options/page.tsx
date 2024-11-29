import Image from 'next/image';
import Code from '#/components/Code';
import CodeBlock from '#/components/CodeBlock';
import FullScreen from '#/components/FullScreen';
import ExampleBlock from '#/components/ExampleBlock';
import Link from '#/components/Link';
import FetchDataCached from './components/FetchDataCached';
import FetchDataNextRevalidate from './components/FetchDataNextRevalidate';
import disappointedUrl from './images/disappointed.png';
import happyUrl from './images/happy.png';

const codeFetchDataCached = `
export default async function FetchDataCached() {
    const res = await fetch('http://localhost:3000/api/random', { cache: 'force-cache' });
    const { data } = await res.json();

    return (
        <div className="p-4 bg-pink-500 rounded">Data: {data}</div>
    );
}
`.trim();

const codeFetchDataNextRevalidate = `
export default async function FetchDataNextRevalidate() {
    const res = await fetch('http://localhost:3000/api/random', { next: { revalidate: 3 } });
    const { data } = await res.json();

    return (
        <div className="p-4 bg-pink-500 rounded">Data: {data}</div>
    );
}
`.trim();

export default function Page() {
    return (
        <div>
            <section>
                <p>讓我們先透過 <Code>options.cache</Code> 方式:</p>

                <CodeBlock code={codeFetchDataCached} />

                <ExampleBlock>
                    <FetchDataCached />
                </ExampleBlock>

                <p>可以看到，頁面 refresh 後，資料會固定不會再變動，除非我們使用 full refresh (mac: <Code>command + R</Code>, windows: <Code>ctrl + shift + R</Code>)。</p>
            </section>

            <section>
                <p>接著我們試著使用 <Code>next.revalidate</Code> 方式:</p>

                <CodeBlock code={codeFetchDataNextRevalidate} />

                <ExampleBlock>
                    <FetchDataNextRevalidate />
                </ExampleBlock>

                <p>這裡我們將 revalidate 的時間設定為 3 秒後，所以 3 秒後 refresh 應該可以看到資料更新。</p>

                <FullScreen>
                    <div className="text-center">
                        <Image 
                            src={happyUrl}
                            alt="right ?"
                            width={400}
                        />
                        <p>對吧 ?</p>
                    </div>
                </FullScreen>

                <FullScreen>
                    <div className="text-center">
                        <Image 
                            src={disappointedUrl}
                            alt="right !!!?"
                            width={400}
                        />
                        <p>對吧 !!!?</p>
                    </div>
                </FullScreen>
            </section>

            <footer className="mt-16 flex items-center justify-between">
                <Link href="/data-cache">Prev: data-cache</Link>
                <Link href="/data-cache/how-data-cache-works">Next: how-data-cache-works</Link>
            </footer>
         </div>
    );
}
