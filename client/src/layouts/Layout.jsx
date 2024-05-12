/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


const Layout = ({ children, data }) => {
    return (
        <div className="flex h-screen">
            {/* Side Navigation */}
            <div className="w-1/5 bg-gradient-to-br from-purple-600 to-black text-white">
                <ul className="p-2">
                    {data?.map((data, index) => (
                        <li key={index} className="border-b py-2">
                            <Link to={data?.link}> {data.name}  </Link>
                        </li>
                    ))}
                </ul>
            </div>
            {/* Main Content */}
            <div className="flex-grow">
                {children}
            </div>

            {/* if you wish you can also set rightnavbar here */}
            {/* Right Sidebar
      <div className="w-1/10 bg-themeBackground text-themeForeground z-50">
        <ThemeSwitcher />
      </div> */}
        </div>
    );
};

export default Layout;

