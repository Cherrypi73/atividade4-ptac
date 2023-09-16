import  Button  from '../../../componentes/button'
import  Button2  from '../../../componentes/alter'
import Link from 'next/link'
export const metadata = {
    title: 'Register users',
    description: 'Project for class PTAC',
}

export default function DashboardLayout({ children }) {
    return (
        <>
        <body>
                {children}
        </body>
        <div className='bg-emerald-400 grid grid-cols-4 p-3'> 
    <div className=''> <Button /></div>   
      <div>  <Link href={'/pages/dashboard/alter'}>alterar</Link></div>
      <div>  <Link href={'/pages/dashboard/register'}>registrar</Link></div>
       </div> </>
    )
}
