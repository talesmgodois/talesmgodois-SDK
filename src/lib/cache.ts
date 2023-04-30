import { CacheEntry } from "./types";

export class CacheRequest {
    private readonly cache = new Map<string, CacheEntry>();

    constructor(private ttl: number = 600 * 1000) { }

    public setTTL(ttl?: number) {
        if (ttl) {
            this.ttl = ttl;
        }
    }

    set(name, value) {
        const entry: CacheEntry = {
            expiresAt: Date.now() + this.ttl,
            name,
            value,
        }
        this.cache.set(name, entry);
    }

    get(key) {
        const entry = this.cache.get(key);
        const now = Date.now();
        if (entry?.expiresAt >= now) {
            return entry.value;
        }
        this.cache.delete(key);
        return null;
    }
};
