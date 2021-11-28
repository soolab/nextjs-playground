import Link from "next/link";
function HomePage() {
  return (
    <div>
      <h1>The Home Page</h1>
      <ul>
        <li>
          {/* 이렇게 하면은 새로운 페이지가 생긴다, 그럼 SPA의 장점을 살리지 못한다. */}
          {/* <a href='/portfolio'>portfolio</a> */}
          {/* 이렇게 하면은 새로운 html을 request를 하지 않으면서 이동할 수 있다는 것이다. */}
          <Link href="/portfolio">Portfolio</Link>
        </li>
        <li>
          <ui href="/clients">Clients</ui>
        </li>
      </ul>
    </div>
  );
}

export default HomePage;
