class producto_searchrepaircurrent{
    constructor(dia,mes){

        this.dia = dia;
        this.mes = mes;
    }
}

class productoIN_searchrepaircurrent{
    one_answer(count,id_reparacion,nombre,placa,motivo,telefono,hora){
               
        const pNit_current_panel = document.getElementById('box_citas_pendientes');
        const element = document.createElement('div');
        element.innerHTML = `
            <div class="absolute h-1/3 w-full bg-yellow-300 box_current_repair" style="top:${count}%;">
                <div class="relative w-4/5 h-full float-left bg-green-100">
                    <div class="p-2 relative w-1/6 h-full float-left bg-green-700">
                        <h2 class="relative font-semibold text-black tracking-tight font-mono overflow-clip clsCurrentControlPanel">${id_reparacion}</h2>
                    </div>
                    <div class="p-2 relative w-1/6 h-full float-left bg-green-700">
                        <h2 class="relative font-semibold text-black tracking-tight font-mono overflow-clip clsCurrentControlPanel">${placa}</h2>
                    </div>
                    <div class="p-2 relative w-1/6 h-full float-left bg-green-700">
                        <h2 class="relative font-semibold text-black tracking-tight font-mono overflow-clip clsCurrentControlPanel">${nombre}</h2>
                    </div>
                    <div class="p-2 relative w-1/6 h-full float-left bg-green-700">
                        <h2 class="relative font-semibold text-black tracking-tight font-mono overflow-clip clsCurrentControlPanel">${telefono}</h2>
                    </div>
                    <div class="p-2 relative w-1/6 h-full float-left bg-green-700">
                        <h2 class="relative font-semibold text-black tracking-tight font-mono overflow-clip clsCurrentControlPanel">${motivo}</h2>
                    </div>
                    <div class="p-2 relative w-1/6 h-full float-left bg-green-700">
                        <h2 class="relative font-semibold text-black tracking-tight font-mono overflow-clip clsCurrentControlPanel">${hora}</h2>
                    </div>
                </div>
                <div class="relative w-1/5 h-full float-left bg-green-700">
                    <div class="relative w-1/2 h-full float-left bg-green-700">
                        <input class="relative h-full w-full bg-green-700 cursor-pointer overflow-clip clsCurrentControlPanel" id="${id_reparacion}" onclick="delete_Meet(this)" type="button" value="❌">
                    </div>
                    <div class="relative w-1/2 h-full float-left bg-green-700">
                        <input class="relative h-full w-full bg-green-700 cursor-pointer overflow-clip clsCurrentControlPanel" name="${placa}" id="${id_reparacion}" onclick="settign_Meet(this)" type="button" value="⚙️">
                    </div>
                </div>
            </div>
            `;
        pNit_current_panel.appendChild(element); 
    }
}
//Eventos del documento (DOM Event)//

function searchrepaircurrent(){    

        $.ajax({ 
            url:   'php/-select_control_panel.php', //archivo que recibe la peticion
            type:  'post', //método de envio
            data: {
                
            },
            dataType: 'json',
            success:  function (response) { //una vez que el archivo recibe el request lo procesa y lo devuelve

                // Get the element by their class name
                var cur_columns = document.getElementsByClassName('box_current_repair');
                // Now remove them
                if(cur_columns.length > 0)
                {
                    $('.box_current_repair').remove();
                    var count = 0;
                    for(var i = 0; i < response.length; i++)
                    {                       
                        const Prod = new productoIN_searchrepaircurrent();
                        Prod.one_answer(count,response[i]['id_reparacion'],response[i]['nombre'],response[i]['placa'],
                        response[i]['servicio'],response[i]['telefono'],response[i]['hora']);
                        count = count + 33.3;
                    }
                }
                else
                { 
                    var count = 0;
                    for(var i = 0; i < response.length; i++)
                    {                       
                        const Prod = new productoIN_searchrepaircurrent();
                        Prod.one_answer(count,response[i]['id_reparacion'],response[i]['nombre'],response[i]['placa'],
                        response[i]['servicio'],response[i]['telefono'],response[i]['hora']);
                        count = count + 33.3;
                    }
                }
                
            }
            });
    }


