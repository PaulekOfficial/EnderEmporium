import '../App.css';
import {faArrowRight, faKey, faPerson} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Link, useNavigate} from "react-router-dom";
import {useState} from "react";
// @ts-ignore
import AuthorizationService from "../service/AuthorizationService.ts";
import {Alert} from "@mui/material";

function LoginLayout() {
    const navigate = useNavigate();

    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [rememberMe, setRememberMe] = useState(false);

    const [error, setError] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();
        const loginResult = await AuthorizationService.login(login, password);
        console.log(loginResult);

        if (loginResult.success) {
            alert("Zalogowano pomyślnie");
            navigate("/dashboard");
            return;
        } else {
            switch (loginResult.message) {
                case "User is inactive":
                    setError("Konto jest nieaktywne");
                    break;
                case "Email not verified":
                    setError("Email nie został zweryfikowany");
                    break;
                case "Wrong credentials":
                    setError("Nieprawidłowe dane logowania");
                    break;
                default:
                    setError("Wystąpił nieznany błąd");
            }
        }
    };

    return (
        <div className="App">
            <div className="container">
                <div className="overlay">
                    <div className="overlay-content" style={{
                        padding: "20px",
                        maxWidth: "400px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "column"
                    }}>
                        {error !== "" && (
                            <Alert severity="error">{error}</Alert>
                        )}

                        <div style={{width: "95%", display: "flex", justifyContent: "space-between"}}>
                            <h2 style={{textAlign: "left"}}>Logowanie</h2>
                            <Link to={"/register"}>
                                <p style={{textAlign: "right", padding: "10px", color: "darkblue"}}>
                                    Nie masz konta?
                                </p>
                            </Link>
                        </div>

                        <form style={{width: "95%"}}>
                            <div className={"overlay-inputs"} style={{display: "flex", flexWrap: "wrap"}}>
                                <div style={{width: "100%"}}>
                                    <div className="input-container"
                                         style={{marginLeft: 0, marginRight: 0, marginBottom: "40px", width: "100%"}}>
                                        <input type="text" className="input-field" required onChange={(event) => setLogin(event.target.value)} />
                                        <label htmlFor="input" className="label">
                                            <FontAwesomeIcon icon={faPerson} size={"lg"} style={{marginRight: "10px"}}/>
                                            Login
                                        </label>
                                    </div>
                                    <div className="input-container"
                                         style={{marginLeft: 0, marginRight: 0, width: "100%"}}>
                                        <input type="password" className="input-field" required onChange={(event) => setPassword(event.target.value)} />
                                        <label htmlFor="input" className="label">
                                            <FontAwesomeIcon icon={faKey} size={"lg"} style={{marginRight: "10px"}}/>
                                            Hasło
                                        </label>
                                    </div>
                                </div>

                                <div style={{display: "flex", width: "100%", justifyContent: "space-between"}}>
                                    <div style={{margin: "16px 0"}}>
                                        <input type={"checkbox"} onChange={(event) => setRememberMe(event.target.checked)} />
                                        <label htmlFor="input" style={{color: "black"}}>
                                            Nie wylogowuj mnie
                                        </label>
                                    </div>

                                    <Link to={"/forgot-password"}>
                                        <p style={{textAlign: "right", paddingRight: "10px"}}>Zapomniałeś hasła?</p>
                                    </Link>
                                </div>

                                <button
                                    className="help-button"
                                    onClick={handleSubmit}
                                    style={{
                                        textAlign: 'center',
                                        width: "100%",
                                        backgroundColor: "#FFA500",
                                        color: "#000000"
                                    }}
                                >
                                    <FontAwesomeIcon icon={faArrowRight} size="lg"
                                                     style={{marginRight: "10px", verticalAlign: "middle"}}/>
                                    <p style={{display: 'inline-block', verticalAlign: 'middle', margin: 0}}>Zaloguj</p>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginLayout;
