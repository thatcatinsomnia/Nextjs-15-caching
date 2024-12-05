import { fetchUsers } from "#/helpers/fetchUsers";

export default async function StaticChild() {
    const users = await fetchUsers();

    return <p>{users.join(', ')}</p>;
}
