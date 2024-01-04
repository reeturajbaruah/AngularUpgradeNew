declare module HCTRA.Model {

    export interface ParsedUrl {
        protocol: string;
        hostname: string;
        port: string;
        pathname: string;
        search: string;
        hash: string;
        host: string;
    }
}