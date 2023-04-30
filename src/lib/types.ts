export type HttpOptions = {
    token: string;
    baseUrl: string;
    ttl?: number;
}

export type HttpResult<R> = {
    limit: number;
    offset: number;
    page: number;
    pages: number;
    total: number;
    docs: R
}

export type CacheEntry = {
    name: string;
    value: unknown;
    expiresAt: number;
}
