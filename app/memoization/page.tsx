import CodeBlock from '#/components/CodeBlock';
import FullScreenText from '#/components/FullScreenText';
import Quote from '#/components/Quote';
import ReceivePropsExample from './components/ReceivePropsExample';
import Link from '#/components/Link';

const codeReceiveProps = `
function ReceiveProps({ data }: { data: string }) {
    return (
        <div className="p-4 bg-pink-500 rounded">
            <p>data: {data}</p>
        </div>
    );
}

function App() {
    const res = await fetchRandom();
    const { data } = await res.json();

    return (
        <div>
            <ReceiveProps data={data} />
            <ReceiveProps data={data} />
        </div>
    );
}
`.trim();

const codeFetchRandomData = `
function FetchRandomData() {
    const res = await fetchRandom();
    const { data } = await res.json();

    return (
        <div className="p-4 bg-pink-500 rounded">
            <p>data: {data}</p>
        </div>
    );
}

function App() {
    reutn (
        <div>
            <FetchRandomData />
            <FetchRandomData />
        </div> 
    );
}
`.trim();

export default async function Memoization() {
    return (
        <div>
            <p>為了要減少 request 發送次數，需要將資料在 React Component tree 的最上層透過 props 往下傳遞，就像下面這樣:</p>
            <CodeBlock code={codeReceiveProps} />

            <p className="mb-4">得到的結果會像下面這樣:</p>
            <ReceivePropsExample />

            <p className="mt-4">現在我們將程式碼變成在 component 中各自呼叫 fetch 方法：</p>
            <CodeBlock code={codeFetchRandomData} />

            <FullScreenText>結果會是什麼❓</FullScreenText>

            <Quote 
                className="group"
                title="🤯 Hints"
            >
                <p className="blur-sm group-hover:blur-none transition duration-200">fetchRandom API 回傳值是隨機亂數。</p>
            </Quote>

            <footer className="mt-20 flex items-center justify-between">
                <Link href="/">Prev: Home</Link>
                <Link href="/memoization/deduplicate-requests">Next: Deduplicate requests</Link>
            </footer>
        </div>
    );
}
