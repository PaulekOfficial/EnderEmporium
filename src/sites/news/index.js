import lawIcon from "../../images/AJAX-plyn-uniwersalny-BOOST-ZESTAW-MIX-3x-1L.jpg";
import {useEffect, useState} from "react";
import $ from "jquery";
import NewsElement from "../../elements/newsElement";

function NewsSite() {
    const [newsData, setNewsData] = useState([]);

    useEffect(() => {
        $('.items').addClass('fadeIn');

        fetchData();
    }, []);

    const fetchData = () => {
        $.ajax({
            url: 'http://localhost:8080/api/v1/news/',
            method: 'GET',
            dataType: 'json',
            success: function (result) {
                const newsData = result._embedded.newsEntryList;
                setNewsData(newsData);
            },
            error: function (error) {
                console.error('Error fetching data:', error);
            }
        });
    };

    return (
        <>
            <div className={`items maximize-items`}>
                <div className="elements" style={{padding: "20px"}}>
                    {newsData.length === 0 ? (
                        <>
                            <img src={lawIcon} alt={""}
                                 style={{maxWidth: "294px", maxHeight: "220px", padding: "20px"}}/>
                            <h1 style={{width: "100%", marginTop: "5px", marginBottom: "5px"}}>
                                AJAX
                            </h1>
                            <p style={{width: "100%"}}>
                                Przykładowe skrypty ajax
                            </p>
                        </>
                    ) : (
                        newsData.map((news, index) => (
                            <NewsElement
                                key={"news-id-" + index}
                                title={news.title}
                                tags={news.tags}
                                description={news.description}
                            />
                        ))
                    )}
                </div>
            </div>
        </>
    );
}

export default NewsSite;