'use client'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Nav from '../../../../../componentes/nav'

const Formulario = () => {

  const handlerLogin = async (e) => {
    e.preventDefault();
    toast.success('Alterado com sucesso')
  }
  return (
    <body className="bg-gray-200 ">
   <Nav />  <div  className="flex   items-center justify-center  italic   ">
    
     <div className='grid grid-rows-1  '>
     <div className="bg-white p-5 rounded-lg text-gray-700 w-72 min-h-[10rem] mt-10 shadow-lg mt-6  ">
   <div className='center'>   <h1 className=' text-xl p-2'>Alterar</h1></div>
   <div > <img class="icon" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiM1MDRlNGUiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS11c2VyLXBsdXMiPjxwYXRoIGQ9Ik0xNiAyMXYtMmE0IDQgMCAwIDAtNC00SDZhNCA0IDAgMCAwLTQgNHYyIi8+PGNpcmNsZSBjeD0iOSIgY3k9IjciIHI9IjQiLz48bGluZSB4MT0iMTkiIHgyPSIxOSIgeTE9IjgiIHkyPSIxNCIvPjxsaW5lIHgxPSIyMiIgeDI9IjE2IiB5MT0iMTEiIHkyPSIxMSIvPjwvc3ZnPg=="/> </div>
      <form onSubmit={handlerLogin} >
 <div className='center' >
    <div className='p-2'>  <input placeholder='nome'   className="border border-neutral-400 rounded-lg p-3 " type="nome" required/></div>
      <div className='p-2'>  <input  placeholder='E-mail'   className="border border-neutral-400 rounded-lg p-3 "   type="email"required/> 
      </div>

      <div className='p-2'> <input   placeholder='Senha'    className="border border-neutral-400 rounded-lg p-3 "  type='password'required />
</div> 
<div> <button className='bg-cyan-500 hover:bg-teal-500 rounded shadow-lg p-1 text-xl p-2'>Alterar</button></div>
     </div>
     
      </form>
      <ToastContainer/>
    </div>
    </div></div> 
    </body>
  )
};

export default Formulario;


