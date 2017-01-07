function solve(args)
{
    var number = +args[0];
    var numberString = args[0];
    var andWord = new String();
    var first = new String();
    var second = new String();
    var third = new String();
    var result = new String();
    andWord = (number % 100 === 0) ? "" : " and ";

    switch (number % 10)
    {
        case 1:
            first = "one";
            break;
        case 2:
            first = "two";
            break;
        case 3:
            first = "three";
            break;
        case 4:
            first = "four";
            break;
        case 5:
            first = "five";
            break;
        case 6:
            first = "six";
            break;
        case 7:
            first = "seven";
            break;   
        case 8:
            first = "eight";
            break;
        case 9:
            first = "nine";
            break;
        default:
            first = "zero"
    }

    if ((number % 10 === 0 && number > 0) || (number > 9 && number < 20) || (number > 100 && number % 100 > 9 && number % 100 < 20))
    {
        first = "";
    }

    if (numberString.length >= 2)
    {
        switch (parseInt(number / 10) % 10)
        {
            case 0:
                second = "";
                break;
            case 1:
                if ((parseInt(number / 10) % 10) === 1)
                {
                    switch (number % 10)
                    {
                        case 0:
                            second = "ten";
                            break;
                        case 1:
                            second = "eleven";
                            break;
                        case 2:
                            second = "twelve";
                            break;
                        case 3:
                            second = "thirteen";
                            break;
                        case 4:
                            second = "fourteen";
                            break;
                        case 5:
                            second = "fifteen";
                            break;
                        case 6:
                            second = "sixteen";
                            break;
                        case 7:
                            second = "seventeen";
                            break;   
                        case 8:
                            second = "eighteen";
                            break;
                        case 9:
                            second = "nineteen";
                            break;
                    }
                }
                break;
            case 2:
                second = "twenty ";
                break;
            case 3:
                second = "thirty ";
                break;
            case 4:
                second = "forty ";
                break;
            case 5:
                second = "fifty ";
                break;
            case 6:
                second = "sixty ";
                break;
            case 7:
                second = "seventy ";
                break;   
            case 8:
                second = "eighty ";
                break;
            case 9:
                second = "ninety ";
                break;
        }
    }
    if (numberString.length === 3)
    {
        switch (parseInt(number / 100) % 10)
        {
            case 1:
                third = "one hundred".concat(andWord);
                break;
            case 2:
                third = "two hundred".concat(andWord);
                break;
            case 3:
                third = "three hundred".concat(andWord);
                break;
            case 4:
                third = "four hundred".concat(andWord);
                break;
            case 5:
                third = "five hundred".concat(andWord);
                break;
            case 6:
                third = "six hundred".concat(andWord);
                break;
            case 7:
                third = "seven hundred".concat(andWord);
                break;   
            case 8:
                third = "eight hundred".concat(andWord);
                break;
            case 9:
                third = "nine hundred".concat(andWord);
                break;
        }
    }
    result = "".concat(third, second, first);
    var aResult = result.charAt(0).toUpperCase() + result.slice(1); 
    console.log(aResult);
}