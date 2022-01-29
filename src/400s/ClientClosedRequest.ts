import {
    ResponseWithStatus,
    ResponseParamsWithNoStatus,
    defaultParams,
} from "../base";



export class ClientClosedRequest extends ResponseWithStatus
{
    protected static override defaultParams = defaultParams[400].ClientClosedRequest;

    constructor({
        res,
        message = ClientClosedRequest.defaultParams.message,
        data,
        error,
    }: ResponseParamsWithNoStatus = ClientClosedRequest.defaultParams)
    {
        super({
            res,
            statusCode: ClientClosedRequest.defaultParams.statusCode,
            message,
            data,
            error,
        });
    }
}
