import { revalidateTag, revalidatePath } from "next/cache";
import FetchDataRevalidateTag from "./FetchDataRevalidateTag";

export default function RevalidateTagExample() {
    const revalidateTagAction = async (formData: FormData) => {
        'use server';

        const tag = formData.get('tag') as string;
        revalidateTag(tag as string);
    };

    const revalidateAllAction = async () => {
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
                    <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded">Revalidate a</button>
                </form>

                <form action={revalidateTagAction}>
                    <input type="hidden" name="tag" value="b" />
                    <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded">Revalidate b</button>
                </form>

                <form action={revalidateTagAction}>
                    <input type="hidden" name="tag" value="c" />
                    <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded">Revalidate c</button>
                </form>

                <form action={revalidateAllAction}>
                    <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded">Revalidate all</button>
                </form>

                <form action={revalidatePathAction}>
                    <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded">Revalidate path</button>
                </form>
            </div>
        </div>
    );
}
