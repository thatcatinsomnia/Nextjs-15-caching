import type { ReactNode } from 'react';
import { revalidateTag, revalidatePath } from 'next/cache';
import FetchWithRevalidateTag from './FetchWithRevalidateTag';
import ExampleBlock from '#/components/ExampleBlock';

function Button({ 
  children 
} :{ 
  children: ReactNode 
}) {
    return (
        <button className="px-4 py-2 bg-blue-600 text-sm hover:bg-blue-700 rounded">{children}</button>
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

        revalidatePath('/02-data-cache/how-data-cache-works');
    };

    return (
        <ExampleBlock>
            <div className="space-y-4">
                <FetchWithRevalidateTag tags={['a', 'c']} />
                <FetchWithRevalidateTag tags={['b', 'c']} />

                <div className="flex items-center gap-2">
                    <form action={revalidateTagAction}>
                        <input type="hidden" name="tag" value="a" />
                        <Button>revalidate a</Button>
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
        </ExampleBlock>
    );
}

