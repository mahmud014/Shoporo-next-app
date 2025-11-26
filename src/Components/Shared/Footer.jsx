import Link from "next/link";
import { FaYoutube, FaFacebookF, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  const links = (
    <>
      <li>
        <Link href="/about">About</Link>
      </li>
      <li>
        <Link href="/contact">Contact</Link>
      </li>
      <li>
        <Link href="#">Jobs</Link>
      </li>
      <li>
        <Link href="#">Press Kit</Link>
      </li>
    </>
  );
  return (
    <footer className="bg-black text-white rounded p-10">
      <div className="footer footer-horizontal footer-center container mx-auto">
        <nav className="grid grid-flow-col gap-4">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </nav>
        <nav>
          <div className="grid grid-flow-col gap-8">
            <a>
              <FaFacebookF size={24} />
            </a>
            <a>
              <FaGithub size={24} />
            </a>
            <a>
              <FaYoutube size={24} />
            </a>
            <a>
              <FaXTwitter size={24} />
            </a>
          </div>
        </nav>
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by
            Shopora Industries Ltd
          </p>
        </aside>
      </div>
    </footer>
  );
}
