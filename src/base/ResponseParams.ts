interface ExpressResponse
{
    statusCode: number;
    [key: string]: any;
}



export interface ResponseParams
{
    status: number;
    message?: string;
    data?: object | Array<any>;
    error?: object;
}
