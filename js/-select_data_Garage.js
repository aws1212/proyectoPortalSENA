
class productoIN_searchData_garage{
    respuesta_uno(phone,address,date_attention){

        if(phone != "")
        {
            const pNit_current_panel = document.getElementById('box_phone_garage');
            const element = document.createElement('div');
            element.innerHTML = `
                <div class="absolute w-full h-full">
                    <h2 class="relative font-semibold text-black tracking-tight font-mono top-1/4 overflow-clip clsDataGarage">${phone}</h2>
                </div>
                `;
            pNit_current_panel.appendChild(element);
        }
        if(address != "")
        {
            const pNit_current_panel = document.getElementById('box_address_garage');
            const element = document.createElement('div');
            element.innerHTML = `
                <div class="absolute w-full h-full">
                    <h2 class="relative font-semibold text-black tracking-tight font-mono top-1/4 overflow-clip clsDataGarage">${address}</h2>
                </div>
                `;
            pNit_current_panel.appendChild(element);
        }
        if(date_attention != "")
        {
            const pNit_current_panel = document.getElementById('box_attention_garage');
            const element = document.createElement('div');
            element.innerHTML = `
                <div class="absolute w-full h-full">
                    <h2 class="relative font-semibold text-black tracking-tight font-mono top-1/4  overflow-clip clsDataGarage">${date_attention}</h2>
                </div>
                `;
            pNit_current_panel.appendChild(element);
        }
    } 
}
//Eventos del documento (DOM Event)//
$(document).ready(function () {
            
        $.ajax({
            //datos que se envian a traves de ajax
            url:   'php/-select_data_Garage.php', //archivo que recibe la peticion
            type:  'post', //método de envio
            beforeSend: function () {
            },
            success:  function (response) { //una vez que el archivo recibe el request lo procesa y lo devuelve
               
                var Ress = eval(response);
                
                if(Ress == "Sin registro")
                {

                }
                else
                {
                    const Prod = new productoIN_searchData_garage();
                    Prod.respuesta_uno(Ress[3],Ress[4],Ress[5]);
                }
            }
            });

})
