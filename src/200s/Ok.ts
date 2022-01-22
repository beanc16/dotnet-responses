import { Response, ResponseParamsWithNoStatus } from "../base";



export class Ok extends Response
{
    constructor({
        res,
        message,
        data,
        error,
    }: ResponseParamsWithNoStatus)
    {
        super({
            status: res.statusCode,
            message,
            data,
            error,
        });

        if (res && res.statusCode)
        {
            this.status = 200;
            res.status(200);
        }
    }
}
