// hooks/useProjects.js
import { useReducer, useEffect } from "react";
import { supabase } from "../../supabase";

const initialState = {
  data: [],
  loading: true,
  error: null,
};

function reducer(state, action) {
  switch (action.type) {
    case "LOADING": return { ...state, loading: true };
    case "SUCCESS": return { loading: false, error: null, data: action.payload };
    case "ERROR":   return { loading: false, error: action.payload, data: [] };
    default:        return state;
  }
}

export function useProjects() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ type: "LOADING" });
    supabase.from("projects").select("*")
      .then(({ data, error }) => {
        if (error) dispatch({ type: "ERROR", payload: error.message });
        else dispatch({ type: "SUCCESS", payload: data });
      });
  }, []);

  return state;
}