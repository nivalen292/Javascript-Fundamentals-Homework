function solve(args)
{
  var x = +args[0];
  var digit = parseInt(x / 100) % 10;
  if (digit === 7)
  {
    console.log("true");
  }
  else
  {
    console.log("false " + digit);
  }
}

solve(["701"]);
