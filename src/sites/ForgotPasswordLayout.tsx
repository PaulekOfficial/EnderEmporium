import { useState } from "react";
import {
    Paper,
    Container,
    Typography,
    TextField,
    Button,
} from "@mui/material";
import { Email } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ForgotPasswordLayout() {
    const [email, setEmail] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Wysłano żądanie resetowania hasła dla adresu e-mail: ", email);
    };

    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
            }}
        >
            <Container maxWidth="sm">
                <Paper
                    elevation={3}
                    style={{
                        padding: "20px",
                        borderRadius: "20px",
                        backgroundColor: "#fffefc",
                    }}
                >
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            flexDirection: "column",
                        }}
                    >
                        <div
                            style={{
                                width: "95%",
                                display: "flex",
                                justifyContent: "space-between",
                            }}
                        >
                            <Typography variant="h4">Przypomnienie hasła</Typography>
                            <Link to={"/login"}>
                                <Typography
                                    style={{
                                        textAlign: "right",
                                        padding: "10px",
                                        color: "darkblue",
                                    }}
                                >
                                    Masz już konto? Zaloguj się.
                                </Typography>
                            </Link>
                        </div>

                        <form style={{ width: "95%" }} onSubmit={handleSubmit}>
                            <div style={{ display: "flex", flexWrap: "wrap" }}>
                                <TextField
                                    label="Email"
                                    variant="outlined"
                                    margin="normal"
                                    fullWidth
                                    required
                                    type="email"
                                    onChange={(e) => setEmail(e.target.value)}
                                    InputProps={{
                                        startAdornment: <Email />,
                                    }}
                                />
                            </div>

                            <Button
                                type="submit"
                                variant="contained"
                                style={{
                                    width: "100%",
                                    marginTop: "16px",
                                    backgroundColor: "#FFA500",
                                    color: "#000000",
                                    borderRadius: "10px",
                                    padding: "15px",
                                    fontWeight: "bold",
                                    fontSize: "14px",
                                }}
                            >
                                <FontAwesomeIcon
                                    icon={faArrowRight}
                                    size="lg"
                                    style={{ marginRight: "10px", verticalAlign: "middle" }}
                                />
                                Resetuj hasło
                            </Button>
                        </form>
                    </div>
                </Paper>
            </Container>
        </div>
    );
}

export default ForgotPasswordLayout;
