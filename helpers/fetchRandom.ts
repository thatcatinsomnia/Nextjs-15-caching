export async function fetchRandom() {
    return fetch('http://localhost:3000/api/random');
}

export async function fetchRandomWithConfig(config?: RequestInit) {
    return fetch('http://localhost:3000/api/random', config);
}
