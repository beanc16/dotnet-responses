import { ResponseParamsWithStatus } from "./ResponseParamsWithStatus";



export class Response
{
    status?: number;
    message?: string;
    data?: any;
    error?: object;

    constructor({
        status,
        message,
        data,
        error,
    }: ResponseParamsWithStatus)
    {
        this.status = (status)
                        ? status
                        : 200;
        this.message = message;
        this.data = data;
        this.error = error;
    }
}
