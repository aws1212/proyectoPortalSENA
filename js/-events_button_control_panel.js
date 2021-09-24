class producto_deleteRepair{
    constructor(id_reparation,placa){
        
        this.id_reparation = id_reparation;
        this.placa = placa;
    }
}

var plate_current;
var id_repair;

//Scripts evento nomina//
$(document).ready(function () {
    $("input[id=btn_nomina_control_panel]").click(function () {
        if(document.getElementById("btn_nomina_control_panel").value == "Nomina")
        {
            document.getElementById("nomina_box").style.display = "block";
            document.getElementById("meet_box").style.display = "none";
            document.getElementById("photograpy_box").style.display = "none";
            document.getElementById("control_box").style.display = "none";
        }
        else if (document.getElementById("btn_nomina_control_panel").value == "Finalizar")
        {
            const id_repair = document.getElementById('btn_id_repair').value;
            const placa = document.getElementById('btn_placa_repair').value;

            const datos = new producto_deleteRepair(id_repair,placa);
            
            $.ajax({
                data:  datos, //datos que se envian a traves de ajax
                url:   'php/-event_finish_repair.php', //archivo que recibe la peticion
                type:  'post', //método de envio
                beforeSend: function () {
                },
                success:  function (response) { //una vez que el archivo recibe el request lo procesa y lo devuelve
                
                    var Ress = eval(response);

                    if(Ress == "Exito")
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
                                        var countX_part = 25;
                                        var countY_part = 78;
                                        var countX_pricepart = 90;
                                        var countY_pricepart = 78;
                                        var countX_repair = 110;
                                        var countY_repair = 78;
                                        var countX_pricerepair = 175;
                                        var countY_pricerepair = 78;
                                        var sum_part = 0;
                                        var sum_repair = 0;

                                        var name = Ress[0];
                                        var phone = Ress[3];
                                        var address = Ress[4];
                                        var attention = Ress[5];

                                           var image_Logo = 'data:image/jpeg;base64,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'
                                            var doc = new jsPDF('p','mm',[216,280]);

                                                doc.setFontSize(10);
                                                doc.setFont('sans-seri');
                                                doc.addImage(image_Logo,'JPEG',25,15,30,25);
                                                doc.text(60,18,name);
                                                doc.text(60,22.5,address);
                                                doc.text(60,27.5,phone);
                                                doc.text(60,32.5,attention);

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

                                                        doc.text(95,40,'FACTURA DE REPARACIÓN #'+id_rep);
                                                        doc.text(25,47,'Cliente');
                                                        doc.text(25,52,'Identificación');
                                                        doc.text(60,52,'Nombre');
                                                        doc.text(25,57,id);
                                                        doc.text(60,57,name);
                                                        doc.text(120,47,'Vehiculo');
                                                        doc.text(120,52,'Placa');
                                                        doc.text(150,52,'Servicio');
                                                        doc.text(120,57,plate);
                                                        doc.text(150,57,service);

                                                        doc.text(85,64,'INFORMACIÓN DE LA REPARACIÓN');

                                                        doc.text(25,71,'Repuesto');
                                                        doc.text(90,71,'Precio');

                                                        //AJAX PART//
                                                        $.ajax({
                                                            // En data puedes utilizar un objeto JSON, un array o un query string
                                                            data: {"id_reparation" : id_repair, "placa" : placa},
                                                            //Cambiar a type: POST si necesario
                                                            type: "POST",
                                                            // Formato de datos que se espera en la respuesta
                                                            dataType: "json",
                                                            // URL a la que se enviará la solicitud Ajax
                                                            url: "php/-select_current_part.php",
                                                        })
                                                        .done(function (response) {

                                                                    for(var i = 0; i < response.length; i++)
                                                                    {                 
                                                                        var nam_part = response[i]['nombre'];  
                                                                        var price_part = response[i]['precio'];

                                                                        doc.text(countX_part,countY_part,nam_part);
                                                                        doc.text(countX_pricepart,countY_pricepart,'$'+price_part);
                                                                        sum_part = parseInt(sum_part) + parseInt(price_part); 

                                                                        countY_part = countY_part + 5;
                                                                        countY_pricepart = countY_pricepart + 5;
                                                                    }
                                                                    
                                                                    doc.text(110,71,'Reparación');
                                                                    doc.text(175,71,'Valor');

                                                                    //AJAX REPAIR//
                                                                    $.ajax({
                                                                    // En data puedes utilizar un objeto JSON, un array o un query string
                                                                    data: {"id_reparation" : id_repair, "placa" : placa},
                                                                     //Cambiar a type: POST si necesario
                                                                    type: "POST",
                                                                    // Formato de datos que se espera en la respuesta
                                                                    dataType: "json",
                                                                    // URL a la que se enviará la solicitud Ajax
                                                                    url: "php/-select_current_repair.php",
                                                                    })
                                                                    .done(function (response) {
                                                                                                
                                                                        for(var i = 0; i < response.length; i++)
                                                                        {                       
                                                                            var nam_repair = response[i]['reparacion'];  
                                                                            var price_repair = response[i]['valor'];

                                                                            doc.text(countX_repair,countY_repair,nam_repair);
                                                                            doc.text(countX_pricerepair,countY_pricerepair,'$'+price_repair);
                                                                            sum_repair = parseInt(sum_repair) + parseInt(price_repair);

                                                                            countY_repair = countY_repair + 5;
                                                                            countY_pricerepair = countY_pricerepair + 5;                                         
                                                                        }

                                                                        var count_total = 0;
                                                                        var count_firm1 = 0;
                                                                        var count_firm2 = 0;
                                                                        var price_total = 0;

                                                                        if(countY_part > countY_repair)
                                                                        {
                                                                            count_total = countY_part + 7;
                                                                           
                                                                        }
                                                                        if (countY_repair > countY_part)
                                                                        {
                                                                           count_total = countY_repair + 7;
                                                                        }
                                                                        if (countY_repair = countY_part)
                                                                        {
                                                                           count_total = countY_repair + 7;
                                                                        }
                                                                        if (countY_repair == 0 && countY_part == 0)
                                                                        {
                                                                            count_total = 78;
                                                                            count_firm1 = 78;
                                                                            count_firm2 = 78;
                                                                        }

                                                                        doc.text(25,count_total,'Total repuestos');
                                                                        doc.text(90,count_total,'$'+sum_part);
                                                                        doc.text(110,count_total,'Total mano de obra');
                                                                        doc.text(175,count_total,'$'+sum_repair);

                                                                        price_total = parseInt(sum_part) + parseInt(sum_repair);
                                                                        count_firm1 = count_total + 7;
                                                                        count_firm2 = count_firm1 + 5;

                                                                        doc.text(25,count_firm1,'Total a pagar');
                                                                        doc.text(25,count_firm2,'$'+price_total);
                                                                    
                                                                        doc.text(110,count_firm1,'Firma del asesor');
                                                                        doc.text(150,count_firm1,'_____________________');
                                                                    
                                                                        doc.text(110,count_firm2,'Firma del cliente');
                                                                        doc.text(150,count_firm2,'_____________________');
                                                                    
                                                                        doc.save('FacturadeReparacion'+id_rep+'.pdf'); 
                                                                        
                                                                    })
                                                        })

                                                    }
                                                }
                                            });
                                                
                                    }
                                }
                            });
                        
                        document.getElementById("box_actual_repair").style.display = "none";
                        document.getElementById("box_citas_pendientes").style.display = "block";
                        document.getElementById("btn_nomina_control_panel").value = "Nomina";
                        document.getElementById("btn_repair_box").style.display = "block";
                        document.getElementById("data_repair_box").style.display = "none";
                        document.getElementById("box_setting_data_garage").style.display = "none";
                        document.getElementById("lbls_control_panel").style.display = "block";
            
                        document.getElementById("btn_id_repair").value = "";
                        document.getElementById("btn_placa_repair").value = "";
                        document.getElementById("btn_nomina_control_panel").value = "Nomina";
                        searchrepaircurrent();
                    }
                    else
                    {
                        alert("Error al eliminar, intente nuevamente");
                    }
                }
            });
        }
        else if (document.getElementById("btn_nomina_control_panel").value == "Actualizar")    
        {
            updateGarage();
        }    
        else if (document.getElementById("btn_nomina_control_panel").value == "Buscar")    
        {
            see_before_Repair();
        }
        else if (document.getElementById("btn_nomina_control_panel").value == "Limpiar")    
        {
            delete_before_Repair();
        }
    });
});

//Scripts evento setting//
$(document).ready(function () {
    $("input[id=btn_setting_control_panel]").click(function () {
        if(document.getElementById("btn_setting_control_panel").value == "Ajustes")
        {
            document.getElementById("box_citas_pendientes").style.display = "none";
            document.getElementById("box_actual_repair").style.display = "none";
            document.getElementById("box_setting_data_garage").style.display = "block";
            document.getElementById("lbls_control_panel").style.display = "none";
            document.getElementById("btn_setting_control_panel").value = "Facturas";
            
            document.getElementById("btn_exit_control_panel").value = "Volver";

            document.getElementById("btn_nomina_control_panel").value = "Actualizar";
        }
        else if(document.getElementById("btn_setting_control_panel").value == "Facturas")
        {
            document.getElementById("box_citas_pendientes").style.display = "none";
            document.getElementById("box_actual_repair").style.display = "none";
            document.getElementById("box_setting_data_garage").style.display = "none";
            document.getElementById("lbls_control_panel").style.display = "none";
            document.getElementById("box_see_before_Repair").style.display = "block";
            document.getElementById("box_offer_data_garage").style.display = "block";
            document.getElementById("btn_setting_control_panel").value = "";

            document.getElementById("btn_nomina_control_panel").value = "Buscar";
        }
    });
});


//Scripts evento setting_meet//
function settign_Meet(button)
{    
    plate_current = button.name; 
    id_repair = button.id;

    document.getElementById("box_actual_repair").style.display = "block";
    document.getElementById("box_citas_pendientes").style.display = "none";
    document.getElementById("btn_repair_box").style.display = "none";
    document.getElementById("data_repair_box").style.display = "block";
    document.getElementById("btn_nomina_control_panel").value = "Finalizar";
    document.getElementById("lbls_control_panel").style.display = "none";
    
    document.getElementById("btn_exit_control_panel").value = "Volver";

    document.getElementById("btn_id_repair").value = id_repair;
    document.getElementById("btn_placa_repair").value = plate_current;
}

//REPAIR CURRENT SETTING EVENTS BUTTON/////////////////////////////////////////////////////////////

//Scripts evento see part//
$(document).ready(function () {
    $("input[id=btn_see_repuesto]").click(function () {
            document.getElementById("current_part_box").style.display = "block";
            document.getElementById("insert_part_box").style.display = "none";
            searchcurrent_part();
    });
});
//Scripts evento return part//
$(document).ready(function () {
    $("input[id=btn_return_new_part]").click(function () {
            document.getElementById("current_part_box").style.display = "none";
            document.getElementById("insert_part_box").style.display = "block";
    });
});
//Scripts evento return repair//
$(document).ready(function () {    
    searchcurrent_mechanic();
    $("input[id=btn_see_repair]").click(function () {
            document.getElementById("current_repair_box").style.display = "block";
            document.getElementById("insert_repair_box").style.display = "none";
            searchcurrent_repair();
    });
});
//Scripts evento return repair//
$(document).ready(function () {
    $("input[id=btn_return_new_repair]").click(function () {
            document.getElementById("current_repair_box").style.display = "none";
            document.getElementById("insert_repair_box").style.display = "block";
    });
});
//Scripts evento return repair//
$(document).ready(function () {
    $("input[id=btn_see_photo]").click(function () {
            document.getElementById("current_photo_box").style.display = "block";
            document.getElementById("insert_photo_box").style.display = "none";
            call_photos();
    });
});
//Scripts evento return repair//
$(document).ready(function () {
    $("input[id=btn_return_photo]").click(function () {
            document.getElementById("current_photo_box").style.display = "none";
            document.getElementById("insert_photo_box").style.display = "block";
    });
});

//LIMPIAR CONTROL PANEL//
//FILE LABEL//
$('#lbl_photo').click(function() {
    $("#txt_photo_one").prop('disabled',false);
    $("#txt_photo_two").prop('disabled',false);
    $("#txt_photo_three").prop('disabled',false);
    $("#txt_photo_four").prop('disabled',false);
});
//FILE LABEL//
$('#lbl_repair').click(function() {
    document.getElementById('txt_name_reparation').value = "";
    document.getElementById('txt_price_repair').value = "";
    $('#txt_name_mechanic option:eq(0)').prop('selected',true);
});
//FILE LABEL//
$('#lbl_part').click(function() {
    document.getElementById('txt_name_part').value = "";
    document.getElementById('txt_reference_part').value = "";
    document.getElementById('txt_price_part').value = "";
});
