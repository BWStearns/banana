const asyncWrapper = require('middleware/async-wrapper')

const {
  storeFlight,
  retrieveFlights,
  signup,
  login,
  reset,
  forgot,
  validate,
  renew,
} = require('@handlers')

module.exports = app => {
  app.post('/flight', asyncWrapper(async(req, res) => {
    storeFlight({
      data: req.body.data,
      key: req.body.key
    })
    res.status(200).send()
  }))

  app.post('/flights', asyncWrapper(async(req, res) => {
    const flights = await retrieveFlights(req.body)
    res.status(200).send(flights)
  }))

  app.post('/validate', asyncWrapper(async(req,res) => {
    const response = await validate(req.body)
    console.log('login response')
    console.log(response)
    return res.status(200).send(response)
  }))

  app.post('/renew', asyncWrapper(async(req,res) => {
    const response = await renew(req.body)
    console.log('login response')
    console.log(response)
    return res.status(200).send(response)
  }))

  app.post('/signup', asyncWrapper(async(req, res) => {
    // try {
      const response = await signup(req.body)
      console.log('login response')
      console.log(response)
      return res.status(200).send(response)
    // } catch (err) {
    //   return res.status(400).send(err)
    // }
  }))
  
  app.post('/login', asyncWrapper(async(req, res) => {
    try {
      response = await login(req.body)
      return res.status(200).send(response)
    } catch (err) {
      return res.status(400).send(err)
    }
  }))

  app.post('/forgot', asyncWrapper(async(req, res) => {
    try {
      respons = await forgot(req.body)
    } catch (err) {
      return res.status(400).send(err)
    }
  }))

  app.post('/reset', asyncWrapper(async(req, res) => {
    try {
      respons = await signup(req.body)
    } catch (err) {
      return res.status(400).send(err)
    }
  }))

  app.get('*', asyncWrapper(async(req, res) => {
    res.status(200).send()
  }))
}
