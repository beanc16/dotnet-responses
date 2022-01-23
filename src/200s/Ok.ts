import {
    ResponseWithStatus,
    ResponseParamsWithNoStatus,
} from "../base";



export class Ok extends ResponseWithStatus
{
    protected static override defaultParams = {
        res: undefined,
        statusCode: 200,
        message: "Ok",
        data: null,
        error: null,
    };

    constructor({
        res,
        message = Ok.defaultParams.message,
        data,
        error,
    }: ResponseParamsWithNoStatus = Ok.defaultParams)
    {
        super({
            res,
            statusCode: Ok.defaultParams.statusCode,
            message,
            data,
            error,
        });
    }
}
