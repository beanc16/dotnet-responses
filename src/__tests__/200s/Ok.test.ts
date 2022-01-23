import { Ok } from "../../200s/Ok";
import { response as expressRes } from "express";
import { ExpressResponse } from "../../base";



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
    let output = {
        status: expressRes.status,
        statusCode: expressRes.statusCode,
    };

    Object.entries(expressRes).map(function ([key, value])
    {
        output[key] = value;
    });

    return output;
}



// Tests
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


test(`Ok - send (undefined res)`, function ()
{
    const params = {
        res: undefined,
    };

    const response = new Ok(params);

    expect(() => response.send()).toThrow();
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


test(`Ok static - send (valid res)`, function ()
{
    const params = {
        res: getExpressResponse(),
    };

    // Express throws TypeError for non-live responses
    expect(() => Ok.send(params)).toThrowError(TypeError);
});
