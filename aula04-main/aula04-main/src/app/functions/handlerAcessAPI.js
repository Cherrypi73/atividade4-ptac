'use server'
const url ="https://trabalho-ptac4-mb3d.vercel.app/";
const getUserAuthenticated = async (user) => {// user vem do login -- comunicação do servidor 
  const responseOfApi = await fetch(url + "/user/authenticate",
  {
    method: "POST", 
    headers: {"Content-Type": "application/json"},
    body:  JSON.stringify(user)
  }
  );
  const userAuth = await responseOfApi.json(); 
  return userAuth;
}

const getUsers  = async ( ) ={ 

}



/*/'use server'
    const users =[ 
        {nome:"maria",
        email:"usuario@gmail.com",
        senha:"123",
        token:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
    },
    {nome:"Sophia",
    email:"Sophia@gmail.com",
    senha:"123",
    token:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
},
{nome:"Nobel",
email:"Nobel@gmail.com",
senha:"123",
token:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
}
    ]
const getUserAuthenticated = (user) => {
   let usuarioAutenticado = {};
    users.map((recibe) => {
     if(user.email === recibe.email && user.password === recibe.senha){
        usuarioAutenticado = recibe 
     }  
   })

   return usuarioAutenticado
}
const getUsers = () =>{
        return users 
}
export { getUsers, getUserAuthenticated };/*/