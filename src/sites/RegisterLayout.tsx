import {Paper, Container, Typography, TextField, Checkbox, FormControlLabel, Button, Alert} from '@mui/material';
import { ArrowRight, Person, Email, Lock } from '@mui/icons-material';
// @ts-ignore
import PasswordStrengthMeter from '../elements/PasswordStrengthMeter.tsx';
import {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {faArrowRight} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
// @ts-ignore
import AuthorizationService from "../service/AuthorizationService.ts";

function RegisterLayout() {
    const navigate = useNavigate();


    const [nickname, setNickname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [acceptTerms, setAcceptTerms] = useState(false);
    const [passwordsMatch, setPasswordsMatch] = useState(true);

    const [error, setError] = useState("");

    const handlePasswordChange = (e) => {
        const newPassword = e.target.value;
        setPassword(newPassword);

        setPasswordsMatch(newPassword === confirmPassword);
    };

    const handleConfirmPasswordChange = (e) => {
        const newConfirmPassword = e.target.value;
        setConfirmPassword(newConfirmPassword);

        setPasswordsMatch(password === newConfirmPassword);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!acceptTerms) {
            setError("Musisz zaakceptować regulamin");
            return;
        }

        if (!passwordsMatch) {
            setError("Hasła nie są identyczne");
            return;
        }

        const userData = {
            username: nickname,
            email: email,
            password: password,
            enabled: false
        }

        const registerResult = await AuthorizationService.register(userData);

        if (registerResult.success) {
            alert("Zarejestrowano pomyślnie");
            navigate("/login");
            return;
        } else {
            switch (registerResult.message) {
                case "Email already exists":
                    setError("Email jest już zajęty");
                    break;
                case "Nickname already exists":
                    setError("Pseudonim jest już zajęty");
                    break;
                default:
                    setError("Wystąpił nieznany błąd");
            }
        }
    }

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <Container maxWidth="sm">
                <Paper elevation={3} style={{ padding: '20px', borderRadius: '20px', backgroundColor: '#fffefc' }}>

                    {error !== "" && (
                        <>
                            <Alert severity="error">{error}</Alert>
                            <br />
                        </>
                    )}

                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                        <div style={{ width: '95%', display: 'flex', justifyContent: 'space-between' }}>
                            <Typography variant="h4">Rejestracja</Typography>
                            <Link to={"/login"}>
                                <Typography style={{ textAlign: 'right', padding: '10px', color: 'darkblue' }}>
                                    Masz już konto? Zaloguj się.
                                </Typography>
                            </Link>
                        </div>

                        <form style={{ width: '95%' }}>
                            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                                <TextField
                                    label="Pseudonim"
                                    variant="outlined"
                                    margin="normal"
                                    onChange={(e) => setNickname(e.target.value)}
                                    fullWidth
                                    required
                                    InputProps={{
                                        startAdornment: <Person />,
                                    }}
                                />

                                <TextField
                                    label="Email"
                                    variant="outlined"
                                    margin="normal"
                                    onChange={(e) => setEmail(e.target.value)}
                                    fullWidth
                                    required
                                    type="email"
                                    InputProps={{
                                        startAdornment: <Email />,
                                    }}
                                />

                                <TextField
                                    label="Hasło"
                                    variant="outlined"
                                    margin="normal"
                                    fullWidth
                                    required
                                    type="password"
                                    onChange={handlePasswordChange}
                                    InputProps={{
                                        startAdornment: <Lock />,
                                    }}
                                />

                                <PasswordStrengthMeter password={password} />

                                <TextField
                                    label="Powtórz hasło"
                                    variant="outlined"
                                    margin="normal"
                                    fullWidth
                                    required
                                    type="password"
                                    onChange={handleConfirmPasswordChange}
                                    InputProps={{
                                        startAdornment: <Lock />,
                                    }}
                                />

                                {!passwordsMatch && (
                                    <>
                                        <Typography variant="body2" color="error" style={{marginTop: "8px"}}>
                                            Hasła nie są identyczne.
                                        </Typography>
                                    </>
                                )}

                                <FormControlLabel
                                    control=
                                    {
                                        <Checkbox
                                            color="primary"
                                            onChange={(event) => setAcceptTerms(event.target.checked)}
                                        />
                                    }
                                    label="Akceptuję regulamin"
                                    style={{ margin: '16px 0', width: '100%' }}
                                />
                            </div>

                            <Button
                                variant="contained"
                                onClick={handleSubmit}
                                style={{
                                    width: '100%',
                                    marginTop: '16px',
                                    backgroundColor: '#FFA500',
                                    color: '#000000',
                                    borderRadius: '10px',
                                    padding: '15px',
                                    fontWeight: 'bold',
                                    fontSize: '14px',
                            }}
                            >
                                <FontAwesomeIcon icon={faArrowRight} size="lg"
                                                 style={{marginRight: "10px", verticalAlign: "middle"}}/>
                                Zarejestruj się
                            </Button>
                        </form>
                    </div>
                </Paper>
            </Container>
        </div>
    );
}

export default RegisterLayout;
