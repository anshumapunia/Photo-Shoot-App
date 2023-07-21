

// Theme Toggler
let sidemenu = document.querySelector("aside");
let themetoggler = document.querySelector(".theme-toggler")

themetoggler.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme-variables");
    themetoggler.querySelector("span").classList.toggle("active");
});

//On click section activation
let dash_btn = document.getElementById("menu-dash");
let doc_btn = document.getElementById("menu-doc");
let patient_btn = document.getElementById("menu-patient");
let app_btn = document.getElementById("menu-app");
let chart_btn = document.getElementById("menu-chart");


let dash_cont = document.getElementById("dash-cont");
let doc_cont = document.getElementById("doc-cont");
let patient_cont = document.getElementById("patient-cont");
let app_cont = document.getElementById("app-cont");
let chart_cont = document.getElementById("chart-cont");

dash_btn.addEventListener("click", () => {
    dash_btn.classList.add("active");
    doc_btn.classList.remove("active");
    chart_btn.classList.remove("active");
    patient_btn.classList.remove("active");
    app_btn.classList.remove("active");
    dash_cont.classList.remove("div-hide");
    doc_cont.classList.add("div-hide");
    patient_cont.classList.add("div-hide");
    app_cont.classList.add("div-hide");
    chart_cont.classList.add("div-hide");
});

chart_btn.addEventListener("click", () => {
    chart_btn.classList.add("active");
    dash_btn.classList.remove("active");
    
    doc_btn.classList.remove("active");
    patient_btn.classList.remove("active");
    app_btn.classList.remove("active");
    chart_cont.classList.remove("div-hide");
    dash_cont.classList.add("div-hide");

    doc_cont.classList.add("div-hide");
    patient_cont.classList.add("div-hide");
    app_cont.classList.add("div-hide");
});

doc_btn.addEventListener("click", () => {
    doc_btn.classList.add("active");
    chart_btn.classList.remove("active");
    dash_btn.classList.remove("active");
    patient_btn.classList.remove("active");
    app_btn.classList.remove("active");
    doc_cont.classList.remove("div-hide");
    dash_cont.classList.add("div-hide");
    chart_cont.classList.add("div-hide");
    patient_cont.classList.add("div-hide");
    app_cont.classList.add("div-hide");
});

patient_btn.addEventListener("click", () => {
    patient_btn.classList.add("active");
    dash_btn.classList.remove("active");
    chart_btn.classList.remove("active");
    doc_btn.classList.remove("active");
    app_btn.classList.remove("active");
    patient_cont.classList.remove("div-hide");
    dash_cont.classList.add("div-hide");
    doc_cont.classList.add("div-hide");
    chart_cont.classList.add("div-hide");
    app_cont.classList.add("div-hide");
});

app_btn.addEventListener("click", () => {
    app_btn.classList.add("active");
    dash_btn.classList.remove("active");
    chart_btn.classList.remove("active");
    doc_btn.classList.remove("active");
    patient_btn.classList.remove("active");
    app_cont.classList.remove("div-hide");
    dash_cont.classList.add("div-hide");
    doc_cont.classList.add("div-hide");
    chart_cont.classList.add("div-hide");
    patient_cont.classList.add("div-hide");
});


// hihiihihiiihiihihihih
const ctx = document.getElementById('myChart');

new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['users', 'Photographers'],
    datasets: [{
      label: '#',
      data: [12, 19],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});
