import axiosInstance from "../utils/axios"

const ProductService = {
  getAll: async () => {
    let response = await axiosInstance.get('/products')
    return response.data
  },
  getById: async (id) => {
    if (!id) return

    let response = await axiosInstance.get(`/products/${id}`)
    return response.data
  },
  create: async (product) => {
    if (!product) return

    let response = await axiosInstance.post(`/products`, { product: product })
    return response.data
  },
  destroy: async (id) => {
    if (!id) return

    let response = await axiosInstance.delete(`/products/${id}`)
    return response.data
  },
  update: async(id, product) => {
    if (!id && !product) return

    let response = await axiosInstance.put(`/articles/${id}`, { product: product })
    return response.products
  }

}

export default ProductService