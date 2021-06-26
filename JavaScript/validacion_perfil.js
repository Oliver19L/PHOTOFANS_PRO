
var btn = document.getElementById('ingresar');
var clave = document.getElementById('contraseña');
var usuario = document.getElementById('usuario');

function redirect()
{ 
    window.location = "perfil.html" // cambiar la direccion de la pagina
}

btn.addEventListener('click', function(evt){

      if(clave.value === ''){

          console.log('el campo contraseña es obligatorio')
          evt.preventDefault();
          return false;

      }else if(usuario.value === 'usuario'){

          console.log('el campo de usuario es obligatorio')
          evt.preventDefault();
          redirect();
          return false;

      }

});