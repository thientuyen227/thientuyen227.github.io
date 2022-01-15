//copy hết vào HTML để chạy
cusor='+';
count=0;
mess='Hello<br />'+
'---------------- <br />'+
'Yêu em là điều anh không thể ngờ<br />'+
'Lần đầu tiên anh thấy em'+
'<br>Anh đã có cảm giác nhất định<br /> '+
'2 ta có thể đi một chặng đường dài với nhau <br />'+
'Hôm nay anh muốn nói với em rằng<br />'+
'<b>ANH YÊU EM</b><br />'+
'Em đồng ý làm người yêu anh nhé!!!.'
function type()
{
    if (cusor=='_') cusor=' '; else cusor='_';
    document.getElementById('scr').innerHTML=mess.substring(0,count++)+cusor;
    if(count<=mess.length) setTimeout("type()",80);
}