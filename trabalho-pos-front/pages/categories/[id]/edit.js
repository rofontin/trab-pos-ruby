import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import ROUTES from "../../../src/config/routes";
import CategoryService from "../../../src/services/CategoryService";

function EditCategory() {
  const router = useRouter();
  const { id } = router.query;
  const [categorie, setCategorie] = useState([]);
  useEffect(() => {
    CategoryService.getById(id).then((data) => {
      setCategorie(data)
    })
  }, [id])

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const updateCategory = (categorie) => {
    CategoryService.update(id, categorie).then((data) => {
      router.push(ROUTES.categories.list)
      toast.success(`Category successfully updated!`)
    }).catch((e) => {
      toast.error(`Erro when updating Category: ${e.message}`)
    })
  }

  if (!categorie) return `Carregando...`

  console.log(categorie)

  return (
    <>
      <p>Página de Edição do artigo: {id}</p>
      <p>
        <Link
          href={{
            pathname: ROUTES.categories.list,
          }}
        >
          <a>Cancelar</a>
        </Link>
      </p>

      <form onSubmit={handleSubmit((data) => updateCategory(data))}>
        <div className="field">
          <label>Name</label>
          <input {...register("name", { required: true })} defaultValue={categorie.name} />
          {errors.title && <p>Name is required.</p>}
        </div>

        <input type="submit" />
      </form>
    </>
  );
}

export default EditCategory;