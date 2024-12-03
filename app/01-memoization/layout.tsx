import type { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode}) {
    return (
        <div className="p-4 py-8">
            <main>{children}</main>
        </div>
    );
}
