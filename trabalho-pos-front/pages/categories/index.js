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
import CategoryService from "../../src/services/CategoryService";
import { Container } from "@mui/system";

function CategoryList() {
  const { router } = useRouter();
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const deleteCategory = (categorie) => {
    var accepted = confirm(`Você realmente gostaria de deletar a categoria: ${caregorie.title}`);
    if (!accepted) return;

    setIsLoading(true);
    CategoryService.destroy(caregorie.id)
      .then((data) => {
        getCategories().then(() => {
          setIsLoading(false);
          toast.success("Category destroyed sucessfully!");
        });
      })
      .catch((e) => {
        setIsLoading(false);
        toast.error(`Erro when destroying categorie: ${e.message}`);
      });
  };

  const getCategories = async () => {
    let data = await CategoryService.getAll();
    console.log(data);
    setCategories(data);
  };

  useEffect(() => {
    getCategories().then(() => {
      setIsLoading(false);
    });
  }, []);

  if (isLoading) return <p>Carregando....</p>;

  return (
    <Container fluid>
      <Grid container mt={2}>
        <Grid xs={6}>
            <Typography variant="h4">Caregory List</Typography>
        </Grid>
        <Grid xs={6}>
          <p>
            <Link
              href={{
                pathname: ROUTES.categories.new,
              }}
            >
              <Button variant="contained" color="success" size="small" startIcon={<DeleteForeverIcon fontSize="small" />}>
                New Category
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
              {categories.map((categorie) => {
                return (
                  <tr key={categorie.id}>
                    <td>{categorie.id}</td>
                    <td>{categorie.name}</td>
                    <td>{categorie.created_at}</td>
                    <td>{categorie.updated_at}</td>
                    <td>
                      <Link
                        href={{
                          pathname: ROUTES.categories.show,
                          query: {
                            id: categorie.id,
                          },
                        }}
                      >
                        <Button variant="contained" size="small">
                          <VisibilityIcon fontSize="small" />
                        </Button>
                      </Link>
                      <Link
                        href={{
                          pathname: ROUTES.categories.edit,
                          query: {
                            id: categorie.id,
                          },
                        }}
                      >
                        <Button variant="contained" color="warning" size="small">
                          <EditIcon fontSize="small" />
                        </Button>
                      </Link>
                      <Button variant="contained" color="error" size="small" onClick={() => deleteCategory(categorie)}>
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

export default CategoryList;