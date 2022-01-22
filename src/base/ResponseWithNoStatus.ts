import { Response, ResponseParamsWithNoStatus, ExpressResponse } from ".";



export class ResponseWithStatus extends Response
{
    private res;
    private functionMap;

    constructor({
        res,
        message,
        data,
        error,
    }: ResponseParamsWithNoStatus)
    {
        super({
            statusCode: res.statusCode,
            message,
            data,
            error,
        });

        if (res)
        {
            this.res = res;

            // Only add the functions if they exist
            this.functionMap = {
                ...(this.res.status && { status: this.res.status }),
                ...(this.res.sendStatus && { sendStatus: this.res.sendStatus }),
                ...(this.res.send && { send: this.res.send }),
                ...(this.res.json && { json: this.res.json }),
                ...(this.res.jsonp && { jsonp: this.res.jsonp }),
                ...(this.res.end && { end: this.res.end }),
            };
        }
    }



    // Functions for express response objects
    status(statusCode?: number)
    {
        if (statusCode)
        {
            this.statusCode = statusCode;
        }

        return this.runResFunction("status", {
            data: this.statusCode,
        });
    }

    sendStatus(statusCode?: number)
    {
        if (statusCode)
        {
            this.statusCode = statusCode;
        }

        return this.runResFunction("sendStatus", {
            data: this.statusCode,
        });
    }

    send()
    {
        return this.runResFunction("send");
    }

    json()
    {
        return this.runResFunction("json");
    }

    jsonp()
    {
        return this.runResFunction("jsonp");
    }

    end()
    {
        return this.runResFunction("end", {
            passThisAsParam: false,
        });
    }

    private runResFunction(functionName: string, params: RunResFunctionOptions = {
        passThisAsParam: true,
    })
    {
        // Initialize params
        let { passThisAsParam, data } = params;
        if (data)
        {
            passThisAsParam = false;
        }

        // Throw errors
        if (!this.res)
        {
            throw new Error(`res does not exist.`);
        }
        if (!this.functionMap[functionName])
        {
            throw new Error(`res.${functionName} does not exist.`);
        }

        // Call function
        if (passThisAsParam)
        {
            return this.functionMap[functionName](this);
        }
        else if (data)
        {
            return this.functionMap[functionName](data);
        }
        else
        {
            return this.functionMap[functionName]();
        }
    }
}



interface RunResFunctionOptions extends Partial<object>
{
    passThisAsParam?: boolean;
    data?: any;
}
