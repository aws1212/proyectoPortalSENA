//FILE ONE//
$('#txt_photo_one').change(function() {
        $("#txt_photo_two").prop('disabled',true);
        $("#txt_photo_three").prop('disabled',true);
        $("#txt_photo_four").prop('disabled',true);
    
  });

  //FILE TWO//
$('#txt_photo_two').change(function() {
    $("#txt_photo_one").prop('disabled',true);
    $("#txt_photo_three").prop('disabled',true);
    $("#txt_photo_four").prop('disabled',true);

});


//FILE THREE//
$('#txt_photo_three').change(function() {
    $("#txt_photo_two").prop('disabled',true);
    $("#txt_photo_one").prop('disabled',true);
    $("#txt_photo_four").prop('disabled',true);

});


//FILE FOUR//
$('#txt_photo_four').change(function() {
    $("#txt_photo_two").prop('disabled',true);
    $("#txt_photo_three").prop('disabled',true);
    $("#txt_photo_one").prop('disabled',true);

});


 