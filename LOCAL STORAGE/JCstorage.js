

// Order counts per product
let burgerOrders = 10;
let pizzaOrders = 24;
let drinkOrders = 45;
let popcornOrders = 13;

// Total number of items ordered
let totalOrders = burgerOrders + pizzaOrders + drinkOrders + popcornOrders;

// Revenue calculations per product (assuming unit prices in currency, e.g., PHP)
let burgerRevenue = burgerOrders * 25;
let pizzaRevenue = pizzaOrders * 199;
let drinkRevenue = drinkOrders * 55;
let popcornRevenue = popcornOrders * 25;

// Total revenue from all items
let totalRevenue = burgerRevenue + pizzaRevenue + drinkRevenue + popcornRevenue;

// Output
console.log(burgerOrders);
console.log(pizzaOrders);
console.log(drinkOrders);
console.log(popcornOrders);
console.log(totalOrders);
console.log("₱" + totalRevenue);

const xAxis = [
    "Burger",
    "Pizza",
    "Drinks",
    "Popcorn",
]

const yAxis = [
    burgerOrders,
    pizzaOrders,
    drinkOrders,
    popcornOrders,
]

const barColor = [
    "#b91d47",
    "#00aba9",
    "#2b5797",
    "#e8c3b9",
];

const barGraph = new Chart("BarGraph", {
    type: "bar",
    data: {
        labels: xAxis,
        datasets: [{
            backgroundColor: barColor,
            data: yAxis
        }]
    },
    options: {
        legend: {display: false},
        scales: {
            yAxes: [{
                ticks: {beginAtZero: true},
            }]
        },
        title: {
        display: true,
        text: "Bar Graph Sample"
    }
    },
    
})

const pieGraph = new Chart("PieGraph", {
    type: "pie",
    data: {
        labels: xAxis,
        datasets: [{
            backgroundColor: barColor,
            data: yAxis
        }]
    },
    options: {
        title: {
                display: true,
                text: "Pie Graph Sample"
            }
    },
})



const xValues = [50,60,70,80,90,100,110,120,130,140,150];
const yValues = [7,8,8,9,9,9,10,11,14,14,15];

const lineGraph = new Chart("LineGraph", {
  type: "line",
  data: {
    labels: xValues,
    datasets: [{
      fill: false,
      lineTension: 0,
      backgroundColor: "rgba(0,0,255,1.0)",
      borderColor: "rgba(0,0,255,0.1)",
      data: yValues
    }]
  },
  options: {
    legend: {display: false},
    scales: {
      yAxes: [{ticks: {min: 6, max:16}}],
    },
    title: {
        display: true,
        text: "Line Graph Sample"
    }
  }
});