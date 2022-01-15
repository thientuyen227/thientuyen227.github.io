a='+';
b=0;
c='Hello<br />'+
'---------------- <br />'+
'Vậy là đã đồng ý rồi nha > < <br />'+
'Anh có làm video tặng em'+
'<br>Bấm vào video sẽ chạy<br /> '+
'Xem xong ấn vào nút bên dưới<br />'+
'Vào google meet tâm sự xíu > < <br />'+
'Anh đợi em vào !!!<br />'
function type1()
{
    if (a=='_') a=' '; else a='_';
    document.getElementById('scr1').innerHTML=c.substring(0,b++)+a;
    if(b<=c.length) setTimeout("type1()",50);
}