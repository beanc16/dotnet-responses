import { ResponseParamsWithStatus } from "./ResponseParamsWithStatus";



export class Response
{
    statusCode?: number;
    message?: string;
    // eslint-disable-next-line
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
        this.message = (message) ? message : null;
        this.data = (data) ? data : null;
        this.error = (error) ? error : null;
    }
}
