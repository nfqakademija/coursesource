import axios from "axios";
import tokenObject from "../tokenObject";

export const FETCH_ASSIGNMENTS_STARTED =
  "assignments/FETCH_ASSIGNMENTS_STARTED";
export const FETCH_ASSIGNMENTS_ERROR = "assignments/FETCH_ASSIGNMENTS_ERROR";
export const FETCH_ASSIGNMENTS_RECEIVED =
  "assignments/FETCH_ASSIGNMENTS_RECEIVED";

export const CREATE_ASSIGNMENT_STARTED =
  "assignments/CREATE_ASSIGNMENT_STARTED";
export const CREATE_ASSIGNMENT_ERROR = "assignments/CREATE_ASSIGNMENT_ERROR";
export const CREATE_ASSIGNMENT_RECEIVED =
  "assignments/CREATE_ASSIGNMENT_RECEIVED";

export const FETCH_SUBMISSIONS_RECEIVED = "assignments/FETCH_SUBMISSIONS_RECEIVED";
export const GRADE_SUBMISSION_RECEIVED = "assignments/GRADE_SUBMISSION_RECEIVED";

axios.defaults.baseURL = "/";

const initialState = {
  items: [],
  loading: true,
  error: false,
  newloading: false,
  newerror: false,
  newresponse: null,
  submissions: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ASSIGNMENTS_STARTED:
      return {
        ...state,
        loading: true,
        error: false
      };
    case FETCH_ASSIGNMENTS_ERROR:
      return {
        ...state,
        loading: false,
        error: true
      };
    case FETCH_ASSIGNMENTS_RECEIVED:
      return {
        ...state,
        items: action.payload,
        loading: false,
        error: false
      };
    case CREATE_ASSIGNMENT_STARTED:
      return {
        ...state,
        newloading: true
      };
    case CREATE_ASSIGNMENT_ERROR:
      return {
        ...state,
        newloading: false,
        newresponse: action.payload,
        newerror: true
      };
    case CREATE_ASSIGNMENT_RECEIVED:
      return {
        ...state,
        newloading: false,
        newresponse: action.payload,
        newerror: false
      };
    case FETCH_SUBMISSIONS_RECEIVED: 
      return {
        ...state,
        submissions: action.payload
      }
    default:
      return state;
  }
};

export const fetchAssignments = (courseId, isFuture) => dispatch => {
  dispatch({
    type: FETCH_ASSIGNMENTS_STARTED
  });
  axios
    .get("api/assignments?course=" + courseId +
        (isFuture ? "&is_future=" + isFuture : ""),
         tokenObject())
    .then(res => {
      dispatch({
        type: FETCH_ASSIGNMENTS_RECEIVED,
        payload: res.data
      });
    })
    .catch(err => {
      if (err.response.data.message === "Invalid Token") {
        dispatch(push("/login"));
        window.localStorage.removeItem("userToken");
      }
      dispatch({
        type: FETCH_ASSIGNMENTS_ERROR
      });
    });
};

export const createAssignment = newAssignment => dispatch => {
  dispatch({
    type: CREATE_ASSIGNMENT_STARTED
  });
  axios
    .post("api/assignments", newAssignment, tokenObject())
    .then(res => {
      dispatch({
        type: CREATE_ASSIGNMENT_RECEIVED,
        payload: res.data
      });
    })
    .catch(err => {
      if (err.response.data.message === "Invalid Token") {
        dispatch(push("/login"));
        window.localStorage.removeItem("userToken");
      }
      dispatch({
        type: CREATE_ASSIGNMENT_ERROR,
        payload: err.data
      });
    });
};

export const fetchSubmissions = (assignmentId) => dispatch => {
  axios
    .get(`api/assignments/${assignmentId}/submissions`,tokenObject())
    .then(res => {
      dispatch({
        type: FETCH_SUBMISSIONS_RECEIVED,
        payload: res.data
      });
    })
    .catch(err => {
      if (err.response.data.message === "Invalid Token") {
        dispatch(push("/login"));
        window.localStorage.removeItem("userToken");
      }
    });
};

export const gradeSubmission = (submissionId, object) => dispatch => {
  axios
      .put(`api/assignments/${submissionId}/grade` , object, tokenObject())
      .then(res => {
          dispatch({
              type: GRADE_SUBMISSION_RECEIVED,
              payload: res.data
          });
      })
      .catch(err => {
          if (err.response.data.message === "Invalid Token") {
              dispatch(push("/login"));
              window.localStorage.removeItem("userToken");
          }
      });
}

