import successGif from "../../images/payment-success.gif";
import pendingGif from "../../images/payment-process.gif";
import failedGif from "../../images/payment-failed.gif";

function OrderStatusSite() {
    let status = "SUCCESS";

    const images = {
        SUCCESS: successGif,
        PENDING: pendingGif,
        FAILED: failedGif,
    };

    return (
        <>
            <div className="items maximize-items">
                <div className="elements" style={{padding: "40px"}}>
                    <img src={images[status]} alt={""} style={{maxWidth: "300px", maxHeight: "225px"}}/>
                    <h1 style={{width: "100%"}}>
                        {status === "SUCCESS"
                            ? "Dziękujemy za dokananie zakupu w EnderEmporium"
                            : status === "PENDING"
                                ? "W trakcie realizacji"
                                : "Coś poszło nie tak podczas przetwarzania płatności"}
                    </h1>
                    <p style={{ width: "100%" }}>
                        {status === "SUCCESS"
                            ? "Z radością informujemy, że Twoje Zamówienie zostało Przekazane do Realizacji w naszym Systemie. Dziękujemy za zaufanie"
                            : status === "PENDING"
                                ? "Twoje zamówienie jest w trakcie realizacji. Prosimy o cierpliwość"
                                : "Przepraszamy, wystąpił problem podczas przetwarzania Twojego zamówienia. Prosimy spróbować ponownie lub skontaktować się z obsługą klienta"}
                    </p>
                    <span>Identyfikator zamówienia: 386c496a-686d-442e-a31c-d5a299929ea4</span>
                </div>
            </div>
        </>
    );
}

export default OrderStatusSite;