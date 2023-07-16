var random=Math.round(Math.random()*100);
var live=10;
function sub()
{
    console.log(random);
    var input=document.getElementById('input').value;
    live--;
    if(random==input)
    {
        location.href="./win.html";
    }
    else if(live==0)
    {
        location.href="./loss.html";
    }
    else if((random>input)&&live!=0)
    {
        document.getElementById('lives').innerHTML="Remaining live is "+live;
        document.getElementById('high').innerHTML="Your guess is low";
    }
    else if((random<input)&&live!=0)
    {
        document.getElementById('lives').innerHTML="Remaining live is "+live;
        document.getElementById('high').innerHTML="Your guess is high";
    }
}
function back()
    {
        location.href="./index.html";
    }