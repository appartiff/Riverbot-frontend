const resource = '/assets'
export default ($axios) => ({
  getAll() {
    return $axios.get(`${resource}`)
  },
  getAllEnabled(){
    return $axios.get(`${resource}/getassets?enabled=true`)
  },
  get(id) {
    return $axios.get(`${resource}/${id}`)
  },
  update(id, payload) {
    return $axios.post(`${resource}/${id}`, payload)
  },
})
