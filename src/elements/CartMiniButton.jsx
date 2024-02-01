import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Box from '@mui/material/Box';
import { Badge } from '@mui/material';
import {useNavigate} from "react-router-dom";

const ShoppingCartButton = () => {
    const navigate = useNavigate();

    const [hovered, setHovered] = useState(false);

    const scaleSpring = useSpring({
        transform: `scale(${hovered ? 1.1 : 1})`,
    });

    return (
        <>
            <Box
                position="fixed"
                bottom={60}
                right={60}
                zIndex={500}
                backgroundColor="primary.main"
                borderRadius={4}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                onClick={() => navigate('/shopcart')}
            >
                <animated.div
                    style={{
                        ...scaleSpring,
                        width: 100,
                        height: 100,
                        backgroundColor: 'primary.main',
                        borderRadius: 2,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: 6,
                    }}
                >
                    <ShoppingCartIcon style={{ color: '#ffffff', fontSize: 64 }} />
                </animated.div>
            </Box>
        </>
    );
};

export default ShoppingCartButton;
