function solve(args)
{
    var result,
        myObject = {
            shape: "circle",
            color: "red",
            length: 5
        },
    hasProp = function(object, prop) {
        if (object.hasOwnProperty(prop))
        {
            return true;
        }
        else
        {
            return false;
        }
    };
    result = hasProp(myObject, args[0]);
    console.log(result);
}

solve(["color"]);