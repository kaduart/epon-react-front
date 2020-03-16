

export const loginAutentication = (props, params) =>{
	if (localStorage.length <= 4) {
		return false;
	}
	const perfilLogin = JSON.parse(localStorage.perfilLogin);
	for (let i = 0; i < perfilLogin.length; i++) {
		if ( perfilLogin[i].email.toUpperCase() === params.email.toUpperCase() && perfilLogin[i].senha === params.senha ){
			delete perfilLogin[i]['senha'];
			props.autentication(perfilLogin[i])
			props.preferenceConfig(perfilLogin[i].preference)
			localStorage.setItem("token", perfilLogin[i].idTolken);
			return true;
		}
	};
}

export const logOut = () =>{
	localStorage.setItem("token", '');
}