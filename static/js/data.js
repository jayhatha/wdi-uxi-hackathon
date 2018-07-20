var mapMarkers = [
{
  firstName: 'Mat',
  lastName: 'Decker',
  age: 26,
  gender: 'm',
  ask: 'I just moved to the city & I am looking for a gym buddy.',
  askCategory: 'company',
  offerCategory: ['strength', 'moving', 'garden']
},
{
  firstName: 'Susan',
  lastName: 'Decker',
  age: 71,
  gender: 'f',
  ask: 'My son joined the military and I need a good person to help with some yard work.',
  askCategory: ['maintenance', 'caregiving', 'gardening'],
  offerCategory: ['advice', 'food', 'company']
},
{ firstName: 'Jacob',
  lastName: 'Sanaya',
  age: 49,
  gender: 'm',
  ask: 'I am not able to connect the laptop that I just bought to the Internet.',
  askCategory: ['tech'],
  offerCategory: ['transportation']
}
]


var geojson = {
  type: 'FeatureCollection',
  features: {
  type: 'Feature',
  geometry: {
    type: 'Point',
    coordinates: [-122.309703, 47.616006]},
  },
  firstName: 'Mat',
  lastName: 'Decker',
  age: 26,
  gender: 'm',
  ask: 'I just moved to the city & I am looking for a gym buddy.',
  askCategory: 'company',
  offerCategory: ['strength', 'moving', 'garden']
},
{
  type: 'Feature',
  geometry: {
  type: 'Point',
  coordinates: [-122.321378, 47.623485]},
},
  firstName: 'Susan',
  lastName: 'Decker',
  age: 71,
  gender: 'f',
  ask: 'My son joined the military and I need a good person to help with some yard work.',
  askCategory: ['maintenance', 'caregiving', 'gardening'],
  offerCategory: ['advice', 'food', 'company']
},
{ type: 'Feature',
  geometry: {
  type: 'Point',
  coordinates: [-122.312908, 47.622966]},
},
  firstName: 'Jacob',
  lastName: 'Sanaya',
  age: 49,
  gender: 'm',
  ask: 'I need help building the furniture I just got from IKEA.',
  askCategory: ['building'],
  offerCategory: ['transportation']
}
] }
