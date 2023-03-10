//Dom elements

const yearButton = document.querySelector(".year");
const monthButton = document.querySelector(".month");
const weekButton = document.querySelector(".week");
const dayButton = document.querySelector(".day");
const switchButton = document.querySelector(".switch-btn");
const switchButton2 = document.querySelector(".switch-button");
const coin1 = document.querySelector(".coin1");
const coin2 = document.querySelector(".coin2");
const coinIcon1 = document.querySelector("#coin-icon-1");
const coinIcon2 = document.querySelector("#coin-icon-2");
const rateCoinNames = document.querySelector(".rate-coin-names");
const firstCoinInput = document.querySelector("#first-coin-input");
const secondCoinInput = document.querySelector("#second-coin-input");
const calcFirstCoinName = document.querySelector(".first-coin-name");
const calcSecondCoinName = document.querySelector(".second-coin-name");
const graphToggle = document.querySelector(".graph-toggle");
const graph = document.querySelector(".graph");
const calculator = document.querySelector(".calculator");

let isGraphVisible = true;
let switchToggle = false;

//Graph creation

const chart = LightweightCharts.createChart(
  document.querySelector("#tvchart"),
  {
    width: 700,
    height: 350,
    layout: {
      textColor: "#d1d4dc",
      backgroundColor: "rgb(245, 252, 255)",
    },
    rightPriceScale: {
      scaleMargins: {
        top: 0.3,
        bottom: 0.25,
      },
      visible: false,
    },
    crosshair: {
      vertLine: {
        width: 5,
        color: "rgba(224, 227, 235, 0.1)",
        style: 0,
      },
      horzLine: {
        visible: false,
        labelVisible: false,
      },
    },
    grid: {
      vertLines: {
        color: "rgba(42, 46, 57, 0)",
      },
      horzLines: {
        color: "rgba(42, 46, 57, 0)",
      },
    },
  }
);

const areaSeries = chart.addAreaSeries({
  topColor: "rgba(38, 198, 218, 0.56)",
  bottomColor: "rgba(38, 198, 218, 0.04)",
  lineColor: "rgba(38, 198, 218, 1)",
  lineWidth: 2,
  crossHairMarkerVisible: false,
});

//Switching coins for exchange rates function

function switchExchangeRates(arrayData) {
  return arrayData.map((item) => ({
    time: item.time,
    value: 1 / item.value,
  }));
}

//Temporariry data for the exchange rates

let dataYear = [
  { time: "2018-10-19", value: 26.19 },
  { time: "2018-10-22", value: 25.87 },
  { time: "2018-10-23", value: 25.83 },
  { time: "2018-10-24", value: 25.78 },
  { time: "2018-10-25", value: 25.82 },
  { time: "2018-10-26", value: 25.81 },
  { time: "2018-10-29", value: 25.82 },
  { time: "2018-10-30", value: 25.71 },
  { time: "2018-10-31", value: 25.82 },
  { time: "2018-11-01", value: 25.72 },
  { time: "2018-11-02", value: 25.74 },
  { time: "2018-11-05", value: 25.81 },
  { time: "2018-11-06", value: 25.75 },
  { time: "2018-11-07", value: 25.73 },
  { time: "2018-11-08", value: 25.75 },
  { time: "2018-11-09", value: 25.75 },
  { time: "2018-11-12", value: 25.76 },
  { time: "2018-11-13", value: 25.8 },
  { time: "2018-11-14", value: 25.77 },
  { time: "2018-11-15", value: 25.75 },
  { time: "2018-11-16", value: 25.75 },
  { time: "2018-11-19", value: 25.75 },
  { time: "2018-11-20", value: 25.72 },
  { time: "2018-11-21", value: 25.78 },
  { time: "2018-11-23", value: 25.72 },
  { time: "2018-11-26", value: 25.78 },
  { time: "2018-11-27", value: 25.85 },
  { time: "2018-11-28", value: 25.85 },
  { time: "2018-11-29", value: 25.55 },
  { time: "2018-11-30", value: 25.41 },
  { time: "2018-12-03", value: 25.41 },
  { time: "2018-12-04", value: 25.42 },
  { time: "2018-12-06", value: 25.33 },
  { time: "2018-12-07", value: 25.39 },
  { time: "2018-12-10", value: 25.32 },
  { time: "2018-12-11", value: 25.48 },
  { time: "2018-12-12", value: 25.39 },
  { time: "2018-12-13", value: 25.45 },
  { time: "2018-12-14", value: 25.52 },
  { time: "2018-12-17", value: 25.38 },
  { time: "2018-12-18", value: 25.36 },
  { time: "2018-12-19", value: 25.65 },
  { time: "2018-12-20", value: 25.7 },
  { time: "2018-12-21", value: 25.66 },
  { time: "2018-12-24", value: 25.66 },
  { time: "2018-12-26", value: 25.65 },
  { time: "2018-12-27", value: 25.66 },
  { time: "2018-12-28", value: 25.68 },
  { time: "2018-12-31", value: 25.77 },
  { time: "2019-01-02", value: 25.72 },
  { time: "2019-01-03", value: 25.69 },
  { time: "2019-01-04", value: 25.71 },
  { time: "2019-01-07", value: 25.72 },
  { time: "2019-01-08", value: 25.72 },
  { time: "2019-01-09", value: 25.66 },
  { time: "2019-01-10", value: 25.85 },
  { time: "2019-01-11", value: 25.92 },
  { time: "2019-01-14", value: 25.94 },
  { time: "2019-01-15", value: 25.95 },
  { time: "2019-01-16", value: 26.0 },
  { time: "2019-01-17", value: 25.99 },
  { time: "2019-01-18", value: 25.6 },
  { time: "2019-01-22", value: 25.81 },
  { time: "2019-01-23", value: 25.7 },
  { time: "2019-01-24", value: 25.74 },
  { time: "2019-01-25", value: 25.8 },
  { time: "2019-01-28", value: 25.83 },
  { time: "2019-01-29", value: 25.7 },
  { time: "2019-01-30", value: 25.78 },
  { time: "2019-01-31", value: 25.35 },
  { time: "2019-02-01", value: 25.6 },
  { time: "2019-02-04", value: 25.65 },
  { time: "2019-02-05", value: 25.73 },
  { time: "2019-02-06", value: 25.71 },
  { time: "2019-02-07", value: 25.71 },
  { time: "2019-02-08", value: 25.72 },
  { time: "2019-02-11", value: 25.76 },
  { time: "2019-02-12", value: 25.84 },
  { time: "2019-02-13", value: 25.85 },
  { time: "2019-02-14", value: 25.87 },
  { time: "2019-02-15", value: 25.89 },
  { time: "2019-02-19", value: 25.9 },
  { time: "2019-02-20", value: 25.92 },
  { time: "2019-02-21", value: 25.96 },
  { time: "2019-02-22", value: 26.0 },
  { time: "2019-02-25", value: 25.93 },
  { time: "2019-02-26", value: 25.92 },
  { time: "2019-02-27", value: 25.67 },
  { time: "2019-02-28", value: 25.79 },
  { time: "2019-03-01", value: 25.86 },
  { time: "2019-03-04", value: 25.94 },
  { time: "2019-03-05", value: 26.02 },
  { time: "2019-03-06", value: 25.95 },
  { time: "2019-03-07", value: 25.89 },
  { time: "2019-03-08", value: 25.94 },
  { time: "2019-03-11", value: 25.91 },
  { time: "2019-03-12", value: 25.92 },
  { time: "2019-03-13", value: 26.0 },
  { time: "2019-03-14", value: 26.05 },
  { time: "2019-03-15", value: 26.11 },
  { time: "2019-03-18", value: 26.1 },
  { time: "2019-03-19", value: 25.98 },
  { time: "2019-03-20", value: 26.11 },
  { time: "2019-03-21", value: 26.12 },
  { time: "2019-03-22", value: 25.88 },
  { time: "2019-03-25", value: 25.85 },
  { time: "2019-03-26", value: 25.72 },
  { time: "2019-03-27", value: 25.73 },
  { time: "2019-03-28", value: 25.8 },
  { time: "2019-03-29", value: 25.77 },
  { time: "2019-04-01", value: 26.06 },
  { time: "2019-04-02", value: 25.93 },
  { time: "2019-04-03", value: 25.95 },
  { time: "2019-04-04", value: 26.06 },
  { time: "2019-04-05", value: 26.16 },
  { time: "2019-04-08", value: 26.12 },
  { time: "2019-04-09", value: 26.07 },
  { time: "2019-04-10", value: 26.13 },
  { time: "2019-04-11", value: 26.04 },
  { time: "2019-04-12", value: 26.04 },
  { time: "2019-04-15", value: 26.05 },
  { time: "2019-04-16", value: 26.01 },
  { time: "2019-04-17", value: 26.09 },
  { time: "2019-04-18", value: 26.0 },
  { time: "2019-04-22", value: 26.0 },
  { time: "2019-04-23", value: 26.06 },
  { time: "2019-04-24", value: 26.0 },
  { time: "2019-04-25", value: 25.81 },
  { time: "2019-04-26", value: 25.88 },
  { time: "2019-04-29", value: 25.91 },
  { time: "2019-04-30", value: 25.9 },
  { time: "2019-05-01", value: 26.02 },
  { time: "2019-05-02", value: 25.97 },
  { time: "2019-05-03", value: 26.02 },
  { time: "2019-05-06", value: 26.03 },
  { time: "2019-05-07", value: 26.04 },
  { time: "2019-05-08", value: 26.05 },
  { time: "2019-05-09", value: 26.05 },
  { time: "2019-05-10", value: 26.08 },
  { time: "2019-05-13", value: 26.05 },
  { time: "2019-05-14", value: 26.01 },
  { time: "2019-05-15", value: 26.03 },
  { time: "2019-05-16", value: 26.14 },
  { time: "2019-05-17", value: 26.09 },
  { time: "2019-05-20", value: 26.01 },
  { time: "2019-05-21", value: 26.12 },
  { time: "2019-05-22", value: 26.15 },
  { time: "2019-05-23", value: 26.18 },
  { time: "2019-05-24", value: 26.16 },
  { time: "2019-05-28", value: 26.23 },
];

let dataDay = dataYear.slice(-1);

let dataWeek = dataYear.slice(-7);

let dataMonth = dataYear.slice(-31);

function switchCoins() {
  dataWeek = switchExchangeRates(dataWeek);
  dataMonth = switchExchangeRates(dataMonth);
  dataDay = switchExchangeRates(dataDay);
  dataYear = switchExchangeRates(dataYear);

  if (dayButton.classList.contains("clicked")) {
    areaSeries.setData(dataDay);
  }
  if (weekButton.classList.contains("clicked")) {
    areaSeries.setData(dataWeek);
  }
  if (monthButton.classList.contains("clicked")) {
    areaSeries.setData(dataMonth);
  }
  if (yearButton.classList.contains("clicked")) {
    areaSeries.setData(dataYear);
  }
  const coinText = coin1.innerText;
  coin1.innerText = coin2.innerText;
  coin2.innerText = coinText;

  const coinIcon1Path = coinIcon1.src.split("/");
  const coinIcon2Path = coinIcon2.src.split("/");
  const coinTemp = coinIcon1.src;
  coinIcon1.src = coinIcon2.src;
  coinIcon2.src = coinTemp;

  const rateName1 = rateCoinNames.innerText.split("/")[0];
  const rateName2 = rateCoinNames.innerText.split("/")[1];

  rateCoinNames.innerText = `${rateName2}/${rateName1}`;

  const CalcFirstCoinHtml = calcFirstCoinName.innerHTML;
  calcFirstCoinName.innerHTML = calcSecondCoinName.innerHTML;
  calcSecondCoinName.innerHTML = CalcFirstCoinHtml;
}

switchButton.addEventListener("click", (e) => {
  e.preventDefault;
  switchCoins();
});

switchButton2.addEventListener("click", (e) => {
  e.preventDefault;
  switchCoins();
});
//initial setting data for the graph

areaSeries.setData(dataYear);

//Data changes by year-week-month-day clicks

document.querySelector(".middle-right").addEventListener("click", (e) => {
  e.preventDefault;
  const targetName = e.target.className;

  if (targetName === "year") {
    areaSeries.setData(dataYear);
  } else if (targetName === "month") {
    areaSeries.setData(dataMonth);
  } else if (targetName === "week") {
    areaSeries.setData(dataWeek);
  } else if (targetName === "day") {
    areaSeries.setData(dataDay);
  }
});

function addRemoveClicked(a, b, c, d) {
  a.classList.remove("clicked");
  b.classList.remove("clicked");
  c.classList.remove("clicked");
  d.classList.add("clicked");
}

// button click style changes

document.querySelector(".year").addEventListener("click", (e) => {
  e.preventDefault;
  areaSeries.setData(dataYear);
  addRemoveClicked(monthButton, weekButton, dayButton, yearButton);
});

document.querySelector(".month").addEventListener("click", (e) => {
  e.preventDefault;
  areaSeries.setData(dataMonth);
  addRemoveClicked(yearButton, weekButton, dayButton, monthButton);
});

document.querySelector(".week").addEventListener("click", (e) => {
  e.preventDefault;
  areaSeries.setData(dataWeek);
  addRemoveClicked(yearButton, monthButton, dayButton, weekButton);
});

document.querySelector(".day").addEventListener("click", (e) => {
  e.preventDefault;
  areaSeries.setData(dataDay);
  addRemoveClicked(yearButton, weekButton, monthButton, dayButton);
});

//Graph applied to the page

document.body.style.position = "relative";

const legend = document.createElement("div");
legend.classList.add("legend");
document.body.appendChild(legend);

const firstRow = document.createElement("div");
firstRow.innerText = "ETC USD 7D VWAP";
firstRow.style.color = "white";
legend.appendChild(firstRow);

function pad(n) {
  const s = "0" + n;
  return s.substr(s.length - 2);
}

chart.subscribeCrosshairMove((param) => {
  if (param.time) {
    const price = param.seriesPrices.get(areaSeries);

    const decimalPlaces = price.toString().split(".")[1].length;

    if (decimalPlaces > 2) {
      document.querySelector(".coin-rate").innerText = price.toFixed(4);
    } else {
      document.querySelector(".coin-rate").innerText = price;
    }

    firstRow.innerText = "ETC USD 7D VWAP" + "  " + price.toFixed(2);
  } else {
    firstRow.innerText = "ETC USD 7D VWAP";
  }
});

firstCoinInput.addEventListener("change", (e) => {
  e.preventDefault();
  secondCoinInput.value =
    Number(firstCoinInput.value) * dataYear[dataYear.length - 1].value;
});

graphToggle.addEventListener("click", (e) => {
  if (isGraphVisible) {
    graph.style.display = "none";
    calculator.style.margin = "0 auto";
    graphToggle.innerHTML = '<i class="fa-thin fa-chart-simple"></i>';
  } else {
    graph.style.display = "block";
    graphToggle.innerHTML = '<i class="fa-solid fa-chart-simple"></i>';
  }
  isGraphVisible = !isGraphVisible;
});
