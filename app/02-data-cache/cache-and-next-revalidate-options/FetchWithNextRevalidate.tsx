import Box from '#/components/Box';
import { fetchUsers } from "#/helpers/fetchUsers";

export default async function FetchWithNextRevalidate() {
    const users = await fetchUsers({ next: { revalidate: 3 }});

    return (
        <Box name="FetchWithNextRevalidate">
            {users.join(', ')}
        </Box>
    );
}

