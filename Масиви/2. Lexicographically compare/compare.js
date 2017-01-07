function solve(args)
{
    let arr1 = args[0],
        arr2 = args[1];
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