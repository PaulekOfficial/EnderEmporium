import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars, faCircleQuestion, faSignIn} from "@fortawesome/free-solid-svg-icons";
import {useLocation, useNavigate} from "react-router-dom";
import $ from 'jquery';
import {useEffect, useRef, useState} from "react";

const NavBar = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const [stickNav, setStickNav] = useState(false);
    const [sliderWidth, setSliderWidth] = useState(0);
    const [leftPosition, setLeftPosition] = useState(0);
    const [indexValue, setIndexValue] = useState(0);
    const sliderRef = useRef(null);
    const indexValueRef = useRef(indexValue);

    let pathToLink = {
        "/": 0,
        "/news": 1,
        "/voucher": 2,
        "/rules": 3,
    };

    useEffect(() => {
        if (location.pathname === "/help") {
            return;
        }

        setIndexValue(pathToLink[location.pathname]);
        indexValueRef.current = pathToLink[location.pathname];
        setLeftPosition(getLeftPosition(pathToLink[location.pathname]));
    }, []);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
    })

    const handleScroll = () => {
        const nav = $('.nav');
        const offset = window.scrollY;
        const windowWidth = $(window).width();
        if ((offset > 120) && (windowWidth < 1150)) {
            stickStickyNav();
            setStickNav(true);
        } else {
            removeStickyNav();
            setStickNav(false);
        }
    }

    function stickStickyNav() {
        const nav = $('.nav');
        if (!nav.hasClass('stickyNav')) {
            $('.App-header').css({
                marginBottom: "60px",
            });

            nav.addClass('stickyNav');
            nav.css({opacity: 0, top: '-50px'});
            nav.animate({opacity: 1, top: '0'}, 500);
        }
    }

    function removeStickyNav() {
        const nav = $('.nav');
        if (nav.hasClass('stickyNav')) {
            $('.App-header').css({
                marginBottom: 0,
            });

            nav.removeClass('stickyNav');
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
                if (stickNav) {
                    return;
                }

                const width = $item[0].getBoundingClientRect().width;
                setSliderWidth(width);

                setIndexValue(index);
                indexValueRef.current = index;

                setLeftPosition(getLeftPosition(index));

                handeNavClick(index);
            });

            $item.on('mouseover', function () {
                if (stickNav) {
                    return;
                }

                const width = $item[0].getBoundingClientRect().width;
                setSliderWidth(width);
                setLeftPosition(getLeftPosition(index));
            });

            $item.on('mouseout', function () {
                if (stickNav) {
                    return;
                }

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

    const handleMobileBarsClick = () => {
        const navElements = $('.nav-elements');
        if (!navElements.hasClass('mobile-elements')) {
            return;
        }

        navElements.slideToggle();
    };

    useEffect(() => {
        const handleResize = () => {
            const windowWidth = $(window).width();
            const nav = $('.nav');
            const container = $('.container');
            const navElements = $('.nav-elements');
            const mobileBars = $('.mobile-bars');
            const slider = $('.slider');

            if (windowWidth < 1150) {
                navElements.hide();
                slider.hide();
                mobileBars.show();

                navElements.addClass("mobile-elements");

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
                slider.show();
                mobileBars.hide();

                navElements.removeClass("mobile-elements");

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
                navigate("/rules");
                break;
        }
    }

    return (
        <>
            <nav className="nav">
                <div className="mobile-bars">
                    <FontAwesomeIcon icon={faBars} size={"lg"}/>
                </div>
                <ul className="nav-elements">
                    <span className={"slider"} ref={sliderRef}></span>
                    <li key={"main-site"} className={"slider-item"} onClick={() => {
                        handleMobileBarsClick()
                    }}>
                        Strona Główna
                    </li>
                    <li key={"news-site"} className={"slider-item"} onClick={() => {
                        handleMobileBarsClick()
                    }}>
                        Wiadomości
                    </li>
                    <li key={"voucher-site"} className={"slider-item"} onClick={() => {
                        handleMobileBarsClick()
                    }}>
                        Zrealizuj Voucher
                    </li>
                    <li key={"rules-site"} className={"slider-item"} onClick={() => {
                        handleMobileBarsClick()
                    }}>
                        Regulamin
                    </li>
                </ul>

                <div className="nav-icons">
                    <div className="nav-icon-item" onClick={() => navigate("/login")} style={{cursor: "pointer"}}>
                        <FontAwesomeIcon icon={faSignIn} size={"lg"}/>
                    </div>
                    <div className="nav-icon-item" onClick={() => navigate("/help")} style={{cursor: "pointer"}}>
                        <FontAwesomeIcon icon={faCircleQuestion} size={"lg"}/>
                    </div>
                </div>
                <div style={{clear: "both"}}></div>
            </nav>
        </>
    )
}

export default NavBar;
