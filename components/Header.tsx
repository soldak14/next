import React, { FC } from 'react'
import styles from 'styles/Header.module.scss'
import Link from 'next/link'
import { useRouter } from 'next/router'

type RoutType = {
 path: string,
 title: string
}

const routs: RoutType[] = [
 { path: '/', title: 'Home' },
 { path: '/about', title: 'About' },
 { path: '/users', title: 'Users' },
]

const Header: FC = () => {
 const { pathname } = useRouter()

 return (
  <header className={styles.header}>
   <nav>
    <ul>
     {routs.map(({ title, path }) => (
      <li key={title}>
       <Link
        href={path}
        className={pathname === path ? styles.active : ''}>
        {title}
       </Link>
      </li>
     ))}
    </ul>
   </nav>
  </header>
 )
}

export default Header