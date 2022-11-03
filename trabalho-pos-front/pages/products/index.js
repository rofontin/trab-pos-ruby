import { useEffect, useState } from "react";

// Next
import Link from "next/link";
import { useRouter } from "next/router";

// Libs
import { Button, Grid, Typography } from "@mui/material";
import { toast } from "react-toastify";

// Material Icons
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditIcon from "@mui/icons-material/Edit";
import VisibilityIcon from "@mui/icons-material/Visibility";

// Internals
import ROUTES from "../../src/config/routes";
import ProductService from "../../src/services/ProductService";
import { Container } from "@mui/system";

function ProductList() {
  const { router } = useRouter();
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const deleteProduct = (product) => {
    var accepted = confirm(`Você realmente gostaria de deletar o produto: ${product.name}`);
    if (!accepted) return;

    setIsLoading(true);
    ProductService.destroy(product.id)
      .then((data) => {
        getProducts().then(() => {
          setIsLoading(false);
          toast.success("Product destroyed sucessfully!");
        });
      })
      .catch((e) => {
        setIsLoading(false);
        toast.error(`Erro when destroying product: ${e.message}`);
      });
  };

  const getProducts = async () => {
    let data = await ProductService.getAll();
    console.log(data);
    setProducts(data);
  };

  useEffect(() => {
    getProducts().then(() => {
      setIsLoading(false);
    });
  }, []);

  if (isLoading) return <p>Carregando....</p>;

  return (
    <Container fluid>
      <Grid container mt={2}>
        <Grid xs={6}>
            <Typography variant="h4">Product List</Typography>
        </Grid>
        <Grid xs={6}>
          <p>
            <Link
              href={{
                pathname: ROUTES.products.new,
              }}
            >
              <Button variant="contained" color="success" size="small">
                New Product
              </Button>
            </Link>
          </p>
        </Grid>
        <Grid xs={12}>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Created At</th>
                <th>Updated At</th>
                <th>&nbsp;</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => {
                return (
                  <tr key={product.id}>
                    <td>{product.id}</td>
                    <td>{product.name}</td>
                    <td>{product.created_at}</td>
                    <td>{product.updated_at}</td>
                    <td>
                      <Link
                        href={{
                          pathname: ROUTES.products.show,
                          query: {
                            id: product.id,
                          },
                        }}
                      >
                        <Button variant="contained" size="small">
                          <VisibilityIcon fontSize="small" />
                        </Button>
                      </Link>
                      <Link
                        href={{
                          pathname: ROUTES.products.edit,
                          query: {
                            id: product.id,
                          },
                        }}
                      >
                        <Button variant="contained" color="warning" size="small">
                          <EditIcon fontSize="small" />
                        </Button>
                      </Link>
                      <Button variant="contained" color="error" size="small" onClick={() => deleteProduct(product)}>
                        <DeleteForeverIcon fontSize="small" />
                      </Button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </Grid>
      </Grid>
    </Container>
  );
}

export default ProductList;