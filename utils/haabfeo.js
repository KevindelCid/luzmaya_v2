const diasS = [
    "0","1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19",
    "0","1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19",
    "0","1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19",
    "0","1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19",
    "0","1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19",
    "0","1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19",
    "0","1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19",
    "0","1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19",
    "0","1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19",
    "0","1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19",
    "0","1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19",
    "0","1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19",
    "0","1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19",
    "0","1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19",
    "0","1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19",
    "0","1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19",
    "0","1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19",
    "0","1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19",
    "0","1","2","3","4"
     ];
    
    const glifosSolares = [ 
    "POP","POP","POP","POP","POP","POP","POP","POP","POP","POP","POP","POP","POP","POP","POP","POP","POP","POP","POP","POP",
    "WO","WO","WO","WO","WO","WO","WO","WO","WO","WO","WO","WO","WO","WO","WO","WO","WO","WO","WO","WO",
    "SIP","SIP","SIP","SIP","SIP","SIP","SIP","SIP","SIP","SIP","SIP","SIP","SIP","SIP","SIP","SIP","SIP","SIP","SIP","SIP",
    "SOTZ'","SOTZ'","SOTZ'","SOTZ'","SOTZ'","SOTZ'","SOTZ'","SOTZ'","SOTZ'","SOTZ'","SOTZ'","SOTZ'","SOTZ'","SOTZ'","SOTZ'","SOTZ'","SOTZ'","SOTZ'","SOTZ'","SOTZ'",
    "TZ'EK","TZ'EK","TZ'EK","TZ'EK","TZ'EK","TZ'EK","TZ'EK","TZ'EK","TZ'EK","TZ'EK","TZ'EK","TZ'EK","TZ'EK","TZ'EK","TZ'EK","TZ'EK","TZ'EK","TZ'EK","TZ'EK","TZ'EK",
    "XUL","XUL","XUL","XUL","XUL","XUL","XUL","XUL","XUL","XUL","XUL","XUL","XUL","XUL","XUL","XUL","XUL","XUL","XUL","XUL",
    "YAXK'IN","YAXK'IN","YAXK'IN","YAXK'IN","YAXK'IN","YAXK'IN","YAXK'IN","YAXK'IN","YAXK'IN","YAXK'IN","YAXK'IN","YAXK'IN","YAXK'IN","YAXK'IN","YAXK'IN","YAXK'IN","YAXK'IN","YAXK'IN","YAXK'IN","YAXK'IN",
    "MOL","MOL","MOL","MOL","MOL","MOL","MOL","MOL","MOL","MOL","MOL","MOL","MOL","MOL","MOL","MOL","MOL","MOL","MOL","MOL",
    "CH'EN","CH'EN","CH'EN","CH'EN","CH'EN","CH'EN","CH'EN","CH'EN","CH'EN","CH'EN","CH'EN","CH'EN","CH'EN","CH'EN","CH'EN","CH'EN","CH'EN","CH'EN","CH'EN","CH'EN",
    "YAX","YAX","YAX","YAX","YAX","YAX","YAX","YAX","YAX","YAX","YAX","YAX","YAX","YAX","YAX","YAX","YAX","YAX","YAX","YAX",
    "SAK'","SAK'","SAK'","SAK'","SAK'","SAK'","SAK'","SAK'","SAK'","SAK'","SAK'","SAK'","SAK'","SAK'","SAK'","SAK'","SAK'","SAK'","SAK'","SAK'",
    "SEJ","SEJ","SEJ","SEJ","SEJ","SEJ","SEJ","SEJ","SEJ","SEJ","SEJ","SEJ","SEJ","SEJ","SEJ","SEJ","SEJ","SEJ","SEJ","SEJ",
    "MAK","MAK","MAK","MAK","MAK","MAK","MAK","MAK","MAK","MAK","MAK","MAK","MAK","MAK","MAK","MAK","MAK","MAK","MAK","MAK",
    "KANK'IN","KANK'IN","KANK'IN","KANK'IN","KANK'IN","KANK'IN","KANK'IN","KANK'IN","KANK'IN","KANK'IN","KANK'IN","KANK'IN","KANK'IN","KANK'IN","KANK'IN","KANK'IN","KANK'IN","KANK'IN","KANK'IN","KANK'IN",
    "NWA'N","NWA'N","NWA'N","NWA'N","NWA'N","NWA'N","NWA'N","NWA'N","NWA'N","NWA'N","NWA'N","NWA'N","NWA'N","NWA'N","NWA'N","NWA'N","NWA'N","NWA'N","NWA'N","NWA'N",
    "PAX","PAX","PAX","PAX","PAX","PAX","PAX","PAX","PAX","PAX","PAX","PAX","PAX","PAX","PAX","PAX","PAX","PAX","PAX","PAX",
    "KAYAB'","KAYAB'","KAYAB'","KAYAB'","KAYAB'","KAYAB'","KAYAB'","KAYAB'","KAYAB'","KAYAB'","KAYAB'","KAYAB'","KAYAB'","KAYAB'","KAYAB'","KAYAB'","KAYAB'","KAYAB'","KAYAB'","KAYAB'",
    "KUMK'U'","KUMK'U'","KUMK'U'","KUMK'U'","KUMK'U'","KUMK'U'","KUMK'U'","KUMK'U'","KUMK'U'","KUMK'U'","KUMK'U'","KUMK'U'","KUMK'U'","KUMK'U'","KUMK'U'","KUMK'U'","KUMK'U'","KUMK'U'","KUMK'U'","KUMK'U'",
    "WAYEB'","WAYEB'","WAYEB'","WAYEB'","WAYEB'"
    ];
    // cada mes tiene 20 dias contandose desde el 0 hasta el 19
    // hay 19 meses 18 normales de 20 dias y wayeb que tiene 5 dias
    // un año solar consta de 365 dias 
    // 0 pop es el 20 de febrero de 2020
    // 365*1,000,000 = 365,000,000 de dias...
    // resto 365,000,000 dias a la fecha 20 de febrero de 2020
    // de esta manera obtengo una fecha que es 0 pop de referencia para empezar a contar desde ese dia y obtener el dia año solar
    
    // el dia  13 de noviembre de 920 es 0 pop
    
    
    
    
    restarSolar = function (f2) {
        var aFecha1 = "13/11/920".split('/');
        var aFecha2 = f2.split('/');
        var fFecha1 = Date.UTC(aFecha1[2], aFecha1[1] - 1, aFecha1[0]);
        var fFecha2 = Date.UTC(aFecha2[2], aFecha2[1] - 1, aFecha2[0]);
        var dif = fFecha2 - fFecha1;
        var dias = Math.floor(dif / (1000 * 60 * 60 * 24));
     
    
    
        return dias;
    }
    
    
    
    function calcularAniosSolares(dias){
    
        let n = Math.floor(dias / 365);
        let nn = dias - n * 365;
    
    
        // alert("han pasado "+ n + " años y "+ nn+ " días");
    
        calcularDiaAnioSolar(nn);
    
    }
    
    
    function calcularDiaAnioSolar(dias){
    
        const diaSolar = diasS[dias];
    
    
    
        
       const glifoSolar = glifosSolares[dias];
        // alert("la fecha que seleccionaste es "+ diaSolar+" "+glifoSolar);
    
        let sS = document.querySelector("#nawalSolar")
        sS.innerHTML = diaSolar +" "+glifoSolar;
        document.getElementById("imgsolar").src = baseURL + "/storage/naw/" + glifoSolar + ".png";
        let imgSolar = document.querySelector("#imgsolar")
        imgSolar.removeAttribute("hidden");
        // document.getElementById("mimgSolarm").src = baseURL + "/storage/" + glifoSolar + ".jpg";
    
    
    
    }
    