import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { Button, Grid, Typography, TextField } from "@mui/material";
import ROUTES from "../../../src/config/routes";
import ProductService from "../../../src/services/ProductService";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';


function EditProduct() {
  const router = useRouter();
  const { id } = router.query;
  const [product, setProduct] = useState({});
  
  useEffect(() => {
    if(!id) return

    ProductService.getById(id).then((data) => {
      setProduct(data)
      setValue("name", data.name)
    })
  }, [id])

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue
  } = useForm();

  const updateProduct = (product) => {
    ProductService.update(id, product).then((data) => {
      router.push(ROUTES.products.list)
      toast.success(`Product successfully updated!`)
    }).catch((e) => {
      toast.error(`Erro when updating Product: ${e.message}`)
    })
  }

  if (!product) return `Carregando...`

  console.log(id, product)

  return (
    <>
      <Grid xs={6}>
        <Typography variant="h4">Página de Edição do Produto: {id}</Typography>
      </Grid>
      <p>
        <Link
          href={{
            pathname: ROUTES.products.list,
          }}
        >
          <Button variant="contained" size="small" startIcon={<ArrowBackIcon fontSize="small" />}>
            Voltar ao Inicio
          </Button>
        </Link>
      </p>

      <form onSubmit={handleSubmit((data) => updateProduct(data))}>
        <div className="field">
          <TextField label="Nome" variant="standard" {...register("name", { required: true })} InputLabelProps={{ shrink: !!product.name }}/>
          {errors.title && <p>Name is required.</p>}
          <TextField label="Valor" variant="standard" {...register("value", { required: true })}/>
          {errors.title && <p>Value is required.</p>}
        </div>

        <Button variant="contained" color="success" type="submit">
          Salvar
        </Button>
      </form>
    </>
  );
}

export default EditProduct;