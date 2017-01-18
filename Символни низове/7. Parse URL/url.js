function solve(args)
{
    var url = args[0],
        protocol,
        server,
        resource;
    for (let i = 0, len = url.length; i < len; i++)
    {
        let end = 0;
        if (url[i] === ":")
        {
            end = i;
            protocol = url.substring(0, end);
        }
    }
    server = url.substring(url.indexOf("/") + 2, url.indexOf("/", url.indexOf("/") + 2));
    resource = url.substr(url.indexOf("/", url.indexOf("/") + 2));
    console.log(`protocol: ${protocol}`);
    console.log(`server: ${server}`);
    console.log(`resource: ${resource}`);
}

solve([ 'http://telerikacademy.com/Courses/Courses/Details/239' ]);