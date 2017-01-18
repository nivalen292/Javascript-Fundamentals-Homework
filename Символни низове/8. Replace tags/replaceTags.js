function solve(args)
{
    var text2;
    text2 = args[0].split('<a href="').join("(");
    text2 = text2.split('">').join(')');

    for (let i = 0, len = text2.length; i < len; i++)
    {
        let cutText;
        if (text2[i] === ')')
        {
            cutText = text2.substring(i + 1, text2.indexOf('</a>', i));
            text2 = text2.replace(cutText, '');
            //text2 = text2.split(cutText).join(''); backup
            cutText = ' [' + cutText + ']';
            if (cutText.length > 3)
            {
                text2 = text2.replace(' (', cutText + '(');
            }
            //text2 = text2.split(' (').join(cutText + '('); backup
        }
    }
    text2 = text2.split('</a>').join(''); // do last

    console.log(text2);
}


function solve2(args)
{
    function replace(string) {
        string = string.split('<a href="').join("(");
        string = string.split('">').join(')');
        for (let i = 0, len = string.length; i < len; i++)
        {   
            let cutText;
            if (string[i] === ')')
            {
                cutText = string.substring(i + 1, string.indexOf('</a>', i));
                string = string.replace(cutText, '');
                cutText = ' [' + cutText + ']';
                if (cutText.length > 3)
                {
                    string = string.replace(' (', cutText + '(');
                }
            }
        }
        string = string.split('</a>').join('');
        return string;
    }
    console.log(replace(args[0]));
}


solve([ '<p>Please visit <a href="http://academy.telerik.com">our site</a> to choose a training course. Also visit <a href="www.devbg.org">our forum</a> to discuss the courses.</p>' ]);
solve2([ '<p>Please visit <a href="http://academy.telerik.com">our site</a> to choose a training course. Also visit <a href="www.devbg.org">our forum</a> to discuss the courses.</p>' ]);