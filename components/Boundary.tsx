export default function Boundary({ children }: { children: React.ReactNode }) {
    return (
        <div className="p-4 border border-dashed border-slate-400 rounded-md relative">
            {children}
        </div>
    );
}
