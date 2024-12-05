import { fetchUsersWithTag } from "#/helpers/fetchUsers";
import Box from "#/components/Box";

export default async function DynamicChild() {
    const users = await fetchUsersWithTag(['dynamic']);

    return (
        <div>
            <h2>dynamic child</h2>

            <Box name="dynamic child">
                {users.join(', ')}
            </Box>
        </div>
    );
}
