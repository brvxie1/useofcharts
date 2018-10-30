var grafic = document.getElementById("line-chart").getContext("2d");

var myBarChart = new Chart(grafic, {
	type: 'line',
	data:{

		labels: ["jan","fev","mar","abr","mai","jun","jul"],
		datasets: [
		{
			data:[20, 10],
			label: 'Minha Paciência',
			data: [10, 15, 60, 43, 45, 70, 2],
			backgroundColor: "transparent",
			borderColor: "rgba(77,166,253,0.84)",
			borderWidth: 3
		}
