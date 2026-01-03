import background from './assets/background-img.jpg';
import { motion } from "framer-motion";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTiktok } from "@fortawesome/free-brands-svg-icons";
import { useEffect } from 'react';

function App() {
  useEffect(()=>{
    document.title = "MASA";
  },[])
  return (
    <div
      className="container"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
      }}
    >
      <motion.div className="parent">
        <h2>MASA</h2>

        <motion.a
          href="https://www.facebook.com/share/1ApfNM8i7Z/?mibextid=wwXIfr"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: -250 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="btn"
        >
          <h4><FacebookIcon style={{ fontSize: "35px" }} /> Latest Updates</h4>
        </motion.a>

        <motion.a
          href="https://www.instagram.com/masastore000?igsh=b25pZHk4NTA0M295"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, x: -250 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="btn"
        >
          <h4><InstagramIcon style={{ fontSize: "35px" }} /> Style Inspiration</h4>
        </motion.a>

        <motion.a
          href="https://www.tiktok.com/@masastore000?_r=1&_t=ZS-92lOI7Fzjm5"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, x: 250 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="btn"
        >
          <h4>
            <FontAwesomeIcon icon={faTiktok} style={{ fontSize: "35px" }} />
            Fashion Videos
          </h4>
        </motion.a>

        <motion.a
          href="https://wa.me/201103641751"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 250 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="btn"
        >
          <h4><WhatsAppIcon style={{ fontSize: "35px" }} /> Contact With Us</h4>
        </motion.a>




        <h3>
          Made by <motion.a  href="https://www.instagram.com/nadrhusein/"
          target="_blank"
          rel="noopener noreferrer"
           style={{ color: "#722F37" , textDecoration: "none"}}>Nader</motion.a>
        </h3>
      </motion.div>

      <div className="sparkle-overlay"></div>
      <div className="simple-overlay"></div>
    </div>
  );
}

export default App;
