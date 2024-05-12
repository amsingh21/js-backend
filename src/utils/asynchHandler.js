const asyncHandler = (requestHandle)=>{
   (req,res,next)=>{
    Promise.resolve(requestHandle(req,res,next)).catch((err)=>{
next(err)
    })
   }
}







export  {asyncHandler}


// const asyncHandler =(fn)=> async (req, res, next)=> {
//     try {
        
//     } catch (error) {
//      res.status(error.code || 500) .json({
//         success: false,
//         message: error.message
//      })
//     }
// }