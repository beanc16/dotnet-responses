export interface ExpressResponse
{
    statusCode: number;
    status: Function;
    [key: string]: any;
}
