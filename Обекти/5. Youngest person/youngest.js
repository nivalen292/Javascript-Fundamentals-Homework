function solve(args)
{
    var people = [],
        youngest;
    for (var i = 0, numberOfPeople = args.length / 3; i < numberOfPeople; i++)
    {
        people[i] = {
            firstname: args[i*3],
            lastname: args[i*3 + 1],
            age: args[i*3 + 2]
        }
    }
    function findYoungest(array) {
        var result = +array[0].age,
            name = array[0].firstname + ' ' + array[0].lastname;
        for (var k = 0, len = array.length; k < len; k++)
        {
            if (array[k].age < result)
            {
                result = +array[k].age,
                name = array[k].firstname + ' ' + array[k].lastname;
            }
        }
        return name;
    }   
    youngest = findYoungest(people);
    console.log(youngest);
}

solve([
  'Gosho', 'Petrov', '32',
  'Bay', 'Ivan', '81',
  'John', 'Doe', '42'
]);

solve([
  'Penka', 'Hristova', '61',
  'System', 'Failiure', '88',
  'Bat', 'Man', '16',
  'Malko', 'Kote', '72'
]);