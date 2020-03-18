
export function passwordConfirm(valor){
	let senha = valor[0];
	let senhaConfirma = valor[1];
	if(senha.length || senhaConfirma.length){
		if(senha === senhaConfirma && senha.length >= 6){
			return {"0": "", "1": ""};
		} else{
			const textErrorMin = (senha.length < 6)?"Sua senha deve conter mínimo 6 caracteres.":"";
			const textErrorIgu = (senha !== senhaConfirma)?"Senhas são diferentes.":"";
			return {"0": textErrorMin, "1": textErrorIgu};
		}
	} else{
		return {"0": "Sua senha deve conter mínimo 6 caracteres.", "1": ""};
	}
}
export function verifyDados(valor){	
	let type = valor[0];
	let dado = valor[1];
	let dadoBase = valor[2];

    for(var i = 0; i < dadoBase.length; i++){
        if(dadoBase[i][type].toUpperCase() === dado.toUpperCase() ){
            return true;
        }
    }
}
export function ValidationForm(valor){
    const elementList = document.querySelectorAll(valor);

    for(var i = 0; i < elementList.length; i++){
        if( !elementList[i].validity.valid ){
            return true;
        }
    }
}