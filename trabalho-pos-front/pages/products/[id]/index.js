import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import ROUTES from "../../../src/config/routes";
import ProductService from "../../../src/services/ProductService";
import { Button, Grid, Typography } from "@mui/material";
import { toast } from "react-toastify";

// Material Icons
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import EditIcon from "@mui/icons-material/Edit";
import VisibilityIcon from "@mui/icons-material/Visibility";

function ShowProduct() {
    const router = useRouter()
    const { id } = router.query

    const [product, setProduct] = useState(null);

    useEffect(() => {
        ProductService.getById(id).then((data) => {
            setProduct(data)
        })
    }, [id])

    if (!product) return `Carregando...`

    return (
        <>
            <Grid xs={6}>
            <p>
                <Link
                    href={{
                        pathname: ROUTES.products.list,
                    }}
                >
                    <Button variant="contained" color="success" size="small" startIcon={<ArrowBackIcon fontSize="small" />}>
                        Voltar
                    </Button>
                </Link>
            </p>
                <Typography variant="h4">Exibindo o Produto: {id}</Typography>
            </Grid>

            

            <table>
                <thead>
                    <tr>
                        <td><b>ID</b></td>
                        <td>{product.id}</td>
                    </tr>
                    <tr>
                        <td><b>Name</b></td>
                        <td>{product.name}</td>
                    </tr>
                    <tr>
                        <td><b>Valor</b></td>
                        <td>{product.value}</td>
                    </tr>
                    <tr>
                        <td><b>Catregoria</b></td>
                        <td>{product.category_id}</td>
                    </tr>
                    <tr>
                        <td><b>Created At</b></td>
                        <td>{product.created_at}</td>
                    </tr>

                </thead>
            </table>

        </>
    );
}

export default ShowProduct;