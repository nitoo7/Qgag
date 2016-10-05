import axios from "axios";

export function fetchGags() {
  return function(dispatch) {
    axios.get("https://qgagservices.herokuapp.com/details")
      .then((response) => {
        dispatch({type: "FETCH_GAGS_FULFILLED", payload: response.data})
      })
      .catch((err) => {
        dispatch({type: "FETCH_GAGS_REJECTED", payload: err})
      })
  }
}

export function showGagPage(data) {
  return function(dispatch) {
    console.log('action....', data)
    dispatch({type: "SHOW_GAG", payload: data})
  }
}

