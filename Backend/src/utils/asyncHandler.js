function asyncHandler(handlerFunction) {
  return function(req, res, next){
    Promise.resolve(handlerFunction(req, res, next))
    .catch(function(error){
        next(error)
    });
  }
}

export default asyncHandler
