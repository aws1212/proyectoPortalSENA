class producto_deleterepaircurrent{
    constructor(id_repair,id_reparation){

        this.id_repair = id_repair;
        this.id_reparation = id_reparation;
    }
}

class productoIN_searchcurrent_repair{
    one_answer(count,id_repair,id_reparacion,reparacion,mecanico,valor){
               
        const pNit_current_panel = document.getElementById('sub_box_current_repair');
        const element = document.createElement('div');
        element.innerHTML = `
            <div class="absolute w-full h-1/3 subcurrent_repair_box" style="top:${count}%">
                <div class="relative w-4/5 h-full bg-green-500 float-left">
                    <div class="box_one relative w-full h-1/3 float-left bg-yellow-100">
                        <input id="txt_current_name_part" class="relative h-full w-full bg-yellow-100 overflow-clip" type="text"  value="${reparacion}" readonly>
                    </div>   
                    <div class="box_two relative w-full h-1/3 float-left bg-yellow-100">
                        <input id="txt_current_reference_part" class="relative h-full w-full bg-yellow-100 overflow-clip" type="text" value="${mecanico}" readonly>
                    </div> 
                    <div class="box_three relative w-full h-1/3 float-left bg-yellow-100">
                        <input id="txt_current_price_part" class="relative h-full w-full bg-yellow-100 overflow-clip" type="text" value="${valor}" readonly>
                    </div>                                              
                </div>
                <div class="relative h-full w-1/5 bg-green-500 float-left left-4/5">
                    <input id="${id_reparacion}" name="${id_repair}" class="relative h-full w-full cursor-pointer" onclick="delete_currentRepair(this)" type="button" value="❌">
                </div>
            </div>
            `;
        pNit_current_panel.appendChild(element); 

    }
}

//Eventos del documento (DOM Event)//
function searchcurrent_repair(){    

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
            url: "php/-select_current_repair.php",
        })
        .done(function (response) {
            
                // Get the element by their class name
                var cur_columns = document.getElementsByClassName('subcurrent_repair_box');
                // Now remove them
                if(cur_columns.length > 0)
                {
                    $('.subcurrent_repair_box').remove();
                    var count = 0;
                    for(var i = 0; i < response.length; i++)
                    {                       
                        const Prod = new productoIN_searchcurrent_repair();
                        Prod.one_answer(count,response[i]['id_repair'],response[i]['id_reparacion'],response[i]['reparacion'],
                        response[i]['mecanico'],response[i]['valor']);
                        count = count + 33.3;
                    }
                }
                else
                { 
                    var count = 0;
                    for(var i = 0; i < response.length; i++)
                    {                       
                        const Prod = new productoIN_searchcurrent_repair();
                        Prod.one_answer(count,response[i]['id_repair'],response[i]['id_reparacion'],response[i]['reparacion'],
                        response[i]['mecanico'],response[i]['valor']);
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
    function delete_currentRepair(buttonCurrent)
    {
        id_repair = buttonCurrent.name;
        id_reparation = buttonCurrent.id;

        const datos = new producto_deleterepaircurrent(id_repair,id_reparation);
    
        $.ajax({
            data:  datos, //datos que se envian a traves de ajax
            url:   'php/-delete_current_repair.php', //archivo que recibe la peticion
            type:  'post', //método de envio
            beforeSend: function () {
            },
            success:  function (response) { //una vez que el archivo recibe el request lo procesa y lo devuelve
               
                var Ress = eval(response);
    
                if(Ress == "Exito")
                {
                    searchcurrent_repair();
                }
                else if(Ress == "Error")
                {
                    alert("Error de red, por favor, revísela");
                }
            }
            });
    }

    


