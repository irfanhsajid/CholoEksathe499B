import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../context/userContext";
import { Avatar } from "keep-react";
import { CiLogout } from "react-icons/ci";
import { IoIosLogIn } from "react-icons/io";

const buttonStyle = {
  color: 'whitesmoke',
  padding: '.3rem .6rem',
  borderRadius: '5px',
  width: '7rem',
  letterSpacing: '1px',
  cursor: 'pointer',
  marginRight: '10px'
};

const MainNav = () => {
  const { user, logout } = useContext(UserContext)
  const navigate = useNavigate();

  const handleLogout = async () => {
    logout();
    navigate('/');
  }

  //console.log(user);
  return (
    <div className="text-primary py-4 sticky top-0 z-10 bg-white backdrop-filter backdrop-blur-lg bg-opacity-30 ">
      <nav className="flex items-center justify-between px-4" >
        <p className="font-semibold text-primary text-[2rem]">CholFiri...</p>
        <ul className="px-1 py-1 flex justify-center items-center gap-10 ">
          {navItems.map((data, index) => (
            <li key={index} className="hover:border-b-2 hover:border-secondary hover:-translate-y-1 border-b-2 border-transparent  py-1 transition-all">
              <Link to={data?.link}> {data.name}  </Link>
            </li>
          ))}
        </ul>
        {
          !user && (
            <Link className="" to='/login'>
              <button className="bg-primary flex gap-2 items-center" style={buttonStyle}><IoIosLogIn className="text-white text-xl font-bold" /> Sign In</button>
            </Link>
          )
        }

        {
          user && <div className="flex items-center justify-end gap-7 w-[20%]">
            <div className="flex gap-2 items-center"><Avatar className="" size="lg" /> <span>{user?.name}</span> </div>
            <button className="bg-primary flex gap-2 items-center" style={{
              ...buttonStyle, marginRight: '4%'
            }} onClick={handleLogout}>Logout<CiLogout className="text-white text-xl font-bold" /> </button>
          </div>
        }
      </nav>
    </div>
  );
};

export default MainNav;

const navItems = [
  {
    id: 1,
    name: 'Home',
    link: '/'
  },
  {
    id: 2,
    name: 'Events',
    link: '/events',

  },
  {
    id: 3,
    name: 'Venues',
    link: '/venues',

  },
  {
    id: 4,
    name: 'Contact Us',
    link: '/contact'
  },
  {
    id: 5,
    name: 'Dashboard',
    link: '/dashboard'

  },
]