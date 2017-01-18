function solve(args)
{
    var html = args[1],
        obj = JSON.parse(args[0]);
    String.prototype.bind = function(data) {
        let result = this;        
        for (let i in obj)
        {
            let regex = new RegExp('>[^\S]<', 'g');
            result = result.replace(regex, obj[i]);
        }
        return result;
    }
    console.log(html.bind(obj));
}

solve([
    '{ "name": "Steven" }',
    '<div data-bind-content="name"></div>'
]);