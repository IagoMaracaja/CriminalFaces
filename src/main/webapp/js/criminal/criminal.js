/**
 * Script page of Criminal Scope
 */

function register(){

	if(validate()){
		var postData = $("#criminalsForm").serializeArray();
		var formURL = "../criminoso/addCriminal.html";
		$.ajax({  
			type : 'POST',
			cache: false,
			url : formURL,  
			data : postData,
			beforeSend: function() {
				openModal();
			},
			success : function(response) {  
				document.open();
				document.write(response);
				document.close();
				closeModal();
			},   
			error: function(xhr,err){
				closeModal();
			} 
		});

	}else{
		return false;
	}

}

function validate(){
	var isValid = true;
	var name = $("#inputCrName").val();
	var cpf = $("#inputCrCPF").val();
	var rg = $("#inputCrRG").val(); 
	var endereco = $("#inputCrAddress").val();

	if(name == ""){
		$("#validateName").html("Preencha o campo Nome");
		$("#validateName").focus();
		isValid = false;
	}else{
		$("#validateName").html("");
	}
	if (cpf == ""){
		$("#validateCpf").html("Preencha o campo Cpf");
		$("#validateCpf").focus();
		isValid = false;
	}else{
		$("#validateCpf").html("");
	}
	
	if(rg == ""){
		$("#validateRg").html("Preencha o campo RG");
		$("#validateRg").focus();
		isValid = false;
	}else{
		$("#validateRg").html("");
	}
	
	if(endereco == ""){
		$("#validateAddress").html("Preencha o campo Endereco");
		$("#validateAddress").focus();
		isValid = false;
	}else{
		$("#validateAddress").html("");
	}
	
	return isValid;
}