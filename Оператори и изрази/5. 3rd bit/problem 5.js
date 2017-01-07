function solve(args)
{
  var number = +args[0];
  var base2 = number.toString(2);
  var bit = parseInt(base2 / 1000) % 10;
  console.log(bit);
}

solve(["123"]);
