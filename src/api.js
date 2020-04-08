const baseURL = "http://localhost:3000";
const signInURL = `${baseURL}/sign-in`;
const guestsSignInURL = `${baseURL}/guests/sign-in`;
const guestsValidateURL = `${baseURL}/guests/validate`;
const signUpURL = `${baseURL}/users`;
const validateURL = `${baseURL}/validate`;
const propertiesURL = `${baseURL}/properties`;
const bookingURL = `${baseURL}/bookings`;
const guestBookingURL = `${baseURL}/guests`;
const jsonify = response => response.json();

const addProperty = body => {
  return post(propertiesURL, body).then(jsonify);
};

const getProperty = id => {
  return fetch(`${propertiesURL}/${id}`).then(jsonify);
};

const getProperties = () => fetch(propertiesURL).then(jsonify);

const makeBooking = bookingObj => {
  return post(bookingURL, bookingObj);
};

const getBookings = id => {
  return fetch(`${guestBookingURL}/${id}/bookings`).then(jsonify);
};

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

const signUp = body => {
  return post(signUpURL, body).then(resp => resp.json());
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

export default {
  signUp,
  guestSignIn,
  guestsValidate,
  getProperties,
  getProperty,
  makeBooking,
  getBookings
};
