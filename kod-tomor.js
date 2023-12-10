let polc = document.getElementById("polc");
let kosar = document.getElementById("kosar");

document.querySelectorAll("main li").forEach(
    listaelem => {
        listaelem.onclick = (esemeny) => esemeny.target.classList.toggle("sajat-kijeloles");
        listaelem.ondblclick = (esemeny) => {
            let hova_keruljon = esemeny.target.parentElement.id == "polc" ? kosar : polc;
            hova_keruljon.appendChild(esemeny.target);
        }
    }
);