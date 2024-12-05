import { fetchUsers } from "#/helpers/fetchUsers";
import ExampleBlock from "#/components/ExampleBlock";
import ComponentWithProps from './ComponentWithProps';

export default async function ComponentWithPropsExample() {
    const users = await fetchUsers();

    return (
        <ExampleBlock className="space-y-4">
            <ComponentWithProps data={users} />
            <ComponentWithProps data={users} />
        </ExampleBlock>
    );
}
