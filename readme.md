# `RingsSdk`

The `RingsSdk` class is like the Fellowship of the Ring - a team of brave companions on a quest to deliver a powerful and valuable service to the world of developers. It provides methods for interacting with the Rings API and retrieving movie and quote data.

### Constructor

The constructor of the `RingsSdk` class takes a `SdkOptions` object as a parameter, just as the Fellowship was formed to help Frodo on his journey to destroy the One Ring. This object contains the following properties:

- `token`: A string representing the API token to use when making requests to the Ring's API, much like the One Ring had to be protected and kept secret from those who sought to use its power for their own gain.
- `ttl`: An optional number representing the TTL (time to live) in milliseconds for cached responses. Default is 10 minutes - just enough time for the Fellowship to rest and prepare for their next challenge.

### `getMovie(id: string): Promise<Movie>`

This method takes a `string` parameter representing the ID of the movie to retrieve and returns a `Promise` that resolves to a `Movie` object, much like the Fellowship relied on Aragorn's leadership to navigate through the dangers of Middle Earth. The `Movie` object contains information about the movie, such as its title, runtime, and release date - vital information needed to complete the journey.

### `getMovies(): Promise<HttpResult<Movie[]>>`

This method returns a `Promise` that resolves to an `HttpResult` object containing an array of `Movie` objects, much like the Fellowship needed the support of its members to overcome the challenges they faced. The `HttpResult` object contains additional information about the request, such as the total number of movies returned and the number of pages - useful information to keep track of progress.

### `getMovieQuotes(id: string): Promise<HttpResult<Quote[]>>`

This method takes a `string` parameter representing the ID of the movie to retrieve quotes for and returns a `Promise` that resolves to an `HttpResult` object containing an array of `Quote` objects, much like the Fellowship had to rely on the skills and expertise of each member to overcome obstacles. The `Quote` objects contain information about the quote, such as the character who said it and the text of the quote.

### `getQuotes(params?: QueryParams): Promise<HttpResult<Quote[]>>`

This method takes an optional `QueryParams` object as a parameter and returns a `Promise` that resolves to an `HttpResult` object containing an array of `Quote` objects, much like the Fellowship needed to work together and communicate effectively to complete their journey. The `QueryParams` object can be used to filter and paginate the quotes returned - useful tools for developers who want to narrow down their search.

### `getAllQuotes(): Promise<Quote[]>`

This method returns a `Promise` that resolves to an array of all `Quote` objects available on the Ring's platform, much like the Fellowship had to travel through many lands and face many challenges to reach their destination. 

### `getAllQuotesAsStream(chunkLimit = 100): Readable`

This method returns a `Readable` stream that emits chunks of `Quote` objects, much like the Fellowship had to adapt and change tactics to overcome different challenges. The `chunkLimit` parameter specifies the number of quotes to retrieve in each chunk. 


This documentation have help of chat gpt to be written getting the lord of the rings references