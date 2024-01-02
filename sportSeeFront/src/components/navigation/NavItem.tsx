function NavItem({ href, icon }: { href: string; icon: string }) {
  return (
    <a href={href} hrefLang="fr">
      <img src={icon} alt="" className="w-16 h-16" />
    </a>
  );
}

export default NavItem;
