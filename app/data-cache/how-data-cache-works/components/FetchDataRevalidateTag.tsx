function Tag({ 
    tag 
}: { 
    tag: string 
}) {
    return <span className="mr-1 inline-flex items-center justify-center size-8 bg-slate-600 rounded">{tag}</span>;
}

export default async function FetchDataRevalidateTag({ 
    tags 
}: { 
    tags: string[] 
}) {
    const res = await fetch(`http://localhost:3000/api/random?tags=${tags.join(',')}`, { next: { tags, revalidate: 600 } });
    const { data } = await res.json();

    return (
        <div className="p-4 bg-pink-500 rounded">
            tags: {tags.map(tag => <Tag key={tag} tag={tag} />)}
            <p>{data}</p>
        </div>
    );
}
