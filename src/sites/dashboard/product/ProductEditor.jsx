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
import {useEffect, useState} from "react";
import {ProductService} from "../../../service/ProductService.ts";
import {PriceService} from "../../../service/PriceService.ts";
import {useNavigate, useParams} from "react-router-dom";

// box style
const BoxStyle = styled(Box)(({ theme }) => ({
    margin: `${theme.spacing(4)}px auto`,
    borderRadius: theme.spacing(2),
    boxShadow: `rgb(145 158 171 / 24%) 0px 0px 2px 0px, rgb(145 158 171 / 24%) 0px 16px 32px -4px`,
    overflow: "hidden",
}));

const ProductEditor = () => {
    const navigate = useNavigate();
    const { id } = useParams();

    const [activeStep, setActiveStep] = useState(0);
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [image1, setImage1] = useState(null);
    const [image2, setImage2] = useState(null);

    useEffect(() => {
        const fetchProductData = async () => {
            try {
                const response = await ProductService.getProductById(id);
                const product = response.success ? response.product : null;

                if (product) {
                    setName(product.name);
                    setDescription(product.description);
                    setImage1(product.image);
                    setImage2(product.description_image);
                } else {
                    console.error(`Product with ID ${id} not found`);
                    alert(`Product with ID ${id} not found`)
                    // Handle error or redirect to a 404 page
                }
            } catch (error) {
                console.error('Error fetching product data:', error);
            }
        };

        fetchProductData();
    }, [id]);

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

    const handleEdit = async () => {
        const product = {
            id: id,
            name: name,
            description: description,
            image: image1,
            description_image: image2,
        };

        const updated = await ProductService.updateProduct(id, product);
        console.log(updated);

        if (updated.success) {
            alert("Produkt został edytowany!");
            navigate("/dashboard/products");
        } else {
            alert("Wystąpił błąd podczas edytowania produktu!");
        }
    };

    // media queries
    const less400 = useMediaQuery("(max-width:400px)");
    const less480 = useMediaQuery("(max-width:480px)");
    const less600 = useMediaQuery("(max-width:600px)");
    const less768 = useMediaQuery("(max-width:768px)");

    return (
        <>
            <Helmet>
                <title>Product Creator | MUI Dash</title>
            </Helmet>

            <Container maxWidth="lg" disableGutters>
                <Box display="flex" justifyContent="center" alignItems="center">
                    <Typography variant="h3">Kreator Edytowania Produktu</Typography>
                </Box>

                <br />

                <Card sx={{ boxShadow: 3, borderRadius: '20px' }}>
                    <CardContent sx={{padding: '20px 0 0 0'}}>

                        <TextField id="productName" label={name} variant="outlined"
                                   onChange={(event) => setName(event.target.value)}/>

                        <br/>
                        <br/>

                        <FormControl sx={{m: 'auto', width: '25ch'}} variant="outlined">
                            <InputLabel htmlFor="outlined-adornment-amount">{description}</InputLabel>
                            <OutlinedInput
                                sx={{height: '150px', width: '400px'}}
                                id="description"
                                label="Cena"
                                onChange={(event) => setDescription(event.target.value)}
                            />
                        </FormControl>

                        <br/>
                        <br/>

                        <FormControl sx={{m: 2}}>
                            <Input
                                type="file"
                                onChange={handleImage1Change}
                                accept="image/*"
                            />
                            {image1 && (
                                <img
                                    src={image1}
                                    alt="Preview"
                                    style={{width: "100px", height: "auto"}}
                                />
                            )}
                        </FormControl>

                        <FormControl sx={{m: 2}}>
                            <Input
                                type="file"
                                onChange={handleImage2Change}
                                accept="image/*"
                            />
                            {image2 && (
                                <img
                                    src={image2}
                                    alt="Preview"
                                    style={{width: "100px", height: "auto"}}
                                />
                            )}
                        </FormControl>

                        <br/>

                        <Button onClick={handleEdit} sx={{ padding: '30px' }}>
                            Wykonaj
                        </Button>
                    </CardContent>
                </Card>
            </Container>
        </>
    );
};

export default ProductEditor;
