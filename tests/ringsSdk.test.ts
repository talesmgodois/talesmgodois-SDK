import { RingsSdk } from '../src';
import * as dotenv from 'dotenv';

dotenv.config();

jest.setTimeout(2000000);

const token = process.env.ACCESS_TOKEN ?? 'kd4eVUpx2QybkU4B83aD';

describe('The One API', () => {
    const ringsSdk = new RingsSdk({
        token,
    });

    beforeEach(() => {
        jest.clearAllMocks();
    })

    it('getMovies', async () => {

        const data = await ringsSdk.getMovies();

        expect(data).toBeDefined();
        expect(data.docs).toBeDefined();
        expect(data.docs[0]._id).toBeDefined();
    });

    it('getMovie by id', async () => {
        const id = '5cd95395de30eff6ebccde56';
        const data = await ringsSdk.getMovie(id);

        expect(data).toBeDefined();
        expect(data._id).toBe(id);
    });

    it('getMovieQuotes by id', async () => {
        const id = '5cd95395de30eff6ebccde56';
        const data = await ringsSdk.getMovieQuotes(id);

        expect(data.docs).toBeDefined();
        expect(data.docs[0]._id).toBeDefined();
    });

    it('getQuotes', async () => {
        const data = await ringsSdk.getQuotes();

        expect(data).toBeDefined();
        expect(data.docs).toBeDefined();
        expect(data.docs[0]._id).toBeDefined();
    });

    it('getQuotes paginated', async () => {
        const data = await ringsSdk.getQuotes({
            limit: 100,
        });

        expect(data).toBeDefined();
        expect(data.docs).toBeDefined();
        expect(data.docs.length).toBe(100);
        expect(data.docs[0]._id).toBeDefined();
    });

    it('getAllQuotes', async () => {
        const data = await ringsSdk.getAllQuotes();

        expect(data).toBeDefined();
        expect(Array.isArray(data)).toBe(true);
        expect(data[0]._id).toBeDefined();
    });


    it('getQuote', async () => {
        const id = '5cd96e05de30eff6ebcce7e9';
        const data = await ringsSdk.getQuote(id);

        expect(data).toBeDefined();
        expect(data.docs).toBeDefined();
    });
});