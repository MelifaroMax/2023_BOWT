const node_for_click = document.getElementById('for_click')
var Language;
Language = 0;
function find_edit(){
if(Language <= 0)
{
    Language++;
    document.getElementById("for_click").innerText = 'рус'
    var gen = document.getElementById("for_click").innerText;
    console.log(for_click)

    document.getElementById("gen").innerText = 'man'
    var gen = document.getElementById("gen").innerText;
    console.log(gen)

    document.getElementById("thirdname").innerText = 'Sergeevich'
    var thirdname = document.getElementById("thirdname").innerText;
    console.log(thirdname)

    document.getElementById("secondname").innerText = 'Shtentsov'
    var secondname = document.getElementById("secondname").innerText;
    console.log(secondname)

    document.getElementById("firstname").innerText = 'Maxim'
    var firstname = document.getElementById("firstname").innerText;
    console.log(firstname)

    document.getElementById("place").innerText = 'THE FEDERAL MIGRATION SERVICE OF RUSSIA\n IN THE CITY OF MOSCOW'
    var place = document.getElementById("place").innerText;
    console.log(place)

    document.getElementById("city").innerText = 'Moscow'
    var city = document.getElementById("city").innerText;
    console.log(city)
}
else if(Language >= 1)
{ 
    Language--;
    document.getElementById("for_click").innerText = 'eng'
    var gen = document.getElementById("for_click").innerText;
    console.log(for_click)

    document.getElementById("gen").innerText = 'Муж'
    var gen = document.getElementById("gen").innerText;
    console.log(gen)

    document.getElementById("thirdname").innerText = 'Сергеевич'
    var thirdname = document.getElementById("thirdname").innerText;
    console.log(thirdname)

    document.getElementById("secondname").innerText = 'Штенцов'
    var secondname = document.getElementById("secondname").innerText;
    console.log(secondname)

    document.getElementById("firstname").innerText = 'Максим'
    var firstname = document.getElementById("firstname").innerText;
    console.log(firstname)

    document.getElementById("place").innerText = 'МВД РОССИИ ПО ГОР. МОСКВЕ\n ПО РАЙОНУ x'
    var place = document.getElementById("place").innerText;
    console.log(place)

    document.getElementById("city").innerText = 'Москва'
    var city = document.getElementById("city").innerText;
    console.log(city)
    
}
}

node_for_click.addEventListener("click",find_edit)

