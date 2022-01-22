import { ResponseParamsWithStatus } from './ResponseParamsWithStatus';



interface ExpressResponse
{
    statusCode: number;
    status: Function;
    [key: string]: any;
}

export interface ResponseParamsWithNoStatus
{
    res: ExpressResponse;       // For managing status codes via express responses
    message?: string;           // For messages
    data?: object | Array<any>; // For success responses with data
    error?: object;             // For error objects
}
