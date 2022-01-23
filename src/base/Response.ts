import { ResponseParamsWithStatus } from "./ResponseParamsWithStatus";



export class Response
{
    statusCode?: number;
    message?: string;
    // eslint-disable-next-line
    data?: any;
    error?: object;

    protected static defaultParams = {
        statusCode: 200,
        message: null,
        data: null,
        error: null,
    };


    constructor({
        statusCode,
        message,
        data,
        error,
    }: ResponseParamsWithStatus = Response.defaultParams)
    {
        this.statusCode = statusCode;
        this.message = message;
        this.data = data;
        this.error = error;
    }
}
