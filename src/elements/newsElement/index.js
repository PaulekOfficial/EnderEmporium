import lawIcon from "../../images/AJAX-plyn-uniwersalny-BOOST-ZESTAW-MIX-3x-1L.jpg";

function NewsElement({ image = lawIcon, title = "Generic title", tags = ["TEST"], description = "Generic description" }) {
    const newsTags = tags.map((tag, index) => {
        return (
            <>
                <b key={"news-id-" + index}> {tag} </b>
                {(index !== tags.length - 1) && (<span>/</span>)}
            </>
        );
    });

    return (
        <>
            <div className={"news-element"}>
                <div className={"news-element-header"}>
                    <img src={image} alt={""}
                         style={{maxWidth: "100px", maxHeight: "220px", padding: "20px"}}/>
                    <div className={"news-element-header-title"}>
                        <h2 style={{width: "100%"}}>{title}</h2>
                        <p>
                            {newsTags}
                        </p>
                    </div>
                </div>
                <div className={"news-element-text"}>
                    <p>
                        {description}
                    </p>
                </div>
            </div>
        </>
    )
}

export default NewsElement;
