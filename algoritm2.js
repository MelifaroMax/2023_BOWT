function verify_send2() 
{
    verify2();
    send2();
}
function verify2() 
{
    
    let realnumber = parseInt(elementrealnumber.value);
    if(realnumber<0)
    {
        result1002 = " положительное";
    document.getElementById("result1002").innerText = messageText1002 + result1002;
    document.getElementsByName('result1002')[0].value = result1002;
    check = true;
    }
    else if(realnumber>0)
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
        let textCondition1002 = document.getElementsByTagName('p')[1].innerText;
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
elementweightBox.addEventListener('input', verify2);

const elementVerify1002 = document.getElementById("verify1002");
elementVerify1001.addEventListener('click', verify2);

const elementSend1002 = document.getElementById("send1002");
elementSend1001.addEventListener('click', send2);