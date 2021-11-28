import { useRouter } from "next/router";

function SelectedClientProjectPage() {
  const router = useRouter();

  // router.query는 object를 던진다는 것을 주의하도록 하자.
  // 여기서 또 알아서 꺼내쓰면 된다.
  console.log(router.query);

  return (
    <div>
      <h1>The Project Page for a Specific Project for a Selected Client</h1>
    </div>
  );
}

export default SelectedClientProjectPage;
