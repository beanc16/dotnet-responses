import { ResponseParamsWithStatus } from "./ResponseParamsWithStatus";



export class Response
{
    statusCode?: number;
    message?: string;
    data?: any;
    error?: object;

    constructor({
        statusCode,
        message,
        data,
        error,
    }: ResponseParamsWithStatus)
    {
        this.statusCode = (statusCode)
                            ? statusCode
                            : 200;
        this.message = message;
        this.data = data;
        this.error = error;
    }
}
