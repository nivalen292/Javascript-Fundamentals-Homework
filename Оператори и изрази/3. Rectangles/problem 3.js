function solve(args)
{
    var width = +args[0];
    var height = +args[1];
    var area = width * height;
    var perimeter = (width + height) * 2;
    console.log(area.toFixed(2) + " " + perimeter.toFixed(2));
}
