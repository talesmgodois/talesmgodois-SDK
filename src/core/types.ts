export type Movie = {
    _id: string;
    name: string;
}

export type Quote = {
    _id: string;
    dialog: string;
    movie: string;
}

export type SdkOptions = {
    token: string;
    ttl?: number;
}

export type QueryParams = {
    limit?: number;
    page?: number;
    offset?: number;
};
