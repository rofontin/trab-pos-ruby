import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { Button, Grid, Typography, TextField } from "@mui/material";
import ROUTES from "../../../src/config/routes";
import CategoryService from "../../../src/services/CategoryService";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';


function EditCategory() {
  const router = useRouter();
  const { id } = router.query;
  const [category, setCategory] = useState({});
  
  useEffect(() => {
    if(!id) return

    CategoryService.getById(id).then((data) => {
      setCategory(data)
      setValue("name", data.name)
    })
  }, [id])

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue
  } = useForm();

  const updateCategory = (category) => {
    CategoryService.update(id, category).then((data) => {
      router.push(ROUTES.categories.list)
      toast.success(`Category successfully updated!`)
    }).catch((e) => {
      toast.error(`Erro when updating Category: ${e.message}`)
    })
  }

  if (!category) return `Carregando...`

  console.log(id, category)

  return (
    <>
      <Grid xs={6}>
        <Typography variant="h4">Página de Edição do categoria: {id}</Typography>
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

      <form onSubmit={handleSubmit((data) => updateCategory(data))}>
        <div className="field">
          <TextField label="Nome" variant="standard" {...register("name", { required: true })} InputLabelProps={{ shrink: !!category.name }}/>
          {errors.title && <p>Name is required.</p>}
        </div>

        <Button variant="contained" color="success" type="submit">
          Salvar
        </Button>
      </form>
    </>
  );
}

export default EditCategory;