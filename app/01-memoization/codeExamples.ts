export const codeUsersWithProps = `
async function Example() {
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
        <Boundary title="ComponentWithDataFetch">
            {users.join(', ')}
        </Boundary>
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

