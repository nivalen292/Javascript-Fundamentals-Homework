function solve(args)
{
    let arr = args[0].split(' ').map(Number),
        n = arr[0],
        m = arr[1],
        j = arr[2],
        sum = 0,
        totalJumps = 0;

    arr = [];
    arr = args[1].split(' ').map(Number);
    let currentRow = arr[0],
        currentCol = arr[1];
    
    let matrix = new Array(n);
    matrix.fill(0);
    for (let i = 0; i < matrix.length; i++)
    {
        matrix[i] = new Array(m);
    }

    counter = 1;
    for (let i = 0; i < n; i++)
    {
        for (let j = 0; j < m; j++)
        {
            matrix[i][j] = counter++;
        }
    }
    
    args.shift();
    args.shift();
    arr = [];
    for (let i = 0, len = j; i < len; i++)
    {
        arr[i] = args[i].split(' ').map(Number);
    }

    let jumpsArray = [];

    for(let i = 0; i < j; i++)
    {
        sum += matrix[currentRow][currentCol];
        matrix[currentRow][currentCol] = 'x';        

        currentRow += arr[i][i - i];
        currentCol += arr[i][i - i + 1];

        totalJumps++;      

        if (i === j - 1)
        {
            i = 0;
        }
        if (currentRow >= n || currentRow < 0 || currentCol >= m || currentCol < 0)
        {
            console.log(`escaped ${sum}`);
            break;
        }
        else if (typeof matrix[currentRow][currentCol] !== 'number')
        {
            console.log(`caught ${totalJumps}`);
            break;
        }
        
    }
}

solve(['6 7 3',
'0 0',
'2 2',
'-2 2',
'3 -1']);