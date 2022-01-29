import { ResponseParamsWithNoStatus, defaultParams } from "../base";
import { NotFound } from "./NotFound";



export class InvalidUrl extends NotFound
{
    protected static override defaultParams = defaultParams[400].InvalidUrl;


    constructor({
        res,
        message = InvalidUrl.defaultParams.message,
        data,
        error,
    }: ResponseParamsWithNoStatus = InvalidUrl.defaultParams)
    {
        super({
            res,
            message,
            data,
            error,
        });
    }
}