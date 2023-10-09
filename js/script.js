var image = document.getElementById("image");
var i = 0;
var arr = ["Images/1.jpg","Images/2.png","Images/3.jpg","Images/4.png","Images/5.png"]

function prev()
{
    i--;
    if(i<0)
    {
        i=arr.length-1;
    }
    console.log(arr[i]);
    image.src = arr[i];
}

function next()
{
    i++;
    if(i>arr.length-1)
    {
        i=0;
    }
    console.log(arr[i]);
    image.src = arr[i];
}