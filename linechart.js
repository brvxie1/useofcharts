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
		},
		
		{
			label: 'Mortalidade',
			data: [6, 5, 57, 43, 10, 70, 43],
			backgroundColor: "transparent",
			borderColor: "rgba(66,233,54,0.84)",
			borderWidth: 3
		},
		{
			label: 'Crescimento Populacional',
			data: [6, 5, 34, 21, 11, 22, 33	],
			backgroundColor: "transparent",
			borderColor: "red",
			borderWidth: 3
		}
		]	
	},
/*	options: {
		layout: {
			padding: {
					left: 0,
					right: 0,
					top: 50,
					bottom: 0
			}
		}
	}*/
});
