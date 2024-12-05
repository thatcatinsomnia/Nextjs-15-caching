export const codeFetchWithCacheOption = `
export default async function FetchWithCacheOption() {
    const users = fetchUsers({ cache: 'force-cache' });

    return (
        <Boundary title="FetchWithCacheOption">
            {users.join(', ')}
        </Boundary>
    );
}
`.trim();

export const codeFetchWithNextRevalidate = `
export default async function FetchWithNextRevalidate() {
    const users = fetchUsers({ next: { revalidate: 3 } });

    return (
        <Boundary title="FetchWithNextRevalidate">
            {users.join(', ')}
        </Boundary>
    );
}
`.trim();

