import avatar from "../../images/skinmc-avatar.png";

const LastBuyers = () => {
    const lastBuyers = [];

    for (let i = 0; i < 24; i++) {
        lastBuyers.push(
            <div className="last-buy-item" key={i}>
                <img src={avatar} alt={""} />
            </div>
        );
    }

    return (
        <div className="sidebar-item">
            <p style={{fontWeight: "bold", marginTop: "10px"}}>Ostatni kupujący</p>
            <div className="last-buy">
                <div className="last-buy-container">
                    {lastBuyers}
                </div>
            </div>
        </div>
    )
}

export default LastBuyers;