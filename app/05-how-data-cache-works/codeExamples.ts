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

export default async function FetchWithRevalidateTag({ 
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
        <Boundary title="FetchWithRevalidateTag">
            <Tags tags={tags} />
            {users.join(', ')}
        </Boundary>
    );
}

export default function OnDemandRevalidateExample() {
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

        revalidatePath('/05-how-data-cache-works');
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
                    <Button>revalidate b</Button>
                </form>

                <form action={revalidateTagAction}>
                    <input type="hidden" name="tag" value="c" />
                    <Button>revalidate c</Button>
                </form>

                <form action={revalidateAllTagsAction}>
                    <Button>revalidate all</Button>
                </form>

                <form action={revalidatePathAction}>
                    <Button>revalidate current path</Button>
                </form>
            </div>
        </div>
    );
}
`.trim();
