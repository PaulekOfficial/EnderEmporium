import {
    Button,
    Card,
    CardContent,
    Container, FormControl, Input, InputAdornment, InputLabel, OutlinedInput,
    Step,
    StepLabel,
    Stepper,
    TextField,
    Typography,
    useMediaQuery
} from "@mui/material";
import { styled } from "@mui/styles";
import { Box } from "@mui/system";
import { Helmet } from "react-helmet";
import {useState} from "react";
import {ProductService} from "../../../service/ProductService.ts";
import {PriceService} from "../../../service/PriceService.ts";
import {useNavigate} from "react-router-dom";

// box style
const BoxStyle = styled(Box)(({ theme }) => ({
    margin: `${theme.spacing(4)}px auto`,
    borderRadius: theme.spacing(2),
    boxShadow: `rgb(145 158 171 / 24%) 0px 0px 2px 0px, rgb(145 158 171 / 24%) 0px 16px 32px -4px`,
    overflow: "hidden",
}));

const ProductCreator = () => {
    const navigate = useNavigate();

    const [activeStep, setActiveStep] = useState(0);

    const [name, setName] = useState("");

    const [netto, setNetto] = useState(0.00);
    const [brutto, setBrutto] = useState(0.00);
    const [vat, setVat] = useState(0);

    const [description, setDescription] = useState("");

    const [image1, setImage1] = useState(null);
    const [image2, setImage2] = useState(null);

    const handleImage1Change = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImage1(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleImage2Change = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImage2(reader.result);
            };
            reader.readAsDataURL(file);
        }
    }

    const handleNext = async () => {

        if (activeStep !== 3) {
            setActiveStep((prevActiveStep) => prevActiveStep + 1);
            return;
        }

        const product = {
            name: name,
            description: description,
            image: image1,
            description_image: image2
        }

        const created = await ProductService.createProduct(product);
        console.log(created);
        if (created.success) {
            const price = {
                netto: netto,
                brutto: brutto,
                vat: vat,
                product_id: created.product.id
            }

            const createdPrice = await PriceService.createPrice(price);

            if (createdPrice.success) {
                alert("Produkt został utworzony!");

                navigate("/dashboard/products");
            }
        }
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    // media queries
    const less400 = useMediaQuery("(max-width:400px)");
    const less480 = useMediaQuery("(max-width:480px)");
    const less600 = useMediaQuery("(max-width:600px)");
    const less768 = useMediaQuery("(max-width:768px)");

    const getStepContent = (step) => {
        switch (step) {
            case 0:
                return (
                    <div>
                        <Typography variant="h5">Dane Produktu</Typography>

                        <br />

                        <TextField id="productName" label="Nazwa Produktu" variant="outlined" onChange={(event) => setName(event.target.value)}/>
                    </div>
                );
            case 1:
                return (
                    <div>
                        <Typography variant="h5">Cena</Typography>

                        <br/>

                        <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                            <InputLabel htmlFor="outlined-adornment-amount">Netto</InputLabel>
                            <OutlinedInput
                                id="priceNetto"
                                startAdornment={<InputAdornment position="start">zł</InputAdornment>}
                                label="NETTO"
                                onChange={(event) => setNetto(event.target.value)}
                            />
                        </FormControl>

                        <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                            <InputLabel htmlFor="outlined-adornment-amount">Brutto</InputLabel>
                            <OutlinedInput
                                id="priceBrutto"
                                startAdornment={<InputAdornment position="start">zł</InputAdornment>}
                                label="BRUTTO"
                                onChange={(event) => setBrutto(event.target.value)}
                            />
                        </FormControl>

                        <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                            <InputLabel htmlFor="outlined-adornment-amount">VAT</InputLabel>
                            <OutlinedInput
                                id="priceVat"
                                startAdornment={<InputAdornment position="start">%</InputAdornment>}
                                label="VAT"
                                onChange={(event) => setVat(event.target.value)}
                            />
                        </FormControl>
                    </div>
                );
            case 2:
                return (
                    <div>
                        <Typography variant="h5">Opis</Typography>

                        <br/>

                        <FormControl sx={{ m: 'auto', width: '25ch' }} variant="outlined">
                            <InputLabel htmlFor="outlined-adornment-amount">Opis</InputLabel>
                            <OutlinedInput
                                sx={{ height: '150px', width: '400px' }}
                                id="description"
                                label="Cena"
                                onChange={(event) => setDescription(event.target.value)}
                            />
                        </FormControl>
                    </div>
                );
            case 3:
                return (
                    <div>
                        <Typography variant="h5">Zdjęcia</Typography>

                        <br />

                        <FormControl sx={{ m: 2 }}>
                            <Input
                                type="file"
                                onChange={handleImage1Change}
                                accept="image/*"
                            />
                            {image1 && (
                                <img
                                    src={image1}
                                    alt="Preview"
                                    style={{ width: "100px", height: "auto" }}
                                />
                            )}
                        </FormControl>

                        <FormControl sx={{ m: 2 }}>
                            <Input
                                type="file"
                                onChange={handleImage2Change}
                                accept="image/*"
                            />
                            {image2 && (
                                <img
                                    src={image2}
                                    alt="Preview"
                                    style={{ width: "100px", height: "auto" }}
                                />
                            )}
                        </FormControl>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <>
            <Helmet>
                <title>Product Creator | MUI Dash</title>
            </Helmet>

            <Container maxWidth="lg" disableGutters>
                <Box display="flex" justifyContent="center" alignItems="center">
                    <Typography variant="h3">Kreator Tworzenia Produktu</Typography>
                </Box>

                <br />

                <Card sx={{ boxShadow: 3, borderRadius: '20px' }}>
                    <CardContent sx={{ padding: '20px 0 0 0' }}>
                        <Stepper activeStep={activeStep} sx={{ padding: '20px' }}>
                            <Step>
                                <StepLabel>Dane Produktu</StepLabel>
                            </Step>
                            <Step>
                                <StepLabel>Cena</StepLabel>
                            </Step>
                            <Step>
                                <StepLabel>Opis</StepLabel>
                            </Step>
                            <Step>
                                <StepLabel>Zdjęcia</StepLabel>
                            </Step>
                        </Stepper>

                        <br />

                        {getStepContent(activeStep)}

                        <br />

                        <Box sx={{
                            display: "flex",
                            flexDirection: "row",
                            pt: 2
                        }}>
                            <Button
                                color="inherit"
                                disabled={activeStep === 0}
                                onClick={handleBack}
                                sx={{ mr: 1, padding: '30px' }}
                            >
                                Powrót
                            </Button>
                            <Box sx={{ flex: "1 1 auto" }} />

                            <Button onClick={handleNext} sx={{ padding: '30px' }}>
                                {activeStep === 4 - 1 ?
                                    "Zakończ" : "Następny"}
                            </Button>
                        </Box>
                    </CardContent>
                </Card>
            </Container>
        </>
    );
};

export default ProductCreator;
