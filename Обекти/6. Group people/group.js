function solve(args)
{
    var people = [
        { firstname: 'Gosho', lastname: 'Petrov', age: 32 },
        { firstname: 'Bay', lastname: 'Ivan', age: 81 },
        { firstname: 'John', lastname: 'Doe', age: 42 },
        { firstname: 'Pesho', lastname: 'Pesho', age: 22 },
        { firstname: 'Asdf', lastname: 'Xyz', age: 81 },
        { firstname: 'Gosho', lastname: 'Gosho', age: 22 }
    ],
    groupedByAge = group(people);

    function group(array) {
        let groupedObject = {},
            iString,
            ageArray = [];
        
        for (let i = 0; i < array.length; i++) // make the named indexes
        {
            iString = array[i].age.toString();
            groupedObject[iString] = [];
        }

        for (let i = 0; i < array.length; i++) // make an array with all of the ages
        {
            ageArray.push(array[i].age);
        }

        ageArray.sort(function(a, b) { // sort the ages
            return a - b;
        });

        for (let i = 0; i < ageArray.length; i++) // remove repeating ages
        {
            if (ageArray[i] === ageArray[i + 1])
            {
                ageArray.splice(i, 1);
            }
        }

        for (let i = 0; i < ageArray.length; i++)
        {
            for (let j = 0; j < array.length; j++)
            {
                if (ageArray[i] === array[j].age) // if person age matches the given age
                {
                    groupedObject[i] = array[j];
                }
            }
        }
        return groupedObject;        
    }
    console.log(groupedByAge);
    
}

solve();


