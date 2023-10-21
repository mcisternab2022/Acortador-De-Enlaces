const shortBtn = document.getElementById('short-btn');
const reloadBtn = document.getElementById('reload-btn');

shortBtn.addEventListener('click', shortenUrl);

function shortenUrl()   {
  var originalURL = document.getElementById("originalURL").value;
  var apiUrl = "https://tinyurl.com/api-create.php?url=" + encodeURIComponent(originalURL);
  shortenedUrlTextarea = document.getElementById("shortenedURL");

  fetch(apiUrl).then(response => response.text()).then
  (data =>{
    if(data != 'Error'){
      shortenedUrlTextarea.value = data;
    } else {
      shortenedUrlTextarea.value = "Error: no se puede acortar la URL!";
    }
  }).catch(error => {
    shortenedUrlTextarea.value = "Error: no se puede acortar la URL!";
  });
}

reloadBtn.addEventListener('click',() => {
  location.reload();
});

function copiarTexto() {
  var textarea = document.getElementById("shortenedURL");
  textarea.select();
  document.execCommand('copy');
  textarea.setSelectionRange(0, 0);

  var mensaje = document.getElementById("mensaje");
  mensaje.style.display = "block";

  setTimeout(function() {
      mensaje.style.display = "none";
  }, 4000); // Ocultar el mensaje después de 2 segundos
}