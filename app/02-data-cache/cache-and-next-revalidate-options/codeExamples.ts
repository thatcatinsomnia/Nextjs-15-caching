export const codeFetchWithCacheOption = `
export default async function FetchWithCacheOption() {
    const users = fetchUsers({ cache: 'force-cache' });

    return (
        <Box name="FetchWithCacheOption">
            {users.join(', ')}
        </Box>
    );
}
`.trim();

export const codeFetchWithNextRevalidate = `
export default async function FetchWithNextRevalidate() {
    const users = fetchUsers({ next: { revalidate: 3 } });

    return (
        <Box name="FetchWithNextRevalidate">
            {users.join(', ')}
        </Box>
    );
}
`.trim();

