function verify_send1() {
    verify1();
    send1();
} 

function compareNumeric(h, j) {
    if (h > j) return 1;
    if (h == j) return 0;
    if (h < j) return -1;
  }
  function verify1() 
{
    
    let weightBox = parseFloat(elementweightBox.value);
    let longBox = parseFloat(elementlongBox.value);
    let hightBox = parseFloat(elementhightBox.value);
    let hightHole = parseFloat(elementhightHole.value);
    let weightHole = parseFloat(elementweightHole.value);
  
   const box=[weightBox,longBox,hightBox];
   box.sort(compareNumeric);

   const hole=[hightHole,weightHole]
   hole.sort(compareNumeric);

   if((box[0]<=hole[0]) && (box[1]<=hole[1]))
   {
    result1001 = " пройдет";
    document.getElementById("result1001").innerText = messageText1001 + result1001;
    document.getElementsByName('result1001')[0].value = result1001;
    check = true;
   }
   else
   {
    result1001 = " не пройдет";
    document.getElementById("result1001").innerText = messageText1001 + result1001;
    document.getElementsByName('result1001')[0].value = result1001;
    check = false;
   }
  }
  function send1() {
    if (check) {
        let textCondition1001 = document.getElementsByTagName('p')[0].innerText;
        document.getElementsByName('formulation1001')[0].value = textCondition1001;
        document.getElementsByName('result1001')[0].value = result1001;
        document.getElementById("UserEnter1001").submit();
    } else {
        alert("Есть недостатки. Повторите ввод");
    }
}
let messageText1001 = document.getElementById("result1001").innerText;

let result1001;

let check = false;

const elementweightBox = document.getElementById("weightBox");
elementweightBox.addEventListener('input', verify1);

const elementlongBox = document.getElementById("longBox");
elementlongBox.addEventListener('keyup', verify1);

const elementhightBox = document.getElementById("hightBox");
elementhightBox.addEventListener('keyup', verify1);

const elementhightHole = document.getElementById("hightHole");
elementhightHole.addEventListener('keyup', verify1);

const elementweightHole = document.getElementById("weightHole");
elementweightHole.addEventListener('keyup', verify1);


const elementVerify1001 = document.getElementById("verify1");
elementVerify1001.addEventListener('click', verify1);

const elementSend1001 = document.getElementById("send1");
elementSend1001.addEventListener('click', send1);
///////////////////////////////////////////////////////////////////////
function verify_send2() 
{
    verify2();
    send2();
}
function verify2() 
{
    
    let realnumber = parseFloat(elementrealnumber.value);
    if(realnumber>0)
    {
        result1002 = " положительное";
    document.getElementById("result1002").innerText = messageText1002 + result1002;
    document.getElementsByName('result1002')[0].value = result1002;
    check = true;
    }
    else if(realnumber<0)
    {
        result1002 = " отрицательное";
    document.getElementById("result1002").innerText = messageText1002 + result1002;
    document.getElementsByName('result1002')[0].value = result1002;
    check = true;
    }
    else if(realnumber==0)
    {
        result1002 = " ноль";
    document.getElementById("result1002").innerText = messageText1002 + result1002;
    document.getElementsByName('result1002')[0].value = result1002;
    check = true;
    }
  }
  function send2() {
    if (check) {
        let textCondition1002 = document.getElementsByTagName('p')[2].innerText;
        document.getElementsByName('formulation1002')[0].value = textCondition1002;
        document.getElementsByName('result1002')[0].value = result1002;
        document.getElementById("UserEnter1002").submit();
    } else {
        alert("Есть недостатки. Повторите ввод");
    }
}
let messageText1002 = document.getElementById("result1002").innerText;

let result1002;

const elementrealnumber = document.getElementById("realnumber");
elementrealnumber.addEventListener('keyup', verify2);

const elementVerify1002 = document.getElementById("verify2");
elementVerify1002.addEventListener('click', verify2);

const elementSend1002 = document.getElementById("send2");
elementSend1002.addEventListener('click', send2);
///////////////////////////////////////////////////////////////////////////
function verify_send3() 
{
    verify3();
    send3();
}
function verify3() 
{
    
    let brus = parseInt(elementbrus.value);
    let wooddiametr = parseInt(elementwooddiametr.value);
    if((wooddiametr/(2**0.5))>=brus)
    {
        result1003 = " можно";
    document.getElementById("result1003").innerText = messageText1003 + result1003;
    document.getElementsByName('result1003')[0].value = result1003;
    check = true;
    }
    else
    {
        result1003 = " нельзя";
    document.getElementById("result1003").innerText = messageText1003 + result1003;
    document.getElementsByName('result1003')[0].value = result1003;
    check = true;
    }
}
    function send3() 
    {
        if (check) {
            let textCondition1003 = document.getElementsByTagName('p')[4].innerText;
            document.getElementsByName('formulation1003')[0].value = textCondition1003;
            document.getElementsByName('result1003')[0].value = result1003;
            document.getElementById("UserEnter1003").submit();
        } else {
            alert("Есть недостатки. Повторите ввод");
        }
    }

let messageText1003 = document.getElementById("result1003").innerText;

let result1003;

const elementwooddiametr = document.getElementById("wooddiametr");
elementwooddiametr.addEventListener('keyup', verify3);

const elementbrus= document.getElementById("brus");
elementbrus.addEventListener('keyup', verify3);

const elementVerify1003 = document.getElementById("verify3");
elementVerify1003.addEventListener('click', verify3);

const elementSend1003 = document.getElementById("send3");
elementSend1003.addEventListener('click', send3);
///////////////////////////////////////////////////////////////////////////////
function verify_send4() 
{
    verify4();
    send4();
}
function verify4() 
{
    
    let houle = parseFloat(elementhoule.value);
    let scene = parseFloat(elementscene.value);
    let way = parseFloat(elementway.value);
    
    
    var a=houle**0.5;
    var b=a/2;
    if(scene+way <= b)
    {
        result1004 = " можно";
    document.getElementById("result1004").innerText = messageText1004 + result1004;
    document.getElementsByName('result1004')[0].value = result1004;
    check = true;
    }
    else
    {
        result1004 = " нельзя";
    document.getElementById("result1004").innerText = messageText1004 + result1004;
    document.getElementsByName('result1004')[0].value = result1004;
    check = true;
    }
    
}
    function send4() 
    {
        if (check) {
            let textCondition1004 = document.getElementsByTagName('p')[6].innerText;
            document.getElementsByName('formulation1004')[0].value = textCondition1004;
            document.getElementsByName('result1004')[0].value = result1004;
            document.getElementById("UserEnter1004").submit();
        } else {
            alert("Есть недостатки. Повторите ввод");
        }
    }

let messageText1004 = document.getElementById("result1004").innerText;

let result1004;

const elementhoule = document.getElementById("houle");
elementhoule.addEventListener('keyup', verify4);

const elementscene= document.getElementById("scene");
elementscene.addEventListener('keyup', verify4);

const elementway= document.getElementById("way");
elementway.addEventListener('keyup', verify4);

const elementVerify1004 = document.getElementById("verify4");
elementVerify1004.addEventListener('click', verify4);

const elementSend1004 = document.getElementById("send4");
elementSend1004.addEventListener('click', send4);
///////////////////////////////////////////////////////////////////////////
function verify_send5() 
{
    verify5();
    send5();
}
function verify5() 
{
    
    let place = parseInt(elementplace.value);
  
    
    if(place%2 == 0 && place>0 && place<55)
    {
        if(place<=36)
        {
            result1005 = " верхнее. Купе";
            document.getElementById("result1005").innerText = messageText1005 + result1005;
            document.getElementsByName('result1005')[0].value = result1005;
            check = true;
        }
        else 
        {
            result1005 = " верхнее. Боковое";
            document.getElementById("result1005").innerText = messageText1005 + result1005;
            document.getElementsByName('result1005')[0].value = result1005;
            check = true;
        }
    }
    else if(place%2 !=0 && place>0 && place<55)
    {
        if(place<=36)
        {
            
            result1005 = " нижнее. Купе";
            document.getElementById("result1005").innerText = messageText1005 + result1005;
            document.getElementsByName('result1005')[0].value = result1005;
            check = true;
        }
        else 
        {
            result1005 = " нижнее. Боковое";
            document.getElementById("result1005").innerText = messageText1005 + result1005;
            document.getElementsByName('result1005')[0].value = result1005;
            check = true;
        }
    }
    else
    {
        
        result1005 = " не существет";
            document.getElementById("result1005").innerText = messageText1005 + result1005;
            document.getElementsByName('result1005')[0].value = result1005;
            check = false;
    }
   
    
}
    function send5() 
    {
        if (check) {
            let textCondition1005 = document.getElementsByTagName('p')[8].innerText;
            document.getElementsByName('formulation1005')[0].value = textCondition1005;
            document.getElementsByName('result1005')[0].value = result1005;
            document.getElementById("UserEnter1005").submit();
        } else {
            alert("Есть недостатки. Повторите ввод");
        }
    }

let messageText1005 = document.getElementById("result1005").innerText;

let result1005;

const elementplace = document.getElementById("place");
elementplace.addEventListener('keyup', verify5);

const elementVerify1005 = document.getElementById("verify5");
elementVerify1005.addEventListener('click', verify5);

const elementSend1005 = document.getElementById("send5");
elementSend1005.addEventListener('click', send5);
///////////////////////////////////////////////////////////////////////////
function verify_send6() 
{
    verify6();
    send6();
}
function verify6() 
{
    
    let money = parseInt(elementmoney.value);
  
    
    if(money>=2)
    {
    var fivehundred=(money-money%500)/500;
    var hundred=((money-(money%500)%100)-fivehundred*500)/100;
    var fifty=((money-((money%500)%100)%50)-fivehundred*500-hundred*100)/50;
    var ten=((money-(((money%500)%100)%50)%10)-fivehundred*500-hundred*100-fifty*50)/10;


        if(money%2==0)
        {
            var two=((money-((((money%500)%100)%50)%10)%2)-fivehundred*500-hundred*100-fifty*50-ten*10)/2;
            result1006 = " Пятисотовые: " + fivehundred  + " Сотни: " + hundred + " Пятидесятки: " + fifty + " " + "Десятки: " + ten + " " + "Двойки: " + two;
            document.getElementById("result1006").innerText = messageText1006 + result1006;
            document.getElementsByName('result1006')[0].value = result1006;
            check = true;
        }
        else
        {
            
            result1006 = " не разменять";
            document.getElementById("result1006").innerText = messageText1006 + result1006;
            document.getElementsByName('result1006')[0].value = result1006;
            check = false;
        }
    
    }
    else
    {
        result1006 = " не разменять";
            document.getElementById("result1006").innerText = messageText1006 + result1006;
            document.getElementsByName('result1006')[0].value = result1006;
            check = false;
    }
   
    
}
    function send6() 
    {
        if (check) {
            let textCondition1006 = document.getElementsByTagName('p')[10].innerText;
            document.getElementsByName('formulation1006')[0].value = textCondition1006;
            document.getElementsByName('result1006')[0].value = result1006;
            document.getElementById("UserEnter1006").submit();
        } else {
            alert("Есть недостатки. Повторите ввод");
        }
    }

let messageText1006 = document.getElementById("result1006").innerText;

let result1006;

const elementmoney = document.getElementById("money");
elementmoney.addEventListener('keyup', verify6);

const elementVerify1006 = document.getElementById("verify6");
elementVerify1006.addEventListener('click', verify6);

const elementSend1006 = document.getElementById("send6");
elementSend1006.addEventListener('click', send6);
/////////////////////////////////////////////////////////////////////
function verify_send7() 
{
    verify7();
    send7();
}
function verify7() 
{
    
    let edgecube = parseFloat(elementedgecube.value);
    let hightcylynder = parseFloat(elementhightcylynder.value);
    let radius = parseFloat(elementradius.value);
    let water = parseFloat(elementwater.value);
  
    // a=Number(prompt('Ребро'));
    //  var h=Number(prompt('Высота'));
    //  var r=Number(prompt('Радиус'));
    // m=Number(prompt('Объем'));

    if(edgecube**3>water && (Math.PI*radius**2)*hightcylynder > water)
    {
        result1007 = " войдет либо в один, либо в другой";
            document.getElementById("result1007").innerText = messageText1007 + result1007;
            document.getElementsByName('result1007')[0].value = result1007;
            check = true;
    }
    else if(edgecube**3>water)
    {
        result1007 = " войдет в кубическую";
            document.getElementById("result1007").innerText = messageText1007 + result1007;
            document.getElementsByName('result1007')[0].value = result1007;
            check = true;
    }
    else if((Math.PI*radius**2)*hightcylynder > water)
    {
        result1007 = " войдет в цилиндрическую";
        document.getElementById("result1007").innerText = messageText1007 + result1007;
        document.getElementsByName('result1007')[0].value = result1007;
        check = true;
    }
    else if(edgecube**3 + (Math.PI*radius**2)*hightcylynder > water)
    {
        result1007 = " войдет в суммарный объем сосудов";
        document.getElementById("result1007").innerText = messageText1007 + result1007;
        document.getElementsByName('result1007')[0].value = result1007;
        check = true;
    }
    else
    {
        result1007 = " не войдет";
        document.getElementById("result1007").innerText = messageText1007 + result1007;
        document.getElementsByName('result1007')[0].value = result1007;
        check = fals;
    }
}
    function send7() 
    {
        if (check) {
            let textCondition1007 = document.getElementsByTagName('p')[12].innerText;
            document.getElementsByName('formulation1007')[0].value = textCondition1007;
            document.getElementsByName('result1007')[0].value = result1007;
            document.getElementById("UserEnter1007").submit();
        } else {
            alert("Есть недостатки. Повторите ввод");
        }
    }

let messageText1007 = document.getElementById("result1007").innerText;

let result1007;

const elementedgecube = document.getElementById("edgecube");
elementedgecube.addEventListener('keyup', verify7);
const elementhightcylynder = document.getElementById("hightcylynder");
elementhightcylynder.addEventListener('keyup', verify7);
const elementradius = document.getElementById("radius");
elementradius.addEventListener('keyup', verify7);
const elementwater = document.getElementById("water");
elementwater.addEventListener('keyup', verify7);

const elementVerify1007 = document.getElementById("verify7");
elementVerify1007.addEventListener('click', verify7);

const elementSend1007 = document.getElementById("send7");
elementSend1007.addEventListener('click', send7);
/////////////////////////////////////////////////////////////////////////
function verify_send8() 
{
    verify8();
    send8();
}
function verify8() 
{
    
    let linex = parseFloat(elementlinex.value);
    let liney = parseFloat(elementliney.value);
    let linez = parseFloat(elementlinez.value);
    
  
    if(linex<=liney+linez && liney<=linex+linez && linez<=liney+linex && linez>0 && linex>0 && liney>0)
    {
        if(linex==(liney**2+linez**2)**0.5 || liney==(linex**2+linez**2)**0.5 || linez==(liney**2+linex**2)**0.5)
        {
            result1008 = " существует и прямоугольный";
            document.getElementById("result1008").innerText = messageText1008 + result1008;
            document.getElementsByName('result1008')[0].value = result1008;
            check = true;
        }
        else
        {
            result1008 = " существует";
            document.getElementById("result1008").innerText = messageText1008 + result1008;
            document.getElementsByName('result1008')[0].value = result1008;
            check = true;
        }
    }
    else
    {
        result1008 = " не существует";
            document.getElementById("result1008").innerText = messageText1008 + result1008;
            document.getElementsByName('result1008')[0].value = result1008;
            check = false;
    }

}
    function send8() 
    {
        if (check) {
            let textCondition1008 = document.getElementsByTagName('p')[14].innerText;
            document.getElementsByName('formulation1008')[0].value = textCondition1008;
            document.getElementsByName('result1008')[0].value = result1008;
            document.getElementById("UserEnter1008").submit();
        } else {
            alert("Есть недостатки. Повторите ввод");
        }
    }

let messageText1008 = document.getElementById("result1008").innerText;

let result1008;

const elementlinex = document.getElementById("linex");
elementlinex.addEventListener('keyup', verify8);
const elementliney = document.getElementById("liney");
elementliney.addEventListener('keyup', verify8);
const elementlinez = document.getElementById("linez");
elementlinez.addEventListener('keyup', verify8);


const elementVerify1008 = document.getElementById("verify8");
elementVerify1008.addEventListener('click', verify8);

const elementSend1008 = document.getElementById("send8");
elementSend1008.addEventListener('click', send8);
///////////////////////////////////////////////////////////////////////////////
function verify_send9() 
{
    verify9();
    send9();
}
function verify9() 
{
    
    let numberx = parseFloat(elementnumberx.value);
    let numbera = parseFloat(elementnumbera.value);
    let numberb = parseFloat(elementnumberb.value);
 
  
    if(numberx<=numberb && numberx>=numbera)
    {
        result1009 = " принадлежит";
            document.getElementById("result1009").innerText = messageText1009 + result1009;
            document.getElementsByName('result1009')[0].value = result1009;
            check = true;
    }
    else
    {
        result1009 = " не принадлежит";
            document.getElementById("result1009").innerText = messageText1009 + result1009;
            document.getElementsByName('result1009')[0].value = result1009;
            check = true;
    }
  

}
    function send9() 
    {
        if (check) {
            let textCondition1009 = document.getElementsByTagName('p')[16].innerText;
            document.getElementsByName('formulation1009')[0].value = textCondition1009;
            document.getElementsByName('result1009')[0].value = result1009;
            document.getElementById("UserEnter1009").submit();
        } else {
            alert("Есть недостатки. Повторите ввод");
        }
    }

let messageText1009 = document.getElementById("result1009").innerText;

let result1009;

const elementnumberx = document.getElementById("numberx");
elementnumberx.addEventListener('keyup', verify9);
const elementnumbera = document.getElementById("numbera");
elementnumbera.addEventListener('keyup', verify9);
const elementnumberb = document.getElementById("numberb");
elementnumberb.addEventListener('keyup', verify9);


const elementVerify1009 = document.getElementById("verify9");
elementVerify1009.addEventListener('click', verify9);

const elementSend1009 = document.getElementById("send9");
elementSend1009.addEventListener('click', send9);
//////////////////////////////////////////////////////////////
function verify_send10() 
{
    verify10();
    send10();
}
function verify10() 
{
    
    let xx = parseFloat(elementxx.value);
    let yy = parseFloat(elementyy.value);
    
    var z=1/(xx * yy);
  
    result1010 = " " + z;
    document.getElementById("result1010").innerText = messageText1010 + result1010;
    document.getElementsByName('result1010')[0].value = result1010;
    check = true;
  

}
    function send10() 
    {
        if (check) {
            let textCondition1010 = document.getElementsByTagName('p')[18].innerText;
            document.getElementsByName('formulation1010')[0].value = textCondition1010;
            document.getElementsByName('result1010')[0].value = result1010;
            document.getElementById("UserEnter1010").submit();
        } else {
            alert("Есть недостатки. Повторите ввод");
        }
    }

let messageText1010 = document.getElementById("result1010").innerText;

let result1010;

const elementxx = document.getElementById("xx");
elementxx.addEventListener('keyup', verify10);
const elementyy = document.getElementById("yy");
elementyy.addEventListener('keyup', verify10);



const elementVerify1010 = document.getElementById("verify10");
elementVerify1010.addEventListener('click', verify10);

const elementSend1010 = document.getElementById("send10");
elementSend1010.addEventListener('click', send10);
////////////////////////////////////////////////////////////////////////////
function verify_send11() 
{
    verify11();
    send11();
}
function verify11() 
{
    
    let aa = parseFloat(elementaa.value);
    let bb = parseFloat(elementbb.value);
    let cc = parseFloat(elementcc.value);
    
    if(aa<bb && bb<cc)
    {
        result1011 = " выполняется a<b<c";
        document.getElementById("result1011").innerText = messageText1011 + result1011;
        document.getElementsByName('result1011')[0].value = result1011;
        check = true;
    }
    else if(aa>bb && bb>cc)
    {
        result1011 = " выполняется a>b>c";
        document.getElementById("result1011").innerText = messageText1011 + result1011;
        document.getElementsByName('result1011')[0].value = result1011;
        check = true;
    }
    else
    {
        result1011 = " не выполняется";
        document.getElementById("result1011").innerText = messageText1011 + result1011;
        document.getElementsByName('result1011')[0].value = result1011;
        check = false;
    }
  
    
  

}
    function send11() 
    {
        if (check) {
            let textCondition1011 = document.getElementsByTagName('p')[20].innerText;
            document.getElementsByName('formulation1011')[0].value = textCondition1011;
            document.getElementsByName('result1011')[0].value = result1011;
            document.getElementById("UserEnter1011").submit();
        } else {
            alert("Есть недостатки. Повторите ввод");
        }
    }

let messageText1011 = document.getElementById("result1011").innerText;

let result1011;

const elementaa = document.getElementById("aa");
elementaa.addEventListener('keyup', verify11);
const elementbb = document.getElementById("bb");
elementbb.addEventListener('keyup', verify11);
const elementcc = document.getElementById("cc");
elementcc.addEventListener('keyup', verify11);



const elementVerify1011 = document.getElementById("verify11");
elementVerify1011.addEventListener('click', verify11);

const elementSend1011 = document.getElementById("send11");
elementSend1011.addEventListener('click', send11);
////////////////////////////////////////////////////////////////////////////
function verify_send12() 
{
    verify12();
    send12();
}
function verify12() 
{
    
    let xxx = parseFloat(elementxxx.value);
    let yyy = parseFloat(elementyyy.value);
    
  
    var z;
    if(xxx>yyy)
    {
        z=xxx*yyy;
        result1012 = " "+ z;
        document.getElementById("result1012").innerText = messageText1012 + result1012;
        document.getElementsByName('result1012')[0].value = result1012;
        check = true;
    }
    else
    {
        z=Math.log(xxx+yyy);
        result1012 = " "+ z;
        document.getElementById("result1012").innerText = messageText1012 + result1012;
        document.getElementsByName('result1012')[0].value = result1012;
        check = true;
    }

}
    function send12() 
    {
        if (check) {
            let textCondition1012 = document.getElementsByTagName('p')[22].innerText;
            document.getElementsByName('formulation1012')[0].value = textCondition1012;
            document.getElementsByName('result1012')[0].value = result1012;
            document.getElementById("UserEnter1012").submit();
        } else {
            alert("Есть недостатки. Повторите ввод");
        }
    }

let messageText1012 = document.getElementById("result1012").innerText;

let result1012;

const elementxxx = document.getElementById("xxx");
elementxxx.addEventListener('keyup', verify12);
const elementyyy = document.getElementById("yyy");
elementyyy.addEventListener('keyup', verify12);




const elementVerify1012 = document.getElementById("verify12");
elementVerify1012.addEventListener('click', verify12);

const elementSend1012 = document.getElementById("send12");
elementSend1012.addEventListener('click', send12);
///////////////////////////////////////////////////////////////////////
function verify_send13() 
{
    verify13();
    send13();
}
function verify13() 
{
    
    let numa = parseFloat(elementnuma.value);
    let numb = parseFloat(elementnumb.value);
    let numc = parseFloat(elementnumc.value);
    let numd = parseFloat(elementnumd.value);
    
    if((numa<numc && numb<numd) || (numa<numd && numb<numc) && numa*numb*numc*numd>0)
    {
        
        result1013 = " уместится";
        document.getElementById("result1013").innerText = messageText1013 + result1013;
        document.getElementsByName('result1013')[0].value = result1013;
        check = true;
    }
    else if(0>=numa*numb*numc*numd)
    {
        result1013 = " невозможно построить";
        document.getElementById("result1013").innerText = messageText1013 + result1013;
        document.getElementsByName('result1013')[0].value = result1013;
        check = false;
    }
    else
    {
        result1013 = " не уместится";
        document.getElementById("result1013").innerText = messageText1013 + result1013;
        document.getElementsByName('result1013')[0].value = result1013;
        check = true;
    }
}
    function send13() 
    {
        if (check) {
            let textCondition1013 = document.getElementsByTagName('p')[24].innerText;
            document.getElementsByName('formulation1013')[0].value = textCondition1013;
            document.getElementsByName('result1013')[0].value = result1013;
            document.getElementById("UserEnter1013").submit();
        } else {
            alert("Есть недостатки. Повторите ввод");
        }
    }

let messageText1013 = document.getElementById("result1013").innerText;

let result1013;

const elementnuma = document.getElementById("numa");
elementnuma.addEventListener('keyup', verify13);
const elementnumb = document.getElementById("numb");
elementnumb.addEventListener('keyup', verify13);
const elementnumc = document.getElementById("numc");
elementnumc.addEventListener('keyup', verify13);
const elementnumd = document.getElementById("numd");
elementnumd.addEventListener('keyup', verify13);




const elementVerify1013 = document.getElementById("verify13");
elementVerify1013.addEventListener('click', verify13);

const elementSend1013 = document.getElementById("send13");
elementSend1013.addEventListener('click', send13);
//////////////////////////////////////////////////////////////////
function verify_send14() 
{
    verify14();
    send14();
}
function verify14() 
{
    
    let Anum = parseFloat(elementAnum.value);
    
    var x;
    if(Anum<62)
    {
        x = Anum**2+4+5;
        result1014 = " ="+x;
        document.getElementById("result1014").innerText = messageText1014 + result1014;
        document.getElementsByName('result1014')[0].value = result1014;
        check = true;
    }
    else
    {
        x = 1/((Anum**2)+(4*Anum+5));
        result1014 = " ="+x;
        document.getElementById("result1014").innerText = messageText1014 + result1014;
        document.getElementsByName('result1014')[0].value = result1014;
        check = true; 
    }
    
  
}
    function send14() 
    {
        if (check) {
            let textCondition1014 = document.getElementsByTagName('p')[26].innerText;
            document.getElementsByName('formulation1014')[0].value = textCondition1014;
            document.getElementsByName('result1014')[0].value = result1014;
            document.getElementById("UserEnter1014").submit();
        } else {
            alert("Есть недостатки. Повторите ввод");
        }
    }

let messageText1014 = document.getElementById("result1014").innerText;

let result1014;

const elementAnum = document.getElementById("Anum");
elementAnum.addEventListener('keyup', verify14);


const elementVerify1014 = document.getElementById("verify14");
elementVerify1014.addEventListener('click', verify14);

const elementSend1014 = document.getElementById("send14");
elementSend1014.addEventListener('click', send14);
//////////////////////////////////////////////////////////////////////////////
function verify_send15() 
{
    verify15();
    send15();
}
function verify15() 
{
    
    let Anum2 = parseFloat(elementAnum2.value);
    
    var x;

    if(Anum2>100)
    {
        x = 0;
        result1015 = " ="+x;
        document.getElementById("result1015").innerText = messageText1015 + result1015;
        document.getElementsByName('result1015')[0].value = result1015;
        check = true;
    }
    else if(Anum2<61)
    {
        x = Anum2;
        result1015 = " ="+x;
        document.getElementById("result1015").innerText = messageText1015 + result1015;
        document.getElementsByName('result1015')[0].value = result1015;
        check = true;
    }
    else
    {
        x=Anum2**4;
        result1015 = " ="+x;
        document.getElementById("result1015").innerText = messageText1015 + result1015;
        document.getElementsByName('result1015')[0].value = result1015;
        check = true; 
    }
    
  
}
    function send15() 
    {
        if (check) {
            let textCondition1015 = document.getElementsByTagName('p')[28].innerText;
            document.getElementsByName('formulation1015')[0].value = textCondition1015;
            document.getElementsByName('result1015')[0].value = result1015;
            document.getElementById("UserEnter1015").submit();
        } else {
            alert("Есть недостатки. Повторите ввод");
        }
    }

let messageText1015 = document.getElementById("result1015").innerText;

let result1015;

const elementAnum2 = document.getElementById("Anum2");
elementAnum2.addEventListener('keyup', verify15);


const elementVerify1015 = document.getElementById("verify15");
elementVerify1015.addEventListener('click', verify15);

const elementSend1015 = document.getElementById("send15");
elementSend1015.addEventListener('click', send15);
///////////////////////////////////////////////////////////////////
function verify_send16() 
{
    verify16();
    send16();
}
function verify16() 
{
    
    let Anum3 = parseFloat(elementAnum3.value);
    
    var x;
    


    if(Anum3<10)
    {
        x = Anum3**4;
        result1016 = " ="+x;
        document.getElementById("result1016").innerText = messageText1016 + result1016;
        document.getElementsByName('result1016')[0].value = result1016;
        check = true;
    }
    else if(Anum3>61)
    {
        x = Anum3;
        result1016 = " ="+x;
        document.getElementById("result1016").innerText = messageText1016 + result1016;
        document.getElementsByName('result1016')[0].value = result1016;
        check = true;
    }
    else
    {
        x=Anum3-Math.sin(Anum3**2);
        result1016 = " ="+x;
        document.getElementById("result1016").innerText = messageText1016 + result1016;
        document.getElementsByName('result1016')[0].value = result1016;
        check = true; 
    }
    
  
}
    function send16() 
    {
        if (check) {
            let textCondition1016 = document.getElementsByTagName('p')[30].innerText;
            document.getElementsByName('formulation1016')[0].value = textCondition1016;
            document.getElementsByName('result1016')[0].value = result1016;
            document.getElementById("UserEnter1016").submit();
        } else {
            alert("Есть недостатки. Повторите ввод");
        }
    }

let messageText1016 = document.getElementById("result1016").innerText;

let result1016;

const elementAnum3 = document.getElementById("Anum3");
elementAnum3.addEventListener('keyup', verify16);


const elementVerify1016 = document.getElementById("verify16");
elementVerify1016.addEventListener('click', verify16);

const elementSend1016 = document.getElementById("send16");
elementSend1016.addEventListener('click', send16);
///////////////////////////////////////////////////////////////////////
function verify_send17() 
{
    verify17();
    send17();
}
function verify17() 
{
    
    let year = parseInt(elementyear.value);
    var century;
    if(Math.abs(year)%4 == 0)
    {
       if((year>0 && year<100) || (year<0 && year>-100))
       {
        if(year>0)
         {
            century=1;
            
            result1017 = ' високосный. '+'Век: '+century;
            document.getElementById("result1017").innerText = messageText1017 + result1017;
            document.getElementsByName('result1017')[0].value = result1017;
            check = true;
          }
        else
         {
            century=-1;
            result1017 = ' високосный. '+'Век: '+century;
            document.getElementById("result1017").innerText = messageText1017 + result1017;
            document.getElementsByName('result1017')[0].value = result1017;
            check = true;
         }
       }

       else if((year>=100) || (year<=-100))
       {
        if(year>0 && Math.abs(year)%100 != 0)
         {
            century=year/100+1;
            century=Math.trunc(century);
            result1017 = ' високосный. '+'Век: '+century;
            document.getElementById("result1017").innerText = messageText1017 + result1017;
            document.getElementsByName('result1017')[0].value = result1017;
            check = true;
            
          }
        else if(Math.abs(year)%100==0)
        {
            century=year/100;
            result1017 = ' високосный. '+'Век: '+century;
            document.getElementById("result1017").innerText = messageText1017 + result1017;
            document.getElementsByName('result1017')[0].value = result1017;
            check = true;
        }
        else
         {
            century=year/100-1;
            century=Math.trunc(century);
            result1017 = ' високосный. '+'Век: '+century;
            document.getElementById("result1017").innerText = messageText1017 + result1017;
            document.getElementsByName('result1017')[0].value = result1017;
            check = true;
         }
       }
    }
    else
    {
        if((year>0 && year<100) || (year<0 && year>-100))
        {
            if(year>0)
            {
                century=1;
                result1017 = ' не високосный. '+'Век: '+century;
                document.getElementById("result1017").innerText = messageText1017 + result1017;
                document.getElementsByName('result1017')[0].value = result1017;
                check = true;
            }
            else
            {
                century=-1;
                result1017 = ' не високосный. '+'Век: '+century;
                document.getElementById("result1017").innerText = messageText1017 + result1017;
                document.getElementsByName('result1017')[0].value = result1017;
                check = true;
            }
       }
    else if((year>=100) || (year<=-100))
        {
         if(year>0 && Math.abs(year)%100 != 0)
         {
             century=year/100+1;
             century=Math.trunc(century);
             result1017 = ' не високосный. '+'Век: '+century;
                document.getElementById("result1017").innerText = messageText1017 + result1017;
                document.getElementsByName('result1017')[0].value = result1017;
                check = true;
         }
         else if(Math.abs(year)%100==0)
        {
            century=year/100;
            result1017 = ' не високосный. '+'Век: '+century;
                document.getElementById("result1017").innerText = messageText1017 + result1017;
                document.getElementsByName('result1017')[0].value = result1017;
                check = true;
        }
         else
         {
             century=year/100-1;
             century=Math.trunc(century);
             result1017 = ' не високосный. '+'Век: '+century;
                document.getElementById("result1017").innerText = messageText1017 + result1017;
                document.getElementsByName('result1017')[0].value = result1017;
                check = true;
         }
        }
    }
  
}
    function send17() 
    {
        if (check) {
            let textCondition1017 = document.getElementsByTagName('p')[32].innerText;
            document.getElementsByName('formulation1017')[0].value = textCondition1017;
            document.getElementsByName('result1017')[0].value = result1017;
            document.getElementById("UserEnter1017").submit();
        } else {
            alert("Есть недостатки. Повторите ввод");
        }
    }

let messageText1017 = document.getElementById("result1017").innerText;

let result1017;

const elementyear = document.getElementById("year");
elementyear.addEventListener('keyup', verify17);


const elementVerify1017 = document.getElementById("verify17");
elementVerify1017.addEventListener('click', verify17);

const elementSend1017 = document.getElementById("send17");
elementSend1017.addEventListener('click', send17);