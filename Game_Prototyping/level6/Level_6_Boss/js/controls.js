var w = false;
var a = false;
var s = false;
var d = false;


document.addEventListener(`keydown`, press);
function press(e)
{
    if(e.keyCode == 87)
        {
            w = true;
        }
    if(e.keyCode == 83)
        {
            s = true;
        }
    if(e.keyCode == 65)
        {
            a = true;
        }
    if(e.keyCode == 68)
        {
            d = true;
        }
}

document.addEventListener(`keyup`, release);
function release(e)
{
    if(e.keyCode == 87)
        {
            w = false;
        }
    if(e.keyCode == 83)
        {
            s = false;
        }
    if(e.keyCode == 65)
        {
            a = false;
        }
    if(e.keyCode == 68)
        {
            d = false;
        }
}