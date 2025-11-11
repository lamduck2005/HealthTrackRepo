import axios from 'axios'

const baseUrl = import.meta.env.VITE_BASE_URL || 'http://localhost:8080'

const api = axios.create({
  baseURL: baseUrl
})

api.interceptors.response.use(
  (response) => {
    return {
      success: true,
      data: response.data
    }
  },
  (error) => {
    return Promise.resolve({
      success: false,
      error: error.response?.data || {
        status: 503,
        error: "Service Unavailable",
        message: "Không thể kết nối tới máy chủ."
      }
    })
  }
)

export default api
