class productoIN_seeMisVis_garage{
    respuesta_uno(mision,vision){

        const pNit_current_panelm = document.getElementById('box_mision_Garage');
        const elementm = document.createElement('p');
        elementm.innerHTML = `
                <p class="relative text-black tracking-tight font-mono top-0 clsMisionParagraph">
                ${mision}
                </p>
            `;
            pNit_current_panelm.appendChild(elementm);       
        
        const pNit_current_panelv = document.getElementById('box_vision_Garage');
        const elementv = document.createElement('p');
        elementv.innerHTML = `
                <p class="relative text-black tracking-tight font-mono top-0 clsVisionParagraph">
                ${vision}
                </p>
            `;
        pNit_current_panelv.appendChild(elementv); 
    }
}

//Scripts evento exit Cita//
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
                const Prod = new productoIN_seeMisVis_garage();
                Prod.respuesta_uno(Ress[1],Ress[2]);
            }
        }
        });

});