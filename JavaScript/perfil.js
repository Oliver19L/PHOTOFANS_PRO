let botonsubir = document.getElementById("subirimagen");
let imagencambio = document.getElementById("elegirimagen");
let perfilchico = document.getElementById("elegirimagenlogo");

botonsubir.onchange = () => {
    let reader = new FileReader();
    reader.readAsDataURL(botonsubir.files[0]);
    reader.onload = () => {
        imagencambio.setAttribute("src",reader.result);
        perfilchico.setAttribute("src",reader.result);
    }
 //   fileName.textContent = uploadButton.files[0].name;
}

