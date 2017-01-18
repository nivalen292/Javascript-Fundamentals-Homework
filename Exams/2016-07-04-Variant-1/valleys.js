function solve(args)
{
    let heights = args[0].split(" ").map(Number),
        peaks = [],
        sumArray = [],
        sum = 0,
        lastPeakIndex = 0;

    for (let i = 0, len = heights.length; i < len; i++)
    {
        if ((heights[i] > heights[i + 1] & heights[i] > heights[i - 1]) || heights[i - 1] === undefined || heights[i + 1] === undefined)
        {
            peaks.push(heights[i]);      
            if (peaks.length > 1)
            {
                for (let j = lastPeakIndex, leng = i; j <= leng; j++)
                {
                    sum += heights[j];
                }
                sumArray.push(sum);
                sum = 0;
                lastPeakIndex = i;
            }
        }
    }

    let result = Math.max.apply(Math, sumArray);

    console.log(result);
}

solve([
    "5 1 7 6 5 6 4 2 3 8"
]);

solve([
    "5 1 7 4 8"
]);