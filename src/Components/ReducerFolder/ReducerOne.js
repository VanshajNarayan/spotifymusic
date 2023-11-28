export const ReducerFxOne = (state, action) => {
  switch (action.type) {

    case "load":
      return {
        ...state,
        allMusicData: action.payload,
        selectedData: [action.payload[0]],
        playListData: action.payload[0].playLists,
        popularData: action.payload[0].popularSongs,
        selectSong: action.payload[0].playLists[0],
      };

    case "setMusic":
      const selectedMusic = state.allMusicData.filter((data) => data.photo === action.payload);
      const playListApi = selectedMusic.map((data) => data.playLists);
      const popularApi = selectedMusic.map((data) => data.popularSongs);
      const playLists = playListApi[0];
      const populars = popularApi[0];
      const selectGana = playLists[0];
      return {
        ...state,
        selectedData: selectedMusic,
        playListData: playLists,
        popularData: populars,
        selectSong: selectGana,
      };

    case "setMusicPlayerSong":
      return {
        ...state,
        selectSong: action.payload,
      };

    case "playNextSong":
      let nextData = null;
      if (state.playListData.includes(action.payload)) {
        let indexNum = state.playListData.indexOf(action.payload);
        if (indexNum !== 9) {
          nextData = state.playListData[indexNum + 1];
        };
      } else if (state.popularData.includes(action.payload)) {
        let indexNum = state.popularData.indexOf(action.payload);
        if (indexNum !== 19) {
          nextData = state.popularData[indexNum + 1];
        };
      };
      if (nextData !== null) {
        return {
          ...state,
          selectSong: nextData,
        };
      };

      // eslint-disable-next-line
    case "setPlayIcon":
      return {
        ...state,
        icons: true,
      };

      // eslint-disable-next-line
    case "setPauseIcon":
      return {
        ...state,
        icons: false,
      };

      // eslint-disable-next-line
    case "playPreviousSong":
      let nextDataSong = null;
      if (state.playListData.includes(action.payload)) {
        let indexNum = state.playListData.indexOf(action.payload);
        if (indexNum > 0) {
          nextDataSong = state.playListData[indexNum - 1];
        };
      } else if (state.popularData.includes(action.payload)) {
        let indexNum = state.popularData.indexOf(action.payload);
        if (indexNum > 0) {
          nextDataSong = state.popularData[indexNum - 1];
        };
      };
      if (nextDataSong !== null) {
        return {
          ...state,
          selectSong: nextDataSong,
        };
      };

      // eslint-disable-next-line
    default:
      return state;
  };
};