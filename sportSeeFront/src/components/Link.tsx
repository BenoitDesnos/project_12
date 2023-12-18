import { useNavigate } from "react-router";

function Link({ label, href }: { label: string; href: string }) {
  const navigateTo = useNavigate();
  const handleNavigation = () => {
    console.log(`Navigating to ${href} for fake`);
    navigateTo("/");
  };
  return (
    <button
      className="cursor-pointer bg-primary hover:underline text-secondary text-lg "
      onClick={() => handleNavigation()}
    >
      {label}
    </button>
  );
}

export default Link;
