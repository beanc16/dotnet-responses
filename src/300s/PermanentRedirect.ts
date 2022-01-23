import { ResponseWithStatus, ResponseParamsWithNoStatus } from "../base";



export class PermanentRedirect extends ResponseWithStatus
{
    protected static override defaultParams = {
        res: undefined,
        statusCode: 308,
        message: "Permanent Redirect",
        data: null,
        error: null,
    };

    constructor({
        res,
        message = PermanentRedirect.defaultParams.message,
        data,
    }: ResponseParamsWithNoStatus = PermanentRedirect.defaultParams)
    {
        super({
            res,
            statusCode: PermanentRedirect.defaultParams.statusCode,
            message,
            data,
        });
    }
}
