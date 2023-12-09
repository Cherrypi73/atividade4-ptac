'use server'
const url ="https://trabalho-ptac4-mb3d.vercel.app";
const getUserAuthenticated = async (user) => {// user vem do login -- comunicação do servidor 
  const responseOfApi = await fetch(url + "/user/authenticated",
  {
    method: "POST", 
    headers: {"Content-Type": "application/json"},
    body:  JSON.stringify(user)
  }
  );
  const userAuth = await responseOfApi.json(); 
  return userAuth;
};

const getUsers = async() => {
  const responseOfApi = await fetch(url + '/users', {
      method: "GET",
      next: {revalidate: 1},
      headers: {"Content-Type": "application/json"}
  })
 const users = await responseOfApi.json();
 return users;
}
const getUserbyid = async (id) =>{
  try{
    const responseOfApi = await fetch(`${url}´/user/${id}`, {
     method: "GET",
     cache: "no-cache",
     headers: {
         "Content-Type": "application/json"
        },
     
});
 const lista = await responseOfApi.json();
 return lista;
  } catch {
    return null
  }
 
}
const updateUser = async (user,id)=>{
try{
  const responseOfApi = await fetch(url+ "/user/" +id,
  {
    method : "PUT",
  headers:{
      "Content-Type":"application/json"
    }, body:JSON.stringify(user)
  }
  )
  const userUpdate = await responseOfApi.json();
  return userUpdate;
 } catch{
    return null
  }
}
const deleteUser = async (user,id)=>{
  try{
    const responseOfApi = await fetch(url+ "/user/" +id,
    {
      method : "DELETE",
    headers:{
        "Content-Type":"application/json"
      }, body:JSON.stringify(user)
    }
    )
    const userdelete = await responseOfApi.json();
    return userdelete;
   } catch{
      return null
    }
  }
const postUser = async (user) =>{
  try{
    const responseOfApi = await fetch(url + "/user",
   {
                method: "POST",
          headers:{"Content-Type":"application/json"},
                body: JSON.stringify(user)
   } );
   const userSave = await responseOfApi.json();
   return userSave;
  } catch{
    return null
  }

}

export{getUsers,getUserAuthenticated, postUser,updateUser,getUserbyid,deleteUser}


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