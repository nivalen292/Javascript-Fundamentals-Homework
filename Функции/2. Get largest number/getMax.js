function solve(args) {
    var arr = args[0].split(' ').map(Number),
        first = arr[0],
        second = arr[1],
        third = arr[2],
        result = getMax(first, second);
    result = getMax(result, third);

    function getMax(x, y) {
        let max = x;
        if (y > max) {
            max = y;
        }
        return max;
    }
    console.log(result);
}

solve('3 4 5');