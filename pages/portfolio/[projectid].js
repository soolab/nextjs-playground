// functional component의 경우에는 이것을 쓰면 된다.
import { useRouter } from "next/router";

// class component의 경우는 아래의 것을 써야한다
// import { withRouter} from 'next/routet';

function PortfolioProjectPage() {
  const router = useRouter();

  // 이것을 통해서 pathname을 알아낼 수 있는 것임.
  // 그럼 엄청 자주 쓰는게 이거겠네.
  // 리액트에서도 비슷하게 했던 것 같기도 하다.
  console.log(router.pathname);

  // 여기에서 projectid를 추출 할 수 있는 거고
  console.log(router.query);

  // send a request to some backend server
  // to fetch the piece of data with an id of router.query.projectid

  return (
    <div>
      <h1>The PortfolioProjectPage!</h1>
    </div>
  );
}

export default PortfolioProjectPage;
