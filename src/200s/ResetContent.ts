import { ResponseWithStatus, ResponseParamsWithNoStatus } from "../base";



export class ResetContent extends ResponseWithStatus
{
    protected static override defaultParams = {
        res: undefined,
        statusCode: 205,
        message: "Reset Content",
        data: null,
        error: null,
    };

    constructor({
        res,
        message = ResetContent.defaultParams.message,
        data,
    }: ResponseParamsWithNoStatus = ResetContent.defaultParams)
    {
        super({
            res,
            statusCode: ResetContent.defaultParams.statusCode,
            message,
            data,
        });
    }
}
