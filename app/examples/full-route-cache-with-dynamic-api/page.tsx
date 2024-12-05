import Box from "#/components/Box";
import { fetchUsers } from "#/helpers/fetchUsers";

export const dynamic = 'force-dynamic';
// export const revalidate = 10;
// export const fetchCache = 'default-no-store';

export default async function FullRouteCacheWithDynamicAPIPage() {
    const users = await fetchUsers();

    return (
        <div>
            <h2 className="py-12 text-2xl font-bold">example of full route cache with dynamic api</h2>

            <Box name="full route cache with dynamic api">
                {users.join(', ')}
            </Box>
        </div>
    );
}
