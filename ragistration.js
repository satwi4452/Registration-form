function submit(){
    let firstname=document.getElementById("row").ariaValueText;
    firstname=Text(firstname);
    console.log(typeof(firstname));
    let lastname=document.getElementById("row").ariaValueText;
    lastname=Text(lastname);
    console.log(typeof(lastname));

    Document.getElementById("submit").innerHTML=Submit;
}
submit()
