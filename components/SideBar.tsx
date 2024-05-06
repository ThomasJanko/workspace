import React from 'react'
export const navItems = [
    {
        name: 'Animations',
        path: '/animations',
    },
    {
        name: 'CSS',
        path: '/css',
    },
    {
        name: 'Models',
        path: '/models',
    },
];


const SideBar = () => {
  return (
    <div>
        <ul>
            {navItems.map((item, index) => (
            <li key={index}>
                <a href={item.path}>{item.name}</a>
            </li>
            ))}
        </ul>
    </div>
  )
}

export default SideBar