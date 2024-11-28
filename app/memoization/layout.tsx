import type { ReactNode } from "react";
import Title from "#/components/Title";

export default function Layout({ children }: { children: ReactNode}) {
    return (
        <div>
            <Title>Request Memoization</Title>
            <main>{children}</main>
        </div>
    );
}