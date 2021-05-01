function fun()
{
    var x=document.forms["frm"];
    var text="";
    var i;
    for(i=0;i<x.length;i++)
    {
        text+=x.elements[i].value+"<br>";
    }

    document.write(text);

}