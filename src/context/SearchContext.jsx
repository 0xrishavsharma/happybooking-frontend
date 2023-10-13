import { createContext, useEffect, useReducer } from "react";

const INITIAL_STATE = {
	destination: JSON.parse(localStorage.getItem("destination")) || null,
	dates: JSON.parse(localStorage.getItem("dates")) || [],
	options: JSON.parse(localStorage.getItem("options")) || {
		adults: undefined,
		children: undefined,
		room: undefined,
	},
	travelingForWork:
		JSON.parse(localStorage.getItem("travelingForWork")) || false,
	priceRange: JSON.parse(localStorage.getItem("priceRange")) || [0, 10000],
};

export const SearchContext = createContext(INITIAL_STATE);

const SearchReducer = (state, action) => {
	switch (action.type) {
		case "NEW_SEARCH":
			return action.payload;
		case "RESET_SEARCH":
			return INITIAL_STATE;
		default:
			return state;
	}
};

export const SearchContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(SearchReducer, INITIAL_STATE);

	useEffect(() => {
		localStorage.setItem("destination", JSON.stringify(state.destination));
		localStorage.setItem("dates", JSON.stringify(state.dates));
		localStorage.setItem("options", JSON.stringify(state.options));
		localStorage.setItem(
			"travelingForWork",
			JSON.stringify(state.travelingForWork)
		);
	}, [state]);

	return (
		<SearchContext.Provider
			value={{
				destination: state.destination,
				dates: state.dates,
				options: state.options,
				travelingForWork: state.travelingForWork,
				dispatch,
			}}>
			{children}
		</SearchContext.Provider>
	);
};
