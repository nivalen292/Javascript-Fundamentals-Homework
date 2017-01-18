function solve(args)
{
    let rows = +args[0],
        cols = +args[1];

    let board = new Array(rows);
    board.fill();
    for (let i in board)
    {
        board[i] = new Array(cols);
    }
    //console.log(board);

    args.shift();
    args.shift();

    let matrix = [];
    for (let i = 0; i < rows; i++)
    {
        matrix[i] = args[i].split('');
    }
    console.log(matrix);

    for (let i = 0; i < rows; i++)
    {
        args.shift();
    }

    let numberOfMoves = args[0];
    args.shift();

    let moves = [];
    let move;
    let arr = [];
    for (let i = 0, len = args.length; i < len; i++)
    {
        arr[i] = args[i].split(' ');
        move = {
            from: {
                r: rows - +arr[i][i - i],
                c: arr[i - i].charCodeAt(0) - 97
            }, 
            to: {
                r: rows - arr[i - i + 1][i - i + 1],
                c: arr[i - i + 1].charCodeAt(0) - 97
            }
            
        };
        moves.push(move);
    }

    console.log(moves);

    while (numberOfMoves !== 0)
    {
        for (let i = 0; i < numberOfMoves; i++)
        {
            if (moves[i].from[0] === 'a')
            {

            }
        }
        numberOfMoves--;
    }
    
}

solve([
'5',
'5',
'Q---Q',
'-----',
'-B---',
'--R--',
'Q---Q',
'10',
'a1 a1',
'a1 d4',
'e1 b4',
'a5 d2',
'e5 b2',
'b3 d5',
'b3 a2',
'b3 d1',
'b3 a4',
'c2 c5'
]);
 