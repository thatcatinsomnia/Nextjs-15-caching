import Link from "next/link";
import Boundary from "#/components/Boundary";
import { fetchUsers } from "#/helpers/fetchUsers";
import RefreshButton from "#/components/RefreshButton";

export default async function ClientSideRouterCachePage() {
	const users = await fetchUsers();
    console.log('PAGE: [Client Side Router Cache]');

    return (
        <div className="pt-24">
            <h2 className="py-12 text-2xl font-bold">example of client side router cache</h2>

            <Boundary>
                <p className="mb-4">
                    {users.join(', ')}
                </p>

				<div className="space-y-4">
					<Link className="block text-blue-500 underline" href="/examples/client-side-router-cache/prefetch" prefetch>prefetch=true</Link>
					<Link className="block text-blue-500 underline" href="/examples/client-side-router-cache/prefetch-false" prefetch={false}>prefetch=false</Link>
					<Link className="block text-blue-500 underline" href="/examples/client-side-router-cache/prefetch-undefined" prefetch={undefined}>prefetch=undefined</Link>
				</div>

				<RefreshButton />
            </Boundary>
        </div>
    );
}
