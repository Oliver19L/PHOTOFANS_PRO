var modal = document.getElementById('ventanaEmergente');

window.onclick = function(event){
    if(event.target == modal){
        modal.style.display = "none";
    }
}



const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs();

    
});

function checkInputs() {
	// trim to remove the whitespaces
	const usernameValue = username.value.trim();
	const emailValue = email.value.trim();
	const passwordValue = password.value.trim();
	const password2Value = password2.value.trim();
	
	if(usernameValue === '') {
		setErrorFor(username, 'Usuario no puede estar vacio.');
	} else {
		setSuccessFor(username);
	}
	
	if(emailValue === '') {
		setErrorFor(email, 'Correo no puede estar vacio');
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'Correo invalido.');
	} else {
		setSuccessFor(email);
	}
	
	if(passwordValue === '') {
		setErrorFor(password, 'Contraseña no puede estar vacia');
	} else {
		setSuccessFor(password);
	}
	
	if(password2Value === '') {
		setErrorFor(password2, 'Contraseña no puede estar vacia');
	} else if(passwordValue !== password2Value) {
		setErrorFor(password2, 'Contraseña no coincide');
	} else{
		setSuccessFor(password2);
	}
}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
	document.getElementById('submit').setAttribute('/main/index.html',baseUrl+/id/+id);
}
	
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}



function limpiar() {
    document.getElementById("username").value = "";
	document.getElementById("email").value = "";
	document.getElementById("password").value = "";
	document.getElementById("password2").value = "";
}


