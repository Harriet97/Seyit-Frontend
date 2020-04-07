const baseURL = "http://localhost:3000";
const signInURL = `${baseURL}/sign-in`;
const signUpURL = `${baseURL}/users`;
const validateURL = `${baseURL}/validate`;
const propertiesURL = `${baseURL}/properties`;
const jsonify = response => response.json();

const addProperty = body => {
  return post(propertiesURL, body).then(jsonify);
};

const getProperty = id => {
  return fetch(`${propertiesURL}/${id}`).then(jsonify);
};

const getProperties = () => fetch(propertiesURL).then(jsonify);

const get = (url, token) => {
  return token ? fetch(url, { headers: { AUTHORIZATION: token } }) : fetch(url);
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
const signIn = data => {
  return post(signInURL, data).then(jsonify);
};
const validate = token => {
  return get(validateURL, token).then(jsonify);
};

export default {
  signUp,
  signIn,
  validate,
  getProperties,
  getProperty
};
