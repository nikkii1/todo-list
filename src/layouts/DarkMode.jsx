import { Outlet } from "react-router-dom";

export default function DarkMode() {

  const isDarkMode = true; // Replace this with your actual dark mode logic

  const className = isDarkMode ? 'dark' : '';
  return (
    <div>
      <Outlet />
    </div>
  );
}
