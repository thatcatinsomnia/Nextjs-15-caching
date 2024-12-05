import { fetchUsersWithTag } from '#/helpers/fetchUsers';

export default async function FetchDataCached() {
    const users = await fetchUsersWithTag(['data-cache-without-full-route-cache'], {
        cache: 'force-cache'
    });

    return <p>{users.join(', ')}</p>;
}
