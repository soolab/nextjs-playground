// 이런식으로 not found page를 만들 수 있다.
// 파일의 경로를 잘 알아둬야 한다. page folder 안에다가 놓아야 하고
// 404.js라는 것으로 꼭 해야 한다.
// nextjs가 framework의 형태를 지니고 있기 떄문에 그렇다고 이해하면 될 것 같다.

function NotFoundPage() {
  return (
    <div>
      <h1>Page not found.</h1>
    </div>
  );
}

export default NotFoundPage;
