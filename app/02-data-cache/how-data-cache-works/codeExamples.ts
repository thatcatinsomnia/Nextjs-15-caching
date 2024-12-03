export const codeTimeBasedRevalidation = `
// revalidate every 1 hour
fetch('...', { next: { revalidate: 3600 } });
`.trim();

export const codeOptingOutCache = `
let data = await fetch('...', { cache: 'no-store' });
`.trim();

export const codeOnDemandRevalidate = `
import { revalidateTag, revalidatePath } from "next/cache";
import FetchWithRevalidateTag from "./FetchWithRevalidateTag";

export default async function FetchDataRevalidateTag({ 
    tags 
}: { 
    tags: string[];
}) {
    const users = await fetchUsersWithTag(tags, {
        next: {
            tags: tags,
            revalidate: 600
        }
    });

    return (
        <Box name="FetchWithRevalidateTag">
            <Tags tags={tags} />
            {users.join(', ')}
        </Box>
    );
}

export default function RevalidateTagExample() {
    const revalidateTagAction = async (formData: FormData) => {
        'use server';

        const tag = formData.get('tag') as string;
        revalidateTag(tag as string);
    };

    const revalidateAllTagsAction = async () => {
        'use server';

        revalidateTag('a');
        revalidateTag('b');
        revalidateTag('c');
    };

    const revalidatePathAction = async () => {
        'use server';

        revalidatePath('/data-cache/how-data-cache-works');
    };

    return (
        <div className="space-y-4">
            <FetchDataRevalidateTag tags={['a', 'c']} />
            <FetchDataRevalidateTag tags={['b', 'c']} />

            <div className="flex items-center gap-2">
                <form action={revalidateTagAction}>
                    <input type="hidden" name="tag" value="a" />
                    <button>revalidate a</button>
                </form>

                <form action={revalidateTagAction}>
                    <input type="hidden" name="tag" value="b" />
                    <button>revalidate b</button>
                </form>

                <form action={revalidateTagAction}>
                    <input type="hidden" name="tag" value="c" />
                    <button>revalidate c</button>
                </form>

                <form action={revalidateAllTagsAction}>
                    <button>revalidate all</button>
                </form>

                <form action={revalidatePathAction}>
                    <button>revalidate current path</button>
                </form>
            </div>
        </div>
    );
}
`;

