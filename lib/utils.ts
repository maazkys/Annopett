// lib/utils.ts
export const img = (url: string) => `${url}${url.includes("?") ? "&" : "?"}auto=format&q=80`;