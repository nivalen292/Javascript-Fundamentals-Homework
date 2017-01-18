function solve(args)
{
    var input = args[0];
    function reverse(string) {
        let result = "";
        const lenIndex = string.length - 1;
        for (let i = lenIndex; i >= 0; i--)
        {
            result += string[i];
        }
        return result;
    }
    console.log(reverse(input));
}

solve(["sample"]);