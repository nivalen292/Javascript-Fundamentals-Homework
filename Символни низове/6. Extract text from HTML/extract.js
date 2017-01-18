function solve(args)
{
    var input = args.join("");
    function getText(string) {
        let resut;
        for (let i = 0, len = string.length; i < len; i++)
        {
            string[i].trim();
            result = string.replace(/<[^>]*>/g, "").trim();
            result.replace(/\s+/g, "");
        }
        
        return result;
    }
    console.log(getText(input));
}

solve([
    '<html>',
    '  <head>',
    '    <title>Sample site</title>',
    '  </head>',
    '  <body>',
    '    <div>text',
    '      <div>more text</div>',
    '      and more...',
    '    </div>',
    '    in body',
    '  </body>',
    '</html>'
]);

// remove text /<[^>]*>/g
// remove tags and keep text  /<.*?>/g



// function solve(args)
// {
//     var input = args.join();
//     function getText(string) {
//         let resut;
//         for (let i = 0, len = string.length; i < len; i++)
//         {
//             result = string[i].trim();
//             result = result.replace(/<.*?>/g, "");
//         }     
//         return result;
//     }
//     console.log(getText(input));
// }

// // function solve(args) {
// //     let str = '';
// //     for (let i = 0; i < args.length; i+=1) {
// //       let strTmp = args[i].trim();
// //       let regex = /<.*?>/g;
// //       strTmp = strTmp.replace(regex, '');
// //       str += strTmp.trim();
// //     }
// //     console.log(str);

// // }

// solve([
//     '<html>',
//     '  <head>',
//     '    <title>Sample site</title>',
//     '  </head>',
//     '  <body>',
//     '    <div>text',
//     '      <div>more text</div>',
//     '      and more...',
//     '    </div>',
//     '    in body',
//     '  </body>',
//     '</html>'
// ]);



// // remove text /<[^>]*>/g
// // remove tags and keep text  /<.*?>/g
// // remove blank spaces /\s+/g