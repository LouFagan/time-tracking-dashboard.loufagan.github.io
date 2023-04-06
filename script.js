const daily = document.querySelector(".daily");
const weekly = document.querySelector(".weekly");
const monthly = document.querySelector(".monthly");
const hours = document.querySelectorAll(".hour");
const previous = document.querySelectorAll(".previous");

daily.addEventListener("click", () => {
	fetch("./data.json")
		.then((response) => response.json())
		.then((data) => {
			// console.log(data);
			// console.log(chosenNumber());
			for (let i = 0; i < hours.length; i++) {
				if (`${data[i].timeframes.daily.current}` > 1) {
					hours[i].innerHTML = `${data[i].timeframes.daily.current} hrs`;
				} else {
					hours[i].innerHTML = `${data[i].timeframes.daily.current} hr`;
				}
				if (`${data[i].timeframes.daily.previous}` > 1) {
					previous[i].innerHTML =
						"Yesterday - " + `${data[i].timeframes.daily.previous} hrs`;
				} else {
					previous[i].innerHTML =
						"Yesterday - " + `${data[i].timeframes.daily.previous} hr`;
				}
			}
		});
});
weekly.addEventListener("click", () => {
	fetch("./data.json")
		.then((response) => response.json())
		.then((data) => {
			for (let i = 0; i < hours.length; i++) {
				if (`${data[i].timeframes.weekly.current}` > 1) {
					hours[i].innerHTML = `${data[i].timeframes.weekly.current}  hrs`;
				} else {
					hours[i].innerHTML = `${data[i].timeframes.weekly.current} hr`;
				}
				if (`${data[i].timeframes.weekly.previous}` > 1) {
					previous[i].innerHTML =
						"Last week - " + `${data[i].timeframes.weekly.previous} hrs `;
				} else {
					previous[i].innerHTML =
						"Last week - " + `${data[i].timeframes.weekly.previous} hr `;
				}
			}
		});
});
monthly.addEventListener("click", () => {
	fetch("./data.json")
		.then((response) => response.json())
		.then((data) => {
			for (let i = 0; i < hours.length; i++) {
				if (`${data[i].timeframes.monthly.current}` > 1) {
					hours[i].innerHTML = `${data[i].timeframes.monthly.current} hrs`;
				} else {
					hours[i].innerHTML = `${data[i].timeframes.monthly.current} hr`;
				}

				if (`${data[i].timeframes.monthly.previous}` > 1) {
					previous[i].innerHTML =
						"Last month - " + `${data[i].timeframes.monthly.previous} hrs`;
				} else {
					previous[i].innerHTML =
						"Last month - " + `${data[i].timeframes.monthly.previous} hr`;
				}
			}
		});
});
