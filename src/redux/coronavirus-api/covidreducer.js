// use reducers to fetch the stats and return a state

const FETCH_STATS = 'covid/FETCH_STATS';
const initialState = [];

// action creator with payload argument for reducer

const fetchStats = (payload) => ({
  type: FETCH_STATS,
  payload,
});

// create function and recieve previous state

const covidReducer = (state = initialState, action = { type: 'action' }) => {
  switch (action.type) {
    case FETCH_STATS:
      return [...state, ...action.payload];
    default:
      return state;
  }
};

// export stats and reducer

export { fetchStats, covidReducer };
