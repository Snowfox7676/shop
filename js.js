function a()
{
    var b = ' skype: helper '
    var c = ' telegram: @helper'
    var d = ' tel: 845764957685' 
    alert( b + '\n' + c + '\n' + d)

}
function b()
{
  // var e = parseInt(prompt('введите 1 число'));
  // var f = parseInt(prompt('введите 2 число'));
  // var s = e + f;
  // var v = e - f;
  // var m = e * f;
  // var d = parseInt( e / f);
  // alert(s + ' сумма \n' + v +' разность \n' + m + ' произведение \n' + d + ' частное')
  document.getElementById('present').style.opacity = 1;
}
function c()
{
    var text = prompt('введите текст : ');
    var array = ['1','2','3','4','1'];
    var l = text.length;
    var g = text[0];
    var k = text[text.length - 1];
    var z = text[text.length - 3];
    alert(text + '\n' + l + ' длинна текста \n' + g + ' первый символ текста \n' + k + ' последний символ текста \n' + z + '\n' + text.indexOf('1'));
    alert( array.indexOf('1','2'));
}
function d()
{
  var value = prompt();
  alert(value.toUpperCase());
  alert(value.toLowerCase());
  alert(value.replace('asd','dsa'))
}
function funk()
{
  b = document.getElementById('button');
  if (window.getComputedStyle(b).backgroundColor == 'rgb(255, 0, 0)')
  {
    b.style.backgroundColor = "blue";
  }
  else 
  b.style.backgroundColor = 'red';

// function change_style()
// { 
//   b = document.getElementById('button1'); 
//   if (window.getComputedStyle(b).backgroundColor == 'rgb(255, 0, 0)') 
// {
//   b.style.backgroundColor = "green"; 
// } else
//   b.style.backgroundColor = 'red';
// }
  if(window.getComputedStyle(b).borderRadius != '0px' )
  {
    b.style.borderRadius = '0px';
  }
  else
  b.style.borderRadius = '10px';
  if(window.getComputedStyle(b).boxShadow != '0px 0px 0px 0px')
  {
    b.style.boxShadow = '10px 10px 10px 10px red';
  }
}
//   var p = document.getElementById('a');
//   p.style.backgroundColor = 'blue';
//   p.style.borderRadius = '0px';
// }
// function e()
// {
//   p = document.getElementById('a');
//   p.style.backgroundColor = 'red';
//   p.style.borderRadius = '10px';
// }
function x()
{
  var aa =prompt();
  var bb = prompt();
  if (aa == bb)
  {
    alert (aa + '\n' + bb);
  }
}
function z()
{
  ee = document.getElementById('g');
  var r =prompt();
  var q = prompt();
  if ( r > q)
  {
    ee.style.color = "red";
    alert (r);
  }
  if ( r < q)
  {
    ee.style.color = "blue";
    alert (q);
  }
  if(r == q)
  {
    ee.style.color = "purple";
    alert (r, q);
  }
}
function l()
{
    var ac = 10;
    var bc = 20;
    if(ac < bc && bc == 20)
    {
      alert('условие верно');
    }
    if(ac == bc || ac!= 15)
    {
      alert('условие верно');
    }
}
function y()
{
  var ar = ['one','two','three','four'];
  alert (ar[3]);
  alert(ar.length);
  ar.pop();
  alert(ar);
  ar.shift();
  alert(ar);
  ar.push('five');
  alert(ar);
  ar[0]='six';
  alert(ar);
}
function r()
{
  for(let i = 3; i > 0; i--)
  {
    alert(i);
  }
  var i = 0;
  while(i<3)
  {
    alert(i);
    i++;
  }
  do
  {
    alert(i);
    i--;
  }
  while(i > 0)
}
function e()
{
  var arr = ['id1', 'id2', 'id3'];
  for(let i = 0; i < arr.length; i ++)
  {
    w = document.getElementById(arr[i])
    if(w.style.backgroundColor != 'red')
    {
      w.style.backgroundColor = 'red';
    }
    else 
    w.style.backgroundColor = 'blue';
  }
  
}
function m()
{
 
 do 
 {
  var ll = prompt('введите число > 100');
 }
 while ( ll <= 100 && ll)
}
function h()
{
  for(let i = 0; i <3; i++)
  {
    de = prompt()
    if(de%2 == 0)
    {
      alert(de);
    }
  }
}
function i()
{
  qa = document.getElementById('aa');
  qa.style.display = "block";
}
function u()
{
  ee = document.getElementById('aa');
  if(ee.style.display == 'block')
  {
    ee.style.display = 'none';
  }
}
function ua()
{
  ef = document.getElementById('rr');
  if(ef.style.display == 'block')
  {
    ef.style.display = 'none';
  }
}
function p(k)
{
  // var l;
  // var arra = ['img1', 'img2', 'img3', 'img4', 'img5'];
  // for(let i = 0;arra.length; i++ )
  // {
  //   l = document.getElementById(arra[i]);
  //   l.src = 'star1.png';
  // }
  k = k -1;
  var l;
  var arra = ['img1', 'img2', 'img3', 'img4', 'img5'];
  // mn = document.getElementById(arra[0]);
  // bn = document.getElementById(arra[1]);
  // if(k == 1)
  // {
  //   mn.src = 'star1.png';
  // }
  // if(k == 2)
  // {
  //  mn.src = 'star1.png';
  //  bn.src = 'star1.png';
  // }
  l = document.getElementById(arra[k]);
  if(l.src.indexOf('star2.png') > -1)
  {
  for(let i = 0;i <= k; i++ )
  {
    l = document.getElementById(arra[i]);
    l.src = 'star1.png';
  }
  }
  else 
  for(let i = 0;i <= arra.length; i++ )
  {
    if(i > k)
    {
    l = document.getElementById(arra[i]);
      l.src = 'star2.png';
    }
  }
}
// function v()
// {
//   var r;
//   var arra = ['img1', 'img2', 'img3', 'img4', 'img5'];
//   for(let i = 0;arra.length; i++ )
//   {
//     r = document.getElementById(arra[i]);
//     r.src = 'star2.png';
//   }
// }
setTimeout(b, 10000);
function rt()
{
  aq = document.getElementById('rr');
  aq.style.display = "block";
}
function inp()
{
  let name = document.getElementById('in1');
  let fam = document.getElementById('in2');
  let mail = document.getElementById('in3');
  let tel = document.getElementById('in4');
  if(name.value.length == 0 || name.value == ' '  )
  {
    document.getElementById('span').innerHTML = "введите имя";
  }
  else
  document.getElementById('span').innerHTML = 'Имя: ' + name.value;
  if(fam.value.length == 0 || fam.value == ' '  )
  {
    document.getElementById('span1').innerHTML = "введите Фамилию";
  }
  else 
  document.getElementById('span1').innerHTML = "Фамилия: " + fam.value;
  if(mail.value.indexOf("@") == -1)
  {
    document.getElementById('span2').innerHTML = "введите почту";
  }
  else
  document.getElementById('span2').innerHTML = 'Почта: ' + mail.value;
  if(tel.value.indexOf('+7') == -1 )
  {
    document.getElementById('span3').innerHTML = "введите телефон";
  }
  else 
  document.getElementById('span3').innerHTML = 'Телефон: ' + tel.value;
}
function random()
{
  var pict = ["picture1", "picture2"];
  var ar = ["img/tshirt_1.png", "img/tshirt_2.png", "img/tshirt_3.png", "img/tshirt_4.png", "img/tshirt_5.jpg", "img/tshirt1.png", "img/tshirt2.png"];
  for(let i = 0; i < pict.length; i++ )
  {
    var h = document.getElementById(pict[i]);
    h.src = randomElement(ar);
  }
}
function randomElement(ar)
{
  var rand = Math.floor(Math.random() * ar.length);
  return ar[rand];
}