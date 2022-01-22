interface ExpressResponse
{
    statusCode: number;
    [key: string]: any;
}



export interface ResponseParams
{
    status: number;             // For status code
    message?: string;           // For messages
    data?: object | Array<any>; // For success responses with data
    error?: object;             // For error objects
}
