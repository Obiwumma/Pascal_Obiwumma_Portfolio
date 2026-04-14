import { FaReact } from "react-icons/fa";
import { TiHtml5 } from "react-icons/ti";
import { IoLogoCss3 } from "react-icons/io";
import { IoLogoJavascript } from "react-icons/io5";
import { BsTypescript } from "react-icons/bs";
import { RiNextjsFill } from "react-icons/ri";
import { RiSupabaseFill } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";
import { DiNodejs } from "react-icons/di";
import { FaGitAlt } from "react-icons/fa";
import { SiHostinger } from "react-icons/si";

function SkillSet() {
  return (   
    <div className="row p-2 text-center">
      <h3>TECH STACK</h3>
      <div className="col-6 col-md-4 col-lg-3 mb-4">
        <TiHtml5 size={48} />
        <h6 className="mt-2">HTML</h6>
      </div>
      <div className="col-6 col-md-4 col-lg-3 mb-4">
        <IoLogoCss3 size={48} />
        <h6 className="mt-2">CSS</h6>
      </div>
      <div className="col-6 col-md-4 col-lg-3 mb-4">
        <IoLogoJavascript size={48} />
        <h6 className="mt-2">JAVASCRIPT</h6>
      </div>
      <div className="col-6 col-md-4 col-lg-3 mb-4">
        <BsTypescript size={48} />
        <h6 className="mt-2">TYPESCRIPT</h6>
      </div>
      <div className="col-6 col-md-4 col-lg-3 mb-4">
        <FaReact size={48} />
        <h6 className="mt-2">REACTJS</h6>
      </div>
      <div className="col-6 col-md-4 col-lg-3 mb-4">
        <RiNextjsFill size={48} />
        <h6 className="mt-2">NEXTJS</h6>
      </div>
      <div className="col-6 col-md-4 col-lg-3 mb-4">
        <RiSupabaseFill size={48} />
        <h6 className="mt-2">SUPABASE</h6>
      </div>
      <div className="col-6 col-md-4 col-lg-3 mb-4">
        <RiTailwindCssFill size={48} />
        <h6 className="mt-2">TAILWINDCSS</h6>
      </div>
      <div className="col-6 col-md-4 col-lg-3 mb-4">
        <DiNodejs size={58} />
        <h6 className="mt-0">NODEJS</h6>
      </div>
      <div className="col-6 col-md-4 col-lg-3 mb-4">
        <FaGitAlt size={48} />
        <h6 className="mt-2">GIT</h6>
      </div>
      <div className="col-6 col-md-4 col-lg-3 mb-4">
        <SiHostinger size={48} />
        <h6 className="mt-2">HOSTINGER</h6>
      </div>
    </div>
  )
}

export default SkillSet
