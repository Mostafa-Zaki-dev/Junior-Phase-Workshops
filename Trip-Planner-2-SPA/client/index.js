import mapboxgl from 'mapbox-gl';
import buildMarker from './marker.js';
import fetchAttractions from './api';

mapboxgl.accessToken =
  'pk.eyJ1IjoibW9zdGFmYS16YWtpIiwiYSI6ImNra3BpMDF6NDJlOHcydnRkZm11Nm4ybTcifQ.efjez4xeMaY8eWXt7SR4iQ';

const fullstackCoords = [-74.009, 40.705]; // NY
// const fullstackCoords = [-87.6320523, 41.8881084] // CHI

const map = new mapboxgl.Map({
  container: 'map',
  center: fullstackCoords, // FullStack coordinates
  zoom: 12, // starting zoom
  style: 'mapbox://styles/mapbox/streets-v10', // mapbox has lots of different map styles available.
});

const marker = buildMarker('activities', fullstackCoords);
marker.addTo(map);

const makeOption = (attraction, selectorString) => {
  const option = document.createElement('option');
  option.value = attraction.id;
  option.innerHTML = attraction.name;
  const select = document.getElementById(`${selectorString}`);
  select.append(option);
};

const populateAttractionsSelect = async () => {
  const data = await fetchAttractions();
  console.log('data >>>>', data);
  const { hotels, restaurants, activities } = data;
  hotels.forEach((hotel) => makeOption(hotel, 'hotels-choices'));
  restaurants.forEach((restaurant) => makeOption(restaurant, 'restaurants-choices'));
  activities.forEach((activity) => makeOption(activity, 'activities-choices'));
};

populateAttractionsSelect();
