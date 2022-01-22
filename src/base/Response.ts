import { ResponseParams } from "./ResponseParams";



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
    }: ResponseParams)
    {
        this.status = (status)
                        ? status
                        : 200;
        this.message = message;
        this.data = data;
        this.error = error;
    }
}
