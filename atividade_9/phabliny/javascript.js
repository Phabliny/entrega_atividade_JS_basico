horas = 0
        minutos = 0
        segundos = 0
        milissegundos = 0

        let cronometro;

        function iniciar() {
            cronometro = setInterval(() => { timer(); }, 10)
        }

        function pausar() {
            clearInterval(cronometro)
        }

        function resetar() {
            clearInterval(cronometro)
            horas = 0
            minutos = 0
            segundos = 0
            milissegundos = 0

            document.getElementById('cronometro').innerText = '00:00:00:000'
        }

        function timer() {
            if((milissegundos += 10) == 1000){
                segundos++
                milissegundos = 0
            }

            if (segundos == 59) {    
                segundos = 0 
                minutos++ 
            }

            if (minutos == 59) { 
                minutos = 0
                horas++
            }
                
            formatar_cronometro = (horas < 10 ? '0' + horas: horas) + ':' + (minutos < 10 ? '0' + minutos : minutos) + ':' + (segundos < 10 ? '0' + segundos : segundos) +  ':' + (milissegundos < 10 ? '00' + milissegundos : milissegundos < 100 ? '0' + milissegundos : milissegundos)
            
            document.getElementById('cronometro').innerText = formatar_cronometro;

            return formatar_cronometro
        }