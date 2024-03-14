// components/NavBar.js
import Link from 'next/link';

const NavBar = ({ links }) => {
  return (
    <nav>
      <ul style={{}}>
        {links.map((link, index) => (
          <li key={index}>
            {/* Asegúrate de que se usa 'link.href' en lugar de 'link.path' */}
            <Link href={link.href}>
              {link.nombre}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
