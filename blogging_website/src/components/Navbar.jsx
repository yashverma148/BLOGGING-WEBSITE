import { color, motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaPenAlt, FaBlog } from 'react-icons/fa';
import '../index.css';

const Navbar = () => {
  return (
    
    <nav className="navbar" style={{ backgroundColor: 'black' }}>
      <div className="nav-container" >
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="logo-container" 
        >
          <FaBlog className="logo-icon"  style={{ color: 'white' }}/>
          <Link to="/" className="logo-text" style={{ color: 'white' }}>
          MindScribe
          </Link>
        </motion.div>
        
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="nav-button-container"
        >
          <Link
            to="/add"
            className="new-post-button"
            aria-label="Create new post"  style={{ backgroundColor: 'green' }}
          >
            <FaPenAlt className="button-icon" style={{ color: 'white' }} />
            <span className="button-text" style={{ color: 'white' }}>Add New Post</span>
          </Link>
        </motion.div>
      </div>
    </nav>
  );
};

export default Navbar;