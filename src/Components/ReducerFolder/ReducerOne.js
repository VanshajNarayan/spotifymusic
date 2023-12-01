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

      // eslint-disable-next-line
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
      if (state.playListData.includes(action.payload.selectSong)) {
        let indexNum = state.playListData.indexOf(action.payload.selectSong);
        if (indexNum !== 9) {
          if (action.payload.selectionIcon === "shuffle") {
            nextData = state.playListData[action.payload.x];
          } else {
            nextData = state.playListData[indexNum + 1];
          };
        };
      } else if (state.popularData.includes(action.payload.selectSong)) {
        let indexNum = state.popularData.indexOf(action.payload.selectSong);
        if (indexNum !== 19) {
          if (action.payload.selectionIcon === "shuffle") {
            nextData = state.popularData[action.payload.y];
          } else {
            nextData = state.popularData[indexNum + 1];
          };
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
      if (state.playListData.includes(action.payload.selectSong)) {
        let indexNum = state.playListData.indexOf(action.payload.selectSong);
        if (indexNum > 0) {
          if (action.payload.selectionIcon === "shuffle") {
            nextDataSong = state.playListData[action.payload.x];
          } else {
            nextDataSong = state.playListData[indexNum - 1];
          };
        };
      } else if (state.popularData.includes(action.payload.selectSong)) {
        let indexNum = state.popularData.indexOf(action.payload.selectSong);
        if (indexNum > 0) {
          if (action.payload.selectionIcon === "shuffle") {
            nextDataSong = state.popularData[action.payload.y];
          } else {
            nextDataSong = state.popularData[indexNum - 1];
          };
        };
      };
      if (nextDataSong !== null) {
        return {
          ...state,
          selectSong: nextDataSong,
        };
      };

      // eslint-disable-next-line
    case "searchSong":
      let playListSearchedSongs = state.playListData.filter(data => data.songName.includes(action.payload));
      let popularSearchedSongs = state.popularData.filter(data => data.songName.includes(action.payload));
      return {
        ...state,
        popularSearchSong: popularSearchedSongs,
        playlistSearchSong: playListSearchedSongs,
      };

      // eslint-disable-next-line
    default:
      return state;
  };
};