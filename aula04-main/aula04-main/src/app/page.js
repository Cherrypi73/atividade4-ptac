'use client'
import { useState } from "react";
import handlerAcessUser from "./functions/handlerAcess"
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

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
    <div  className="grid grid-rows-4 grid-flow-col gap-4">
      <h1>Login</h1>
      <form onSubmit={handlerLogin}>
        <input
          placeholder='E-mail'
          type="email"
          className="border border-neutral-400 rounded-lg"
          onChange={(e) => { setUser({ ...user, email: e.target.value }) }}>
        </input>
        <input
          placeholder='Senha'
          type='password'
          className="border border-neutral-400 rounded-lg"
          onChange={(e) => { setUser({ ...user, password: e.target.value }) }}>
        </input>
        <button className="bg-rose-400 rounded p-2">Entrar</button>
      
      <ToastContainer/>
      </form>
    </div>
  )
}
