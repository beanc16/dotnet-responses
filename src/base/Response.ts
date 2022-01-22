import { ResponseParams } from "./ResponseParams";



export class Response
{
    status?: number;
    message?: string;
    data?: any;
    error?: object;

    constructor({
        status,        // For status code
        message,    // For success messages
        data,       // For success messages with data
        error,      // For error messages
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
