fetch("data.json")
    .then(response => response.json())
    .then(data => createBars(data));

function createBars(data) {
    const bars = document.querySelector(".chart__bars").children;

    for (let i = 0; i < bars.length; i++) {
        const number =  document.createElement("p");
        const bar = document.createElement("p");
        const day = document.createElement("p");

        bar.addEventListener("click", () => {
            bar.classList.toggle("chart__bar--active");
            number.classList.toggle("chart__number--active");
        });

        number.textContent = "$" + data[i].amount;
        number.classList.add("chart__number");

        bar.classList.add("chart__bar");
        const height = 3 * data[i].amount;
        bar.style.height = height + "px";

        day.textContent = data[i].day;

        bars[i].appendChild(number);
        bars[i].appendChild(bar);
        bars[i].appendChild(day);
    }
}

