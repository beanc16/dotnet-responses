import { ResponseWithStatus, ResponseParamsWithNoStatus } from "../base";



export class TemporaryRedirect extends ResponseWithStatus
{
    protected static override defaultParams = {
        res: undefined,
        statusCode: 307,
        message: "Temporary Redirect",
        data: null,
        error: null,
    };

    constructor({
        res,
        message = TemporaryRedirect.defaultParams.message,
        data,
    }: ResponseParamsWithNoStatus = TemporaryRedirect.defaultParams)
    {
        super({
            res,
            statusCode: TemporaryRedirect.defaultParams.statusCode,
            message,
            data,
        });
    }
}
