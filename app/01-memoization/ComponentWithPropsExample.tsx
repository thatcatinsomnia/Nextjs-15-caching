import { fetchUsers } from "#/helpers/fetchUsers";
import ComponentWithProps from './ComponentWithProps';

export default async function ComponentWithPropsExample() {
    const users = await fetchUsers();

    return (
        <div className="space-y-4">
            <ComponentWithProps data={users} />
            <ComponentWithProps data={users} />
        </div>
    );
}
