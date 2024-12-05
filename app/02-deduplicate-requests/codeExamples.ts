export const codeAbortController = `
const { signal } = new AbortController();
fetch(url, { signal });
`.trim();

