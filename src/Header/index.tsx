import Link from "next/link";

export function Header() {
  return (
    <ul>
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
  )
}