import FetchDataCached from "./FetchDataCached";

export const dynamic = 'force-dynamic';

export default async function DataCacheWithoutFullRouteCachePage() {
    return (
        <div className="pt-24">
            <h2 className="py-12 text-2xl font-bold">example of data cache without full route cache</h2>

            <p className="mb-4">some dynamic text here {Date.now()}</p>

            <FetchDataCached />
        </div>
    );
}