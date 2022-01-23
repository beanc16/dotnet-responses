import { Response, ResponseParamsWithStatus } from ".";



export class ResponseWithStatus extends Response
{
    private res;
    private functionMap;

    private get clone()
    {
        return {
            ...this,
            res: undefined,
            functionMap: undefined,
        };
    }

    constructor({
        res,
        statusCode,
        message,
        data,
        error,
    }: ResponseParamsWithStatus)
    {
        super({
            statusCode: (statusCode)
                        ? statusCode
                        : (res)
                        ? res.statusCode
                        : undefined,
            message,
            data,
            error,
        });

        if (res)
        {
            this.res = res;

            // Only add the functions if they exist
            this.functionMap = {
                ...(this.res.status && { status: (_) => this.res.status(_) }),
                ...(this.res.sendStatus && { sendStatus: (_) => this.res.sendStatus(_) }),
                ...(this.res.send && { send: (_) => this.res.send(_) }),
                ...(this.res.json && { json: (_) => this.res.json(_) }),
                ...(this.res.jsonp && { jsonp: (_) => this.res.jsonp(_) }),
                ...(this.res.end && { end: (_) => this.res.end(_) }),
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
        const {  data } = params;
        let { passThisAsParam } = params;

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
            return this.functionMap[functionName](this.clone);
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



    // Static versions of above functions
    static status(params: ResponseParamsWithStatus)
    {
        const response = new ResponseWithStatus(params);
        response.status();
    }

    static sendStatus(params: ResponseParamsWithStatus)
    {
        const response = new ResponseWithStatus(params);
        response.sendStatus();
    }

    static send(params: ResponseParamsWithStatus)
    {
        const response = new ResponseWithStatus(params);
        response.send();
    }

    static json(params: ResponseParamsWithStatus)
    {
        const response = new ResponseWithStatus(params);
        response.json();
    }

    static jsonp(params: ResponseParamsWithStatus)
    {
        const response = new ResponseWithStatus(params);
        response.jsonp();
    }

    static end(params: ResponseParamsWithStatus)
    {
        const response = new ResponseWithStatus(params);
        response.end();
    }
}



interface RunResFunctionOptions extends Partial<object>
{
    passThisAsParam?: boolean;
    // eslint-disable-next-line
    data?: any;
}
