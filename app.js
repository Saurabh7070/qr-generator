const btn = document.querySelector("#btn");
const searchBox = document.querySelector("#search-box");
const qrCode = document.querySelector("#qr");

const generateQR = () => {
	let searchData = searchBox.value;
	console.log(searchData);
	searchBox.value = "";
	qrCode.src = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${searchData}`;
	qrCode.style.display = "block";
};

btn.addEventListener("click", generateQR);

searchBox.addEventListener("keypress", (evt) => {
	if (evt.keyCode == 13) {
		generateQR();
	}
});
