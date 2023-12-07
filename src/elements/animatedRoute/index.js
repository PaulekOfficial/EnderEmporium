// AnimatedRoute.js

import React, {useEffect, useState} from 'react';
import {Outlet, useNavigate} from 'react-router-dom';

const AnimatedRoute = ({path, element: Element}) => {
    const navigate = useNavigate();
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        setAnimate(true);
        const timeout = setTimeout(() => {
            setAnimate(false);
            navigate(path); // Programmatically navigate after animation
        }, 500); // Adjust the timeout to match your animation duration
        return () => clearTimeout(timeout);
    }, [navigate, path]);

    return <div className={`page ${animate ? 'animate' : ''}`}>{Element}</div>;
};

const AnimatedRoutes = () => {
    return <Outlet/>;
};

export {AnimatedRoute, AnimatedRoutes};
