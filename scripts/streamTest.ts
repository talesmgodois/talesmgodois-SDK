import { RingsSdk } from "../src/core/ringSdk";

// Script to see stream working
// ACCESS_TOKEN=<your_token> npx scripts/streamTest.ts
const doThat = async () => {
  const token = process.env.ACCESS_TOKEN ?? '';

  const ringsSdk = new RingsSdk({
    token,
  });

  const quotesStream = ringsSdk.getAllQuotesAsStream(200);

  quotesStream.on('data', (quotes) => {
    // Do something with the quotes
    console.log(quotes);
  });

  quotesStream.on('end', () => {
    console.log('Finished reading all quotes');
  });

  quotesStream.on('error', (error) => {
    console.error('An error occurred while reading quotes stream:', error);
  });

}

doThat();
