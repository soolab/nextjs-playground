import { useRouter } from "next/router";

function BlogPostsPage() {
  // [...slug] 라는 것을 어떻게 이해하면 되느냐 뭐 그런것인데
  // baseUrl/blogs/2021/12/31
  // 이런식으로 유저가 쳤다고 해보자.
  // 이건 array 형식으로 [2021, 12, 31]
  // 이런식으로 온다고 생각하면 됨.

  // 실제로 router.query를 찍어보게 되면은
  // { slug: [2021, 12, 31]} 이런식으로 나오게 된다.
  // 당연히 slug라는 이름은 마음대로 지어도 될 것 같다.

  const router = useRouter();
  console.log(router.query);

  return (
    <div>
      <h1>The Blog Posts</h1>
    </div>
  );
}

export default BlogPostsPage;
