export interface ExpressResponse
{
    statusCode: number;
    status: (statusCode: number) => this;
    // eslint-disable-next-line
    [key: string]: any;
}
