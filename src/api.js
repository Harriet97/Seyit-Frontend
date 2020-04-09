const baseURL = "http://localhost:3000";
// const signInURL = `${baseURL}/sign-in`;
const guestsSignInURL = `${baseURL}/guests/sign-in`;
const guestsValidateURL = `${baseURL}/guests/validate`;
const guestsBookingsURL = `${baseURL}/guests/bookings`;
const guestFavouritesURL = `${baseURL}/guests/favourites`;
const hostsSignInURL = `${baseURL}/hosts/sign-in`;
const hostsValidateURL = `${baseURL}/hosts/validate`;
const hostsBookingsURL = `${baseURL}/hosts/bookings`;
const hostsPropertiesURL = `${baseURL}/hosts/properties`;
// const signUpURL = `${baseURL}/users`;
// const validateURL = `${baseURL}/validate`;
const propertiesURL = `${baseURL}/properties`;
const bookingURL = `${baseURL}/bookings`;
// const guestURL = `${baseURL}/guests`;
const favouriteURL = `${baseURL}/guest_favourites`;
const jsonify = response => response.json();

const get = (url, token) => {
  return token ? fetch(url, { headers: { Authorization: token } }) : fetch(url);
};

const post = (url, data) => {
  const configurationObject = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  };
  return fetch(url, configurationObject);
};

const getProperties = () => fetch(propertiesURL).then(jsonify);

const getProperty = id => {
  return fetch(`${propertiesURL}/${id}`).then(jsonify);
};

const guestSignIn = data => {
  return post(guestsSignInURL, data)
    .then(jsonify)
    .then(data => {
      if (data.token) localStorage.token = data.token;
      return data;
    });
};
const guestsValidate = () => {
  return get(guestsValidateURL, localStorage.token).then(jsonify);
};

const getGuestFavourites = () => {
  return get(guestFavouritesURL, localStorage.token).then(jsonify);
};

const getGuestBookings = () => {
  return get(guestsBookingsURL, localStorage.token).then(jsonify);
};
const makeBooking = bookingObj => {
  return post(bookingURL, bookingObj);
};

const makeGuestFavourite = favouriteObj => {
  return post(favouriteURL, favouriteObj);
};

// const signUp = body => {
//   return post(signUpURL, body).then(resp => resp.json());
// };

const hostSignIn = data => {
  return post(hostsSignInURL, data)
    .then(jsonify)
    .then(data => {
      if (data.token) localStorage.host_token = data.token;
      return data;
    });
};
const hostsValidate = () => {
  return get(hostsValidateURL, localStorage.host_token).then(jsonify);
};
const getHostProperties = () => {
  return get(hostsPropertiesURL, localStorage.host_token).then(jsonify);
};
const getHostBookings = () => {
  return get(hostsBookingsURL, localStorage.host_token).then(jsonify);
};

export default {
  getHostBookings,
  getHostProperties,
  getGuestBookings,
  getGuestFavourites,
  getProperties,
  getProperty,

  // signUp,
  guestSignIn,
  guestsValidate,
  hostSignIn,
  hostsValidate,
  makeBooking,
  makeGuestFavourite
};
