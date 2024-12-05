import Boundary from "#/components/Boundary";
import { fetchUsers } from '#/helpers/fetchUsers';

async function DefaultFetchBehavior() {
    const users = await fetchUsers();

    return (
        <Boundary title="DefaultFetchBehavior">
            {users.join(', ')}
        </Boundary>
    );
}

export default function DefaultFetchBehaviorExample() {
    return (
        <div className="pt-4 mb-4 space-y-4">
            <DefaultFetchBehavior />
        </div>
    );
}

