import { fetchUsersWithTag } from "#/helpers/fetchUsers";

export default async function DynamicChild() {
    const users = await fetchUsersWithTag(['dynamic']);

    return <p>{users.join(', ')}</p>;
}
