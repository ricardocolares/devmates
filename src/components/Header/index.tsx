import Link from "next/link";

export function Header() {
  return (
    <nav className="container">
      <ul className="nav__header">
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/articles">
            <a>Articles</a>
          </Link>
        </li>
        <li>
          <Link href="/books">
            <a>Books</a>
          </Link>
        </li>
      </ul>
    </nav>
  )
}