import  Button  from '../../../componentes/button'
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
        <Button />
        </>
    )
}
