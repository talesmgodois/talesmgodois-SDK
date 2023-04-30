import { RingsSdk } from "../src";


// Created this script to check cache feature
// ACCESS_TOKEN=<your_token> npx ts-node scripts/measureTime.ts
const token = process.env.ACCESS_TOKEN ?? '';

const doThis = async () => {
    const ringsSdk = new RingsSdk({ token });

    const id = '5cd95395de30eff6ebccde5c';
    const quotes = await ringsSdk.getMovieQuotes(id);

    console.log(JSON.stringify({
        quotes,
    }, null, 2))
}

doThis();