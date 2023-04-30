import axios from 'axios';
import { CacheRequest } from './cache';
import { HttpOptions } from './types';
import { QueryParams } from 'core/types';

export const buildCaller = (httpOptions: HttpOptions, cache: CacheRequest) => {
    return async <T>(url: string, params: QueryParams = {}) => {
        const fullUrl = `${httpOptions.baseUrl}/${url}`
        let data;
        const cacheKey = fullUrl + JSON.stringify(params);
        if (cache.get(cacheKey)) {
            return cache.get(cacheKey);
        } else {
            data = await req<T>(fullUrl, httpOptions, params);
        }
        cache.set(cacheKey, data);
        return data;
    }
}

export const req = async <T>(url: string, httpOptions: HttpOptions, params: QueryParams): Promise<T> => {
    const result = await axios.get(url, {
        params,
        headers: {
            Authorization: `Bearer ${httpOptions.token}`,
        },
    });

    return result.data;
};
