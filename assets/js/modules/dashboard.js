import axios from "axios";
import tokenObject from "../tokenObject";

export const FETCH_DASHBOARD_ASSIGNMENTS_RECEIVED =
  "dashboard/FETCH_DASHBOARD_ASSIGNMENTS_RECEIVED";
export const FETCH_DASHBOARD_LECTURES_RECEIVED =
  "dashboard/FETCH_DASHBOARD_LECTURES_RECEIVED";

axios.defaults.baseURL = "/";

const initialState = {
  lectures: [],
  assignments: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DASHBOARD_ASSIGNMENTS_RECEIVED:
      return {
        ...state,
        assignments: action.payload
      };
    case FETCH_DASHBOARD_LECTURES_RECEIVED:
      return {
        ...state,
        lectures: action.payload
      };
    default:
      return state;
  }
};

export const fetchDashboard = () => dispatch => {
  axios
    .get("api/assignments/get/last", tokenObject())
    .then(res => {
      dispatch({
        type: FETCH_DASHBOARD_ASSIGNMENTS_RECEIVED,
        payload: res.data
      });
    })
    .catch(err => {
      if (err.response && err.response.data.message == "Invalid Token") {
        dispatch(push("/login"));
        window.localStorage.removeItem("userToken");
      }
    });
  axios
    .get("api/lectures/get/last", tokenObject())
    .then(res => {
      dispatch({
        type: FETCH_DASHBOARD_LECTURES_RECEIVED,
        payload: res.data
      });
    })
    .catch(err => {
      if (err.response && err.response.data.message === "Invalid Token") {
        dispatch(push("/login"));
        window.localStorage.removeItem("userToken");
      }
    });
};
