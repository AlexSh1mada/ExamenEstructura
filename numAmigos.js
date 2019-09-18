var a, b;

function divisor(n)
{
    var suma = 0;

    for (var i = 1; i <= Math.floor(n / 2) + 1; i++)
    {
        if(n % i == 0)
        suma = suma + i;
    }
    return suma;
}

for(var i = 2; i <= 3000; i++)
{
    a = divisor(i);

    for(var j = i; j <= 3000; j++)
    {
        b = divisor(j);
        if(a == j && b == i)
        {
            if(a != b)
                console.log(i + " y " + j + " son amigos. ", "\n");
        }
        
    }
}