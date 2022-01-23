import { ExpressResponse } from '.';

export interface ResponseParamsWithStatus
{
    res?: ExpressResponse;      // For managing status codes via express responses
    statusCode?: number;        // For status code
    message?: string;           // For messages
    data?: object | Array<any>; // For success responses with data
    error?: object;             // For error objects
}
