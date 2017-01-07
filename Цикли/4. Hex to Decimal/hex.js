function solve(args)
{
    let numberString = args[0],
        result = new Number();
    for (let i = 0; i <= numberString.length; i += 1)
    {
        let power = (i !=  numberString.length) ? Math.abs(i - (numberString.length - 1)) : 0;
        if (isNaN(numberString[i]))
        {
            switch (numberString[i])
            {
                case "A":
                    result += 10 * Math.pow(16, power);
                    break;
                case "B":
                    result += 11 * Math.pow(16, power);
                    break;
                case "C":
                    result += 12 * Math.pow(16, power);
                    break;
                case "D":
                    result += 13 * Math.pow(16, power);
                    break;
                case "E":
                    result += 14 * Math.pow(16, power);
                    break;
                case "F":
                    result += 15 * Math.pow(16, power);
                    break;
            }
        }
        else
        {
            result += +numberString[i] * Math.pow(16, power);
        }
    }
    console.log(result);
}
