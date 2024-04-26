import { NavLink } from "react-router-dom";
const NavBar = () => {
    return(
        <nav className="flex flex-row items-center m-5">
            <NavLink to="/">
                <button className="m-2 bg-yellow-500 hover:bg-yellow-600 text-gray-100 font-bold py-2 px-4 rounded-lg shadow">Home</button>
            </NavLink>
            <NavLink to="/films">
                <button className="m-2 bg-yellow-500 hover:bg-yellow-600 text-gray-100 font-bold py-2 px-4 rounded-lg shadow">Films</button>
            </NavLink>
            <NavLink to="/people">
                <button className="m-2 bg-yellow-500 hover:bg-yellow-600 text-gray-100 font-bold py-2 px-4 rounded-lg shadow">People</button>
            </NavLink>
            <NavLink to="/planets">
                <button className="m-2 bg-yellow-500 hover:bg-yellow-600 text-gray-100 font-bold py-2 px-4 rounded-lg shadow">Planets</button>
            </NavLink>
            <NavLink to="/species">
                <button className="m-2 bg-yellow-500 hover:bg-yellow-600 text-gray-100 font-bold py-2 px-4 rounded-lg shadow">Species</button>
            </NavLink>
            <NavLink to="/starships">
                <button className="m-2 bg-yellow-500 hover:bg-yellow-600 text-gray-100 font-bold py-2 px-4 rounded-lg shadow">Starships</button>
            </NavLink>
            <NavLink to="/vehicles">
                <button className="m-2 bg-yellow-500 hover:bg-yellow-600 text-gray-100 font-bold py-2 px-4 rounded-lg shadow">Vehicles</button>
            </NavLink>

        </nav>
    );

}

export default NavBar;