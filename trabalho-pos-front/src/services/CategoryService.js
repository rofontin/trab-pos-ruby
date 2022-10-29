import axiosInstance from "../utils/axios"

const CategoryService = {
  getAll: async () => {
    let response = await axiosInstance.get('/categories')
    return response.data
  },
  getById: async (id) => {
    if (!id) return

    let response = await axiosInstance.get(`/categories/${id}`)
    return response.data
  },
  create: async (categorie) => {
    if (!categorie) return

    let response = await axiosInstance.post(`/categories`, { categorie: categorie })
    return response.data
  },
  destroy: async (id) => {
    if (!id) return

    let response = await axiosInstance.delete(`/categories/${id}`)
    return response.data
  },
  update: async(id, categorie) => {
    if (!id && !categorie) return

    let response = await axiosInstance.put(`/categories/${id}`, { categorie: categorie })
    return response.data
  }
}

export default CategoryService