import { useNavigate } from "react-router";

function Link({ label }: { label: string; href: string }) {
  const navigateTo = useNavigate();
  const handleNavigation = () => {
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
