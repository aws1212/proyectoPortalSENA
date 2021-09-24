class producto_searchphotoClientcurrent{
    constructor(id_reparation,placa)
    {
        this.id_reparation = id_reparation;
        this.placa = placa;
    }
}
class productoIN_searchphotoClientcurrent{
    one_answer(link){
        
            const pNit_current_panel = document.getElementById('boxOne_photoClient');
            const element = document.createElement('div');
            element.innerHTML = `
                <div class="absolute w-full h-full bg-green-600 photo_client">
                    <img src="http://localhost/Web_TC/public/php/image_photoUno/${link}" alt="Sin imagen" class="relative font-semibold text-black tracking-tight font-mono w-full h-full float-left" style="font-size: 1.5vw;">
                </div>                   
            `;
            pNit_current_panel.appendChild(element);
    }
    two_answer(link){
        
        const pNit_current_panel = document.getElementById('boxTwo_photoClient');
        const element = document.createElement('div');
        element.innerHTML = `
            <div class="absolute w-full h-full bg-green-600 photo_client">
                <img src="http://localhost/Web_TC/public/php/image_photoDos/${link}" alt="Sin imagen" class="relative font-semibold text-black tracking-tight font-mono w-full h-full float-left" style="font-size: 1.5vw;">
            </div>                   
        `;
        pNit_current_panel.appendChild(element);
    }   
    three_answer(link){
        
        const pNit_current_panel = document.getElementById('boxThree_photoClient');
        const element = document.createElement('div');
        element.innerHTML = `
            <div class="absolute w-full h-full bg-green-600 photo_client">
                <img src="http://localhost/Web_TC/public/php/image_photoTres/${link}" alt="Sin imagen" class="relative font-semibold text-black tracking-tight font-mono w-full h-full float-left" style="font-size: 1.5vw;">
            </div>                   
        `;
        pNit_current_panel.appendChild(element);
    } 
    four_answer(link){
        
        const pNit_current_panel = document.getElementById('boxFour_photoClient');
        const element = document.createElement('div');
        element.innerHTML = `
            <div class="absolute w-full h-full bg-green-600 photo_client">
                <img src="http://localhost/Web_TC/public/php/image_photoCuatro/${link}" alt="Sin imagen" class="relative font-semibold text-black tracking-tight font-mono w-full h-full float-left" style="font-size: 1.5vw;">
            </div>                   
        `;
        pNit_current_panel.appendChild(element);
    } 
    
}

//Event call image representants//
function call_photos_Client(buttons) {

    if(buttons.value == "Buscar")
    {
        var id_reparation = document.getElementById('txt_photo_for_code').value;
    var placa = document.getElementById('txt_photo_for_plate').value;
    
    var datos = new producto_searchphotoClientcurrent(id_reparation,placa);

    //AJAX PHOTO ONE//
    $.ajax({
        data: datos,//datos que se envian a traves de ajax
        url:   'php/-call_photoOne_repair.php', //archivo que recibe la peticion
        type:  'post', //método de envio
        beforeSend: function () {
        },
        success:  function (response) { //una vez que el archivo recibe el request lo procesa y lo devuelve
           
            var Ress = eval(response);

            if(Ress == "Sin registro")
            {
                const Prod = new productoIN_searchphotoClientcurrent();
                Prod.one_answer(Ress[1]);
            }
            else
            {
                const Prod = new productoIN_searchphotoClientcurrent();
                Prod.one_answer(Ress[1]);
            }
        }
        });
        //AJAX PHOTO TWO//
        $.ajax({
            data: datos,//datos que se envian a traves de ajax
            url:   'php/-call_photoTwo_repair.php', //archivo que recibe la peticion
            type:  'post', //método de envio
            beforeSend: function () {
            },
            success:  function (response) { //una vez que el archivo recibe el request lo procesa y lo devuelve
               
                var Ress = eval(response);
    
                if(Ress == "Sin registro")
                {
                    const Prod = new productoIN_searchphotoClientcurrent();
                    Prod.two_answer(Ress[1]);
                }
                else
                {
                    const Prod = new productoIN_searchphotoClientcurrent();
                    Prod.two_answer(Ress[1]);
                }
            }
            });
            //AJAX PHOTO THREE//
            $.ajax({
                data: datos,//datos que se envian a traves de ajax
                url:   'php/-call_photoThree_repair.php', //archivo que recibe la peticion
                type:  'post', //método de envio
                beforeSend: function () {
                },
                success:  function (response) { //una vez que el archivo recibe el request lo procesa y lo devuelve
                   
                    var Ress = eval(response);
        
                    if(Ress == "Sin registro")
                    {
                        const Prod = new productoIN_searchphotoClientcurrent();
                        Prod.three_answer(Ress[1]);
                    }
                    else
                    {
                        const Prod = new productoIN_searchphotoClientcurrent();
                        Prod.three_answer(Ress[1]);
                    }
                }
                });
        //AJAX PHOTO FOUR//
        $.ajax({
            data: datos,//datos que se envian a traves de ajax
            url:   'php/-call_photoFour_repair.php', //archivo que recibe la peticion
            type:  'post', //método de envio
            beforeSend: function () {
            },
            success:  function (response) { //una vez que el archivo recibe el request lo procesa y lo devuelve
               
                var Ress = eval(response);
    
                if(Ress == "Sin registro")
                {
                    const Prod = new productoIN_searchphotoClientcurrent();
                    Prod.four_answer(Ress[1]);
                }
                else
                {
                    const Prod = new productoIN_searchphotoClientcurrent();
                    Prod.four_answer(Ress[1]);
                }
            }
            });

            document.getElementById('btn_search_for_plate').value = "Limpiar";
    }
    else if (buttons.value == "Limpiar")
    {
        document.getElementById("txt_photo_for_code").value = "";
        document.getElementById("txt_photo_for_plate").value = "";
        $('.photo_client').remove();
        document.getElementById('btn_search_for_plate').value = "Buscar";
    }

    

}