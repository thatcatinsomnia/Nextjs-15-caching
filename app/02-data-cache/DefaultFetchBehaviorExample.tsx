import type { User } from '#/user.type';
import ExampleBlock from '#/components/ExampleBlock';
import Box from '#/components/Box';

async function DefaultFetchBehavior() {
    const res = await fetch('https://randomuser.me/api?results=3&inc=name');
    const { results: users }= await res.json();

    const userNames = (users as User[]).map(user => user.name.first + ' ' + user.name.last);

    return (
      <Box name="DefaultFetchBehavior">
          <p>{userNames.join(', ')}</p>
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

