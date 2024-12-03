export default function ComponentName({
    name 
}: {
    name: string;
}) {
    return <span className="px-2 py-0.5 text-xs absolute top-0 right-0 bg-slate-900">{name}</span>;
}