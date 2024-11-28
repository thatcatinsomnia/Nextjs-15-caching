import { fetchRandom } from "#/helpers/fetchRandom";

export default async function ComponentFetchData() {
    const res = await fetchRandom();
    const { data } = await res.json();

    return (
        <div className="p-4 bg-pink-500 rounded">
            <p>data: {data}</p>
        </div>
    );
}
