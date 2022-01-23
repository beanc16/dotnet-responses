import { ResponseParamsWithNoStatus } from "../base";
import { NotFound } from "./NotFound";



export class InvalidUrlError extends NotFound
{
    constructor({
        res,
        message,
        data,
        error,
    }: ResponseParamsWithNoStatus)
    {
        super({
            res,
            message: message ?? "Invalid URL",
            data,
            error,
        });
    }
}