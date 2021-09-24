class producto_deletepartcurrent{
    constructor(id_part,id_repair){

        this.id_part = id_part;
        this.id_repair = id_repair;
    }
}

class productoIN_searchcurrent_part{
    one_answer(count,id_part,id_reparacion,nombre,referencia,precio){
               
        const pNit_current_panel = document.getElementById('sub_box_current_part');
        const element = document.createElement('div');
        element.innerHTML = `
            <div class="absolute w-full h-1/3 subcurrent_part_box" style="top:${count}%">
                <div class="relative w-4/5 h-full bg-green-500 float-left">
                    <div class="box_one relative w-full h-1/3 float-left bg-yellow-100">
                        <input id="txt_current_name_part" class="relative h-full w-full bg-yellow-100 overflow-clip" type="text"  value="${nombre}" readonly>
                    </div>   
                    <div class="box_two relative w-full h-1/3 float-left bg-yellow-100">
                        <input id="txt_current_reference_part" class="relative h-full w-full bg-yellow-100 overflow-clip" type="text" value="${referencia}" readonly>
                    </div> 
                    <div class="box_three relative w-full h-1/3 float-left bg-yellow-100">
                        <input id="txt_current_price_part" class="relative h-full w-full bg-yellow-100 overflow-clip" type="text" value="${precio}" readonly>
                    </div>                                              
                </div>
                <div class="relative h-full w-1/5 bg-green-500 float-left left-4/5">
                    <input id="${id_reparacion}" name="${id_part}" class="relative h-full w-full cursor-pointer overflow-clip" onclick="delete_currentPart(this)" type="button" value="❌">
                </div>
            </div>
            `;
        pNit_current_panel.appendChild(element); 

    }
}

//Eventos del documento (DOM Event)//
function searchcurrent_part(){    

        var id_reparation = document.getElementById('btn_id_repair').value;
        var placa = document.getElementById('btn_placa_repair').value;
        
        $.ajax({
            // En data puedes utilizar un objeto JSON, un array o un query string
            data: {"id_reparation" : id_reparation, "placa" : placa},
            //Cambiar a type: POST si necesario
            type: "POST",
            // Formato de datos que se espera en la respuesta
            dataType: "json",
            // URL a la que se enviará la solicitud Ajax
            url: "php/-select_current_part.php",
        })
        .done(function (response) {
            
                // Get the element by their class name
                var cur_columns = document.getElementsByClassName('subcurrent_part_box');
                // Now remove them
                if(cur_columns.length > 0)
                {
                    $('.subcurrent_part_box').remove();
                    var count = 0;
                    for(var i = 0; i < response.length; i++)
                    {                       
                        const Prod = new productoIN_searchcurrent_part();
                        Prod.one_answer(count,response[i]['id_part'],response[i]['id_reparacion'],response[i]['nombre'],
                        response[i]['referencia'],response[i]['precio']);
                        count = count + 33.3;
                    }
                }
                else
                { 
                    var count = 0;
                    for(var i = 0; i < response.length; i++)
                    {                       
                        const Prod = new productoIN_searchcurrent_part();
                        Prod.one_answer(count,response[i]['id_part'],response[i]['id_reparacion'],response[i]['nombre'],
                        response[i]['referencia'],response[i]['precio']);
                        count = count + 33.3;
                    }
                }
        })
        .fail(function(response) {
            alert(response);
            alert("Error de red, por favor, revísela");
       });
                
    }

    //EVENT DELECT CURRENT PART//
    function delete_currentPart(buttonCurrent)
    {
        id_part = buttonCurrent.name;
        id_repair = buttonCurrent.id;

        const datos = new producto_deletepartcurrent(id_part,id_repair);
    
        $.ajax({
            data:  datos, //datos que se envian a traves de ajax
            url:   'php/-delete_current_part.php', //archivo que recibe la peticion
            type:  'post', //método de envio
            beforeSend: function () {
            },
            success:  function (response) { //una vez que el archivo recibe el request lo procesa y lo devuelve
               
                var Ress = eval(response);
    
                if(Ress == "Exito")
                {
                    searchcurrent_part();
                }
                else if(Ress == "Error")
                {
                    alert("Error de red, por favor, revísela");
                }
            }
            });
    }

    


