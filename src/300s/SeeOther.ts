import { ResponseWithStatus, ResponseParamsWithNoStatus } from "../base";



export class SeeOther extends ResponseWithStatus
{
    protected static override defaultParams = {
        res: undefined,
        statusCode: 303,
        message: "See Other",
        data: null,
        error: null,
    };

    constructor({
        res,
        message = SeeOther.defaultParams.message,
        data,
    }: ResponseParamsWithNoStatus = SeeOther.defaultParams)
    {
        super({
            res,
            statusCode: SeeOther.defaultParams.statusCode,
            message,
            data,
        });
    }
}
