import { ResponseWithStatus, ResponseParamsWithNoStatus } from "../base";



export class MovedPermanently extends ResponseWithStatus
{
    protected static override defaultParams = {
        res: undefined,
        statusCode: 301,
        message: "Moved Permanently",
        data: null,
        error: null,
    };

    constructor({
        res,
        message = MovedPermanently.defaultParams.message,
        data,
    }: ResponseParamsWithNoStatus = MovedPermanently.defaultParams)
    {
        super({
            res,
            statusCode: MovedPermanently.defaultParams.statusCode,
            message,
            data,
        });
    }
}
