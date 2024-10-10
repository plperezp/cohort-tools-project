function errorHandling(app){

  app.use((req, res) =>{

    console.log(error)
    res.status(500).json({errorMessage: "You are a little bit lost"})
  })

  // 500 
  app.use((error, req, res, next) => {

    console.log(error)
    res.status(500).json({errorMessage: "Server issues"})
  })
}

module.exports = errorHandling