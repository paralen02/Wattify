window.addEventListener('load', function() {
  if (window.location.hash === '#signup') {
    document.getElementById('flip').checked = true;
  }
});

document.getElementById('login-form').addEventListener('submit', function (e) {
  e.preventDefault();
  login();
});

document.getElementById('register-form').addEventListener('submit', function (e) {
  e.preventDefault();
  register();
});

function login() {
  var email = document.getElementById('login-email').value;
  var password = document.getElementById('login-password').value;

  if (localStorage.getItem(email) === password) {
    var userName = localStorage.getItem(email + '-name');
    var userEmail = localStorage.getItem(email + '-email');
    sessionStorage.setItem('userName', userName);
    sessionStorage.setItem('userEmail', userEmail);
    if (window.location.hash === '#subscribe') {
      window.location.href = 'pago.html';
    } else {
      Swal.fire({
        icon: "success",
        title: "Inicio de sesión exitoso",
        timerProgressBar: true,
        confirmButtonColor: "#ffb703",
        timer: 3000 
      }).then( () => {
        window.location.href = 'consumo.html';
      });
    }
  } else {
    Swal.fire({
      icon: "error",
      title: "Credenciales inválidas",
      timerProgressBar: true,
      confirmButtonColor: "#ffb703",
    }).then( ()=>{}
    )
  }
}

function register() {
  var name = document.getElementById('register-name').value;
  var email = document.getElementById('register-email').value;
  var password = document.getElementById('register-password').value;

  if (localStorage.getItem(email)) {
    Swal.fire({
      icon: "error",
      title: "El correo electrónico ya está registrado",
      timerProgressBar: true,
      confirmButtonColor: "#ffb703",
    }).then( ()=>{}
    )
  } else {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      Swal.fire({
        icon: "error",
        title: "Ingrese un correo electrónico válido",
        timerProgressBar: true,
        confirmButtonColor: "#ffb703",
      }).then( ()=>{}
      )
      return;
    }

    var nameRegex = /^[a-zA-Z\s]+$/;
    if (!nameRegex.test(name)) {
      Swal.fire({
        icon: "error",
        title: "El nombre no debe contener números",
        timerProgressBar: true,
        confirmButtonColor: "#ffb703",
      }).then( ()=>{}
      )
      return;
    }
    if (password.length < 8) {
      Swal.fire({
        icon: "error",
        title: "La contraseña debe tener al menos 8 caracteres.",
        timerProgressBar: true,
        confirmButtonColor: "#ffb703",
      }).then( ()=>{}
      )
      return;
    }
    localStorage.setItem(email, password);
    localStorage.setItem(email + '-name', name);
    localStorage.setItem(email + '-email', email);
    Swal.fire({
      icon: "success",
      title: "Registro exitoso. Ahora puede iniciar sesión",
      timerProgressBar: true,
      confirmButtonColor: "#ffb703",
    }).then( ()=>{}
    )

    document.getElementById('register-name').value = '';
    document.getElementById('register-email').value = '';
    document.getElementById('register-password').value = '';
  }
}

document.getElementById('logout-button').addEventListener('click', function () {
  var userEmail = sessionStorage.getItem('userEmail');
  localStorage.removeItem(userEmail);
  localStorage.removeItem(userEmail + '-name');
  localStorage.removeItem(userEmail + '-email');
  sessionStorage.removeItem('userName');
  sessionStorage.removeItem('userEmail');
  window.location.href = 'index.html';
});
