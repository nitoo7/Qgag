export default function reducer(state={
    gags: [],
    fetching: false,
    fetched: false,
    error: null,
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
      case "ADD_GAG": {
        return {
          ...state,
          gags: [...state.tweets, action.payload],
        }
      }
      case "UPDATE_GAG": {
        const { id, text } = action.payload
        const newTweets = [...state.tweets]
        const tweetToUpdate = newTweets.findIndex(tweet => tweet.id === id)
        newTweets[tweetToUpdate] = action.payload;

        return {
          ...state,
          gags: newTweets,
        }
      }
      case "DELETE_GAGs": {
        return {
          ...state,
          gags: state.tweets.filter(tweet => tweet.id !== action.payload),
        }
      }
    }

    return state
}
