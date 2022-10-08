console.log("Entro al main.js");
const tblDatos = document.getElementById("tblDatos");
const cxt = document.getElementById('myChart').getContext('2d');

function loadData(){
    console.log("entro a cargar data");
    fetch("https://fedeperin-harry-potter-api.herokuapp.com/libros")
    .then(response => response.json())
    .then(result => {
        console.log(id);
        const labels_for_chart = result.data.map(item => item.libro);
        const data_for_chart = result.data.map (item => item.fecha_de_lanzamiento);

        const myChart = new Chart(cxt,{
            
                type: 'bubble',
                data: {
                    datasets: [{
                        label: 'First Dataset',
                        data: [{
                          x: 20,
                          y: 30,
                          r: 15
                        }, {
                          x: 40,
                          y: 10,
                          r: 10
                        }],
                        backgroundColor: 'rgb(255, 99, 132)'
                      }]
                },
                options: {}
        }
            )
        // tblDatos.innerHTML="";
        // for(const registro of result.data){
        //     let tr
        // }
    }).catch(error => {
        console.log(error);
    })
}
loadData();