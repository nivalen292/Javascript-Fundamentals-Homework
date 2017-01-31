function main()
{
    var maxIndex = prompt('What is the max power?');
    var indexes = [];
    var textbox;
    var textDiv = document.getElementById('textDiv');


    for (let i = 0; i < maxIndex; i++)
    {
        textbox = document.createElement('INPUT');
        textbox.setAttribute('type', 'text');
        textbox.style.marginLeft = '15px';
        textbox.size = '5';
        textDiv.appendChild(textbox);
    }
       
}

function getIndexes()
    {
        for (let i = 0, len = indexes.length; i < len; i++)
        {
            indexes.push(document.getElementsByTagName('INPUT')[i].value);
            console.log(...indexes);
        }
    }

