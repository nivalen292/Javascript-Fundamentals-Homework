function solve(args)
{
    var input = args[0],
        lowArray = [],
        upArray = [];

    input = input.split("<orgcase>").join("");
    input = input.split("</orgcase>").join("");

    function calculate(start, end) {
        let nextIndex = 0,
            nextIndex2 = 0,
            arr = [];
        while (true)
        {
            let index = input.indexOf(start, nextIndex);
            if (index < 0)
            {
                break;
            }
            arr.push(index);
            nextIndex = index + 1;
        }
        while (true)
        {
            let index = input.indexOf(end, nextIndex2);
            if (index < 0)
            {
                break;
            }
            arr.push(index);
            nextIndex2 = index + 1;
        }
        return arr;
    }

    lowArray = calculate("<lowcase>", "</lowcase>");
    for (let i = 0, len = lowArray.length / 2; i < len; i++)
    {
        let substring = input.substring(lowArray[i] + 9, lowArray[i + lowArray.length / 2]).toLowerCase(),
            toBeReplace = input.substring(lowArray[i] + 9, lowArray[i + lowArray.length / 2]);
        input = input.replace(toBeReplace, substring);
    }
    input = input.split("<lowcase>").join("");
    input = input.split("</lowcase>").join("");

    upArray = calculate("<upcase>", "</upcase>");
    for (let i = 0, len = upArray.length / 2; i < len; i++)
    {
        let substring = input.substring(upArray[i] + 8, upArray[i + upArray.length / 2]).toUpperCase(),
            toBeReplace = input.substring(upArray[i] + 8, upArray[i + upArray.length / 2]);
        input = input.replace(toBeReplace, substring);
    }
    input = input.split("<upcase>").join("");
    input = input.split("</upcase>").join("");

    console.log(input);
}

solve([ 'We are <orgcase>liViNg</orgcase> in a <upcase>yellow submarine</upcase>. We <orgcase>doN\'t</orgcase> have <lowcase>anything</lowcase> else.' ]);


// function solve(args) {
//     var obj = JSON.parse(args[0]);
//     var text = '' + args[1];
//     text = text.replace(/'/, '"');
//     var regex = /data-bind-(.*?)="(.*?)"/gi;
//     var currentMatch;
//     while (currentMatch = regex.exec(text)) {
//         var index = text.indexOf('>');
//         if (text[index - 1] === '/') {
//             index--;
//         }
//         var field = currentMatch[1];
//         if (field.toLowerCase() === 'content') {
//             var arr = text.split('');
//             var x = arr.splice(index + 1, 0, obj[currentMatch[2]]);
//             text = arr.join('');
//         } else {
//             var arr2 = text.split('');
//             var x2 = arr2.splice(index, 0, " " + field + '="' + obj[currentMatch[2]] + '"');
//             text = arr2.join('');
//         }
//     }
 
//     console.log(text);
 
// }