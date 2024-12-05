import ExampleBlock from '#/components/ExampleBlock';
import Box from '#/components/Box';
import { fetchUsers } from '#/helpers/fetchUsers';

async function DefaultFetchBehavior() {
    const users = await fetchUsers();

    return (
      <Box name="DefaultFetchBehavior">
            {users.join(', ')}
      </Box>
    );
}

export default function DefaultFetchBehaviorExample() {
    return (
        <ExampleBlock>
            <DefaultFetchBehavior />
        </ExampleBlock>
    );
}

