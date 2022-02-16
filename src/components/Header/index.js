import Image from "next/image";
import Link from "../Link";
import Btn from "../Button";
import { FaLinkedin, FaGithub } from 'react-icons/fa'


export default function HeaderMenu(props) {

  return (
    <div className="header">

      <div className="flex justify-center items-center">
        <Link
          className="socials"
          href="https://www.linkedin.com/in/dtfigueiredo/"
          target="_blank"
          rel="noopener noreferrer">
          <FaLinkedin />
        </Link>

        <Link
          className="socials"
          href="https://github.com/dtfigueiredo"
          target="_blank"
          rel="noopener noreferrer">
          <FaGithub />
        </Link>

        <Btn
          className="btn btn-pages"
          onClick={props.handleNavigate}>{props.btnLabel}</Btn>
      </div>
    </div>
  )
}