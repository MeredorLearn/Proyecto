const API_URL = "https://www.dolarsi.com/api/api.php?type=valoresprincipales";

const xhr =  new XMLHttpRequest();

function onRequestHandler(){
    if (this.readyState ==4 && this.status ==200){

        // console.log(this.response);
        const data = JSON.parse(this.response);
        var valorDolar = document.getElementById("valorDolar");
        valorDolar.textContent = data[1]["casa"]["compra"];
        for (var key in data) {
            if (data[key]["casa"]["nombre"]=="Dolar Blue"){
                valorDolar.textContent = data[1]["casa"]["venta"];
                break;
            }
        }

    }
}

xhr.addEventListener("load", onRequestHandler);
xhr.open('GET', `${API_URL}`);
xhr.send();
