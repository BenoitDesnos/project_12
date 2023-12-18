import Brand from "./Brand";
import Link from "./Link";

function Header() {
  return (
    <header className="w-screen fixed flex top-0 bg-primary shadow-layout h-24 items-center justify-start pl-8">
      <Brand />
      <nav className="w-full flex justify-around ">
        <Link href="/home" label="Accueil" />
        <Link href="/profil" label="Profil" />
        <Link href="/settings" label="Réglage" />
        <Link href="/community" label="Communauté" />
      </nav>
    </header>
  );
}

export default Header;
