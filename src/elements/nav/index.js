import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars, faCogs, faSignIn} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";
import $ from 'jquery';
import {useEffect, useRef, useState} from "react";

const NavBar = () => {
    const [sliderWidth, setSliderWidth] = useState(0);
    const [leftPosition, setLeftPosition] = useState(0);
    const [indexValue, setIndexValue] = useState(null);
    const sliderRef = useRef(null);

    useEffect(() => {
        setSliderWidth($('.slider-item')[0].clientWidth);
    }, []);

    useEffect(() => {
        const li = $('.slider-item');

        li.each((index, item) => {
            const $item = $(item);

            $item.on('click', function () {
                const width = $item[0].getBoundingClientRect().width;
                setSliderWidth(width);
                setIndexValue(index);
                setLeftPosition(getLeftPosition(index));
            });

            $item.on('mouseover', function () {
                const width = $item[0].getBoundingClientRect().width;
                setSliderWidth(width);
                setLeftPosition(getLeftPosition(index));
            });

            $item.on('mouseout', function () {
                setSliderWidth(li[0].clientWidth);
                setLeftPosition(0);
            });
        });
    }, [sliderWidth, leftPosition]);

    function getLeftPosition(index) {
        const li = $('.slider-item');
        let position = 0;

        for (let i = 0; i < index; i++) {
            const element = li[i];
            position += element.clientWidth + 10;
        }

        return position;
    }

    useEffect(() => {
        sliderRef.current.style.width = `${sliderWidth}px`;
        sliderRef.current.style.left = `${leftPosition}px`;
    }, [sliderWidth, leftPosition]);

    return (
        <nav className="nav">
            <div className="mobile-bars">
                <FontAwesomeIcon icon={faBars} size={"lg"} />
            </div>
            <ul className="nav-elements">
                <span className={"slider"} ref={sliderRef}></span>
                <Link to="/">
                    <li className="slider-item">
                        Strona Główna
                    </li>
                </Link>
                <Link to="/">
                    <li className="slider-item">
                        Wiadomości
                    </li>
                </Link>
                <Link to="/voucher">
                    <li className="slider-item">
                        Zrealizuj Voucher
                    </li>
                </Link>
                <Link to="/">
                    <li className="slider-item">
                        Regulamin
                    </li>
                </Link>
            </ul>

            <div className="nav-icons">
                <div className="nav-icon-item">
                    <a href="\">
                        <FontAwesomeIcon icon={faSignIn} size={"lg"} />
                    </a>
                </div>
                <div className="nav-icon-item">
                    <a href="\">
                        <FontAwesomeIcon icon={faCogs} size={"lg"} />
                    </a>
                </div>
            </div>
            <div style={{clear: "both"}}></div>
        </nav>
    )
}

export default NavBar;
