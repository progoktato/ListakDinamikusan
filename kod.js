// 1) Első feladat, hogy megkeressem azokat a <li> elemeket, amikkel dolgozni fogunk!

//Lehetőségek és korlátok
// A document.getElementsByTagName("li") nem jó megoldás, mivel az oldal összes <li> elemét adná vissza.


// A megfelelő szelektorral megkapjuk a listaelemeket:
let lista_elemek = document.querySelectorAll("main li");


// 2) A megtalált <li> elemekhez hozzá kell rendelni a különféle eseménykezelő függvényeket!

//Valamilyen iterációval végig kell venni az összes listabeli elemet.
//Minden elemnél a kattintás (click) és dupla kattintás (dblclick) eseményekhez hozzárendeljük a kezelő függvényeket. 
for (const listaelem of lista_elemek) {
    
    //A hozzárendelés történhet addEventListener segítségével
    //listaelem.addEventListener("click", Kijelol);
    //listaelem.addEventListener("dblclick", Athelyez);

    //történhet az eseménykezelő tulajdonság értékének beállításával is
    listaelem.onclick = Kijelol;
    listaelem.ondblclick = Athelyez;
}

//iterálás forEach segítségével (nyílfüggvény)
//
/*
lista_elemek.forEach(
    listaelem => {
        listaelem.addEventListener("click", Kijelol);
        listaelem.addEventListener("dblclick", Athelyez);
    }
);
*/

//A paraméter egy PointerEvent objektum, amit minden függvény megkap amit az eseméynkezelő meghív.
//Az objektum számos hasznos információt hordoz az esemény létrejöttével kapcsolatosan
//pld. target - melyik HTML elemmel/elemen történt az esemény

function Kijelol(esemeny) {
    /*
        //Ha az osztálylistában benne van a kijelölést megvalósító osztályszelektor
        if (esemeny.target.classList.contains("sajat-kijeloles")) {
            //eltávolítja a listából
            esemeny.target.classList.remove("sajat-kijeloles");
        }
        else { //felveszi a listába
            esemeny.target.classList.add("sajat-kijeloles");
        }
    */
    //Az előbbi kóddal egyenértékű a következő:
    esemeny.target.classList.toggle("sajat-kijeloles");
    //A toggle segítségével rövidíthető a kód. Ha még nincs a osztálylistában, akkor beleteszi
    //   ha pedig benne volt akkor kiveszi. Van visszatérési értéke true/false, ami hasznos lehet.

    //Internet Explorer miatt vezették be és ugyan használható még az srcElement, 
    //de ma már elavult és a mai böngészőkben inkább a target-t használjuk!
    //    esemeny.srcElement.classList.toggle("sajat-kijeloles");

}


let polc = document.getElementById("polc");
let kosar = document.getElementById("kosar");

function Athelyez(esemeny) {

    let listaelem = esemeny.target;
    //Melyik listában van most?
    if (listaelem.parentElement.id == "polc") {
        //átteszi az új listába (itt most a kosárba) és egyben kiveszi a másik lista gyermek elemei közül (itt most polc)
        kosar.appendChild(listaelem);
    } else {
        polc.appendChild(listaelem);
    }
    //Megjegyzés: Miért nem kell remove? Egy elemnek csak egy szülője lehet! Ha egy új szülő alá helyezzük, akkor egyben el is vesszük az előzőtől.

    //rövidebben
    /*
    let hova_keruljon = esemeny.target.parentElement.id == "polc" ? kosar : polc;
    hova_keruljon.appendChild(esemeny.target);
    */
}