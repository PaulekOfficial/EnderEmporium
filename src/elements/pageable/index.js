import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowLeft, faArrowRight, faBasketShopping} from "@fortawesome/free-solid-svg-icons";

const PageableElement = () => {
    return (
        <div className="pageable">
            <div className="arrow arrow-disabled">
                <FontAwesomeIcon icon={faArrowLeft} size={"lg"}/>
            </div>
            <a href="/">
                <div className="page-number active-page">
                    <p>1</p>
                </div>
            </a>
            <a href="/">
                <div className="page-number">
                    <p>2</p>
                </div>
            </a>
            <a href="/">
                <div className="page-number">
                    <p>3</p>
                </div>
            </a>
            <div className="arrow">
                <FontAwesomeIcon icon={faArrowRight} size={"lg"}/>
            </div>
        </div>
    )
}

export default PageableElement;