function solve(args)
{
  var radius = 2;
  var x = +args[0];
  var y = +args[1];
  var distance = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));

  if (distance < radius)
  {
    console.log("yes " + distance.toFixed(2));
  }
  else
  {
    console.log("no " + distance.toFixed(2));
  }
}
