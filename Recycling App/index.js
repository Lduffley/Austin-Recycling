/* TODO : Add short maps url to each object */
let d = new Date();
let time = d.getHours();
let today = d.getDay();

let currentLocation = [];

/*********LOCATIONS*****************************************/
let locationsArray = [
  {
    name: 'Austin Recycle',
    address: '2514 Business Center Dr',
    open: 7,
    close: 15,
    days: [2, 4, 6],

    currentDistance: [],
    latitude: 30.213440,
    longitude: -97.738140,
    lonlat: '30.213440, -97.738140',
    url: 'http://www.austintexas.gov/dropoff'
  },
  {
    name: 'Recycling Center',
    address: '9405 Dessau Rd, Austin',
    open: 7,
    close: 19,
    days: [3, 5, 0],

    currentDistance: [],
    latitude: 30.350960,
    longitude: -97.674890,
    lonlat: '30.350960, -97.674890',
    url: 'http://www.recyclingcenteraustin.com/'
  },
  {
    name: 'CMC Recycling',
    address: '1704 W Howard Ln',
    open: 8,
    close: 17,
    days: [2, 4, 6],

    currentDistance: [],
    latitude: 30.428110,
    longitude: -97.678330,
    lonlat: '30.428110, -97.678330',
    url: 'https://www.cmcrecycling.com/locations/texas/austinnorth'
  },
  {
    name: 'Austin Metal & Iron Co.',
    address: '1000 E 4th St, Austin',
    open: 7,
    close: 19,
    days: [2, 4, 6],

    currentDistance: [],
    latitude: 30.263570,
    longitude: -97.732650,
    lonlat: '30.263570, -97.732650',
    url: 'https://austinmetalandiron.com/'
  },
  {
    name: 'Resource Recovery Center',
    address: '3810 Todd Ln, Austin',
    open: 9,
    close: 17,
    days: [2, 4, 6],

    currentDistance: [],
    latitude: 30.213630,
    longitude: -97.736560,
    lonlat: '30.213630, -97.736560',
    url: 'http://www.austintexas.gov/dropoff'
  },
  {
    name: 'Break it Down',
    address: '3308 Duke Rd',
    open: 9,
    close: 17,
    days: [2, 4, 6],

    currentDistance: [],
    latitude: 30.322840,
    longitude: -97.663130,
    lonlat: '30.322840, -97.663130',
    url: 'https://breakitdownaustin.com/'
  },
  {
    name: 'Austin Wood Recycling',
    address: '17158 Johnsons Mill Road',
    open: 7,
    close: 19,
    days: [2, 4, 6],

    currentDistance: [],
    latitude: 30.544310,
    longitude: -97.773190,
    lonlat: '30.544310, -97.773190',
    url: 'http://www.austinwoodrecycling.com/'
  },

  {
    name: 'Gardner Metal Recycling',
    address: '8410 S Congress Ave',
    open: 8,
    close: 19,
    days: [2, 4, 6],

    currentDistance: [],
    latitude: 30.178710,
    longitude: -97.783480,
    lonlat: '30.178710, -97.783480',
    url: 'https://www.gardnermetals.com/'
  },
  {
    name: "All American Recycling",
    address: "9202 FM 812",
    open: 7,
    close: 19,
    days: [3, 5, 0],

    currentDistance: [],
    latitude: 30.161030,
    longitude: -97.685020,
    lonlat: '30.161030, -97.685020',
    url: 'https://www.allamericanrecycle.com/'
  },
  {
    name: 'Brush Recycling Center',
    address: '22244 Barn Tavern Road',
    open: 7,
    close: 19,
    days: [2, 4, 6],

    currentDistance: [],
    latitude: 30.504760,
    longitude: -97.699810,
    lonlat: '30.504760, -97.699810',
    url: 'https://www.roundrocktexas.gov/departments/parks-and-recreation/forestry/recycling-pick/'
  },
  {
    name: 'Balcones Resources',
    address: '9301 Johnny Morris Rd',
    open: 7,
    close: 19,
    days: [3, 5, 0],

    currentDistance: [],
    latitude: 30.326850,
    longitude: -97.626360,
    lonlat: '30.326850, -97.626360',
    url: 'https://www.balconesresources.com/'
  },
  {
    name: 'Brush Recycling Center',
    address: '310 Deep Wood Dr',
    open: 7,
    close: 19,
    days: [3, 5, 0],

    currentDistance: [],
    latitude: 30.504761,
    longitude: -97.699806,
    lonlat: '30.504761, -97.699806',
    url: 'https://www.roundrocktexas.gov/departments/parks-and-recreation/forestry/recycling-pick/'
  },
  {
    name: 'Z-Tech Global Solutions',
    address: '8812 Shoal Creek Blvd',
    open: 7,
    close: 19,
    days: [3, 5, 0],

    currentDistance: [],
    latitude: 30.375470,
    longitude: -97.735560,
    lonlat: '30.375470, -97.735560',
    url: 'http://www.ztechglobal.net'
  },

];

let sortedLocationsArray = [];

getDistance = () => {
  const la = locationsArray;
  const sla = sortedLocationsArray;

  for (let i = 0; i < la.length; i++) {
    let lat1 = currentLocation[0];
    let lon1 = currentLocation[1];
    let lat2 = la[i].latitude;
    let lon2 = la[i].longitude;

    // Algorithm for Distance calculation
    distance = (lat1, lon1, lat2, lon2, unit) => {
      if (lat1 == lat2 && lon1 == lon2) {
        return 0;
      } else {
        let radlat1 = (Math.PI * lat1) / 180;
        let radlat2 = (Math.PI * lat2) / 180;
        let theta = lon1 - lon2;
        let radtheta = (Math.PI * theta) / 180;
        let dist =
          Math.sin(radlat1) * Math.sin(radlat2) +
          Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
        if (dist > 1) {
          dist = 1;
        }
        dist = Math.acos(dist);
        dist = (dist * 180) / Math.PI;
        dist = dist * 60 * 1.1515;
        //if (unit == "K") { dist = dist * 1.609344 }
        //if (unit == "N") { dist = dist * 0.8684 }

        return dist;
      }
    };

    // Prepends distance onto location's current distance Array
    la[i].currentDistance.unshift(distance(lat1, lon1, lat2, lon2));

    //Sorts locations by distance least to greatest
    la.sort(function(a, b) {
      return a.currentDistance[0] - b.currentDistance[0];
    });
  }

  // Prepends (to account for location watching) SORTED locations to an array
  sla.unshift(la);
  //console.log(sla);

  // Calls isOpen() in Loop from sorted locations
  if (sla.length == 1) {
    isOpenLoop();
  }
};

// Finds current locations and watches for more accurate data
geoFindMe = callback => {
  if (!navigator.geolocation) {
    console.log('geolocation not working');
  }

  success = position => {
    //var latitude = 36.775843;
    //var longitude = -77.079327;
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;

    currentLocation.unshift(latitude, longitude);
    //console.log(latitude, longitude);

    callback();
  };

  navigator.geolocation.watchPosition(success);
};

//  Current hour is less than or more than && is open on this day
isOpen = e => {
  const sla = sortedLocationsArray[0];
  const loc = sla[e];

  const renderClosed = container => {
    const closedRender = `
    <div class="location__card--closed">
        <h2 class="location__card--title">${loc.name}</h2>
        <div class="location__closed">
          <div class="location__closed--text">closed</div>
        </div>
        <div class="location__miles">
          <div class="location__miles--text">
            You are ${loc.currentDistance[0].toFixed(0)} miles away
          </div>
        </div>
        <div class="location__gps">
          <a target="_blank" href="${loc.url}">
            <div class="location__gps--link">
              go
            </div>
          </a>
        </div>
      </div>
    `;

    container.insertAdjacentHTML('beforeend', closedRender);
  };
  const renderOpen = container => {
    const openRender = `
      
      <div class="location__card--open">
          <h2 class="location__card--title">${loc.name}</h2>
          <div class="location__open">
            <div class="location__open--text">Open</div>
          </div>
          <div class="location__miles">
            <div class="location__miles--text">
              You are ${loc.currentDistance[0].toFixed(0)} miles away
            </div>
          </div>
          <div class="location__gps">
            <a target="_blank" href="${loc.url}">
              <div class="location__gps--link">
                go
              </div>
            </a>
          </div>
        </div>
      
      `;

    container.insertAdjacentHTML('beforeend', openRender);
  };
  if (
    //prettier-ignore
    (time >= loc.open &&
    time < loc.close) &&
    (today == loc.days[0] || today == loc.days[1] || today == loc.days[2])
  ) {
    const container = document.querySelector('.container');

    //OPEN
    renderOpen(container);
  } else {
    const container = document.querySelector('.container');

    //CLOSED
    renderClosed(container);
  }
};

isOpenLoop = () => {
  for (let i = 0; i < locationsArray.length; i++) {
    isOpen(i);
  }
};

// Calls to find and then calculate distance
geoFindMe(getDistance);
