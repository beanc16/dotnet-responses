import {
    ResponseWithStatus,
    ResponseParamsWithNoStatus,
    defaultParams,
} from "../base";



export class NonAuthoritativeInformation extends ResponseWithStatus
{
    protected static override defaultParams = defaultParams[200].NonAuthoritativeInformation;

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
