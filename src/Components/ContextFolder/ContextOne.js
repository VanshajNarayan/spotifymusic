import { createContext, useContext, useEffect, useReducer } from "react";
import { ReducerFxOne } from "../ReducerFolder/ReducerOne";
import MusicData from "../ApiFolder/MusicApi";

export const Data = createContext();
export const Dispatch = createContext();

export const DataProvider = ({ children }) => {

  const initialState = {
    allMusicData : [],
    selectedData : [],
    playListData : [],
    popularData : [],
    selectSong : [],
    icons : false,
  };

  const [state, dispatch] = useReducer(ReducerFxOne, initialState);

  function apiFx() {
    const data = MusicData;
    dispatch({ type: "load", payload: data });
  };

  useEffect(() => {
    apiFx();
  }, [])


  return <Data.Provider value = {state} >
    <Dispatch.Provider value = {dispatch} >
      {children}
    </Dispatch.Provider>
  </Data.Provider>
};


export function useData() {
  return useContext(Data);
};

export function useDispatch() {
  return useContext(Dispatch);
};