import Link from "next/link";
import Image from "next/image";

import logoImg from "@/assets/logo.png";
import classess from "./main-header.module.css";

export default function MainHeader() {
  return (
    <header className={classess.header}>
      <Link href="/" className={classess.logo}>
        <Image src={logoImg.src} alt="A plate with food on it" />
        Next level food
      </Link>
      <nav className={classess.nav}>
        <ul>
          <li>
            <Link href="/meals">Meals</Link>
          </li>
          <li>
            <Link href="/meals/share">Share a meal</Link>
          </li>
          <li>
            <Link href="/community">Community</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
