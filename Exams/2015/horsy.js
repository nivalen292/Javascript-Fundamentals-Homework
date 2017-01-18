function solve(args)
{
    let arr = args[0].split(' ').map(Number),
        rows = arr[0],
        cols = arr[1];

    args.shift();

    let numberMatrix = [];
    for (let i = 0; i < rows; i++)
    {
        numberMatrix.push(args[i]);
    }

    let matrix = new Array(rows);
    matrix.fill();
    for (let i = 0; i < rows; i++)
    {   
        matrix[i] = new Array(cols);
    }

    for (let row = 0; row < matrix.length; row++)
    {
        matrix[row][0] = Math.pow(2, row);
        for (col = 0; col < matrix[row].length; col++)
        {
            matrix[row][col] = matrix[row][0] - col;
        }
    }
    console.log(matrix);
}

solve([
  '3 5',
  '54561',
  '43328',
  '52388',
]);