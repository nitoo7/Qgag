import axios from "axios";

export function fetchGags() {
  return function(dispatch) {
    axios.get("https://qgagservices.herokuapp.com/details")
      .then((response) => {
        console.log('*******->', response);
        dispatch({type: "FETCH_GAGS_FULFILLED", payload: response.data})
      })
      .catch((err) => {
        dispatch({type: "FETCH_GAGS_REJECTED", payload: err})
      })
  }
}

export function addTweet(id, text) {
  return {
    type: 'ADD_TWEET',
    payload: {
      id,
      text,
    },
  }
}

export function updateTweet(id, text) {
  return {
    type: 'UPDATE_TWEET',
    payload: {
      id,
      text,
    },
  }
}

export function deleteTweet(id) {
  return { type: 'DELETE_TWEET', payload: id}
}
