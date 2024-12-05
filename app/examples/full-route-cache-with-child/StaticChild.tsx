import { fetchUsers } from "#/helpers/fetchUsers";
import Box from "#/components/Box";

export default async function StaticChild() {
    const users = await fetchUsers();

    return (
        <div>
            <h2>static child</h2>

            <Box name="static child">
                {users.join(', ')}
            </Box>
        </div>
    );
}
