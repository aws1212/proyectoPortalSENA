//Eventos del documento (DOM Event)//
function searchcurrent_mechanic(){    

        $.ajax({
            // En data puedes utilizar un objeto JSON, un array o un query string
            data: {},
            //Cambiar a type: POST si necesario
            type: "POST",
            // Formato de datos que se espera en la respuesta
            dataType: "json",
            // URL a la que se enviará la solicitud Ajax
            url: "php/-select_mechanics.php",
        })
        .done(function (response) {

                    for(var i = 0; i < response.length; i++)
                    {            
                        var x = document.getElementById("txt_name_mechanic");
                        var option = document.createElement("option");
                        option.text = response[i]['nombre'];
                        x.add(option);     
                        
                        var x = document.getElementById("txt_name_mechanic_nomina");
                        var option = document.createElement("option");
                        option.text = response[i]['nombre'];
                        x.add(option);
                    }
        })
        .fail(function(response) {
            alert(response);
            alert("Error de red, por favor, revísela");
       });
                
    }

    


