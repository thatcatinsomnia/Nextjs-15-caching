export const codeUsersWithProps = `
function ComponentWithProps({ data }: { data: string[] }) {
    return (
        <Box name="ComponentWithProps">
            {data.join(', ')}
        </Box>
    );
}

async function App() {
    const users = await fetchUsers();

    return (
        <div>
            <ComponentWithProps data={users} />
            <ComponentWithProps data={users} />
        </div>
    );
}
`.trim();

export const codeFetchUsers = `
async function ComponentWithDataFetch() {
    const users = await fetchUsers();

    return (
        <Box name="ComponentWithDataFetch">
            {users.join(', ')}
        </Box>
    );
}

function App() {
    reutn (
        <div>
            <ComponentWithDataFetch />
            <ComponentWithDataFetch />
        </div> 
    );
}
`.trim();

