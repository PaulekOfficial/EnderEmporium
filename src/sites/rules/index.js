import lawIcon from "../../images/law-book.png";
import {useEffect, useState} from "react";
import $ from "jquery";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCode, faMailBulk, faMessage, faPerson, faPlaneDeparture, faUser} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";

function RulesSite() {
    useEffect(() => {
        $('.items').addClass('fadeIn');
    }, []);

    return (
        <>
            <div className={`items maximize-items`}>
                <div className="elements" style={{padding: "20px"}}>
                    <img src={lawIcon} alt={""} style={{maxWidth: "294px", maxHeight: "220px", padding: "20px"}}/>
                    <h1 style={{width: "100%", marginTop: "5px", marginBottom: "5px"}}>
                        Regulamin
                    </h1>
                    <p style={{ width: "100%" }}>
                        Regulamin korzystania z tej witryny o tematatyce sklepowej
                    </p>
                    <span style={{padding: "20px"}}>
                        Regulamin Sklepu EnderEmporeum w Minecraft - wersja 1.0 (Data aktualizacji: 2023-12-01)
                        <br/>
                        <h3>1. Postanowienia ogólne</h3>
                            <br/>
                            1.1. Sklep internetowy EnderEmporeum, zwany dalej "Sklepem", jest prowadzony przez [Twoją Nazwę/Nazwę Firmy].
                            <br/>
                            1.2. Korzystanie z usług Sklepu oznacza akceptację niniejszego regulaminu.
                            <br/>
                            1.3. Sklep zastrzega sobie prawo do zmiany regulaminu. Wszelkie zmiany wchodzą w życie natychmiast po opublikowaniu na stronie sklepu.
                            <br/>
                        <h3>2. Zamówienia i Płatności</h3>
                            <br/>
                            2.1. Złożenie zamówienia jest równoznaczne z akceptacją warunków sprzedaży.
                            <br/>
                            2.2. Płatności można dokonywać poprzez DotPay, PayPal, SMS, oraz inne dostępne metody podane na stronie Sklepu.
                            <br/>
                            2.3. Sklep zastrzega sobie prawo do odmowy realizacji zamówienia w przypadku wystąpienia problemów technicznych lub podejrzenia nadużycia.
                            <br/>
                        <h3>3. Dostawa Usług Wirtualnych</h3>
                            <br/>
                            3.1. Usługi wirtualne, takie jak rangi, przedmioty w grze Minecraft, będą dostarczane w możliwie najszybszym czasie po zaksięgowaniu płatności.
                            <br/>
                            3.2. Sklep nie ponosi odpowiedzialności za ewentualne problemy z dostawą wynikające z błędnych danych podanych przez Kupującego.
                            <br/>
                        <h3>4. Zwroty i Reklamacje</h3>
                            <br/>
                            4.1. Ze względu na charakter usług wirtualnych, zwroty nie są możliwe po zrealizowaniu zamówienia.
                            <br/>
                            4.2. W przypadku problemów z zakupionymi usługami, Kupujący zobowiązany jest do zgłoszenia reklamacji w ciągu 14 dni od daty zakupu.
                            <br/>
                        <h3>5. Ochrona Danych Osobowych</h3>
                            <br/>
                            5.1. Sklep dba o prywatność Klientów i stosuje wszelkie środki bezpieczeństwa w celu ochrony danych osobowych.
                            <br/>
                            5.2. Dane osobowe przetwarzane są zgodnie z obowiązującymi przepisami prawa.
                            <br/>
                        <h3>6. Postanowienia Końcowe</h3>
                            <br/>
                            6.1. Sklep nie ponosi odpowiedzialności za szkody wynikłe z korzystania lub niemożności korzystania z usług.
                            <br/>
                            6.2. Wszelkie spory wynikłe z realizacji zamówień będą rozpatrywane indywidualnie, a ostateczna decyzja należy do Sklepu.
                            <br/>
                            6.3. Niniejszy regulamin wchodzi w życie z dniem opublikowania na stronie Sklepu.
                            <br/>
                            Dziękujemy za zakupy w EnderEmporeum!

                            <br/><br/>
                            <Link to={"https://uodo.gov.pl/pl/131/224"}>
                                <h3>Arytkuł RODO ( Rozporządzenie o ochronie danych osobowych )</h3>
                            </Link>
                    </span>
                </div>
            </div>
        </>
    );
}

export default RulesSite;