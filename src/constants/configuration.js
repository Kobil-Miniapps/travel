const TEST_API = "";
const API_URL = window._env_ ? window._env_.API_URL : TEST_API;

const CALLBACK_URL = `${window.location.protocol}//${window.location.host}`;

export { API_URL, CALLBACK_URL };
