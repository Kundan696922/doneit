import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import {
  LayoutDashboard,
  FolderKanban,
  LogOut,
  LogIn,
  User
} from "lucide-react";


const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
  <nav className="bg-white shadow-lg">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between h-16">
        {/* Left */}
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-primary-600">
              DoneIt
            </span>
          </Link>

          {user && (
            <div className="ml-6 flex items-center space-x-2 sm:space-x-4">
              {/* Dashboard */}
              <Link
                to="/dashboard"
                className="flex items-center gap-2 text-gray-700 hover:text-primary-600 px-3 py-2 rounded-md transition-colors"
              >
                <LayoutDashboard size={20} />
                <span className="hidden lg:inline text-sm font-medium">
                  Dashboard
                </span>
              </Link>

              {/* Projects */}
              <Link
                to="/projects"
                className="flex items-center gap-2 text-gray-700 hover:text-primary-600 px-3 py-2 rounded-md transition-colors"
              >
                <FolderKanban size={20} />
                <span className="hidden lg:inline text-sm font-medium">
                  Projects
                </span>
              </Link>
            </div>
          )}
        </div>

        {/* Right */}
        <div className="flex items-center space-x-2 sm:space-x-4">
          {user ? (
            <>
              {/* Profile */}
              <Link
                to="/profile"
                className="flex items-center justify-center w-9 h-9 rounded-full bg-primary-600 text-white font-semibold"
                title={user.name}
              >
                {user.name.charAt(0).toUpperCase()}
              </Link>

              {/* Logout */}
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 text-gray-700 hover:text-red-600 px-3 py-2 rounded-md transition-colors"
              >
                <LogOut size={20} />
                <span className="hidden lg:inline text-sm font-medium">
                  Logout
                </span>
              </button>
            </>
          ) : (
            <>
              {/* Login */}
              <Link
                to="/login"
                className="flex items-center gap-2 text-gray-700 hover:text-primary-600 px-3 py-2 rounded-md transition-colors"
              >
                <LogIn size={20} />
                <span className="hidden lg:inline text-sm font-medium">
                  Login
                </span>
              </Link>

              {/* Sign Up */}
              <Link
                to="/register"
                className="flex items-center gap-2 btn-primary"
              >
                <User size={20} />
                <span className="hidden lg:inline text-sm font-medium">
                  Sign Up
                </span>
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  </nav>
);



};

export default Navbar;


