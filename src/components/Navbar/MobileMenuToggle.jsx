// eslint-disable-next-line react/prop-types
const MobileMenuToggle = ({ isOpen, toggleMenu }) => {
  return (
    <button
      data-collapse-toggle="navbar-default"
      type="button"
      className="button-toggle"
      aria-controls="navbar-default"
      aria-expanded={isOpen}
      onClick={toggleMenu}
    >
      <span className="sr-only">Open main menu</span>
      <svg
        className="w-5 h-5"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 17 14"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M1 1h15M1 7h15M1 13h15"
        />
      </svg>
    </button>
  );
};

export default MobileMenuToggle;
