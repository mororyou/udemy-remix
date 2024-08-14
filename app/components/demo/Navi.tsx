export default function Navi() {
  return (
    <ul className="flex flex-nowrap items-center">
      <li className="w-1/3 text-center">
        <a href="/demo">Demo</a>
      </li>
      <li className="w-1/3 text-center">
        <a href="/about">About</a>
      </li>
      <li className="w-1/3 text-center">
        <a href="/login">Login</a>
      </li>
    </ul>
  );
}
