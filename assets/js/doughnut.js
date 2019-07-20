const doughnutChart1 = function doughnutChart1(){
    var doughnut = document.getElementById('chartDoughnut').getContext('2d');
    var myChart = new Chart(doughnut, {
        type: 'doughnut',
        data:{
            datasets: [{
                data: [48,52],
                backgroundColor:["#A3A1FB","#EDECFE"],
                hoverBackgroundColor:["#A3A1FB","#EDECFE"],

            }],

            labels: [
                'Saved',
                'Total Spent',
            ]
        },
        options:{   
             rotation: (-0.5*Math.PI) - (30 /180 * Math.PI),
                cutoutPercentage:80,


             legend:{
                display:false,
             },
        },
    });

}

doughnut = doughnutChart1();

