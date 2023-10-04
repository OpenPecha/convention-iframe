export default function BurgerIcon({ setShowSidebar }) {
  return (
    <svg
      onClick={() => setShowSidebar((prev) => !prev)}
      className="fixed z-50 flex items-center text-3xl text-white cursor-pointer right-5 bottom-1/2"
      fill="#384451"
      viewBox="0 0 100 80"
      width="40"
      height="40"
    >
      <rect width="100" height="10"></rect>
      <rect y="30" width="100" height="10"></rect>
      <rect y="60" width="100" height="10"></rect>
    </svg>
  );
}
