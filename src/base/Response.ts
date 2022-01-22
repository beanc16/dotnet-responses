import { BaseResponseParams } from "./BaseResponseParams";



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
    }: BaseResponseParams)
    {
        this.status = (status)
                        ? status
                        : 200;
        this.message = message;
        this.data = data;
        this.error = error;
    }
}
