import { ResponseParamsWithNoStatus } from "../base";
import { NotFound } from "./NotFound";



export class InvalidUrlError extends NotFound
{
    protected static override defaultParams = {
        res: undefined,
        statusCode: 404,
        message: "Invalid URL",
        data: null,
        error: null,
    };


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