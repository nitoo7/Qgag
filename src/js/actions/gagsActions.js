import axios from "axios";

export function fetchGags() {
  return function(dispatch) {
    axios.get("http://localhost:3000/details")
      .then((response) => {
        dispatch({type: "FETCH_GAGS_FULFILLED", payload: response.data})
      })
      .catch((err) => {
        dispatch({type: "FETCH_GAGS_REJECTED", payload: err})
      })
  }
}

export function fetchPost(postId) {
  return function(dispatch) {
    axios.get("http://localhost:3000/details?id=" + postId)
      .then((response) => {
        dispatch({type: "FETCH_POST_FULFILLED", payload: response.data})
      })
      .catch((err) => {
        dispatch({type: "FETCH_POST_REJECTED", payload: err})
      })
  }
}

export function showGagPage(data) {
  return function(dispatch) {
    dispatch({type: "SHOW_GAG", payload: data})
  }
}

export function showGagSection() {
  return function(dispatch) {
    dispatch({type: "SHOW_GAG_SECTION", payload: null})
  }
}

