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

const state = {
  attractions: {},
  selectedAttractions: [],
};

const makeOption = (attraction, selectorString) => {
  const option = document.createElement('option');
  option.value = attraction.id;
  option.innerHTML = attraction.name;
  const select = document.getElementById(`${selectorString}`);
  select.append(option);
};

const populateAttractionsSelect = async () => {
  const data = await fetchAttractions();
  state.attractions = data;
  const { hotels, restaurants, activities } = data;
  hotels.forEach((hotel) => makeOption(hotel, 'hotels-choices'));
  restaurants.forEach((restaurant) => makeOption(restaurant, 'restaurants-choices'));
  activities.forEach((activity) => makeOption(activity, 'activities-choices'));
};

populateAttractionsSelect();

const onClick = (attractionType) => {
  const select = document.getElementById(`${attractionType}-choices`);
  const selectedId = select.value;
  const selectedAttraction = state.attractions[attractionType].find(
    (attraction) => +attraction.id === +selectedId
  );
  // const coords = selectedAttraction.place.location;
  // const marker = buildMarker(attractionType, coords);
  // marker.addTo(map);
  // map.flyTo({ center: coords, zoom: 15 });

  // If this attraction is already on state, return
  if (
    state.selectedAttractions.find(
      (attraction) => attraction.id === +selectedId && attraction.category === attractionType
    )
  ) {
    map.flyTo({ center: selectedAttraction.place.location, zoom: 13.3 });
    return;
  }

  //Build and add attraction
  buildAttractionAssets(attractionType, selectedAttraction);
};

['hotels', 'restaurants', 'activities'].forEach((attractionType) => {
  document
    .getElementById(`${attractionType}-add`)
    .addEventListener('click', () => onClick(attractionType));
});

const buildAttractionAssets = (category, attraction) => {
  // Create the Elements that will be inserted in the dom
  const removeButton = document.createElement('button');
  removeButton.className = 'remove-btn';
  removeButton.append('x');

  const itineraryItem = document.createElement('li');
  itineraryItem.className = 'itinerary-item';
  itineraryItem.append(attraction.name, removeButton);

  // Create the marker
  const marker = buildMarker(category, attraction.place.location);

  // Adds the attraction to the application state
  state.selectedAttractions.push({ id: attraction.id, category });

  //ADD TO DOM
  document.getElementById(`${category}-list`).append(itineraryItem);
  marker.addTo(map);

  // Animate the map
  map.flyTo({ center: attraction.place.location, zoom: 15 });

  removeButton.addEventListener('click', function remove() {
    // Stop listening for the event
    removeButton.removeEventListener('click', remove);

    // Remove the current attrction from the application state
    state.selectedAttractions = state.selectedAttractions.filter(
      (selected) => selected.id !== attraction.id || selected.category !== category
    );

    // Remove attraction's elements from the dom & Map
    itineraryItem.remove();
    marker.remove();

    // Animate map to default position & zoom.
    map.flyTo({ center: fullstackCoords, zoom: 12.3 });
  });
};
