import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { Button, Grid, Typography, TextField, Select, MenuItem, InputLabel, FormControl } from "@mui/material";
import ROUTES from "../../src/config/routes";
import ProductService from "../../src/services/ProductService";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CategoryService from "../../src/services/CategoryService";

function NewProduct() {
  const router = useRouter()
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const insertProduct = (product) => {
    ProductService.create(product).then((data) => {
      router.push(ROUTES.products.list)
      toast.success(`Product successfully created!`)
    }).catch((e) => console.error(e))
  }

  useEffect(() => {
    CategoryService.getAll().then((data) => setCategories(data))
  }, []);

  return (
    <>
      <Grid xs={6}>
        <Typography variant="h4">Tela de Cadastro de Produto</Typography>
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

      <form onSubmit={handleSubmit((data) => insertProduct(data))}>
        <div className="field">
          <TextField label="Nome" variant="standard" {...register("name", { required: true })} />
          {errors.title && <p>Name is required.</p>}
          <TextField label="Valor" variant="standard" {...register("value", { required: true })} />
          {errors.title && <p>Value is required.</p>}
          <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
            <InputLabel id="select-label">Select Category</InputLabel>
            <Select
              labelId="select-label"
              label="Select Category"
              {...register("category_id", { pattern: /\d/ })}
              defaultValue={products.category_id}>
              {
                categories.map((category) => {
                  return <MenuItem key={category.id} value={category.id}>{category.name} </MenuItem>
                })
              }
            </Select>
            {errors.category_id && <p>Category is required.</p>}
          </FormControl>
        </div>
        <Button variant="contained" color="success" type="submit">
          Salvar
        </Button>
      </form>
    </>
  );
}

export default NewProduct;