export default function reducer(state={
    gags: [],
    fetching: false,
    fetched: false,
    fetchPost: false,
    error: null,
    displayGagPage: false,
    gagInfo: null
  }, action) {

    switch (action.type) {
      case "FETCH_GAGS": {
        return {...state, fetching: true}
      }
      case "FETCH_GAGS_REJECTED": {
        return {...state, fetching: false, error: action.payload}
      }
      case "FETCH_GAGS_FULFILLED": {
        return {
          ...state,
          fetching: false,
          fetched: true,
          gags: action.payload,
        }
      }
      case "FETCH_POST_REJECTED": {
         return {...state, fetchPost: false, error: action.payload}
      }
      case "FETCH_POST_FULFILLED": {
        return {
          ...state,
          fetching: false,
          fetched: true,
          fetchPost: true,
          gagInfo: action.payload,
        }
      }
      case "SHOW_GAG": {
        return {
          ...state,
          displayGagPage: true,
          gagInfo: action.payload
        }
      }
      case "SHOW_GAG_SECTION": {
        return {
          ...state,
          displayGagPage: false,
          gagInfo: null
        }
      }      
    }

    return state
}
