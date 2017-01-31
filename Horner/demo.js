function solve(args)
{
    var indexes = args[0].split(' ').map(Number);
    var lastMember = indexes[this.length - 1];
    var dividers = [];
    var roots = [];
    var currentIndexes = [];
    var nextIndexes = [];
    var previousRootLength = roots.length;

    for (let i = Math.abs(lastMember - 2 * Math.abs(lastMember)); i <= Math.abs(lastMember); i++)
    {
        if (lastMember % i === 0)
        {
            dividers.push(i);
        }
    }

    for (let i = 0; i < dividers.length; i++)
    {
        let currentSum;
        currentIndexes = indexes.slice(0);
        if (nextIndexes.length > 0)
        {
            currentIndexes = nextIndexes.slice(0);
        }
        for (let j = 0; j < currentIndexes.length; j++)
        {
            if (j < currentIndexes.length - 1)
            {
                currentSum = currentIndexes[j];
                currentSum = currentSum * divider[i] + currentIndexes[j + 1];
                nextIndexes.push(currentSum);
            }
            if (j === currentIndexes.length - 1 && currentSum === 0)
            {
                roots.push(dividers[i]);
            }
            else
            {
                nextIndexes = [];
            }
            // if (!(roots.length !== previousRootLength))
            // {
            //     nextIndexes = [];
            // }
            // else 
            // {
            //     previousRootLength++;    
            // }
        }
        // or check here for currentSum === 0
    }
    console.log(roots);
}

solve(['1 2 3 4 5']);