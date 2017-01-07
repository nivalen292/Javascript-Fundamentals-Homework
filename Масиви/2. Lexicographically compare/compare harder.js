function solve(args)
{
    let string1 = args[0],
        string2 = args[1],
        arr1 = [],
        arr2 = [];
    for (let i = 0; i < string1.length; i++)
    {
        arr1[i] = string1[i];
    }
    for (let i = 0; i < string2.length; i++)
    {
        arr2[i] = string2[i];
    } 
    if (arr1.length > arr2.length)
    {
        console.log(">");
    }
    else if (arr1.length < arr2.length)
    {
        console.log("<");
    }
    else
    {
        console.log("=");
    }
}

solve(["frien23d", "gamerss"]);
