function solve(args)
{
    var word = args[0],
        input = args[1];
        
    function count(search, string) {
        let count = 0,
            startIndex = 0;
        string = string.toLowerCase();
        search = search.toLowerCase();
        for (let i = 0; i < string.length; i++)
        {
            let index = string.indexOf(search, startIndex);
            if (string.indexOf(search, startIndex) >= 0)
            {
                count++;
                startIndex = index + 1;
            }
        }
        return count;
    }
    console.log(count(word, input));
}

solve([
    'we',
    'We are living in an yellow submarine. We don\'t have anything else. inside the submarine is very tight. So we are drinking all the day. We will move out of it in 5 days.'
]);

//37 minuta lekciq