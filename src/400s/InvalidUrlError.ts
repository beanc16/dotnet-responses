import { ResponseParamsWithNoStatus } from "../base";
import { NotFound } from "./NotFound";



export class InvalidUrlError extends NotFound
{
    constructor({
        res,
        message = "Invalid URL",
        data,
        error,
    }: ResponseParamsWithNoStatus)
    {
        super({
            res,
            message,
            data,
            error,
        });
    }
}