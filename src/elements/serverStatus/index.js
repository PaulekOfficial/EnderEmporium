const ServerStatus = ({icon, ipAddress = "server address ipv4", onlinePlayers = 0, maxPlayers = 100}) => {
    function funnyEasterEgg() {
        window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ&autoplay=1", "_blank");
    }

    return (
        <div className="sidebar-item">
            <div className="server-image" onClick={() => funnyEasterEgg()}>
                <img src={icon} alt="Server Icon"/>
            </div>
            <div className="server-description">
                <p>{ipAddress}</p>
                <div style={{width: "100%", height: "30px", justifyContent: "right", display: "flex"}}>
                    <div style={{float: "left"}}>
                        <p style={{marginRight: "10px"}}>{onlinePlayers} / {maxPlayers}</p>
                    </div>
                    <div className="server-status"></div>
                </div>
            </div>
        </div>
    )
}

export default ServerStatus;
