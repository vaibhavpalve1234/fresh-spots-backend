const signup = async() =>{
    const { name , email , password} = req.body
    console.log(name, email, password);
}

const loginUser = () =>{
    

}
module.exports = {
    signup,
    loginUser,
  };