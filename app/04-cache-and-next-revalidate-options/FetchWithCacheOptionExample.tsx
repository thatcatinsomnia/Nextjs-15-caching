import Boundary from "#/components/Boundary";
import { fetchUsers } from '#/helpers/fetchUsers';

export default async function FetchWithCacheOptionExample() {
    const users = await fetchUsers({
        cache: 'force-cache'
    });
    
    return (
        <div className="pt-4 mb-4">
            <Boundary title="FetchDataWithCacheOption">
                {users.join(', ')}
            </Boundary>
        </div>
    );
}
