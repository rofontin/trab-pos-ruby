import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import ROUTES from "../../../src/config/routes";
import CategoryService from "../../../src/services/CategoryService";
import { Button, Grid, Typography } from "@mui/material";
import { toast } from "react-toastify";

// Material Icons
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import EditIcon from "@mui/icons-material/Edit";
import VisibilityIcon from "@mui/icons-material/Visibility";

function ShowCategory() {
    const router = useRouter()
    const { id } = router.query

    const [categorie, setCategory] = useState(null);

    useEffect(() => {
        CategoryService.getById(id).then((data) => {
            setCategory(data)
        })
    }, [id])

    if (!categorie) return `Carregando...`

    return (
        <>
            <Grid xs={6}>
            <p>
                <Link
                    href={{
                        pathname: ROUTES.categories.list,
                    }}
                >
                    <Button variant="contained" color="success" size="small" startIcon={<ArrowBackIcon fontSize="small" />}>
                        Voltar
                    </Button>
                </Link>
            </p>
                <Typography variant="h4">Exibindo a Categoria: {id}</Typography>
            </Grid>

            

            <table>
                <thead>
                    <tr>
                        <td><b>ID</b></td>
                        <td>{categorie.id}</td>
                    </tr>
                    <tr>
                        <td><b>Name</b></td>
                        <td>{categorie.name}</td>
                    </tr>
                    <tr>
                        <td><b>Created At</b></td>
                        <td>{categorie.created_at}</td>
                    </tr>

                </thead>
            </table>

        </>
    );
}

export default ShowCategory;