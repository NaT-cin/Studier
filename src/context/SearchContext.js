import React, { createContext, useContext, useReducer } from 'react';

const SearchContext = createContext();

const initialState = {
  searchQuery: '',
  selectedSubject: null,
  tutors: [],
  loading: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_SEARCH_QUERY':
      return { ...state, searchQuery: action.payload };
    case 'SET_SELECTED_SUBJECT':
      return { ...state, selectedSubject: action.payload };
    case 'SET_TUTORS':
      return { ...state, tutors: action.payload };
    case 'SET_LOADING':
      return { ...state, loading: action.payload };
    default:
      return state;
  }
};

export const SearchContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const value = {
    state,
    dispatch,
  };

  return (
    <SearchContext.Provider value={value}>
      {children}
    </SearchContext.Provider>
  );
};

export const useSearchContext = () => {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error('useSearchContext must be used within a SearchContextProvider');
  }
  return context;
};
