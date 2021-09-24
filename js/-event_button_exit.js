//Scripts evento exit Cita//
$(document).ready(function () {

    $("input[id=btn_exit_meet]").click(function () {
        document.getElementById("photograpy_box").style.display = "block";
        document.getElementById("meet_box").style.display = "none";
        document.getElementById("control_box").style.display = "none";
        document.getElementById("nomina_box").style.display = "none";

        document.getElementById('txt_identification').value = "";
        document.getElementById('txt_name').value = "";
        document.getElementById('txt_licenceplate').value = "";
        document.getElementById('txt_phone').value = "";
        document.getElementById('txt_email').value = "";
        $('#txt_day option:eq(0)').prop('selected',true);
        $('#txt_mounth option:eq(0)').prop('selected',true);
        $('#txt_year option:eq(0)').prop('selected',true);
        $('#txt_hour option:eq(0)').prop('selected',true);
    });

});

//Scripts evento exit blog//
$(document).ready(function () {

    $("input[id=btn_exit_blog]").click(function () {
        document.getElementById("photograpy_box").style.display = "block";
        document.getElementById("meet_box").style.display = "none";
        document.getElementById("control_box").style.display = "none";
        document.getElementById("nomina_box").style.display = "none";
        document.getElementById("blog_box").style.display = "none";
    });

});



//Scripts evento exit control_panel//
$(document).ready(function () {

    $("input[id=btn_exit_control_panel]").click(function () {
        if(document.getElementById("box_citas_pendientes").style.display == "block")
        {
            document.getElementById("photograpy_box").style.display = "block";
            document.getElementById("meet_box").style.display = "none";
            document.getElementById("control_box").style.display = "none";
            document.getElementById("nomina_box").style.display = "none";
            document.getElementById("btn_nomina_control_panel").value = "Nomina";
            document.getElementById("data_repair_box").style.display = "none";
            document.getElementById("box_setting_data_garage").style.display = "none";            

            document.getElementById("btn_id_repair").value = "";
            document.getElementById("btn_placa_repair").value = "";
        }
        else if(document.getElementById("box_actual_repair").style.display == "block")
        {
            document.getElementById("box_actual_repair").style.display = "none";
            document.getElementById("box_citas_pendientes").style.display = "block";
            document.getElementById("btn_nomina_control_panel").value = "Nomina";
            document.getElementById("btn_repair_box").style.display = "block";
            document.getElementById("data_repair_box").style.display = "none";
            document.getElementById("box_setting_data_garage").style.display = "none";
            document.getElementById("lbls_control_panel").style.display = "block";
            document.getElementById("box_login_Garage").style.display = "block";

            document.getElementById("btn_exit_control_panel").value = "Cerrar sesión";
            
            searchrepaircurrent();

            document.getElementById("btn_id_repair").value = "";
            document.getElementById("btn_placa_repair").value = "";
            $('#txt_name_mechanic option:eq(0)').prop('selected',true);
            $("#txt_photo_one").prop('disabled',false);
            $("#txt_photo_two").prop('disabled',false);
            $("#txt_photo_three").prop('disabled',false);
            $("#txt_photo_four").prop('disabled',false);
        }
        else if(document.getElementById("box_setting_data_garage").style.display == "block")
        {
            document.getElementById("box_actual_repair").style.display = "none";
            document.getElementById("box_citas_pendientes").style.display = "block";
            document.getElementById("btn_nomina_control_panel").value = "Nomina";
            document.getElementById("btn_repair_box").style.display = "block";
            document.getElementById("data_repair_box").style.display = "none";
            document.getElementById("box_setting_data_garage").style.display = "none";
            document.getElementById("lbls_control_panel").style.display = "block";
            document.getElementById("box_login_Garage").style.display = "block";      
            document.getElementById("btn_setting_control_panel").value = "Ajustes";   
            document.getElementById("btn_exit_control_panel").value = "Cerrar sesión";  
            

            document.getElementById('txt_phono_garage').value = "";
            document.getElementById('txt_adress_garage').value = "";
            document.getElementById('txt_attention_garage').value = "";
            document.getElementById('txt_email_garage').value = "";
            document.getElementById('txt_pass_garage').value = "";
            document.getElementById('txt_newpass_garage').value = "";
            searchrepaircurrent();         
        }
        else if(document.getElementById("box_offer_data_garage").style.display == "block")
        {
            document.getElementById("box_actual_repair").style.display = "none";
            document.getElementById("box_citas_pendientes").style.display = "none";
            document.getElementById("btn_nomina_control_panel").value = "Nomina";
            document.getElementById("btn_repair_box").style.display = "block";
            document.getElementById("data_repair_box").style.display = "none";
            document.getElementById("box_setting_data_garage").style.display = "block";
            document.getElementById("lbls_control_panel").style.display = "none";
            document.getElementById("box_login_Garage").style.display = "none";
            document.getElementById("btn_setting_control_panel").value = "Facturas";
            document.getElementById("box_see_before_Repair").style.display = "none";
            document.getElementById("box_offer_data_garage").style.display = "none";
            

            document.getElementById('txt_phono_garage').value = "";
            document.getElementById('txt_adress_garage').value = "";
            document.getElementById('txt_attention_garage').value = "";
            document.getElementById('txt_email_garage').value = "";
            document.getElementById('txt_pass_garage').value = "";
            document.getElementById('txt_newpass_garage').value = "";

            var currentbox_Before = document.getElementsByClassName('currentbox_Before');
            document.getElementById("txt_num_reparation").value = "";
            document.getElementById("txt_placa_reparation").value = "";
            if(currentbox_Before.length > 0)
            {
                $('.currentbox_Before').remove();
            }
        }
        
        
    });

});

