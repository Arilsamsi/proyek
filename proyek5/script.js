//Api QR
let qrBox = document.getElementById("qrBox");
let qrText = document.getElementById("qrText");
let qrImage = document.getElementById("qrImage");

function generateQR() {
  if (qrText.value.length > 0) {
    qrImage.src =
      "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +
      qrText.value;
    qrBox.classList.add("show-img");
  }
}
//Enter Triger
var input = document.getElementById("qrText");
input.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("myBtn").click();
  }
});
