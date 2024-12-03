import type { User } from '#/user.type';

const defaultParams = {
    results: 3,
    inc: 'name'
};

async function fetchUsersPrimitive(params: Record<string, any>, options: RequestInit) {
    const paramsToString = Object.keys(params).map(key => `${key}=${params[key as keyof typeof params]}`).join('&');
    const endpoint = `https://randomuser.me/api?${paramsToString}`;

    const res = await fetch(endpoint, options);

    const { results } = await res.json();

    const users = (results as User[]).map(user => `${user.name.first} ${user.name.last}`);
    
    return users;
}

export async function fetchUsers(options: RequestInit = {}) {
    const users = await fetchUsersPrimitive(defaultParams, options);

    return users;
}

export async function fetchUsersWithTag(tags: string[], options: RequestInit) {
    const mergedParams = {...defaultParams, tags: tags.join(', ')};
    const users = await fetchUsersPrimitive(mergedParams, options);

    return users;
}

