'use client'
import { useEffect, useState } from "react";
import handlerAcessUser from "./functions/handlerAcess"
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Link from "next/link"; 
export default function Login() {
  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const { push} = useRouter(); 

  const handlerLogin = async (e) => {
    e.preventDefault();
    try {
      const userAuth = await handlerAcessUser(user);
      if(userAuth.token === undefined){
        toast.error("Erro no e-mail ou senha");
      }
      push('/pages/dashboard');
    } catch {
    toast.error("Erro na aplicação")
    }
  }
  return (
    <body className="bg-gray-300 ">
    <div  className="flex   items-center justify-center  italic   ">
   <div className="bg-white p-5 rounded-lg text-gray-700 w-72 min-h-[10rem] mt-10 shadow-lg mt-6  ">
   <div>
    <div > <img class="icon" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0OCIgaGVpZ2h0PSI0OCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiMzNjM2MzYiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS11c2VyLTIiPjxjaXJjbGUgY3g9IjEyIiBjeT0iOCIgcj0iNSIvPjxwYXRoIGQ9Ik0yMCAyMWE4IDggMCAxIDAtMTYgMCIvPjwvc3ZnPg=="/> </div>
   </div>

    <div className=" center text-xl p-3">
   
       <h1>Login</h1></div>
      <form onSubmit={handlerLogin}>
    <div className="center p-3 ">   
    
    <label className="p-1"> Email:</label>
     <input
          placeholder='E-mail'
          type="email"
          className="border border-neutral-400 rounded-lg p-3 "
          onChange={(e) => { setUser({ ...user, email: e.target.value }) }}>
        </input></div>  
    <div className="p-3 center">
    <label className="p-1"> Senha:</label>
       <input
          placeholder='Senha'
          type='password'
          className="border border-neutral-400 rounded-lg p-3 "
          onChange={(e) => { setUser({ ...user, password: e.target.value }) }}>
        </input></div>    
      <div className="center p-2  "> <button className="bg-cyan-500 hover:bg-teal-500 rounded shadow-lg p-1 text-xl p-2 ">Entrar</button><pre> </pre>
      <div className="p-2">  <Link href={'page'} className="bg-cyan-500 hover:bg-teal-500 rounded shadow-lg p-1 text-xl p-2 ">Recuperar Acesso</Link></div>
      </div> 
      <ToastContainer/>
      </form>
   
    </div>
    </div></body>
  )
}
