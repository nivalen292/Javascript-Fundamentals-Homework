function solve(args)
{
    var string = args[0];
    function trimWithNbsp(str) {
        return str = str.split(" ").join("&nbsp;");
    }
    console.log(trimWithNbsp(string));
}

solve([ 'This text contains 4 spaces!!' ]);

