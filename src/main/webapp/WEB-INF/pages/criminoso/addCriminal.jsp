<%@ include file="/WEB-INF/pages/includeTags.jsp"%>
<!DOCTYPE html>
<html>
<body>
		
	<div class="form-default-crf table-responsive">
		<form:form modelAttribute="criminalsProfile" method="post" id="criminalsForm">
			<table>
				<tr>
					<td><label for="inputCrName">Nome completo:</label></td>
					<td><form:input id="inputCrName" class="form-control" type="text" placeholder="Nome" path="nome" /></td>
					<td id="validateName" class="font-error"></td>
				</tr>
				<tr>
					<td><label for="inputCrCPF">CPF:</label></td>
					<td><form:input id="inputCrCPF" class="form-control" type="text" placeholder="CPF" path="cpf" /></td>
					<td id="validateCpf" class="font-error"></td>
				</tr>
				<tr>
					<td><label for="inputCrRG">RG:</label></td>
					<td><form:input id="inputCrRG" class="form-control" type="text" placeholder="RG" path="rg"/></td>
					<td id="validateRg" class="font-error"></td>
				</tr>
				<tr>
					<td><label for="inputCrAddress">Endereço:</label></td>
					<td><form:input id="inputCrAddress" class="form-control" type="text" placeholder="Endereço" path="endereco" /></td>
					<td id="validateAddress" class="font-error"></td>
				</tr>
				<tr>
					<td rowspan="2">
						<label for="inputFile">Importar Foto</label>
						<input type="file" id="inputFile">
						<p class="help-block">Selecione uma foto para os registros.</p>
					</td>
				</tr>
				<tr>
					<td><button type="button" class="btn btn-default">Voltar</button></td>
					<td><button type="button" class="btn btn-default" onclick="register();">Registrar</button></td>
				</tr>
			</table>
		</form:form>
	</div>
	
	<script src="../js/criminal/criminal.js"
		type="text/javascript" charset="utf-8"></script>

</body>
</html>