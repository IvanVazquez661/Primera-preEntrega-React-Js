import CartWidget from "../CartWidget/CartWidget"
import { NavLink } from "react-router-dom"



const NavBar =() => {
    return (
        <nav claasName="NavBar" >
            <link to='/'>
            <h3>Ecommerce</h3>
            </link>
            <div className='Categories'>
             <NavLink to={`/category/celular`} claasName={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Celulares</NavLink>
             <NavLink to={`/category/tablet`} claasName={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Tablet</NavLink>
             <NavLink to={`/category/consolas`} claasName={({isActive}) => isActive ? 'ActiveOption' : 'Option'} ></NavLink>  
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar