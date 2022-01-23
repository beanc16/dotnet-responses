import { Ok } from '../../200s/Ok';



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
