import Box from '#/components/Box';
import { fetchUsers } from '#/helpers/fetchUsers';

export default async function ComponentWithDataFetch() {
    const users = await fetchUsers();

    return (
        <Box name="ComponentWithDataFetch">
            {users.join(', ')}
        </Box>
    );
}

