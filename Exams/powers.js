function solve(args)
{
    let numbers = args[0].split(' ').map(Number),
        n = numbers[0],
        k = numbers[1];
    numbers = [];
    args.shift();
    numbers = args[0].split(' ').map(Number);

    let sum = 0;
    numbers = transform(numbers, k);
    numbers.forEach(x => sum += x);

    function transform(array, times) {
        let len = array.length,
            resultArray = [],
            toBeModified = array;
        while (times !== 0)
        { 
            for (let i = 0; i < len; i++)
            {
                left = toBeModified[i - 1];
                right = toBeModified[i + 1];
                if (i === 0)
                {
                    left = toBeModified[len - 1];
                }
                if (i === len - 1)
                {
                    right = toBeModified[0];
                }
                if (toBeModified[i] % 2 === 0 && toBeModified[i] !== 0)
                {
                    resultArray[i] = right > left ? right : left; 
                }
                else if (toBeModified[i] % 2 === 1 && toBeModified[i] !== 1)
                {
                    resultArray[i] = right > left ? left : right;
                }
                else if (toBeModified[i] === 0)
                {
                    resultArray[i] = Math.abs(right - left);
                }
                else if (toBeModified[i] === 1)
                {
                    resultArray[i] = right + left;
                }
            }
            if (k >= 1)
            {
                toBeModified = resultArray.slice(0);
            }
            times--;        
        }
        return toBeModified;
    }
    //console.log(numbers);
    console.log(sum);
}

solve(['10 3',
'1 9 1 9 1 9 1 9 1 9']);