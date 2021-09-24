class producto_searchphotocurrent{
    constructor(id_reparation,placa)
    {
        this.id_reparation = id_reparation;
        this.placa = placa;
    }
}
class productoIN_searchphotocurrent{
    one_answer(id_photo,link){
        
            const pNit_current_panel = document.getElementById('current_photo_box');
            const element = document.createElement('div');
            element.innerHTML = `
                <div class="absolute w-full h-1/5 bg-green-500 photoOne_current" style="top:0%;">
                    <img src="http://localhost/Web_TC/public/php/image_photoUno/${link}" alt="Sin imagen" class="relative font-semibold text-black tracking-tight font-mono w-4/5 h-full float-left" style="font-size: 1.5vw;">
                    <input id="${id_photo}" name="${link}" onclick="deletephotoOne(this)" class="relative h-full w-1/5 cursor-pointer bg-green-500" type="button" value="❌">
                </div>                   
            `;
            pNit_current_panel.appendChild(element);
    }
    two_answer(id_photo,link){
        
        const pNit_current_panel = document.getElementById('current_photo_box');
        const element = document.createElement('div');
        element.innerHTML = `
            <div class="absolute w-full h-1/5 bg-green-500 photoTwo_current" style="top:20%;">
                <img src="http://localhost/Web_TC/public/php/image_photoDos/${link}" alt="Sin imagen" class="relative font-semibold text-black tracking-tight font-mono w-4/5 h-full float-left" style="font-size: 1.5vw;">
                <input id="${id_photo}" onclick="deletephotoTwo(this)" class="relative h-full w-1/5 cursor-pointer bg-green-500" type="button" value="❌">
            </div>                   
        `;
        pNit_current_panel.appendChild(element);
    }   
    three_answer(id_photo,link){
        
        const pNit_current_panel = document.getElementById('current_photo_box');
        const element = document.createElement('div');
        element.innerHTML = `
            <div class="absolute w-full h-1/5 bg-green-500 photoThree_current" style="top:40%;">
                <img src="http://localhost/Web_TC/public/php/image_photoTres/${link}" alt="Sin imagen" class="relative font-semibold text-black tracking-tight font-mono w-4/5 h-full float-left" style="font-size: 1.5vw;">
                <input id="${id_photo}" onclick="deletephotoThree(this)" class="relative h-full w-1/5 cursor-pointer bg-green-500" type="button" value="❌">
            </div>                   
        `;
        pNit_current_panel.appendChild(element);
    } 
    four_answer(id_photo,link){
        
        const pNit_current_panel = document.getElementById('current_photo_box');
        const element = document.createElement('div');
        element.innerHTML = `
            <div class="absolute w-full h-1/5 bg-green-500 photoFour_current" style="top:60%;">
                <img src="http://localhost/Web_TC/public/php/image_photoCuatro/${link}" alt="Sin imagen" class="relative font-semibold text-black tracking-tight font-mono w-4/5 h-full float-left" style="font-size: 1.5vw;">
                <input id="${id_photo}" onclick="deletephotoFour(this)" class="relative h-full w-1/5 cursor-pointer bg-green-500" type="button" value="❌">
            </div>                   
        `;
        pNit_current_panel.appendChild(element);
    } 
    
}

//Event call image representants//
function call_photos() {


    var id_reparation = document.getElementById('btn_id_repair').value;
    var placa = document.getElementById('btn_placa_repair').value;
    
    var datos = new producto_searchphotocurrent(id_reparation,placa);

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
                const Prod = new productoIN_searchphotocurrent();
                Prod.one_answer(Ress[0],Ress[1]);
            }
            else
            {
                const Prod = new productoIN_searchphotocurrent();
                Prod.one_answer(Ress[0],Ress[1]);
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
                    const Prod = new productoIN_searchphotocurrent();
                    Prod.two_answer(Ress[0],Ress[1]);
                }
                else
                {
                    const Prod = new productoIN_searchphotocurrent();
                    Prod.two_answer(Ress[0],Ress[1]);
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
                        const Prod = new productoIN_searchphotocurrent();
                        Prod.three_answer(Ress[0],Ress[1]);
                    }
                    else
                    {
                        const Prod = new productoIN_searchphotocurrent();
                        Prod.three_answer(Ress[0],Ress[1]);
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
                    const Prod = new productoIN_searchphotocurrent();
                    Prod.four_answer(Ress[0],Ress[1]);
                }
                else
                {
                    const Prod = new productoIN_searchphotocurrent();
                    Prod.four_answer(Ress[0],Ress[1]);
                }
            }
            });

}