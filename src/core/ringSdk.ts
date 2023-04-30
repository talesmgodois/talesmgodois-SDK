import { Movie, QueryParams, Quote, SdkOptions } from "./types";
import { HttpResult, CacheRequest, httpRequest } from '../lib';
import { Readable } from "stream";

export class RingsSdk {
    private caller: <T>(url: string, params?: QueryParams) => Promise<T>;
    private readonly cache = new CacheRequest();

    constructor(private readonly options: SdkOptions) {
        const cache = new CacheRequest(options.ttl);
        this.caller = httpRequest.buildCaller({
            token: options.token,
            baseUrl: 'https://the-one-api.dev/v2',
        }, cache);
    }

    async getMovie(id: string): Promise<Movie> {
        const data = await this.caller<HttpResult<Movie[]>>(`movie/${id}`);
        return data?.docs?.length ? data.docs[0] : null;
    }

    async getMovies(): Promise<HttpResult<Movie[]>> {
        return this.caller<HttpResult<Movie[]>>('movie');
    }

    async getMovieQuotes(id: string): Promise<HttpResult<Quote[]>> {
        return this.caller<HttpResult<Quote[]>>(`movie/${id}/quote`);
    }

    async getQuotes(params?: QueryParams): Promise<HttpResult<Quote[]>> {
        return this.caller<HttpResult<Quote[]>>('quote', params);
    }

    async getAllQuotes(): Promise<Quote[]> {
        let page = 1;
        let pages = Number.MIN_SAFE_INTEGER;
        const quotes: Quote[] = [];
        do {
            const data = await this.getQuotes({ page, limit: 100 });
            quotes.push(...data.docs);
            pages = data.pages;
            page++;
        } while (page <= pages);

        return quotes;
    }

    getAllQuotesAsStream(chunkLimit = 100): Readable {
        let page = 1;
        let pages = Number.MIN_SAFE_INTEGER;

        const stream = new Readable({
            objectMode: true,
            read() { }
        });

        const getNextPage = async () => {
            const { docs, pages: totalPages } = await this.getQuotes({ page, limit: chunkLimit });
            pages = totalPages;
            page++;

            stream.push(docs);

            if (page <= pages) {
                await getNextPage();
            } else {
                stream.push(null);
            }
        }

        getNextPage();

        return stream;
    }

    async getQuote(id: string): Promise<HttpResult<Quote>> {
        const data = await this.caller<HttpResult<Quote[]>>(`quote/${id}`);
        return {
            ...data,
            docs: data.docs[0],
        }
    }
}
