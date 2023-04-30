The API has three main directories: `core`, `index.ts`, and `lib`.

The `core` directory contains the `ringSdk.ts` file, which contains the main class of the SDK for interacting with Ring's API, as well as the `types.ts` file, which contains the types used throughout the SDK.

The `index.ts` file is the entry point for the SDK, which exports the `RingsSdk` class from the `core` directory.

The `lib` directory contains files related to the HTTP requests made by the SDK. The `cache.ts` file contains a cache implementation for HTTP responses, the `httpRequest.ts` file contains a function for making HTTP requests, and the `types.ts` file contains types related to HTTP requests.
