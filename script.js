const input = document.querySelector(".search");
const listItems = document.querySelectorAll(".list-item");
const info = document.querySelector(".info");

const searchEngine = (e) => {
	const text = e.target.value.toLowerCase();

	listItems.forEach((listItem) => {
		if (listItem.textContent.indexOf(text) !== -1) {
			listItem.style.display = "block";
		} else {
			listItem.style.display = "none";
		}
	});

	const areAllHidden = Array.from(listItems).every(
		(listItem) => listItem.style.display === "none"
	);

	if (areAllHidden) {
		info.style.display = "block";
	} else {
		info.style.display = "none";
	}
};

input.addEventListener("keyup", searchEngine);
