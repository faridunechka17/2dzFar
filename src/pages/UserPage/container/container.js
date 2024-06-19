import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Link, useParams} from "react-router-dom";
import {f} from "../../../reduxjs/actions";

const Container = () => {
    const user = useSelector(state => state.fetchUsers.user)
    const dispatch = useDispatch()
    let {id} = useParams()

    useEffect(() => {
        dispatch(f(id))
    }, []);

    return (
        <div>
            <p>{user.name}</p>
            <p>{user.email}</p>
            <p>{user.username}</p>

            <Link to={'/'}>
                <button>home</button>
            </Link>
        </div>
    );
};

export default Container;