class productoIN_calculateNomina{
    respuesta_uno(valorMO){
        const porcent = document.getElementById("txt_porcent_nomina").value;

        var total_pagar = (valorMO * porcent)/100;

        document.getElementById("txt_calcule_nomina").value = "$"+total_pagar; 

        setTimeout(function(){
            document.getElementById('txt_calcule_nomina').value = "";
            document.getElementById('txt_porcent_nomina').value = "";
            $('#txt_name_mechanic_nomina option:eq(0)').prop('selected',true);
            $('#txt_month_nomina option:eq(0)').prop('selected',true);
        },10000);
        
    }  
}
//Eventos del documento (DOM Event)//

function calculate_Nomina(){
        
        const name = document.getElementById('txt_name_mechanic_nomina').value;
        const month = document.getElementById('txt_month_nomina').value;
        const porcent = document.getElementById("txt_porcent_nomina").value;
        var valorMOS = 0;
        
        if(porcent != "" && month != "Mes" && name != "Mecánico")
        {
            $.ajax({
                // En data puedes utilizar un objeto JSON, un array o un query string
                data: {"name" : name, "month" : month},
                //Cambiar a type: POST si necesario
                type: "POST",
                // Formato de datos que se espera en la respuesta
                dataType: "json",
                // URL a la que se enviará la solicitud Ajax
                url: "php/-calculate_nomina.php",
            })
            .done(function (response) {
                
                if(response == "Sin registro")
                {
                    alert("Sin trabajos realizados");
                }
                else
                {                    
                    for(var i = 0; i < response.length; i++)
                    {                       
                        var current_valor = response[i]['valor'];
                        valorMOS = parseInt(valorMOS) + parseInt(current_valor);
                    }
                    const Prod = new productoIN_calculateNomina();
                    Prod.respuesta_uno(valorMOS);
                }
            })            
        }
        else
        {
            alert("Elija mecánico, mes y porcentaje de pago");
        }
}
