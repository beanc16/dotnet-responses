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
        this.statusCode = (statusCode) ? statusCode : Response.defaultParams.statusCode;
        this.message = (message) ? message : Response.defaultParams.message;
        this.data = (data) ? data : Response.defaultParams.data;
        this.error = (error) ? error : Response.defaultParams.error;
    }
}
