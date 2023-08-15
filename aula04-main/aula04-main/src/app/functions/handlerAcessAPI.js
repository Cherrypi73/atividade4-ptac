'use server'
    const users =[ 
        {nome:"usuario",
        email:"usuario@gmail.com",
        senha:"usuario",
        token:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"}
    ]
const getUserAuthenticated = (user) => {
   let usuarioAutenticado= {};
    users.map((recibe) =>{
     if(user.email === recibe.email && user.senha  === recibe.senha ){
        usuarioAutenticado = recibe 
     } 
       
   })
   return usuarioAutenticado
}
const getUsers = () =>{
        return users 
}
export { getUsers, getUserAuthenticated };