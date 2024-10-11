import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className=" bg-secondary py-8">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-between">
          {/* Social Links Section */}
          <div className=" flex gap-x-6 mx-auto xl:mx-0 mb-4">
            <Link href="https://github.com/ammarbaltee" target="_blank" rel="noopener noreferrer">
              <FaGithub className="text-[20px] text-primary dark:text-white/70 dark:hover:text-white hover:text-gray-800 transition-colors duration-200" />
            </Link>
            <Link href="https://www.linkedin.com/in/ammar-yasir-354181106/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-[20px] text-primary dark:text-white/70 dark:hover:text-white hover:text-gray-800 transition-colors duration-200" />
            </Link>
            <Link href="https://twitter.com/your-username" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="text-[20px] text-primary dark:text-white/70 dark:hover:text-white hover:text-gray-800 transition-colors duration-200" />
            </Link>
          </div>
          {/* Copyrights */}
          <div className="text-muted-foreground">Copyrights &copy; Ammar Yasir. All rights reserved.</div>
        </div>
    </div>
  </footer>
  )
}

export default Footer