import { ExpressResponse } from '.';

export interface ResponseParamsWithNoStatus
{
    res: ExpressResponse;       // For managing status codes via express responses
    message?: string;           // For messages
    // eslint-disable-next-line
    data?: object | Array<any>; // For success responses with data
    error?: object;             // For error objects
}
