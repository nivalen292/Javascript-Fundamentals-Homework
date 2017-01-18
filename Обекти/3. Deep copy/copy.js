function solve(args)
{
    var person = {
        name: '',
        age: 0,
        pet: ""
    },
        newObject,
        arr = args[0].split(" ");

        person.name = arr[0];
        person.age = +arr[1];
        person.pet = arr[2];

    function copy(object) {
        var result = {};       
        for (var propIndex in object)
        {
            result[propIndex] = object[propIndex];
        }
        return result;
    }

    Object.prototype.getPropLength = function(object) {
        var size = 0, key;
        for (key in object)
        {
            if (object.hasOwnProperty(key))
            {
                size++;
            }
        }
        return size;
    }

    newObject = copy(person);
    person.name = "dido";

    console.log(person);
    console.log(newObject);
}

solve(["Peter 13 Dog"]);