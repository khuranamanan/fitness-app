import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <footer className="bg-blue-500 text-white py-4">
      <div className="container mx-auto flex flex-col items-center justify-center">
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/khuranamanan/fitness-app"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl font-bold hover:scale-125 transition"
          >
            <AiFillGithub size={28} />
          </a>
          <a
            href="https://twitter.com/MananKhurrana"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl font-bold hover:scale-125 transition"
          >
            <FaXTwitter size={28} />
          </a>
          <a
            href="https://www.linkedin.com/in/manan-khurana-1b135b19b/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl font-bold hover:scale-125 transition"
          >
            <AiFillLinkedin size={28} />
          </a>
        </div>
        <p className="text-xs mt-2">
          &copy; {new Date().getFullYear()} Fitness App. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
