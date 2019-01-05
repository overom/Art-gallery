const datas = fetch('/admin/chart', {
  hearders: 'application/json',
  method: 'GET',
})
  .then(res => res.json())
  .then(res => res);

window.addEventListener('load', () => {
  datas.then(datas => {
    const ctx = document.getElementById('chartjscategory');
    const myChart = new Chart(ctx, {
      type: 'pie',
      data: {
        labels: datas.categoryAvailable,
        datasets: [
          {
            label: '# of Votes',
            data: datas.categoryArray,
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
              'rgba(255,99,132,1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: true,
        animation: {
          easing: 'easeOutBounce',
          animateScale: true,
          duration: 2000,
        },
        title: {
          display: true,
          text: 'Oeuvres en ligne',
          position: 'left',
          fontColor: 'rgb(44, 61, 78)',
          fontSize: 33,
        },
        legend: {
          position: 'bottom',
          labels: {
            fontSize: 18,
            fontColor: 'rgb(44, 61, 78)',
          },
        },
        tooltips: {
          xPadding: 8,
          yPadding: 8,
          bodyFontSize: 16,
          backgroundColor: '#ffffff',
          bodyFontColor: 'rgb(44, 61, 78)',
          titleFontFamily: 'Helvetica',
        },
      },
    });
  });
});
