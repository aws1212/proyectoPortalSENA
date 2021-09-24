var sum_Pars = 0;
var sum_Repairs = 0;

class producto_beforeRepair{
    constructor(id_reparation,placa){
        
        this.id_reparation = id_reparation;
        this.placa = placa;
    }
}

class productoIN_beforePart{
    one_answer(count,nombre,precio){        
        const pNit_current_panel = document.getElementById('beforeRepair_dataPart');
        const element = document.createElement('div');
        element.innerHTML = `
                <div class="relative w-full h-1/2 bg-green-600 currentbox_Before" style="top:%${count}">
                    <div class="relative w-1/2 h-full bg-green-600 float-left">
                        <h2 class="relative font-semibold text-black tracking-tight font-mono overflow-clip">${nombre}</h2>
                    </div>                                        
                    <div class="relative w-1/2 h-full bg-green-600 float-left">
                        <h2 class="relative font-semibold text-black tracking-tight font-mono overflow-clip">$${precio}</h2>
                    </div>                                        
                </div>
            `;
        pNit_current_panel.appendChild(element); 

    }
}
class productoIN_beforeRepair{
    one_answer(count,nombre,precio){
        
        
        const pNit_current_panel = document.getElementById('beforeRepair_dataRepair');
        const element = document.createElement('div');
        element.innerHTML = `
                <div class="relative w-full h-1/2 bg-green-600 currentbox_Before" style="top:%${count}">
                    <div class="relative w-1/2 h-full bg-green-600 float-left">
                        <h2 class="relative font-semibold text-black tracking-tight font-mono overflow-clip">${nombre}</h2>
                    </div>                                        
                    <div class="relative w-1/2 h-full bg-green-600 float-left">
                        <h2 class="relative font-semibold text-black tracking-tight font-mono overflow-clip">$${precio}</h2>
                    </div>                                        
                </div>
            `;
        pNit_current_panel.appendChild(element); 

    }
}


function see_before_Repair(){

                        var id_reparation = document.getElementById("txt_num_reparation").value;
                        var placa = document.getElementById("txt_placa_reparation").value;

                        if (id_reparation != "" && placa != "")
                        {
                            var datos = new producto_beforeRepair(id_reparation,placa);

                         //AJAX Busqueda//
                         $.ajax({
                            data:  datos, //datos que se envian a traves de ajax
                            url:   'php/-get_status_Meet.php', //archivo que recibe la peticion
                            type:  'post', //método de envio
                            beforeSend: function () {
                            },
                            success:  function (response) { //una vez que el archivo recibe el request lo procesa y lo devuelve
                            
                                    var Ress = eval(response);
            
                                    if(Ress != "Sin registro")
                                    {
                                        if(Ress == "Cancelada")
                                        {
                                            alert("Cita cancelada");
                                            document.getElementById("txt_num_reparation").value = "";
                                            document.getElementById("txt_placa_reparation").value = "";
                                        }
                                        else if(Ress == "Pendiente")
                                        {
                                            alert("Cita pendiente");
                                            document.getElementById("txt_num_reparation").value = "";
                                            document.getElementById("txt_placa_reparation").value = "";
                                        }
                                        else if(Ress == "Finalizada")
                                        {
                                            //AJAX GARAGE//
                                            $.ajax({
                                                data:  datos, //datos que se envian a traves de ajax
                                                url:   'php/-select_data_Garage.php', //archivo que recibe la peticion
                                                type:  'post', //método de envio
                                                beforeSend: function () {
                                                },
                                                success:  function (response) { //una vez que el archivo recibe el request lo procesa y lo devuelve
                                                
                                                        var Ress = eval(response);
                                
                                                        if(Ress != "Sin registro")
                                                        {
                                                            var phone = Ress[3];
                                                            var address = Ress[4];
                                                            var attention = Ress[5];

                                                            const pNit_current_panel = document.getElementById('beforeRepair_dataGarage');
                                                            const element = document.createElement('div');
                                                            element.innerHTML = `
                                                                    <div class="absolute w-full h-1/3 float-left bg-green-600 text-center currentbox_Before">
                                                                        <h2 class="relative font-semibold text-black tracking-tight font-mono overflow-clip">${address}</h2>
                                                                    </div>
                                                                    <div class="absolute w-full h-1/3 top-1/3 float-left bg-green-600 text-center currentbox_Before">
                                                                        <h2 class="relative font-semibold text-black tracking-tight font-mono overflow-clip">${phone}</h2>
                                                                    </div>
                                                                    <div class="absolute w-full h-1/3 top-2/3 float-left bg-green-600 text-center currentbox_Before">
                                                                        <h2 class="relative font-semibold text-black tracking-tight font-mono overflow-clip">${attention}</h2>
                                                                    </div>
                                                                `;
                                                            pNit_current_panel.appendChild(element); 
                    
                                                                //AJAX CLIENT//
                                                                $.ajax({
                                                                data:  datos, //datos que se envian a traves de ajax
                                                                url:   'php/-call_dataClient_offer.php', //archivo que recibe la peticion
                                                                type:  'post', //método de envio
                                                                beforeSend: function () {
                                                                },
                                                                success:  function (response) { //una vez que el archivo recibe el request lo procesa y lo devuelve
                    
                    
                                                                        var Ress = eval(response);
                                                
                                                                        if(Ress != "Sin registro")
                                                                        {
                                                                            var id_rep = Ress[0];
                                                                            var id = Ress[1];
                                                                            var name = Ress[2];
                                                                            var plate = Ress[3];
                                                                            var service = Ress[4];
                    
                                                                            const pNit_current_panel = document.getElementById('beforeRepair_idRepair');
                                                                            const element = document.createElement('div');
                                                                            element.innerHTML = `
                                                                                    <div class="absolute w-full h-1/2 top-1/2 float-left bg-green-600 text-center currentbox_Before">
                                                                                        <h2 class="relative font-semibold text-black tracking-tight font-mono overflow-clip">DE REPARACIÓN #${id_rep}</h2>
                                                                                    </div>
                                                                                `;
                                                                            pNit_current_panel.appendChild(element);

                                                                            const pNit_current_panel2 = document.getElementById('beforeRepair_dataClient');
                                                                            const element2 = document.createElement('div');
                                                                            element2.innerHTML = `
                                                                                    <div class="absolute w-1/4 h-full bg-green-600 float-left currentbox_Before">
                                                                                        <h2 class="relative font-semibold text-black tracking-tight font-mono overflow-clip">${id}</h2>
                                                                                    </div>
                                                                                    <div class="absolute w-1/4 left-1/4 h-full bg-green-600 float-left currentbox_Before">
                                                                                        <h2 class="relative font-semibold text-black tracking-tight font-mono overflow-clip">${name}</h2>
                                                                                    </div>
                                                                                    <div class="absolute w-1/4 left-2/4 h-full bg-green-600 float-left currentbox_Before">
                                                                                        <h2 class="relative font-semibold text-black tracking-tight font-mono overflow-clip">${plate}</h2>
                                                                                    </div>
                                                                                    <div class="absolute w-1/4 left-3/4 h-full bg-green-600 float-left currentbox_Before">
                                                                                        <h2 class="relative font-semibold text-black tracking-tight font-mono overflow-clip">${service}</h2>
                                                                                    </div>
                                                                                `;
                                                                            pNit_current_panel2.appendChild(element2);
                                                                            
                                                                            
                                                                            //AJAX PART//
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
                                                                                    var count = 0;
                                                                                    for(var i = 0; i < response.length; i++)
                                                                                    {  
                                                                                        count = count + 33.3;
                                                                                        var current_price_part = response[i]['precio'];
                                                                                        const Prod = new productoIN_beforePart();
                                                                                        Prod.one_answer(count,response[i]['nombre'],response[i]['precio']);                                                                                        
                                                                                        sum_Repairs = parseInt(sum_Repairs) + parseInt(current_price_part);
                                                                                    }    
                                                                                    
                                                                                    const pNit_current_panel3 = document.getElementById('box_total_Part');
                                                                                    const element3 = document.createElement('div');
                                                                                    element3.innerHTML = `
                                                                                            <div class="absolute h-full w-full currentbox_Before">
                                                                                                <div class="absolute w-1/2 left-1/2 h-full bg-green-600">
                                                                                                <h2 class="relative font-semibold text-black tracking-tight font-mono overflow-clip">$${sum_Repairs}</h2>
                                                                                                </div> 
                                                                                            </div>
                                                                                        `;
                                                                                    pNit_current_panel3.appendChild(element3);
                                                                                        
                                                                            })
                                                                            //AJAX REPAIR//
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
                                                                                            
                                                                                    var count = 0;
                                                                                    for(var i = 0; i < response.length; i++)
                                                                                    {     
                                                                                        count = count + 33.3;
                                                                                        var current_price_repair = response[i]['valor'];
                                                                                        const Prod = new productoIN_beforeRepair();
                                                                                        Prod.one_answer(count,response[i]['reparacion'],response[i]['valor']);
                                                                                        sum_Pars = parseInt(sum_Pars) + parseInt(current_price_repair);

                                                                                        priceTotal = parseInt(sum_Pars) + parseInt(sum_Repairs);
                                                                                    }

                                                                                    const pNit_current_panel4 = document.getElementById('box_total_Repair');
                                                                                    const element4 = document.createElement('div');
                                                                                    element4.innerHTML = `
                                                                                            <div class="absolute h-full w-full currentbox_Before">
                                                                                                <div class="absolute w-1/2 left-1/2 h-full bg-green-600">
                                                                                                <h2 class="relative font-semibold text-black tracking-tight font-mono overflow-clip">$${sum_Pars}</h2>
                                                                                                </div> 
                                                                                            </div>
                                                                                        `;
                                                                                    pNit_current_panel4.appendChild(element4);
                                                                                    

                                                                                    const pNit_current_panel5 = document.getElementById('beforeRepair_priceTotal');
                                                                                    const element5 = document.createElement('div');
                                                                                    element5.innerHTML = `
                                                                                            <div class="absolute h-full w-full currentbox_Before">
                                                                                                <div class="relative w-1/2 h-full bg-green-600 text-center float-left">
                                                                                                    <h2 class="relative font-semibold text-black tracking-tight font-mono overflow-clip">Total a pagar</h2>
                                                                                                </div>
                                                                                                <div class="relative w-1/2 h-full bg-green-600 text-center float-left">
                                                                                                    <h2 class="relative font-semibold text-black tracking-tight font-mono overflow-clip">$${priceTotal}</h2>
                                                                                                </div>
                                                                                            </div>
                                                                                        `;
                                                                                    pNit_current_panel5.appendChild(element5);
                                                                                    
                                                                                })

                                                                                document.getElementById("btn_nomina_control_panel").value = "Limpiar";
                                                                                

                                                                               
                    
                                                                        }
                                                                    }
                                                                });
                                                                    
                                                        }
                                                    }
                                                });
                                        }
                                    }
                                    else
                                    {
                                        alert("Sin datos de reparación");
                                        document.getElementById("txt_num_reparation").value = "";
                                        document.getElementById("txt_placa_reparation").value = "";
                                    }
                                }
                            })
                        }
                        else
                        {
                            alert("Complete los campos de busqueda");
                        }
                        

                            
}


function delete_before_Repair()
{

    var currentbox_Before = document.getElementsByClassName('currentbox_Before');
    document.getElementById("txt_num_reparation").value = "";
    document.getElementById("txt_placa_reparation").value = "";
    if(currentbox_Before.length > 0)
    {
        $('.currentbox_Before').remove();
    }
    document.getElementById("btn_nomina_control_panel").value = "Buscar";
}