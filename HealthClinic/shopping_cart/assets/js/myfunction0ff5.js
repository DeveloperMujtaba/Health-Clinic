/*
 * 
 * START validate phone
 */
function validatePhone(phoneField/*, format*/) {
    //alert(phoneField);
    var num = phoneField.replace(/[^\d]/g,'');
    if(num.length != 10) {
        //Alert the user that the phone number entered was invalid.
        //alert('Please enter a valid phone number including area code');  
        return false;
    }/* else {
        //Email was valid.  If format type is set, format the Phone to the desired style.
       switch(format) {
            case '0': //Format (xxx)-xxx-xxxx
                phoneField.value = "(" + num.substring(0,3) + ")-" + num.substring(3, 6) + "-" + num.substring(6);
                break;
            case '1': //Format xxx-xxx-xxxx
                phoneField.value = num.substring(0,3) + "-" + num.substring(3, 6) + "-" + num.substring(6);
                break;
            default: //Format xxxxxxxxxx
                phoneField.value = num;
                break;
        }
    }*/
}
/*
 * 
 * END validate phone
 */
var jsArray = ["21", "16", "17", "15"];

function IsNumeric(val) {
    if (isNaN(parseFloat(val))) {
              return false;	
     }
     return true;
}
function validateFileExtension(ext) {
    ext = (ext + '').toLowerCase();
    if(ext=='jpg' || ext=='jpeg' || ext=='bmp' || ext=='pdf') {
            return true;
    }
    return false;
}
function in_array (needle, haystack, argStrict) {
    var key = '',
    strict = !! argStrict;			
    if (strict) {
            for (key in haystack) {
                    if (haystack[key] === needle) {
                            return true;
                    }
            }
    } else {
            for (key in haystack) {
                    if (haystack[key] == needle) {
                            return true;
                    }
            }
    }			
    return false;
}

function mydiff(date1,date2,interval) {
    var second=1000, minute=second*60, hour=minute*60, day=hour*24, week=day*7;
    date1 = new Date(date1);
    date2 = new Date(date2);
    var timediff = date2 - date1;
    if (isNaN(timediff)) return NaN;
    switch (interval) {
        case "years": return date2.getFullYear() - date1.getFullYear();
        case "months": return (
            ( date2.getFullYear() * 12 + date2.getMonth() )
            -
            ( date1.getFullYear() * 12 + date1.getMonth() )
        );
        case "weeks"  : return Math.floor(timediff / week);
        case "days"   : return Math.floor(timediff / day); 
        case "hours"  : return Math.floor(timediff / hour); 
        case "minutes": return Math.floor(timediff / minute);
        case "seconds": return Math.floor(timediff / second);
        default: return undefined;
    }
}

function isCheckedById(id){
    var checked = $("input[@id="+id+"]:checked").length;
    if (checked == 0){
            return false;
    } else{
            return true;
    }
}

function fLateDays(element)
{
    //var ticket_county =  $('#ticket_county').val();
    var txtValdate_citation =  $('#'+element).val();

    if($('#n').val()=="1"){
        if(!isDateRSC(txtValdate_citation)) {
            alert('Invalid Date, Enter correct format (MM/DD/YYYY)');
            $('#'+element).focus();
            return false;
        }
        else
            return true;
    }
    else{
        return true;
    }
    
}
        
function validarFormatoFecha(campo) {
      var RegExPattern = /^\d{1,2}\/\d{1,2}\/\d{2,4}$/;
      if ((campo.match(RegExPattern)) && (campo!='')) {
            return true;
      } else {
            return false;
      }
}

function isDateRSC(txtDate){

    var mystr = txtDate;
    if (!validarFormatoFecha(txtDate)) {
        return false;
    }
    var myarr = mystr.split("/");

    if (myarr[0].length==1) {varmes= '0'+myarr[0];} else { varmes= myarr[0];}

    if (myarr[1].length==1) {  vardia= '0'+myarr[1];  } else { vardia= myarr[1];}

    var jsArray2000 = ['00','01','02','03','04','05','06','07','08','09','10','11','12','13','14','15','16','17','18','19','20','21','22'];
    var jsArray1900 = [
                        '70','71','72','73','74','75','76','77','78','79',
                        '80','81','82','83','84','85','86','87','88','89',
                        '90','91','92','93','94','95','96','97','98','99'
                      ];
    if (myarr[2].length==2) {
        if(in_array(myarr[2], jsArray2000)){
            varyear= '20'+myarr[2];
        }else if(in_array(myarr[2], jsArray1900)){
            varyear= '19'+myarr[2];
        } else {
            return false;
        }

    } else {
        varyear= myarr[2];
    }
    txtDateResul = varmes+'/'+vardia+'/'+varyear;
    var currVal = txtDateResul;//txtDate;
    if(currVal == '')
        return false;

    var rxDatePattern = /^(\d{1,2})(\/|-)(\d{1,2})(\/|-)(\d{4})$/; //Declare Regex
    var dtArray = currVal.match(rxDatePattern); // is format OK?

    if (dtArray == null) 
        return false;

    //Checks for mm/dd/yyyy format.
    dtMonth = dtArray[1];
    dtDay= dtArray[3];
    dtYear = dtArray[5];        
    if (dtMonth.length<=1)
        return false;
    if (dtDay.length<=1)
        return false;

    if (dtMonth < 1 || dtMonth > 12) 
        return false;
    else if (dtDay < 1 || dtDay> 31) 
        return false;
    else if ((dtMonth==4 || dtMonth==6 || dtMonth==9 || dtMonth==11) && dtDay ==31) 
        return false;
    else if (dtMonth == 2) 
    {
        var isleap = (dtYear % 4 == 0 && (dtYear % 100 != 0 || dtYear % 400 == 0));
        if (dtDay> 29 || (dtDay ==29 && !isleap)) 
                return false;
    }
    return true;
}

function getAge(dateString) {
    var now = new Date();
    var today = new Date(now.getYear(),now.getMonth(),now.getDate());
    var yearNow = 114;

    var monthNow = 7;
    var dateNow = 04;

    var dob = new Date(dateString.substring(6,10),
                     dateString.substring(0,2)-1,  // dateString.substring(3,5) for DD/MM/YYYY format                        
                     dateString.substring(3,5)     // dateString.substring(0,2)-1 for DD/MM/YYYY format                      
                     );

    var yearDob = dob.getYear();
    var monthDob = dob.getMonth();
    var dateDob = dob.getDate();
    var age = {};

    yearAge = yearNow - yearDob;

    if (monthNow >= monthDob)
      var monthAge = monthNow - monthDob;
    else {
      yearAge--;
      var monthAge = 12 + monthNow -monthDob;
    }

    if (dateNow >= dateDob)
      var dateAge = dateNow - dateDob;
    else {
      monthAge--;
      var dateAge = 31 + dateNow - dateDob;

      if (monthAge < 0) {
        monthAge = 11;
        yearAge--;
      }
    }

    age = {
        years: yearAge,
        months: monthAge,
        days: dateAge
        };
    return age.years;
}

function ConfirmCancel(url)
{
  var x = confirm("Are you sure you want to cancel?");
  if (x)
      location.href=url;
  else
    return false;
}
function urlLocation(url)
{
    location.href=url;
}

function validarDriversLicenseNumber(e) {   
    tecla = (document.all) ? e.keyCode : e.which;
    if (tecla==8) return true; //Tecla de retroceso (para poder borrar)
    else if (tecla==45) return true;
    else if (tecla==48) return true;
    else if (tecla==49) return true;
    else if (tecla==50) return true;
    else if (tecla==51) return true;
    else if (tecla==52) return true;
    else if (tecla==53) return true;
    else if (tecla==54) return true;
    else if (tecla==55) return true;
    else if (tecla==56) return true;
    else if (tecla==57) return true;
    else if ((tecla >= 65 && tecla <= 90) || (tecla >= 97 && tecla <= 122)) return true;
    /*else {
        alert ('invalid character');
        return false;
    }*/
    
    patron = /1/; //ver nota
    te = String.fromCharCode(tecla);
    return patron.test(te);
} 

function validate_cc()
{
    
    if($("#is_complete_information").val() == "0"){
        alert("Please complete the required fields (*)");
        return false;
    }
    else{
        
        if($('#payment').val()=='' || $('#card_no').val()=='' || $('#exp_date').val()=='' || $('#cvv_code').val()=='' || $('#cvv_code').val()=='') {
            $('#payOn').hide(); 
            $('#payOff').show();
            if ($('#payment').val()=='') {
                alert("Choose Credit Card type");
            } else if($('#card_no').val()==''){
                alert("Enter Credit Card Number");
                $('#card_no').focus();
            } else if($('#exp_date').val()==''){
                alert("Enter Expiration Date");
                $('#exp_date').focus();
            } else if($('#cvv_code').val()==''){
                alert("Enter Cvv Code");
                $('#cvv_code').focus();
            }
            $('#payOn').show(); 
            $('#payOff').hide(); 
            return false;
        }
        
        $('#payOn').hide(); 
        $('#payOff').show();
        return true;
    }
}

function validateFormInit() {
    console.log($("#origin").val());
    if(document.hireForm.fname.value=="") {
        alert("Field required. Please enter First Name");
        document.hireForm.fname.focus();
        return false;
    }
    if(document.hireForm.lname.value=="") {
        alert("Field required. Please enter Last Name");
        document.hireForm.lname.focus();
        return false;
    }	
    	
    if(document.hireForm.cellphone.value=="") {
        alert("Field required. Please enter Cell Phone Number");
        document.hireForm.cellphone.focus();
        return false;
    }	
    

    phoneField = $('#cellphone').val();
    var num = phoneField.replace(/[^\d]/g,'');
    if(num.length != 10) {
            alert("Please Enter a Valid Phone Number")
            //Phone.value=""
            $('#cellphone').focus();
            return false;
    }
    if(document.hireForm.email.value=="") {
        alert("Field required. Please enter E-mail");
        document.hireForm.email.focus();
        return false;
    }

    if(document.hireForm.email.value != "") {
        var reg2=new RegExp(/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/ );
        var email=document.hireForm.email.value;
        if(email.search(reg2)==-1) {
            alert("Enter a valid email address");
            document.hireForm.email.focus();
            return false;
        }
        /*else if(document.hireForm.email.value!=document.hireForm.c_email.value) {
                alert("Enter confirm your email address");
                document.hireForm.c_email.focus();
                return false;
        }*/
    } 
    email=hireForm.email.value;
    if(email.indexOf("@")==-1  ||  email.indexOf(".")==-1) {
        alert("Enter  Valid Email");
        hireForm.email.focus();
        return false;
    }  
    
    
    return true;
}

function validate() {
    if(document.hireForm.fname.value=="") {
        alert("Field required. Please enter First Name");
        document.hireForm.fname.focus();
        return false;
    }
    if(document.hireForm.lname.value=="") {
        alert("Field required. Please enter Last Name");
        document.hireForm.lname.focus();
        return false;
    }
    
    if($("#edit").val()=="1"){
        
        if(document.hireForm.saddress.value=="") {
            alert("Field required. Please enter Street Address");
            document.hireForm.saddress.focus();
            return false;
        }		
        if(document.hireForm.city.value=="") {
            alert("Field required. Please enter City");
            document.hireForm.city.focus();
            return false;
        }	
        if(document.hireForm.state.value=="") {
            alert("Field required. Please enter State");
            document.hireForm.state.focus();
            return false;
        }	
        if(document.hireForm.zipcode.value=="")
        {
            alert("Field required. Please enter Zip Code");
            document.hireForm.zipcode.focus();
            return false;
        }
        
    }
    
    
    
    
    if(document.hireForm.cellphone.value=="") {
        alert("Field required. Please enter Cell Phone Number");
        document.hireForm.cellphone.focus();
        return false;
    }	
    
    if(document.hireForm.cellphone.value=="") {
        alert("Field required. Please enter Cell Phone Number");
        document.hireForm.cellphone.focus();
        return false;
    }
/*
    if(validatePhone('cellphone')==false) {
        alert("Enter only numbers");
        $('#cellphone').focus();
        return false;
    }*/
    //if (validatePhone($('#cellphone').val())==false){
    phoneField = $('#cellphone').val();
    var num = phoneField.replace(/[^\d]/g,'');
    if(num.length != 10) {
            alert("Please Enter a Valid Phone Number")
            //Phone.value=""
            $('#cellphone').focus();
            return false;
    }
    if(document.hireForm.email.value=="") {
        alert("Field required. Please enter E-mail");
        document.hireForm.email.focus();
        return false;
    }

    if(document.hireForm.email.value != "") {
        var reg2=new RegExp(/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/ );
        var email=document.hireForm.email.value;
        if(email.search(reg2)==-1) {
            alert("Enter a valid email address");
            document.hireForm.email.focus();
            return false;
        }else if(document.hireForm.email.value!=document.hireForm.c_email.value) {
                alert("Enter confirm your email address");
                document.hireForm.c_email.focus();
                return false;
        }
    } 
    email=hireForm.email.value;
    if(email.indexOf("@")==-1  ||  email.indexOf(".")==-1) {
        alert("Enter  Valid Email");
        hireForm.email.focus();
        return false;
    }  
    
    if(document.hireForm.driver_li_no.value=="") {
        alert("Field required. Please enter Drivers License Number");
        document.hireForm.driver_li_no.focus();
        return false;
    }
    
    if(document.hireForm.state_issued.value=="") {
        alert("Choose State Issued");
        document.hireForm.state_issued.focus();
        return false;
    }
    if(document.hireForm.license_cdl.value=="") {
        alert("Specify if your license is CDL License");
        document.hireForm.license_cdl.focus();
        return false;
    }

    if(document.hireForm.dob.value==""){
        alert("Field required. Please enter Date of Birth");
        document.hireForm.dob.focus();
        return false;
    }

    var txtVal =  $.trim($('#dob').val());

    if(!isDateRSC(txtVal)) {
        alert('Invalid Date, Enter correct format (MM/DD/YYYY)');
        $('#dob').focus();
        return false;
    }

    var yearsDOB = Math.floor(moment(new Date()).diff(moment(txtVal,"MM/DD/YYYY"),'years',true));
    //console.log(yearsDOB);
    //return false;
    if(yearsDOB < 18) {
        alert('Invalid Date Of Birth, please call us at 1-844-339-8811 for further assistance.');
        return false
    }
    return true;
}

function checkAdditionalUpload(element){
    //console.log(element);
    //console.log(element.options[element.selectedIndex].value)
    var optionSelect = element.options[element.selectedIndex].value;
    var totalAddOptions = $("#totalAddOptions").val();

    console.log(optionSelect);
    console.log(totalAddOptions);

    if(optionSelect == "1" && totalAddOptions > 0){
        $("#cit_file_row_additional").show();
        $("#cit_agree_additional").show();
    }
    else{
        $("#cit_file_row_additional").hide();
        $("#cit_agree_additional").hide();
    }
}

$(document).ready(
    
  
    
    
        
    function()
    {
        $('#california-form').click(function(){
            $( "#origin" ).val('California');
            $( "#hireForm" ).submit();
        });
        
        $('#florida-form').click(function(){
            $( "#origin" ).val('Florida');
            $( "#hireForm" ).submit();
        });
        $('#other-form').click(function(){
            $( "#origin" ).val('Other');
            $( "#hireForm" ).submit();
        });
    
        $("#start-shopping-cart").click(function(){
            window.location.href = "https://www.ticketclinic.com/shopping_cart/index.php/init";
        });

        $('.tooltip-ttc-container .control-label').click(function(){
            $('.tooltip-ttc').hide();
            $(this).next().show();
        });
        
        $('.tooltip-ttc span').click(function(){
            $(this).parent().hide();
        });

        $( document ).tooltip();
        /*********************************************************************************************************************************
         ***************************************************    Personal Information    **************************************************
         *********************************************************************************************************************************/
         /*
            // para california se quita la validación
         $('#state_issued').change(function(){
            if($('#state_issued').val()!='FL') {
                $('#non_florida_div').hide();
                $('#errorFLORIDA').show();
            } else {
                $('#non_florida_div').show();
                $('#errorFLORIDA').hide();
            }
        });
         */

         $('#county_error').hide();
         $('#courthouse_error').hide();
         $('#type_of_violation_error').hide();
         $('#past_due_error').hide();
         if($('#ticket_county').val() != null && $('#ticket_county').val()!='') {
            if($("#countyFee").val() != '1'){
                $('#phase3_submit').hide();
                $('#county_error').show();
            }
           // else{
                //$('#phase3_submit').hide();
           //     $('#county_error').hide();
          //  }
                //console.log($("#countyFee").val());
                /*alert('Please choose County.');
                $('#ticket_county').focus();
                return false;*/
        }

        /*
         *Al momento de ingresar tus datos en el carrito, si respondes YES a CDL LICENSE, tiene que salir este mensaje y que se detenga la 
         *compra:  Tickets with this type of driver license require special attention, please call 1-800-CITATION for further assistance.
         */
        $('#license_cdl').change(function() {
            /*if($('#license_cdl').val()==0) {
                $('#btnSubmit').show();
                $('#errorCDLLICENSE').hide();
            } else {
                $('#btnSubmit').hide();
                $('#errorCDLLICENSE').show();
            }*/
        });
        
        
        $('#ticket_courthouse').change(function() {
            if($("#county_error").is(":hidden")){
                $('.question_id').remove();
                $("#cit_file_row_additional").hide();
                $("#cit_agree_additional").hide();
                $('#cit_type_val').val("0");
                $('#type_of_violation_error').hide();
                if((parseInt($('#ticket_courthouse').val()) >= 123 && parseInt($('#ticket_courthouse').val()) <= 132) || $('#ticket_courthouse').val()==60 || $('#ticket_courthouse').val()==62 || $('#ticket_courthouse').val()==63 || $('#ticket_courthouse').val()==133 || $('#ticket_courthouse').val()==55 || $('#ticket_courthouse').val()==56) {
                   $('#phase3_submit').hide();
                   $('#courthouse_error').show(); 
                } else {
                   $('#phase3_submit').show();
                   $('#courthouse_error').hide();
                   
                    
                }
            }
            
        });
        

        /*********************************************************************************************************************************
         *****************************************************   Num the ticket     ******************************************************
         *********************************************************************************************************************************/
        $('#ticket_type').change(
            function()
            {
                if($('#ticket_type').val()!='') {
                    
                    $('#num_tickets_box').show();
                    //$('#num_tickets option[value=""]').attr('selected','selected');
                            
                    if($('#ticket_type').val()==2 || $('#ticket_type').val()==3) {
                        
                        $('#ticketNumBox').show();
                        $('#errorGenericBox').hide();
                        $('#errorCriminalBox').hide();
                        $('#errorOtherBox').hide();
                        $('#errorParkingBox').hide();
                        
                        if($('#ticket_type').val()==3){
                            $('#num_tickets_box').hide();
                            $('#num_tickets option[value=1]').attr('selected','selected');
                            
                        }

                    } else {
                        $('#ticketNumBox').hide();

                        if($('#ticket_type').val()==1){
                            $('#errorCriminalBox').show();
                            $('#errorGenericBox').hide();
                            $('#errorOtherBox').hide();
                            $('#errorParkingBox').hide();
                        }
                        else if($('#ticket_type').val()==4){
                            $('#errorOtherBox').show();
                            $('#errorGenericBox').hide();
                            $('#errorCriminalBox').hide();
                            $('#errorParkingBox').hide();
                        }
                        else if($('#ticket_type').val()==5){
                            $('#errorParkingBox').show();
                            $('#errorGenericBox').hide();
                            $('#errorCriminalBox').hide();
                            $('#errorOtherBox').hide();
                        }
                    }
                } else {
                    $('#ticketNumBox').hide();
                    $('#errorGenericBox').hide();
                    $('#errorCriminalBox').hide();
                    $('#errorOtherBox').hide();
                    $('#errorParkingBox').hide();
                }
            }
        ); // END $('#ticket_type')
        
        /*if($('#ticket_type').val()==2) {
            $('#ticketNumBox').show();
            $('#errorGenericBox').hide();
        }*/

        if($('#ticket_type').val()!='') {
            if($('#ticket_type').val()==2 || $('#ticket_type').val()==3) {
                
                $('#ticketNumBox').show();
                $('#errorGenericBox').hide();
                $('#errorCriminalBox').hide();
                $('#errorOtherBox').hide();
                $('#errorParkingBox').hide();

            } else {
                $('#ticketNumBox').hide();

                if($('#ticket_type').val()==1){
                    $('#errorCriminalBox').show();
                    $('#errorGenericBox').hide();
                    $('#errorOtherBox').hide();
                    $('#errorParkingBox').hide();
                }
                else if($('#ticket_type').val()==4){
                    $('#errorOtherBox').show();
                    $('#errorGenericBox').hide();
                    $('#errorCriminalBox').hide();
                    $('#errorParkingBox').hide();
                }
                else if($('#ticket_type').val()==5){
                    $('#errorParkingBox').show();
                    $('#ticketNumBox').hide();
                    $('#errorGenericBox').hide();
                    $('#errorCriminalBox').hide();
                    $('#errorOtherBox').hide();
                }
            }
        } else {
            $('#ticketNumBox').hide();
            $('#errorGenericBox').hide();
            $('#errorCriminalBox').hide();
            $('#errorOtherBox').hide();
            $('#errorParkingBox').hide();
        }
        
        
        //if($('#num_tickets').val()>1 && $('#num_tickets').val()<6) {
        if($('#num_tickets').val()>0 && $('#num_tickets').val() != ""){
            ////$('#next_five_days_box').show();
            if($('#num_tickets').val()==1) {
                $('#same_date_box').hide();
                $("#lbl_next_five_days").html("Is your citation due within the next five days?<font class=\"required\"> * </font>");
                //$('#next_five_days_box').show();
            } else {
                $('#same_date_box').hide();
                $("#lbl_next_five_days").html("Is your citation due within the next five days?<font class=\"required\"> * </font>");
                //$('#next_five_days_box').hide();
            }
        }
        else{
            $('#same_date_box').hide();
            //$('#next_five_days_box').hide();
        }
        
                
        $('#num_tickets').change(
            function()
            {
                /*
                if($('#num_tickets').val()!='') {
                    if($('#num_tickets').val()==6) {
                        $('#errorTicketMore').show();
                        $('#btnBox').hide();
                    } else {
                        $('#errorTicketMore').hide();
                        $('#btnBox').show();
                    }
                } else {
                    $('#errorTicketMore').hide();
                    $('#btnBox').show();
                }
                */


                //if($('#num_tickets').val()>1 && $('#num_tickets').val()<6) {ç
                if($('#num_tickets').val()>0 && $('#num_tickets').val() != ""){
                    ////$('#next_five_days_box').show();
                    //console.log($("[for=next_five_days_box]")[0]);
                    //console.log($('#num_tickets').val());
                    if($('#num_tickets').val()==1) {
                        $('#same_date_box').hide();
                        //$('#next_five_days_box').show();
                        $("#lbl_next_five_days").html("Is your citation due within the next five days?<font class=\"required\"> * </font>");
                    } else {
                        $('#same_date_box').hide();
                        $("#lbl_next_five_days").html("Is your citation due within the next five days?<font class=\"required\"> * </font>");
                        //$('#next_five_days_box').hide();
                    }
                }
                else{
                    $('#same_date_box').hide();
                   //// $('#next_five_days_box').hide();
                }


            }
        ); // END $('#num_tickets')
        
        if($('#next_five_days').val()=='') {
            //$('#num_tickets_box').hide();
            ////$('#next_five_days_box').hide();
        }
        $('#next_five_days').change(
            function(){
                if($('#next_five_days').val()==1) {
                    $('#errorGenericBox').show();
                   // $('#num_tickets_box').hide();
                    $('#btnBox').hide();
                    //$('select[name=num_tickets]').val('');
                    
                } else {
                    $('#errorGenericBox').hide();
                    //$('#num_tickets_box').show();
                    $('#btnBox').show();
                    ////$('select[name=num_tickets]').val('');
                }
            }
        );
        
        $('#btnSubmitQty').click(
            function(){
                if($('#next_five_days').val()=='') {
                    alert('Please choose question(Is your citation due within the next five days?).');
                    $('#next_five_days').focus();
                    return false;
                }
                if($('#num_tickets').val()=='') {
                    alert('Please choose question (How many violations did you receive at this time? ).');
                    $('#num_tickets').focus();
                    return false;
                }
                /*if($('#num_tickets').val()>1 && $('#same_date').val()=='') {
                    alert('Please choose question ( Did you receive these tickets on the same date?  ).');
                    $('#same_date').focus();
                    return false;
                }*/
            }
        );
        /*********************************************************************************************************************************
         ***************************************************     Tickets Items      ******************************************************
         *********************************************************************************************************************************/
        
        /*
        if($('#cit_type_val').val()==21) {
            $('#cit_other').show();
        } else if($('#cit_type_val').val()==25) {
            $('#speedingInfo').show();
        }
        */

        $('#cit_type_val').change(function() {
            if($('#cit_type_val')!=""){
                //if((parseInt($('#ticket_courthouse').val()) >= 123 && parseInt($('#ticket_courthouse').val()) <= 132) || $('#ticket_courthouse').val()==60) 
                if(!((parseInt($('#ticket_courthouse').val()) >= 123 && parseInt($('#ticket_courthouse').val()) <= 132) || $('#ticket_courthouse').val()==60)) {
                    $.getJSON( $("#urlCheckCitationTypeFee").val()+"?county="+$('#ticket_county').val()+"&citation_type="+$('#cit_type_val').val(), function( data ) {
                       // console.log(data);
                        $('.question_id').remove();
                        
                        $("#cit_file_row_additional").hide();
                        $("#cit_agree_additional").hide();
                       
                       
                       if(data.estado == "0"){
    
                        $('#phase3_submit').hide();
                        $('#type_of_violation_error').show();
    
                       }else{
                           
                
                        $('#phase3_submit').show();
                        $('#type_of_violation_error').hide();
                
                        var tipo_1 = '<div class="form-group question_id"><label for="{id}" class="col-sm-4 control-label">{question}<font class="required"> * </font></label><div class="col-sm-4"><select name="{id}" id="{id}" class="form-control input-sm"><option value="">- Please Select -</option><option value="1">Yes</option><option value="0">No</option><option value="3">Uncertain</option></select></div></div>';
                        var tipo_2 = '<div class="form-group question_id"><label for="{id}" class="col-sm-4 control-label">{question}<font class="required"> * </font></label><div class="col-sm-4"><select onchange="checkAdditionalUpload(this);" name="{id}" id="{id}" class="form-control input-sm"><option value="">- Please Select -</option><option value="1">Yes</option><option value="0">No</option></select></div></div>';
                        var tipo_3 = '<div class="form-group question_id"><label for="{id}" class="col-sm-4 control-label">{question}<font class="required"> * </font></label><div class="col-sm-4"><input type="text" name="{id}" value="" id="{id}" placeholder="" class="form-control input-sm"></div>{label}</div>';
    
    
                        //var res = str.replace(/blue/g, "red");
                        var total_additional_options = 0;
                        data.questions.forEach((question)=>{
                            //console.log(element);
                            if(question.type =="1")
                                $("#cit_type").after(tipo_1.replace(/{id}/g, "question_"+question.id).replace(/{question}/g, question.question));
    
                            if(question.type =="2")
                                $("#cit_type").after(tipo_2.replace(/{id}/g, "question_"+question.id).replace(/{question}/g, question.question));
                               
                            if(question.type =="3")
                                $("#cit_type").after(tipo_3.replace(/{id}/g, "question_"+question.id).replace(/{question}/g, question.question).replace(/{label}/g, question.label));
                            
                            if(question.additional_option=="1"){
                                total_additional_options++;
                                $("#lbl_file_additional").html(question.label+'<br /><span style="font-size:11px;">(.gif .jpg .png and .pdf files only)</span>');
                            }
                            //else if(question.type =="2")
                              //  $("#phase3Part").append(tipo_2.replace(/{id}/g, "question_"+question.id).replace(/{question}/g, question.question));
    
                            
                        });
                        $("#totalAddOptions").val(total_additional_options)
    
    
    
                       }
    
                    });
                }
                
                

            }
            
        });
        

        

        /////////////COMMENT - JCFL///////////////
        // $('#cit_type_val').change(function() {
        //     $('#doubt_row').hide();							   
        //     $('#phase3_submit').show();
        //     $('#speedingInfo').hide();
        //     $('#cit_error').hide();
        //     $('#invalid_ticket').hide();
        //     $('#cit_other').hide();
        //     $('#speed_error').hide();
        //     $('#school_row').hide();
            
        //     if($('#cit_type_val').val()==25) {
        //             $('#speedingInfo').show();		
        //             $('#school_row').show();

        //     }

        //     if($('#cit_type_val').val()==6 || $('#cit_type_val').val()==19 || $('#cit_type_val').val()==20 || $('#cit_type_val').val()==28) {

        //         if($('#cit_type_val').val()==6) {
        //             $('#error_careless_driving').show();
        //             $('#error_Toll_violations').hide();
        //             $('#error_Open_container_and_passenger_moving').hide();
        //         } else if($('#cit_type_val').val()==28) {
        //             $('#error_careless_driving').hide();
        //             $('#error_Toll_violations').show();
        //             $('#error_Open_container_and_passenger_moving').hide();
        //         } else if($('#cit_type_val').val()==19 || $('#cit_type_val').val()==20) {
        //             $('#error_careless_driving').hide();
        //             $('#error_Toll_violations').hide();
        //             $('#error_Open_container_and_passenger_moving').show();
        //         }
        //         $('#cit_file_row').hide();
        //         $('#cit_agree').hide();
        //         $('#phase3_submit').hide();
        //     } else if($('#cit_type_val').val()==8) {
        //         $('#cit_file_row').hide();
        //         $('#cit_or').hide();
        //         $('#cit_agree').hide();
        //         $('#cit_error').show();     
        //         $('#phase3_submit').hide(); 
        //     } else if($('#cit_type_val').val()==31) {
        //         $('#cit_file_row').hide();
        //         $('#cit_or').hide();
        //         $('#cit_agree').hide();
        //         $('#invalid_ticket').show();     
        //         $('#phase3_submit').hide(); 
        //     } else if($('#cit_type_val').val()==21) {
        //             $('#cit_file_row').show();
        //             $('#cit_or').show();
        //             $('#cit_agree').show();
        //             $('#cit_other').show();			  
        //     } else if($('#cit_type_val').val()==23) {
        //             $('#doubt_row').show();
        //             $('#phase3_submit').hide();
        //             $('#cit_file_row').hide();
        //             $('#cit_or').hide();
        //             $('#cit_agree').hide();
        //     } else {
        //          $('#error_careless_driving').hide();
        //          $('#error_Toll_violations').hide();
        //          $('#error_Open_container_and_passenger_moving').hide();
        //          $('#cit_file_row').show();
        //          $('#cit_agree').show();
        //          $('#phase3_submit').show();

        //      }
        // }
        // );
        /////////////END - JCFL///////////////


        // END $('#cit_type_val')
        
        $('#speed_applicable').blur(function() {
            if(!IsNumeric($('#unlawfull_speed').val())) {
                alert('Please enter a numeric value for Unlawful Speed.');
                $('#unlawfull_speed').focus();
            } else if(!IsNumeric($('#speed_applicable').val())) {
                alert('Please enter a numeric value for Posted Speed Limit.');
                $('#speed_applicable').focus();
            } else {
                $('#phase3_submit').show();
                $('#speed_error').hide();
                $('#school_row').hide();
                //var speedDiff = $('#speed_applicable').val() - $('#unlawfull_speed').val(); /*commend by rsc*/
                var speedDiff = $('#unlawfull_speed').val() - $('#speed_applicable').val();
                if(speedDiff>=30) {
                        $('#speed_error').show();
                        $('#phase3_submit').hide();
                } else if(speedDiff<30) {
                    $('#school_row').show();
                }
            }
        }); /*  END $('#speed_applicable').blur(function()*/

/*
        $( '#form_qty' ).submit( function( event ) {
         //if
         console.log($("#check_due").val());
         if($("#check_due").val()=="0"){
            event.preventDefault();
            $.ajax({
                    'url' : $("#urlCheckCitationDueDate").val(),
                    'type' : 'POST', //the way you want to send data to your URL
                    'data' : {'date_due' : $("#date_citation_due").val()},
                    'success' : function(resp){ //probably this request will return anything, it'll be put in var "data"
                        //console.log(resp);
                        //return false;
                        if(resp.estado == "0"){

                            $('#county_error').hide();
                            if($('#ticket_county').val()=='') {
                                    alert('Please choose County.');
                                    $('#ticket_county').focus();
                                    return false;
                            }

                            if($('#citations_number').val()=='') {
                                    alert('Please choose Citation Number.');
                                    $('#citations_number').focus();
                                    return false;
                            }
                            if($('#date_citation').val()=='') {
                                    alert('Please choose Date of Citation.');
                                    $('#date_citation').focus();
                                    return false;
                            }
                            if(!isDateRSC($('#date_citation').val())) {
                                alert('Invalid Date');
                                $('#date_citation').focus();
                                return false;
                            }
                            if($('#inv_acc').val()=='') {
                                alert('Please specify if you were involved with accident.');
                                $('#inv_acc').focus();
                                return false;
                            } 
                            
                            var eitherone=0;
                            if($('#cit_file').val()!='') {
                                eitherone=1;        
                                var ext = /[^.]+$/.exec($('#cit_file').val());
                                if(!validateFileExtension(ext)) {
                                        alert('Please upload a valid document, only bmp,jpeg,pdf are supported.');
                                        $('#cit_file').focus();
                                        return false;
                                }
                            }
                            
                            if($('#prev_cit_file').val()!='') {
                                eitherone=1;        
                            }
                            
                            if (document.getElementById('agree_to_conditions').checked){
                                eitherone=1;
                            }
                            if(eitherone==0) {
                                    alert('You must upload a document or agree to the terms and conditions');
                                    $('#cit_file').focus();
                                    return false;
                            }
                            //console.log("submit1");
                            //$('#form_qty').submit();
                            // $('#form_qty').submit();
                            //document.getElementById('form_qty').submit();
                            $("#check_due").val("1");
                            $('#form_qty').submit();
                        }
                        else{
                            //$('#phase3_submit').hide();
                            $('#county_error').show();
                            return false;
                        }
                        
                    },
                    error: function(resp) { // 500 Status Header
                        
                    }
                });

            return false;
         }
        });
*/

        $('#submit_phase3').click(function(){
            
            if(fLateDays('date_citation_due')){
                
                if($("#check_due").val()=="0"){
                    $.ajax({
                        'url' : $("#urlCheckCitationDueDate").val(),
                        'type' : 'POST', //the way you want to send data to your URL
                        'data' : {'date_due' : $("#date_citation_due").val()},
                        'success' : function(resp){ //probably this request will return anything, it'll be put in var "data"
                            // console.log(resp);
                            // return false;
                            if(resp.expirado == "1"){
                                if($('#ticket_courthouse').val()==36 || $('#ticket_courthouse').val()==67)  {
                                    //courthouse_error
                                    $('#courthouse_error').show();
                                    return false;
                                }
                            }
                            
                            if(resp.estado == "0"){
    
                                $("#check_due").val("1");
                                $('#submit_phase3').click();
                                //console.log("submit1");
                                //$('#form_qty').submit();
                                //$('#form_qty').submit();
                                //document.getElementById('form_qty').submit();
                            }
                            else{

                                
                                
                                // else{
                                    ////$('#phase3_submit').hide();
                                    $('#past_due_error').show();
                                // }
                                    
                                return false;
                            }
                            
                        },
                        error: function(resp) { // 500 Status Header
                            
                        }
                    });
                    return false;
                }
                else{
                    $('#past_due_error').hide();
    
                                //checkFields
                                if($('#ticket_county').val()=='' && $('#checkFields').val()=='1') {
                                        alert('Please choose County.');
                                        $('#ticket_county').focus();
                                        return false;
                                }
    
                                if($('#citations_number').val()=='' && $('#checkFields').val()=='1') {
                                        alert('Please choose Citation Number.');
                                        $('#citations_number').focus();
                                        return false;
                                }
                                if($('#date_citation').val()=='' && $('#checkFields').val()=='1') {
                                        alert('Please choose Date of Citation.');
                                        $('#date_citation').focus();
                                        return false;
                                }
                                if(!isDateRSC($('#date_citation').val()) && $('#checkFields').val()=='1') {
                                    alert('Invalid Date');
                                    $('#date_citation').focus();
                                    return false;
                                }
                                if($('#inv_acc').val()=='') {
                                    alert('Please specify if you were involved with accident.');
                                    $('#inv_acc').focus();
                                    return false;
                                } 
                                
                                var eitherone=0;
                                if($('#cit_file').val()!='' && $('#checkFields').val()=='1') {
                                    eitherone=1;        
                                    var ext = /[^.]+$/.exec($('#cit_file').val());
                                    if(!validateFileExtension(ext)) {
                                            alert('Please upload a valid document, only bmp,jpeg,pdf are supported.');
                                            $('#cit_file').focus();
                                            return false;
                                    }
                                }

                                if($('#cit_type_val').val()=='0') {
                                    alert('Please select a type of Violation.');
                                    // $('#inv_acc').focus();
                                    return false;
                                } 
                                
                                if($('#prev_cit_file').val()!='') {
                                    eitherone=1;        
                                }
                                
                                if (document.getElementById('agree_to_conditions').checked){
                                    eitherone=1;
                                }
                                if(eitherone==0 && $('#checkFields').val()=='1') {
                                        alert('You must upload a document or agree to the terms and conditions');
                                        $('#cit_file').focus();
                                        return false;
                                }
                }
            }
            else
                return false

            
                


                
            } // END function(){
        );


        /*  $('#submit_phase3') */
        

        $('#editimage').click(function(){
                $('#cit_file').show();
                $('#cit_agree').show();
                $('#editimage').hide();
            } // END function(){
        );

        $('#editimageadditional').click(function(){
                $('#cit_file_additional').show();
                $('#cit_agree_additional').show();
                $('#editimageadditional').hide();
            } // END function(){
        );

        $('#cit_file').change(function(){
                $('#agree_to_conditions').prop('checked', false);
                $('#cit_agree').hide();
            } // END function(){
        ); // END $('#cit_file').change

         $('#cit_file_additional').change(function(){
                $('#agree_to_conditions_additional').prop('checked', false);
                $('#cit_agree_additional').hide();
            } // END function(){
        ); // END $('#cit_file').change

        $('#inv_acc').change(function(){
            $('#phase3_submit').show();
            if($('#inv_acc').val()==1) {
                    $('#inj_row').hide(); /*Si se selecciona accidente parar proceso*/
                    $('#inj_row_error').show(); $('#cit_file_row').hide(); $('#cit_agree').hide(); $('#phase3_submit').hide();
                    $('#cit_type').hide();
                    $('#speedingInfo').hide();
                    $('#cit_error').hide();
                    $('#cit_other').hide();
            } else {
                    $('#inj_row_error').hide(); $('#cit_file_row').show(); $('#cit_agree').show(); $('#phase3_submit').show();// add by rsc
                    $('#inj_row').hide();
                    $('#inj_ser').hide();
                    $('#inj_ser_error').hide();
                    $('#cit_type').show();
                    $("#acc_inj option[value=0]").attr("selected",true); /*add by rsc*/
                    $("#serious_inj option[value=0]").attr("selected",true); /*add by rsc*/
                    if($('#cit_type_val').val()==6 || $('#cit_type_val').val()==19 || $('#cit_type_val').val()==20 || 
                       $('#cit_type_val').val()==28) { /*add by rsc*/

                        if($('#cit_type_val').val()==6) {
                            $('#error_careless_driving').show();
                            $('#error_Toll_violations').hide();
                            $('#error_Open_container_and_passenger_moving').hide();
                        } else if($('#cit_type_val').val()==28) {
                            $('#error_careless_driving').hide();
                            $('#error_Toll_violations').show();
                            $('#error_Open_container_and_passenger_moving').hide();
                        } else if($('#cit_type_val').val()==19 || $('#cit_type_val').val()==20) {
                            $('#error_careless_driving').hide();
                            $('#error_Toll_violations').hide();
                            $('#error_Open_container_and_passenger_moving').show();
                        }
                        $('#cit_file_row').hide();
                        $('#cit_agree').hide();
                        $('#phase3_submit').hide();
                    } else {
                        $('#error_careless_driving').hide();
                        $('#error_Toll_violations').hide();
                        $('#error_Open_container_and_passenger_moving').hide();
                        $('#cit_file_row').show();
                        $('#cit_agree').show();
                        $('#phase3_submit').show();

                    }
            }
        }); 
        /*  $('#inv_acc').change    */
    } 
    /*    function()  */
);
/*   $(document).ready   */    