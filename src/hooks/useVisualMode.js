import { useReducer, useEffect, useState } from "react";

// empty > create > show

export default function useVisualMode(initial) {
  const [history, setHistory] = useState([initial]);

  function transition(mode, replace){
    if (!replace) {
      setHistory(prev => [...prev, mode]);
    } else {
      //set history to reflect we are replacing current mode
      setHistory(prev => [...prev.slice(0, -1), mode]);
    }
  }

  function back(){
    if (history.length > 1) {
      setHistory(prev => [...prev.slice(0, prev.length - 1)]);
    }
  }

  return {
    mode: history[history.length -1],
    transition,
    back
  };
}
