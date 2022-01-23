import { ResponseWithStatus, ResponseParamsWithNoStatus } from "../base";



export class NonAuthoritativeInformation extends ResponseWithStatus
{
    protected static override defaultParams = {
        res: undefined,
        statusCode: 203,
        message: "Non-Authoritative Information",
        data: null,
        error: null,
    };

    constructor({
        res,
        message = NonAuthoritativeInformation.defaultParams.message,
        data,
    }: ResponseParamsWithNoStatus = NonAuthoritativeInformation.defaultParams)
    {
        super({
            res,
            statusCode: NonAuthoritativeInformation.defaultParams.statusCode,
            message,
            data,
        });
    }
}
