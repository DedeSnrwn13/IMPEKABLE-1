var ctx = document.getElementById("chartjs-0").getContext('2d');
var gradientbiru = ctx.createLinearGradient(0, 0, 0, 330);
    gradientbiru.addColorStop(0, 'rgba(84,216,255,0.7)');   
    gradientbiru.addColorStop(1, 'rgba(255,255,255,0)');
var gradientungu = ctx.createLinearGradient(0,0,0,330);
    gradientungu.addColorStop(0, 'rgba(167,167,255,0.7)');   
    gradientungu.addColorStop(1, 'rgba(167,167,255,0)');

var myLineChart = new Chart(ctx, {
    type: 'line',
    data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            datasets: [{
	         	label: 'Total Views',
	         	data: [15, 10, 15, 18, 15, 24],//ini datanya,
	         	backgroundColor: gradientbiru,//warna bg chart,
	         	borderColor: "#a7a7ff", // warna garis,
	         	borderWidth: 2 //ketebalan chartnya
        },
        {
	        	label: 'Product Sold',
	         	data: [19, 8, 16, 13, 17, 10],//ini datanya,
	         	backgroundColor:  gradientungu,//warna bg chart,
	         	borderColor: "#54d8ff", // warna garis,
	         	borderWidth: 2 //ketebalan chartnya
        }
        ],

        

	},
	 options : {
		   label:{
		        position: 'bottom'
		   }
		}

});


