function solve(args)
{
    let arr = args[0].split(' ').map(Number),
        rows = +arr[0],
        cols = +arr[1],
        sum = 0,
        strMatrix = [];

    let matrix = new Array(rows);
    matrix.fill();
    for (let i in matrix)
    {
        matrix[i] = new Array(cols);
    }

    for (let row = 0; row < matrix.length; row++)
    {
        matrix[row][0] = Math.pow(2, row);
        for (let col = 0; col < matrix[row].length; col++)
        {
            matrix[row][col] = +col + matrix[row][0];
        }
    }

    args.shift();
    for (let i = 0; i < rows; i++)
    {
        strMatrix.push(args[i].split(' '));
    }


    let x = 0,
        y = 0,
        currentCell = strMatrix[x][y];
    while (true)
    {       
        if (currentCell === 'dr')
        {
            sum += matrix[x][y];
            strMatrix[x][y] = ''; // or strMatrix
            x++;
            y++;
            if ((x > rows) || (x < 0) || (y > cols) || (y < 0))
            {
                console.log(`successed with ${sum}`);
                break;
            }
            else
            {
                currentCell = strMatrix[x][y];
            }      
        }
        else if (currentCell === 'dl')
        {
            sum += matrix[x][y];
            strMatrix[x][y] = '';
            x++;
            y--;
            if ((x > rows) || (x < 0) || (y > cols) || (y < 0))
            {
                console.log(`successed with ${sum}`);
                break;
            }
            else
            {
                currentCell = strMatrix[x][y];
            }         
        }
        else if (currentCell === 'ul')
        {
            sum += matrix[x][y];
            strMatrix[x][y] = '';
            x--;
            y--;
            if ((x > rows) || (x < 0) || (y > cols) || (y < 0))
            {
                console.log(`successed with ${sum}`);
                break;
            }
            else
            {
                currentCell = strMatrix[x][y];
            }
                       
        }
        else if (currentCell === 'ur')
        {
            sum += matrix[x][y];
            strMatrix[x][y] = '';
            x--;
            y++;
            if ((x > rows) || (x < 0) || (y > cols) || (y < 0))
            {
                console.log(`successed with ${sum}`);
                break;
            }
            else
            {
                currentCell = strMatrix[x][y];
            }      
        }
        else if (currentCell === '')
        {
            console.log(`failed at (${x}, ${y})`);
            break;
        }
    }
}

solve([
  '3 5',
  'dr dl dr ur ul',
  'dr dr ul ur ur',
  'dl dr ur dl ur'   
]); 

solve([
  '3 5',
  'dr dl dl ur ul',
  'dr dr ul ul ur',
  'dl dr ur dl ur'   
]);