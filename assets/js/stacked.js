const stackedBar1 = ()=>{
    var stackedBar1Data = {
        labels: ["Jan","Feb","Mar","Apr","May","Jun","Jul"],
        datasets:[{
            label:'Income',
            backgroundColor: "#A3A1FB",
            data: [7.5,4.6,1.7,2.3,5.5,2.3,5],
        },{
            label:'Outcome',
            backgroundColor:"#E8E8F1",
            data: [0,-2.1,-4.9,-3,-1,0,-2.5],
        }]
    }

    var stackedBarElem = document.getElementById("stackedBar1").getContext('2d');
    var myChart = new Chart(stackedBarElem,{
        type:'bar',
        data:stackedBar1Data,
        options:{
            legend:{
                display:false
            },
            title:{

            },
            tooltips:{
                intersect:false,
            },
            scales:{
                xAxes:[{
                    gridLines:{
                        display:false,
                    },
                    stacked:true,
                }],
                yAxes:[{
                    stacked:true,
                    ticks: {
                                min:-8,
                                max:8,
                                callback: function(value, index, values) {
                               // value.substr(1,1);

                                if (value >= 0) {
                                    return '$' + value + 'k';
                                } else {
                                   return '$'+value+'k';
                                }
                            }
                        }
                }],
            }
        }
    })
} 

stackedBarElem = stackedBar1();
