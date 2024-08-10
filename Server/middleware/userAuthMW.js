
const validate = (schema) => async(req,res,next) =>{
 try {
    const parseBody = await schema.parseAsync(req.body);
    console.log(req.body);
    req.body = parseBody;
    next();
 } catch(err) {
   const errMsg =err.errors[0].message;
    res.json({msg:errMsg})
   // console.error(err);
 }
}

module.exports = {
    validate
};
