import { RingsSdk } from "../src";


// Created this script to check cache feature
// ACCESS_TOKEN=<your_token> npx ts-node scripts/measureTime.ts
const token = process.env.ACCESS_TOKEN ?? '';

const doThis = async () => {
    const ringsSdk = new RingsSdk({
        token,
    });

    const callsNumber = 5;
    let movies;
    for (let i = 0; i < callsNumber; i++) {
        console.time(`time_1`);
        movies = await ringsSdk.getMovies();
        console.timeEnd(`time_1`);
    }
}

doThis();