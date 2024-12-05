import { fetchUsersWithTag } from '#/helpers/fetchUsers';
import Box from '#/components/Box';

export default async function fetchDataCached() {
    const users = await fetchUsersWithTag(['data-cache-without-full-route-cache'], {
        cache: 'force-cache'
    });

    return (
        <Box name="data cache without full route cache">
            {users.join(', ')}
        </Box>
    );
}
