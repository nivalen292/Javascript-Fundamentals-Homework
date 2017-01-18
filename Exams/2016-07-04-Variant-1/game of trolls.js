function solve(args)
{
    const EMPTY = 0;
    const TRAP = 'x';
    const W = 'w';
    const N = 'n';
    const L = 'l';

    let firstInput = args[0].split(' ').map(Number),
        rows = firstInput[0],
        cols = firstInput[1];
       
    let field = new Array(rows);
    field.fill();
    for (let i in field) 
    {
        field[i] = new Array(cols);
        field[i].fill(EMPTY);
    }
    
    let secondInput = args[1].split(';'),
        wCoordsArray = secondInput[0].split(' ').map(Number),
        nCoordsArray = secondInput[1].split(' ').map(Number),
        lCoordsArray = secondInput[2].split(' ').map(Number),
        wTroll = {
            row: +wCoordsArray[0],
            col: +wCoordsArray[1]
        },
        nTroll = {
            row: +nCoordsArray[0],
            col: +nCoordsArray[1]
        },
        lPrincess = {
            row: +lCoordsArray[0],
            col: +lCoordsArray[1]
        };
    field[wTroll.row][wTroll.col] = W;
    field[nTroll.row][nTroll.col] = N;
    field[lPrincess.row][lPrincess.col] = L;
    console.log(field); // current field

    function move(troll, dir) {
        let deltaRow = 0,
            deltaCol = 0,
            isTrapped = false;
        if (!isTrapped)
        {
            if (dir === "u" && !(troll.row = 0)) 
            {
                deltaRow = -1;
                field[troll.row][troll.col] = EMPTY; 
                let newTrollRow = troll.row + deltaRow;
                let newTrollCol = troll.col + deltaCol;
            }
            else if (dir === 'd' && !(troll.row < row - 1)) 
            {
                deltaRow = 1;
                field[troll.row][troll.col] = EMPTY; 
                let newTrollRow = troll.row + deltaRow;
                let newTrollCol = troll.col + deltaCol;
            }
            else if (dir === 'l' && !(troll.col = 0)) 
            {
                deltaCol = -1;
                field[troll.row][troll.col] = EMPTY; 
                let newTrollRow = troll.row + deltaRow;
                let newTrollCol = troll.col + deltaCol;
            }
            else if (dir === 'r' && !(troll.row < col - 1)) 
            {
                deltaCol = 1;
                field[troll.row][troll.col] = EMPTY; 
                let newTrollRow = troll.row + deltaRow;
                let newTrollCol = troll.col + deltaCol;
            }

            troll.row = newTrollRow;
            troll.col = newTrollCol;
        }
        if (field[troll.row][troll.col] === 'x')
        {
            isTrapped = true;
        }
    }

    function layTrap() {
        field[lPrincess.row][lPrincess.col] === 'x'; //hasTrap
    }


    for (let i = 2, len = args.length; i < len; i++)
    {
        let command = args[i].split(' ');
        if (command[0] === 'mv')
        {
            move(command[1], command[2]);
        }
        else if(command[0] === 'lay')
        {
            layTrap();
        }

        if (wTroll.row === lPrincess.row - 1 || wTroll.row === lPrincess.row + 1
            || wTroll.col === lPrincess.col -1 || wTroll.col === lPrincess.col + 1)
        {
            console.log(`The trolls caught Lsjtujzbo at ${lPrincess.row} ${lPrincess.col}`)
        }
        if (nTroll.row === lPrincess.row - 1 || nTroll.row === lPrincess.row + 1
            || nTroll.col === lPrincess.col -1 || nTroll.col === lPrincess.col + 1)
        {
            console.log(`The trolls caught Lsjtujzbo at ${lPrincess.row} ${lPrincess.col}`)
        }
    }
}

solve([
    '5 5',
    '1 1;0 1;2 3',
    'mv Lsjtujzbo d',
    'lay trap',
    'mv Lsjtujzbo d',
    'mv Wboup r',
    'mv Wboup r',
    'mv Nbslbub d',
    'mv Nbslbub d',
    'mv Nbslbub d',
    'mv Nbslbub d',
    'mv Nbslbub d',
    'mv Wboup d',
    'mv Wboup d'
]);