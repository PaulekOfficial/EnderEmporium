import lawIcon from "../../images/AJAX-plyn-uniwersalny-BOOST-ZESTAW-MIX-3x-1L.jpg";
import {useEffect, useState} from "react";
import jsonData from './news.json';
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
            url: {jsonData},
            method: 'GET',
            dataType: 'json',
            success: function (result) {
                setNewsData(result);
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
                            <img src={lawIcon} alt={""} style={{maxWidth: "294px", maxHeight: "220px", padding: "20px"}}/>
                            <h1 style={{width: "100%", marginTop: "5px", marginBottom: "5px"}}>
                                AJAX
                            </h1>
                            <p style={{ width: "100%" }}>
                                Przykładowe skrypty ajax
                            </p>
                        </>
                    ) : (
                        newsData.map((news, index) => (
                            <NewsElement
                                key={index}
                                title={news.title}
                                tags={news.tags}
                                description={news.description}
                            />
                        ))
                    )}

                    {/*<NewsElement*/}
                    {/*    title={"EnderEmporeum - Start sklepu"}*/}
                    {/*    tags={["EnderEmporeum", "Sklep", "Start"]}*/}
                    {/*    description={"Ostatnie przygotowania do uruchomienia systemu sklepu Ender Emporeum są już w toku, a ekipa\n" +*/}
                    {/*    "                        zaangażowana w ten projekt gorączkowo pracuje, by zapewnić klientom niezapomniane doświadczenia\n" +*/}
                    {/*    "                        zakupowe. Zespół EnderEmporeum ogłosił oficjalny start swojego sklepu, który ma miejsce za kilka\n" +*/}
                    {/*    "                        dni."}*/}
                    {/*/>*/}
                    {/*<NewsElement />*/}
                </div>
            </div>
        </>
    );
}

export default NewsSite;