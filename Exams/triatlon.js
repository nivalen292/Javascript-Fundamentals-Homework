function solve(args)
{
    let arr = 'abcdefghijklmnopqrstuvwxyz'.split('');
    let number = 3;
    let newArr = [];
    let restNumber;
    
    function getShiftedArray (arr, n) {
        var i = arr.length - n;
        var front = arr.slice(0, i);
        var back = arr.slice(i);
        return back.concat(front);
    }
    newArr = getShiftedArray(arr, number);
    console.log(newArr);
}

solve();