// useInterval.js
import { useEffect, useRef } from 'react';

export const useInterval = (callback, delay) => {
	const savedCallback = useRef();

	// Remember the latest callback if it changes
	useEffect(() => {
		savedCallback.current = callback;
	}, [callback]);

	// Set up the interval
	useEffect(() => {
		if (delay !== null) {
			let id = setInterval(() => savedCallback.current(), delay);
			return () => clearInterval(id);
		}
	}, [delay]);
};
