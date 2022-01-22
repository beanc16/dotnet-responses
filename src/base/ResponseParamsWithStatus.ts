export interface ResponseParamsWithStatus
{
    statusCode: number;         // For status code
    message?: string;           // For messages
    data?: object | Array<any>; // For success responses with data
    error?: object;             // For error objects
}