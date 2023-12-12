
/*cronometro*/


    let tiempoRef = Date.now()
    let iniciarCronometro = false
    let acumulado = 0

    setInterval(()=> {
        let cronometro = document.getElementById("cronometro")
        if(iniciarCronometro){   
            acumulado = Date.now - tiempoRef
        }
        cronometro.innerHTML = acumulado

    }, 1000/60);  
    
    function formatearMS(tiempo_ms){
        let MS = tiempo_ms % 1000
        let S = Math.floor(((tiempo_ms-MS) / 1000) % 60)
        let M = Math.floor((S/60) % 60)
        let H = Math.floor((M/60))

        Number.prototype.ceros = function(n){
            return (this+"").padStart(n,0)
        }

        return H.ceros(2)+":"+ M.ceros(2)+":"+H.ceros(2)

    }

