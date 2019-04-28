import request from 'superagent'

class CategoryApi {
  /* Get all categories */
  static getAllCategories() {
    let req = request.get('/categories.json')
    return req.then(response => {
      return response
    }, error => {
      return error
    })
  }

  /* Create category with params name */
  static createCategory(paramsCategory) {
    let req = request.post('/categories.json').set('AUTHORIZATION', `Bearer ${sessionStorage.jwt}`)
    req.field('category[name]', paramsCategory.name)
    return req.then(response => {
      return response
    }, error => {
      return error
    })
  }

  /* Update category */
  static updateCategory(paramsCategory) {
    let req = request.put(`/categories/${paramsCategory.id}.json`).set('AUTHORIZATION', `Bearer ${sessionStorage.jwt}`)
    req.send({category: paramsCategory})
    return req.then(response => {
      return response
    }, error => {
      return error
    })
  }

  /* Remove category */
  static destroyCategory(id) {
    let req = request.delete(`/categories/${id}.json`).set('AUTHORIZATION', `Bearer ${sessionStorage.jwt}`)
    return req.then(response => {
      return response
    }, error => {
      return error
    })
  }
}

export default CategoryApi
