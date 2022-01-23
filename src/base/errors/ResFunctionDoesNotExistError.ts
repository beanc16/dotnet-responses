export class ResFunctionDoesNotExistError extends Error
{
    constructor(functionName: string)
    {
        super(`res.${functionName} does not exist.`);
        this.name = "ResFunctionDoesNotExistError";
    }
}
