function solve(args)
{
    var n = +args[0];
    var k = +args[1];
    var numbers = args[2].split(' ').map(Number);

    var min = 100, max = 0, sumArray = [];
    for (var i = 0; i < n; i++)
    {
        if (k <= n - i) // k >= n - k or k - i <= n - 1
        {
            for (var j = i; j < k + i; j++)
            {
                if (numbers[j] > max)
                {
                    max = numbers[j]
                }
                if (numbers[j] < min)
                {
                    min = numbers[j];
                }
            }
        }
        else
        {
            break;
        }
        sumArray.push(min + max);
        max = 0;
        min = 100;
    }
    console.log(sumArray.join(','))
}

solve([
'5',
'3',
'7 7 8 9 10'
])