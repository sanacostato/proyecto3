console.log("Entro al main.js");
const tblDatos = document.getElementById("tblDatos");
const ctx = document.getElementById('myChart').getContext('2d');

function loadData(){
    console.log("entro a cargar data");
    fetch("http://ucamp.alumnos.dev4humans.com.mx/Main/endpoint_alumnos")
    .then(response => response.json())
    .then(result => {
        console.log();
        const labels_for_chart = result.data.map(item => item.nombre);
        const data_for_chart = result.data.map (item => item.calificacion);

        const myChart = new Chart (ctx, {
          type: 'line',
  data: data = {
    labels: labels_for_chart,
    datasets: [{
      label: 'Notas',
      data: data_for_chart,
      fill: false,
      borderColor: 'rgba(0, 255, 0, 100)',
    }]
  },
  options: {
    animations: {
      tension: {
        duration: 1000,
        easing: 'linear',
        from: 1,
        to: 0,
        loop: true
      }
    },
    scales: {
      y: { // defining min and max so hiding the dataset does not change scale range
        min: 3,
        max: 10
      }
    }
  }
        });

        tblDatos.innerHTML="";
        for(const registro of result.data){
              let tr = `
              <tr>
              <td>${registro.id}</td>
              <td>${registro.nombre}</td>
              <td>${registro.calificacion}</td>
        
              </tr> `;
          tblDatos.innerHTML += tr;
        }
    }).catch(error => {
        console.log(error);
    })
}
loadData();