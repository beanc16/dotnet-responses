export class ResDoesNotExistError extends Error
{
    constructor()
    {
        super("res does not exist");
        this.name = "ResDoesNotExistError";
    }
}
