'use client'
import { ToastContainer, toast} from "react-toastify";
import { useEffect, useState } from "react";
import 'react-toastify/dist/ReactToastify.css';
import { deleteUser, getUserbyid } from "@/app/functions/handlerAcessAPI";
import { useRouter } from "next/navigation";
import Link from "next/link"
export default function Alter( {params} ){
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
  });

  const { push } = useRouter();

  useEffect(() =>{
    const findUser = async () => {
      const userFind = await  getUserbyid(params.id);
      setUser({ ...user })
    }
    findUser()
  }, [])

  const handlerAlter = async (e) => {
    e.preventDefault();
    toast.success('Deletado com Sucesso!')
    await deleteUser(user, params.id);//pega o usuario e o id dele
    return push("/pages/dashboard");
  } 
  return(
    <body className="bg-gray-200 ">
   <div  className="flex   items-center justify-center  italic   ">
    <div className='grid grid-rows-1  '>
    <div className="bg-white p-5 rounded-lg text-gray-700 w-72 min-h-[10rem] mt-10 shadow-lg mt-6  ">
    <center><br/>
    </center>
     <form onSubmit={handlerAlter}>
    <center><h1 className="text-2xl ">Deletar Usuário</h1><br/></center>
        <center>
    <input
       className="border border-neutral-400 rounded-lg p-3 "
        value={user.name}
        placeholder="Nome"
        type="name"
        onChange={(e) => { setUser({ ...user, name: e.target.value }) }}>
      </input></center><pre> </pre>
      <center>
      <input
       className="border border-neutral-400 rounded-lg p-3 "
        value={user.email}
        type="email"
        placeholder="Email"
        onChange={(e) => { setUser({ ...user, email: e.target.value }) }}>
      </input></center><pre> </pre>
      <center>
      <input className="border border-neutral-400 rounded-lg p-3 "   value={user.password}
        type='password'
        placeholder="Password"
        onChange={(e) => { setUser({ ...user, password: e.target.value }) }}>
      </input></center><pre> </pre>
      <div className="grid grid-cols-2">
        <div className=" p-3">
      <button  className='bg-cyan-500 hover:bg-teal-500 rounded shadow-lg p-1 text-xl'>Alterar
      </button></div>
      <div className=" p-3">
      <div className='bg-cyan-500 hover:bg-teal-500 rounded shadow-lg p-1 text-xl'>  <Link href={`/`}>Voltar</Link></div>
      </div></div>
    
    </form>
    <ToastContainer/>
    </div>  </div></div></body>
    )
}