export const codeCacheOption = `
fetch('https://...', { cache: 'force-cache' });
`.trim();

export const codeNextRevalidateOption = `
// revalidate after 1 hour
fetch('https://...', { next: { revalidate: 3600 } });
`.trim();

export const codeDefaultFetchBehavior = `
async function DefaultFetchBehavior() {
    const users = await fetchUsers();

    return (
        <Boundary title="DefaultFetchBehavior">
          {users.join(', ')}
        </Boundary>
    );
}
`.trim();

