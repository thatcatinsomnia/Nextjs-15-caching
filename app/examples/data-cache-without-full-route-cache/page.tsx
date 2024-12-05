import Boundary from "#/components/Boundary";
import FetchDataCached from "./FetchDataCached";

export const dynamic = 'force-dynamic';

export default async function DataCacheWithoutFullRouteCachePage() {
    return (
        <div>
            <h2 className="py-8 text-2xl font-bold">Example of data cache without full route cache</h2>

            <p className="mb-4">dynamic data: {Date.now()}</p>

            <Boundary title="Cached Data">
                <FetchDataCached />
            </Boundary>
        </div>
    );
}