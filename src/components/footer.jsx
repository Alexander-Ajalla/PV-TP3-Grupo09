import React from "react";
import "./footer.css"
import { FaGithub } from "react-icons/fa";
const Footer = ()=>{
    return(
            <footer className="footer">
                <div className="footer-left">
                  © {new Date().getFullYear()} GRUPO 09 Derechos reservados
                </div>
                <div className="footer-social">
                  <a href="https://github.com/Alexander-Ajalla/PV-TP3-Grupo09"><FaGithub /></a>
                </div>
            </footer>
          );
        }

export default Footer;