export default async function FetchDataCached() {
    const res = await fetch('http://localhost:3000/api/random', { cache: 'force-cache' });
    const { data } = await res.json();

    return (
        <div className="p-4 bg-pink-500 rounded">Data: {data}</div>
    );
}
