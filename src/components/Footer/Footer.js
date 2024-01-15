import css from './Footer.module.css';
import { FaGithub } from "react-icons/fa";


export const Footer = () => {
    return (
      <div className={css.footer}>
        <a
          className={css.link}
          target="_blank"
          rel="noreferrer"
          href="https://github.com/Czinaaz"
        >
          <span>
            <FaGithub /> <span className={css.text}>Ivan</span>
            Rudenko
          </span>
        </a>
      </div>
    );
  };