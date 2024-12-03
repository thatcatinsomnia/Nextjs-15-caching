import Title from '#/components/Title';
import Heading from '#/components/Heading';
import { List, ListItem } from '#/components/List';
import Bold from '#/components/Bold';
import Quote from '#/components/Quote';
import Link from '#/components/Link';

export default function FullRouteCache() {
    return (
        <div>
            <Title>Full Route Cache</Title>

            <section>你可能聽過這些術語: 
              <List>
                  <ListItem>Automatic Static Optimization</ListItem>
                  <ListItem>Static Site Generation</ListItem>
                  <ListItem>Static Rendering</ListItem>
              </List>
              <p className="mt-4">這幾個術語經常被交換使用，但是指的都是同一件事: application 在 build time，rendering 並 cache routes 的過程。</p>
            </section>

            <section>
                <p>Next.js 會自動的在 build time 自動的 render 和 cache routes，避免每次接收到 request 時後才進行 rendering，來提升頁面讀取速度。</p>
                <p>想要理解 Fll Route Cache 的運作方式，透過了解 React 如何 render 和 Next.js 怎麼對結果進行 cache 很有幫助。</p>
            </section>

            <section>
                <Heading>1. React Rendering on the Server</Heading>
                <p>在 server 端，Next.js 使用 React&apos;s API 進行 rendering。rendering 工作會被分組: individual routes segments 和 Suspense boundaries。</p>

                <p>每種 chunk 分成兩個步驟 render:</p>

                <List type="ordered">
                    <ListItem>React 將 Server Component renders 成一種優化過的特殊格式，方便用於 streaming，叫做 <Bold>React Server Component Payload</Bold>。</ListItem>
                    <ListItem>Next.js 使用 React Server Component Payload 和 Client Component Javascript 指令在 server 端 render HTML。</ListItem>
                </List>

                <Quote title="What is React Server Component Payload">
                    <p>React Server Component Payload 是一種緊湊的 binary 資料，用來表示 React Server Component tree。它會被 client 端的 React 用來更新 browser 的 DOM。Server Component Payload 包含:</p>
                    <List>
                        <ListItem>Server Components 的 render 結果。</ListItem>
                        <ListItem>替 Client Components 放置 placeholder 並且關連到對應的 Javascript 檔案。</ListItem>
                        <ListItem>任何 props 會從 Server Compoennt 傳入 Client Component。</ListItem>
                    </List>

                    <p>想了解更過關於 Server Component資料，可以查看<Link href="https://nextjs.org/docs/app/building-your-application/rendering/server-components">官方文件</Link>。</p>
                </Quote>
            </section>
        </div>
    );
}

