'use client'
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
export default function recoverPassword(){
    const { push } = useRouter();
    
    const handlerPassword = async (e) => {
        e.preventDefault();
        push('./');
         
      }

    return(
        <body className="bg-gray-300 ">
      <div  className="flex   items-center justify-center  italic   ">
      <div className="bg-white p-5 rounded-lg text-gray-700 w-72 min-h-[10rem] mt-10 shadow-lg mt-6  ">
      <center><pre>  </pre>
      </center>
      <center><h1 className="text-2xl">Recuperar Acesso</h1><br/></center>
            <form onSubmit={handlerPassword}>
        <input
              className="border border-neutral-400 rounded-lg p-3 "
          placeholder='  email de recuperação'
          type="email"
          >
        </input><pre> </pre>
        <div className="grid grid-cols-2">
        </div>
        <input
                   className="border border-neutral-400 rounded-lg p-3 "
          placeholder=' Nova Senha'
          type='password'
        >
        </input><pre>  </pre>
        <div className="grid grid-cols-2 ">
        <button
                 className="bg-cyan-500 hover:bg-teal-500  rounded-lg p-3 "
        >Enviar
        </button><pre>  </pre>
        
        </div>
      </form>
      <ToastContainer/>
      </div></div>
    
</body>
 )}