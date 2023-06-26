function formSubmitFunc(){
    //alert("Formular wurde abgeschickt");
    
    let name = document.getElementById("name").value;
    let vorname = document.getElementById("vorname").value;
    let email = document.getElementById("email").value;
    let handynummer = document.getElementById("handynummer").value;
    let geburtsdatum = document.getElementById("geburtsdatum").value;
    let nameKurs = document.getElementById("NameKurs").value;
    let kursort = document.getElementById("kursort").value;
    let schwierigkeitsgrad = document.getElementById("schwierigkeitsgrad").value;
    if(name == "" || vorname == "" || email == "" || handynummer == "" || nameKurs == "" || kursort == "" || schwierigkeitsgrad == ""){
        alert("Bitte füllen Sie alle Felder aus!");
        event.preventDefault();
    }else if (name.length <2){
        document.getElementById("nameHelp").innerHTML = "Name muss mindestens 3 Zeichen lang sein!";    
        document.getElementById("nameHelp").style.color = "red";
        event.preventDefault();
    }else if (vorname.length <2){
        document.getElementById("vornameHelp").innerHTML = "Vorname muss mindestens 3 Zeichen lang sein!";
        document.getElementById("vornameHelp").style.color = "red";
        event.preventDefault();
        //should be done with regex that the e-mail has a @ simbol and a .
    }else if (email.length <5 || email.indexOf("@") == -1 || email.indexOf(".") == -1){
        document.getElementById("emailHelp").innerHTML = "E-Mail muss mindestens 5 Zeichen lang sein und einen @ und einen . enthalten!";
        document.getElementById("emailHelp").style.color = "red";
        event.preventDefault();
    }else if (handynummer.length <10){
        document.getElementById("handynummerHelp").innerHTML = "Handynummer muss mindestens 10 Zeichen lang sein!";
        document.getElementById("handynummerHelp").style.color = "red";
        event.preventDefault();
    }else if (geburtsdatum == ""){
        document.getElementById("geburtsdatumHelp").innerHTML = "Bitte geben Sie ein Geburtsdatum ein!";
        document.getElementById("geburtsdatumHelp").style.color = "red";
        event.preventDefault();
    }else{
        //return true;
        sessionStorage.setItem("name", name);
        sessionStorage.setItem("vorname", vorname);
        sessionStorage.setItem("email", email);
        sessionStorage.setItem("handynummer", handynummer);
        sessionStorage.setItem("geburtsdatum", geburtsdatum);
        sessionStorage.setItem("nameKurs", nameKurs);
        sessionStorage.setItem("kursort", kursort);
        sessionStorage.setItem("schwierigkeitsgrad", schwierigkeitsgrad);
    }

    
 
}
function angabenSpawn() {
    let name = sessionStorage.getItem("name");
    let vorname = sessionStorage.getItem("vorname");
    let email = sessionStorage.getItem("email");
    let handynummer = sessionStorage.getItem("handynummer");
    let geburtsdatum = sessionStorage.getItem("geburtsdatum");
    let nameKurs = sessionStorage.getItem("nameKurs");
    let kursort = sessionStorage.getItem("kursort");
    let schwierigkeitsgrad = sessionStorage.getItem("schwierigkeitsgrad");
   // alert("hallo "+ name + " " + vorname );
   
    document.getElementById("nameAngabe").innerHTML = "name= "+name;
    document.getElementById("vornameAngabe").innerHTML = "vorname= "+vorname;
    document.getElementById("emailAngabe").innerHTML = "email= "+email;
    document.getElementById("handynummerAngabe").innerHTML = "handynummer= "+handynummer;
    document.getElementById("geburtsdatumAngabe").innerHTML = "geburtsdatum= "+geburtsdatum;
    document.getElementById("nameKursAngabe").innerHTML = "nameKurs= "+nameKurs;
    document.getElementById("kursortAngabe").innerHTML = "kursort= "+kursort;
    document.getElementById("schwierigkeitsgradAngabe").innerHTML = "schwierigkeitsgrad= "+schwierigkeitsgrad;
}