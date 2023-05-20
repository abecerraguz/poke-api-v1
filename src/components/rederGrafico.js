let myChart

const rederGrafico = ( nombre, estado ) =>{
    console.log('Poderes--->', estado)
    let baseStats = estado.map( element => element.base_stat)
    let statsName = estado.map( element => element.stat.name)

    const colors = {
        purple: {
          default: "rgba(149, 76, 233, 1)",
          half: "rgba(149, 76, 233, 0.5)",
          quarter: "rgba(149, 76, 233, 0.25)",
          zero: "rgba(149, 76, 233, 0)"
        },
        indigo: {
          default: "rgba(80, 102, 120, 1)",
          quarter: "rgba(80, 102, 120, 0.25)"
        }
    
    };
  
    let data = {
        labels: statsName,
        options: {
          aspectRatio: 2,
          options: {
            layout: {
              padding: 10
            },
            responsive: true,
            legend: {
              display: false
            },
        
            scales: {
              xAxes: [
                {
                  gridLines: {
                    display: true
                  },
                  ticks: {
                    padding: 10,
                    autoSkip: false,
                    maxRotation: 15,
                    minRotation: 15
                  }
                }
              ],
              yAxes: [
                {
                  scaleLabel: {
                    display: true,
                    labelString: "Weight in KG",
                    padding: 10
                  },
                  gridLines: {
                    display: true,
                    color: colors.indigo.quarter
                  },
                  ticks: {
                    beginAtZero: false,
                    max: 63,
                    min: 57,
                    padding: 10
                  }
                }
              ]
            }
          }
        },
        datasets: [
        {
         label: `${nombre}`,
         data: baseStats,
         backgroundColor: [
           'rgba(255, 99, 132, 0.2)',
           'rgba(255, 159, 64, 0.2)',
           'rgba(255, 205, 86, 0.2)',
           'rgba(75, 192, 192, 0.2)',
           'rgba(54, 162, 235, 0.2)',
           'rgba(153, 102, 255, 0.2)'
         ],
         borderColor: [
           'rgb(255, 99, 132)',
           'rgb(255, 159, 64)',
           'rgb(255, 205, 86)',
           'rgb(75, 192, 192)',
           'rgb(54, 162, 235)',
           'rgb(153, 102, 255)'
         ],
         borderWidth: 1
       }
       
    ]
       
    }
    if (myChart) {
        myChart.destroy();
    }
    myChart = new Chart('myChart', { type:'bar', data } )
}
export default rederGrafico