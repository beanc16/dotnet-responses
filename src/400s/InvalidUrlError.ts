import { ResponseParamsWithNoStatus, defaultParams } from "../base";
import { NotFound } from "./NotFound";



export class InvalidUrlError extends NotFound
{
    protected static override defaultParams = defaultParams[400].NotFound;


    constructor({
        res,
        message = InvalidUrlError.defaultParams.message,
        data,
        error,
    }: ResponseParamsWithNoStatus = InvalidUrlError.defaultParams)
    {
        super({
            res,
            message,
            data,
            error,
        });
    }
}