import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { loadAnyJoke, selectJokesInfo } from "./jokes-slice";

export const JokesList = () => {
    const dispatch = useDispatch();
    const jokes = useSelector((state) => state.jokes.joke);
    const { status, error } = useSelector(selectJokesInfo);

    useEffect(() => {
        dispatch(loadAnyJoke());
    }, [dispatch]);

    return (
        <>
            {error && <h2>Can't fetch data</h2>}
            {status === 'loading' && <h2>Loading...</h2>}

            {status === 'received' && <h2>{jokes}</h2>}
        </>
    )
}
