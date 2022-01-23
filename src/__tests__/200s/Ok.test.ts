import { Ok } from "../../200s/Ok";
import { response as expressRes } from "express";
import { ExpressResponse } from "../../base";
import {
    ResDoesNotExistError,
    ResFunctionDoesNotExistError,
 } from "../../base/errors";



// Helpers
const defaultResponse = {
    res: undefined,
    statusCode: 200,
    message: "Ok",
    data: null,
    error: null,
};

function getResult(params?: object)
{
    return Object.assign({}, defaultResponse, params);
}

function getExpressResponse() : ExpressResponse
{
    const output = {
        status: expressRes.status,
        statusCode: expressRes.statusCode,
    };

    Object.entries(expressRes).map(function ([key, value])
    {
        output[key] = value;
    });

    return output;
}



// Constructor
test("Ok - Empty Params", function ()
{
    const response = new Ok();
    const result = getResult();

    expect(response).toEqual(result);
});


test("Ok - Undefined Params", function ()
{
    const params = {
        res: undefined,
    };

    const response = new Ok(params);
    const result = getResult(params);

    expect(response).toEqual(result);
});


test(`Ok - message="hi"`, function ()
{
    const params = {
        res: undefined,
        message: "hi",
    };

    const response = new Ok(params);
    const result = getResult(params);

    expect(response).toEqual(result);
});


test(`Ok - data={ foo: "bar" }`, function ()
{
    const params = {
        res: undefined,
        data: {
            foo: "bar",
        }
    };

    const response = new Ok(params);
    const result = getResult(params);

    expect(response).toEqual(result);
});


// Object functions
test(`Ok - send (undefined res)`, function ()
{
    const params = {
        res: undefined,
    };

    const response = new Ok(params);

    expect(() => response.send()).toThrowError(ResDoesNotExistError);
});


test(`Ok - send (null res)`, function ()
{
    const params = {
        res: null,
    };

    const response = new Ok(params);

    expect(() => response.send()).toThrowError(ResDoesNotExistError);
});


test(`Ok - send (valid res)`, function ()
{
    const params = {
        res: getExpressResponse(),
    };

    const response = new Ok(params);

    // Express throws TypeError for non-live responses
    expect(() => response.send()).toThrowError(TypeError);
});


test(`Ok - send (undefined function)`, function ()
{
    const params = {
        res: getExpressResponse(),
    };
    // Remove send function to trigger error
    params.res.send = undefined;

    const response = new Ok(params);

    expect(() => response.send()).toThrowError(ResFunctionDoesNotExistError);
});


test(`Ok - json`, function ()
{
    const params = {
        res: getExpressResponse(),
    };

    const response = new Ok(params);

    // Express throws TypeError for non-live responses
    expect(() => response.json()).toThrowError(TypeError);
});


test(`Ok - jsonp`, function ()
{
    const params = {
        res: getExpressResponse(),
    };

    const response = new Ok(params);

    // Express throws TypeError for non-live responses
    expect(() => response.jsonp()).toThrowError(TypeError);
});


test(`Ok - sendStatus`, function ()
{
    const params = {
        res: getExpressResponse(),
    };

    const response = new Ok(params);

    // Express throws TypeError for non-live responses
    expect(() => response.sendStatus()).toThrowError(TypeError);
});


test(`Ok - status (no input)`, function ()
{
    const params = {
        res: getExpressResponse(),
    };

    const response = new Ok(params);
    const result = response.status();

    expect(params.res).toEqual(result);
});


test(`Ok - status (statusCode=200)`, function ()
{
    const params = {
        res: getExpressResponse(),
    };

    const response = new Ok(params);
    const result = response.status(200);

    expect(params.res).toEqual(result);
});


test(`Ok - status (statusCode=400)`, function ()
{
    const params = {
        res: getExpressResponse(),
    };

    const response = new Ok(params);
    const result = response.status(400);

    expect(params.res).toEqual(result);
});

// TODO: end


// Static functions
test(`Ok static - send (valid res)`, function ()
{
    const params = {
        res: getExpressResponse(),
    };

    // Express throws TypeError for non-live responses
    expect(() => Ok.send(params)).toThrowError(TypeError);
});


test(`Ok static - json (valid res)`, function ()
{
    const params = {
        res: getExpressResponse(),
    };

    // Express throws TypeError for non-live responses
    expect(() => Ok.json(params)).toThrowError(TypeError);
});


test(`Ok static - jsonp (valid res)`, function ()
{
    const params = {
        res: getExpressResponse(),
    };

    // Express throws TypeError for non-live responses
    expect(() => Ok.jsonp(params)).toThrowError(TypeError);
});


test(`Ok static - sendStatus (valid res)`, function ()
{
    const params = {
        res: getExpressResponse(),
    };

    // Express throws TypeError for non-live responses
    expect(() => Ok.sendStatus(params)).toThrowError(TypeError);
});


test(`Ok static - status (no input)`, function ()
{
    const params = {
        res: getExpressResponse(),
    };

    const result = Ok.status(params);

    expect(params.res).toEqual(result);
});


test(`Ok - status (statusCode=200)`, function ()
{
    const params = {
        res: getExpressResponse(),
        statusCode: 200,
    };

    const result = Ok.status(params);

    expect(params.res).toEqual(result);
});


test(`Ok - status (statusCode=400)`, function ()
{
    const params = {
        res: getExpressResponse(),
        statusCode: 400,
    };

    const result = Ok.status(params);

    expect(params.res).toEqual(result);
});

// TODO: Static end
