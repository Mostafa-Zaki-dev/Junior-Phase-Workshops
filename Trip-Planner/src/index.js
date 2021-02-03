import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken =
  'pk.eyJ1IjoibW9zdGFmYS16YWtpIiwiYSI6ImNra3BpMDF6NDJlOHcydnRkZm11Nm4ybTcifQ.efjez4xeMaY8eWXt7SR4iQ';

const map = new mapboxgl.Map({
  container: 'map', // container id name in index.html file
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: 'mapbox://styles/mapbox/streets-v10', // mapbox has lots of different map styles available.
});
