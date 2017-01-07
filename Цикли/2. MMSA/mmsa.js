function solve(args)
{
    var min, max, sum = 0, 
        average = 0, 
        numbers = new Array();
    for (var i = 0; i < args.length; i += 1)
    {
        numbers[i] = +args[i];
        sum += +args[i];
    }
    min = (Math.min.apply(Math, numbers)).toFixed(2);
    max = (Math.max.apply(Math, numbers)).toFixed(2);
    sum = sum.toFixed(2);
    average = (sum / args.length).toFixed(2);
    console.log("min=" + min);
    console.log("max=" + max);
    console.log("sum=" + sum);
    console.log("avg=" + average);
}