import Boundary from "#/components/Boundary";
import { fetchUsers } from '#/helpers/fetchUsers';

export default async function ComponentWithDataFetch() {
    const users = await fetchUsers();

    return (
        <Boundary title="ComponentWithDataFetch">
            {users.join(', ')}
        </Boundary>
    );
}

