function solve2(args)
{
    var obj = JSON.parse(args[0]);
    String.prototype.getText = function(object) {
        let result = this,
            regex;
        for (let i in object)
        {
            regex = new RegExp('#{' + i + '}', 'g');
            result = result.replace(regex, object[i]);
        }
        return result;
    }
    console.log(args[1].getText(obj));
}


function solve(args) {
  var person = JSON.parse(args[0]);
  String.prototype.format = function(options) {
    var option,
      regex,
      formatted = this;
    for (option in options) {
      regex = new RegExp('#{' + option + '}', 'g');
      formatted = formatted.replace(regex, options[option]);
    }
    return formatted;
  };
  console.log(args[1].format(person));
}

solve2([
    '{ "name": "John", "age": 13 }',
    'My name is #{name} and I am #{age}-years-old'
]);

solve([
    '{ "name": "John", "age": 13 }',
    'My name is #{name} and I am #{age}-years-old'
]);