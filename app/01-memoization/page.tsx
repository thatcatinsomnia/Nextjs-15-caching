import CodeBlock from '#/components/CodeBlock';
import FullScreen from '#/components/FullScreen';
import Link from '#/components/Link';
import Title from '#/components/Title';
import ComponentWithPropsExample from './ComponentWithPropsExample';
import ComponentWithDataFetchExample from './ComponentWithDataFetchExample';
import { codeUsersWithProps, codeFetchUsers } from './codeExamples';

export default async function Memoization() {
    return (
        <div>
            <Title>Request Memoization</Title>

            <section>
              <p>為了要減少 request 發送次數，需要將資料在 React Component tree 的最上層透過 props 往下傳遞，就像下面這樣:</p>
              <CodeBlock code={codeUsersWithProps} />

              <p className="mb-4">得到的結果會像下面這樣:</p>
              <ComponentWithPropsExample />

              <p className="mt-4">現在我們將程式碼變成在 component 中各自呼叫 fetch 方法：</p>
              <CodeBlock code={codeFetchUsers} />
            </section>

            <FullScreen>結果會是什麼❓</FullScreen>

            <section>
                <p>沒錯，跟你腦中所想的一樣，兩個 Components 雖然各自在自己的 component 中透過 api 取得資料，但是得到的資料卻一樣:</p>
                <ComponentWithDataFetchExample />
                <p>你可能會想說是因為 cache 的原因，但是這裡的 cache 可能不是你所想的 &quot;cache&quot;。</p>
            </section>

            <footer className="mt-20 flex items-center justify-between">
                <Link href="/">Prev: Home</Link>
                <Link href="/01-memoization/deduplicate-requests">Next: Deduplicate Requests</Link>
            </footer>
        </div>
    );
}

