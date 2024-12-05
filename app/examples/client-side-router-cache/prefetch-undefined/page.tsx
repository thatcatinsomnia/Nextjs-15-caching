import Link from "next/link";
import { fetchUsers } from "#/helpers/fetchUsers";
import Boundary from "#/components/Boundary";
import RefreshButton from "#/components/RefreshButton";

export const dynamic = 'force-dynamic';

export default async function PrefetchUndefinedPage() {
    const users = await fetchUsers();

    return (
        <div className="pt-24">
            <h2 className="py-12 text-2xl font-bold">prefetch=undefined</h2>

            <Boundary>
                <p className="mb-4">
                    {users.join(', ')}
                </p>

                <Link className="block text-blue-500 underline" href="/examples/client-side-router-cache">Back</Link>

                <RefreshButton />
            </Boundary>
        </div>
    );
}
