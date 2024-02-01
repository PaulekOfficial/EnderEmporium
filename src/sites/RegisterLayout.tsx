import { Paper, Container, Typography, TextField, Checkbox, FormControlLabel, Button } from '@mui/material';
import { ArrowRight, Person, Email, Lock } from '@mui/icons-material';
// @ts-ignore
import PasswordStrengthMeter from '../elements/PasswordStrengthMeter.tsx';
import {useState} from "react";
import {Link} from "react-router-dom";
import {faArrowRight} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function RegisterLayout() {
    const [password, setPassword] = useState('');

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <Container maxWidth="sm">
                <Paper elevation={3} style={{ padding: '20px', borderRadius: '20px', backgroundColor: '#fffefc' }}>
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
                                    onChange={(e) => setPassword(e.target.value)}
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
                                    InputProps={{
                                        startAdornment: <Lock />,
                                    }}
                                />

                                <FormControlLabel
                                    control={<Checkbox color="primary" />}
                                    label="Akceptuję regulamin"
                                    style={{ margin: '16px 0', width: '100%' }}
                                />
                            </div>

                            <Button
                                variant="contained"
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
