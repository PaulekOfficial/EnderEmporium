import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowLeft, faArrowRight, faBasketShopping} from "@fortawesome/free-solid-svg-icons";
import avatar from "../../images/skinmc-avatar.png";
import {Link} from "react-router-dom";

const PageableElement = ({pageSize = 1, currentPage = 1}) => {
    const pages = [];

    for (let i = 1; i < pageSize + 1; i++) {
        pages.push(
            <Link to={`/page/${i}`}>
                <div className={`page-number ${currentPage === i ? 'active-page' : ''}`}>
                    <p>{i}</p>
                </div>
            </Link>
        );
    }

    return (
        <div className="pageable">
            <Link to={currentPage > 1 ? `/page/${currentPage - 1}` : '#'}>
                <div className={`arrow ${currentPage > 1 ? '' : 'arrow-disabled'}`}>
                    <FontAwesomeIcon icon={faArrowLeft} size={"lg"}/>
                </div>
            </Link>
            {pages}
            <Link to={currentPage < pageSize ? `/page/${currentPage + 1}` : '#'}>
                <div className={`arrow ${currentPage < pageSize ? '' : 'arrow-disabled'}`}>
                    <FontAwesomeIcon icon={faArrowRight} size={"lg"}/>
                </div>
            </Link>
        </div>
    )
}

export default PageableElement;