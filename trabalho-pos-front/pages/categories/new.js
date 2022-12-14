import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { Button, Grid, Typography, TextField } from "@mui/material";
import ROUTES from "../../src/config/routes";
import CategoryService from "../../src/services/CategoryService";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

function NewCategory() {
  const router = useRouter()
  const [categories, setCategories] = useState([]);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const insertCategory = (categorie) => {
    CategoryService.create(categorie).then((data) => {
      router.push(ROUTES.categories.list)
      toast.success(`Category successfully created!`)
    }).catch((e) => console.error(e))
  }
  return (
    <>
   <Grid xs={6}>
        <Typography variant="h4">Tela de Cadastro de Categoria</Typography>
      </Grid>
      <p>
        <Link
          href={{
            pathname: ROUTES.categories.list,
          }}
        >
          <Button variant="contained" size="small" startIcon={<ArrowBackIcon fontSize="small" />}>
            Voltar ao Inicio
          </Button>
        </Link>
      </p>

      <form onSubmit={handleSubmit((data) => insertCategory(data))}>
        <div className="field">
          <TextField label="Nome" variant="standard" {...register("name", { required: true })}/>
          {errors.title && <p>Name is required.</p>}
        </div>

        <Button variant="contained" color="success" type="submit">
          Salvar
        </Button>
      </form>
    </>
  );
}

export default NewCategory;