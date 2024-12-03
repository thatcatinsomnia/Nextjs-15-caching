import { fetchUsers } from '#/helpers/fetchUsers';
import Box from '#/components/Box';

export default async function FetchDataWithCachOption() {
    const users = await fetchUsers({
        cache: 'force-cache'
    });
    
    return (
        <Box name="FetchDataWithCacheOption">
            {users.join(', ')}
        </Box>
    );
}

