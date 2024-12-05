import Boundary from "#/components/Boundary";
import { fetchUsersWithTag } from '#/helpers/fetchUsers';

function Tags({ 
    tags 
}: { 
    tags: string[];
}) {
    return (
        <div className="flex items-center gap-0.5 text-xs absolute top-0 left-0">
            {tags.map(tag => (
                <span key={tag} className="px-2 py-0.5 leading-4 inline-flex items-center justify-center bg-slate-800">{tag}</span>
            ))}
        </div>
    );
}

export default async function FetchWithRevalidateTag({ 
    tags 
}: { 
    tags: string[] 
}) {
    const users = await fetchUsersWithTag(tags, {
        next: {
            tags: tags,
            revalidate: 600
        }
    });

    return (
        <div className="">
            <Boundary title="FetchWithRevalidateTag">
                <Tags tags={tags} />
                {users.join(', ')}
            </Boundary>
        </div>
    );
}

