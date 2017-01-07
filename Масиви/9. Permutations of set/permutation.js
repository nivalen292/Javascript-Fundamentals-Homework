function solve(args)
{
    let n = +args[0],
        permutations = 1;
    while (n > 0)
    {
        permutations *= n;
        n--;
    }
    permNum = permutations;
    while (permutations > 0)
    {
        for (let i= 1; i <= permuNum; i++)
        {
            
        }
        permutations--;
    }
}