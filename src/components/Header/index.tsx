import Link from "next/link";

import { Container, Content } from './styles'

export function Header() {
  return (
    <Container>
    <nav className="container">
      <ul className="nav__header">
        <Content>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        </Content>
        <Content>
        <li>
          <Link href="/articles">
            <a>Articles</a>
          </Link>
        </li>
        </Content>
        <Content>
        <li>
          <Link href="/books">
            <a>Books</a>
          </Link>
        </li>
        </Content>
      </ul>
    </nav>
    </Container>
  )
}