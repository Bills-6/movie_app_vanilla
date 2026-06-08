const inputSearch = document.getElementById("input-search");

document.addEventListener("keydown", (isKey) => {
	if (isKey.key === "/") {
		inputSearch.focus();
	}
});