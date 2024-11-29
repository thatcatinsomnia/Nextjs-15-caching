export default async function FetchDataNextRevalidate() {
    const res = await fetch('http://localhost:3000/api/random', { next: { revalidate: 3 } });
    const { data } = await res.json();

    return (
        <div className="p-4 bg-pink-500 rounded">Data: {data}</div>
    );
}
