import Image from 'next/image';
import Code from '#/components/Code';
import CodeBlock from '#/components/CodeBlock';
import FullScreen from '#/components/FullScreen';
import Link from '#/components/Link';
import Heading from '#/components/Heading';
import FetchWithCacheOptionExample from './FetchWithCacheOptionExample';
import FetchWithNextRevalidateExample from './FetchWithNextRevalidateExample';
import disappointedUrl from './images/disappointed.png';
import happyUrl from './images/happy.png';
import { codeFetchWithCacheOption, codeFetchWithNextRevalidate } from './codeExamples';

export default function Page() {
    console.log('PAGE: [Cache and Next Revalidate Options]');

    return (
        <div>
            <section>
                <Heading>options.cache</Heading>
                <p>讓我們先透過 <Code>options.cache</Code> 方式，讓資料可以被 cached:</p>

                <CodeBlock code={codeFetchWithCacheOption} />

                <FetchWithCacheOptionExample />

                <p>試著重新整理畫面，在頁面 refresh 後，因為已經設定了 <Code>cache: &apos;force-cache&apos;</Code>，資料會直接從 Data Cache 中被返回，但如果使用 full refresh 的話，資料又會被重新抓取並放到 Data Cache 中。</p>
            </section>

            <section>
                <Heading>next.revalidate</Heading>

                <p>我們在試試透過 <Code>next.revalidate</Code>的方式:</p>

                <CodeBlock code={codeFetchWithNextRevalidate} />

                <FetchWithNextRevalidateExample />

                <p>這裡我們將 revalidate 的時間設定為 3 秒後，所以 3 秒後按下 refresh 應該可以看到資料更新。</p>

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
                <Link href="/03-data-cache">Prev: Data Cache</Link>
                <Link href="/05-how-data-cache-works">Next: How Data Cache Works</Link>
            </footer>
         </div>
    );
}
