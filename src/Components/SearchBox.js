import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { getSearchAsync, resetSearch } from '../Redux/searchSlice';

const SearchBox = () => {
    const [val, setVal] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();

    // Clears input on page change
    useEffect(() => {
        if (location.pathname !== "/Search")
            setVal("")
    }, [location]);

    useEffect(() => {
        if (!val) {
            navigate("../Movies", { replace: true });
        } else if (val) {
            navigate({
                pathname: "../Search",
                search: val,
            }, { replace: true });
            dispatch(resetSearch());
            dispatch(getSearchAsync(val));
        };
    }, [val]);

    const handleClearForm = (e) => {
        e.preventDefault();
        setVal("");
    };

    return (
        <form className="col col-sm-3 col-md-8 col-lg-3 me-4 align-self-center">
            <input
                type="text"
                className="form-control"
                placeholder="Search Here"
                value={val}
                onChange={e => setVal(e.target.value)}
            />
            <button onClick={(e) => handleClearForm(e)}>&#10006;</button>
        </form>
    );
};

export default SearchBox;