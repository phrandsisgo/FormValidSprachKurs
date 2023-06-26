function formSubmitFunc(){
    alert("Formular wurde abgeschickt");
    
    let name = document.getElementById("name").value;
    let vorname = document.getElementById("vorname").value;
    let email = document.getElementById("email").value;
    let handynummer = document.getElementById("handynummer").value;
    let geburtsdatum = document.getElementById("geburtsdatum").value;
    let nameKurs = document.getElementById("NameKurs").value;
    let kursort = document.getElementById("kursort").value;
    let schwierigkeitsgrad = document.getElementById("schwierigkeitsgrad").value;

    sessionStorage.setItem("name", name);
    sessionStorage.setItem("vorname", vorname);
    sessionStorage.setItem("email", email);
    sessionStorage.setItem("handynummer", handynummer);
    sessionStorage.setItem("geburtsdatum", geburtsdatum);
    sessionStorage.setItem("nameKurs", nameKurs);
    sessionStorage.setItem("kursort", kursort);
    sessionStorage.setItem("schwierigkeitsgrad", schwierigkeitsgrad);
}