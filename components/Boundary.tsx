export default function Boundary({ title, children }: { title?: string, children: React.ReactNode }) {
    return (
        <div className="p-8 border border-dashed border-slate-400 rounded-md relative">
            {title && <span className="px-2 py-0.5 text-xs absolute top-0 right-0 bg-slate-900">{title}</span>}
            {children}
        </div>
    );
}
