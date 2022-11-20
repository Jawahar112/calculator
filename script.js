var dis=document.querySelector('#input');
function display(num)
{
    dis.value+=num;
}
function cal(){
    try{
        dis.value=eval(dis.value);
    }
    catch(err)
    {
        alert("error");
        dis.value=0;
    }
}
function clear()
{
 dis.value=0;   
}
function del(){
    dis.value=dis.value.slice(0,-1);
}
