import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars, faCircleQuestion, faCogs, faSignIn} from "@fortawesome/free-solid-svg-icons";
import {Link, useNavigate} from "react-router-dom";
import $ from 'jquery';
import {useEffect, useRef, useState} from "react";

const NavBar = () => {
    const navigate = useNavigate();

    const [sliderWidth, setSliderWidth] = useState(0);
    const [leftPosition, setLeftPosition] = useState(0);
    const [indexValue, setIndexValue] = useState(0);
    const sliderRef = useRef(null);
    const indexValueRef = useRef(indexValue);


    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
    })

    const handleScroll = () => {
        const nav = $('.nav');
        const offset= window.scrollY;
        if(offset > 120 ){
            if (!nav.hasClass('stickyNav')) {
                nav.addClass('stickyNav');
                nav.css({ opacity: 0, top: '-50px' });
                nav.animate({ opacity: 1, top: '0' }, 500);
            }
        } else {
            nav.removeClass("stickyNav");
        }
    }

    useEffect(() => {
        setSliderWidth($('.slider-item')[indexValueRef.current].clientWidth);
    }, []);

    useEffect(() => {
        const li = $('.slider-item');

        li.each((index, item) => {
            const $item = $(item);

            $item.on('click', function () {
                const width = $item[0].getBoundingClientRect().width;
                setSliderWidth(width);

                setIndexValue(index);
                indexValueRef.current = index;

                setLeftPosition(getLeftPosition(index));

                handeNavClick(index);
            });

            $item.on('mouseover', function () {
                const width = $item[0].getBoundingClientRect().width;
                setSliderWidth(width);
                setLeftPosition(getLeftPosition(index));
            });

            $item.on('mouseout', function () {
                setSliderWidth(li[indexValueRef.current].clientWidth);
                setLeftPosition(getLeftPosition(indexValueRef.current));
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

    useEffect(() => {
        const handleResize = () => {
            const windowWidth = $(window).width();
            const nav = $('.nav');
            const container = $('.container');
            const navElements = $('.nav-elements');
            const mobileBars = $('.mobile-bars');

            if (windowWidth < 1150) {
                navElements.hide();
                mobileBars.show();

                container.css({
                    margin: 0,
                    width: '100%',
                });
                nav.css({
                    borderRadius: 0,
                    width: '100%',
                });
            } else {
                navElements.show();
                mobileBars.hide();

                container.css({
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    display: 'block',
                    marginTop: '2vh',
                    width: '80%',
                    height: 'auto',
                });
                nav.css({
                    borderRadius: '',
                    width: '',
                });
            }
        };

        const handleMobileBarsClick = () => {
            const navElements = $('.nav-elements');
            navElements.slideToggle();
        };

        $(window).on('resize', handleResize);

        handleResize();

        $('.mobile-bars').on('click', handleMobileBarsClick);

        return () => {
            $(window).off('resize', handleResize);
            $('.mobile-bars').off('click', handleMobileBarsClick);
        };
    }, []);

    function handeNavClick(index) {
        switch (index) {
            case 0:
                navigate("/");
                break;
            case 1:
                navigate("/news");
                break;
            case 2:
                navigate("/voucher");
                break;
            case 3:
                navigate("/rules")
                break;
        }
    }

    return (
        <nav className="nav">
            <div className="mobile-bars">
                <FontAwesomeIcon icon={faBars} size={"lg"} />
            </div>
            <ul className="nav-elements">
                <span className={"slider"} ref={sliderRef}></span>
                <li key={"main-site"} className={"slider-item"}>
                    Strona Główna
                </li>
                <li key={"news-site"} className="slider-item">
                    Wiadomości
                </li>
                <li key={"voucher-site"} className="slider-item">
                    Zrealizuj Voucher
                </li>
                <li key={"rules-site"} className="slider-item">
                    Regulamin
                </li>
            </ul>

            <div className="nav-icons">
                <div className="nav-icon-item">
                    <a href="/login">
                        <FontAwesomeIcon icon={faSignIn} size={"lg"} />
                    </a>
                </div>
                <div className="nav-icon-item">
                    <a href="/help">
                        <FontAwesomeIcon icon={faCircleQuestion} size={"lg"} />
                    </a>
                </div>
            </div>
            <div style={{clear: "both"}}></div>
        </nav>
    )
}

export default NavBar;
