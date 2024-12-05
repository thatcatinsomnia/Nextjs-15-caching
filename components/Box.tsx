import { ReactNode } from 'react';

export default function Box({
  name,
  children
}: {
  name: string;
  children: ReactNode;

}) {
    return (
        <div className="p-8 bg-pink-500 rounded relative">
            <span className="px-2 py-0.5 text-xs absolute top-0 right-0 bg-slate-900">{`<${name} />`}</span>
            {children}
        </div>
    );
}

