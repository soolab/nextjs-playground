import { useRouter } from "next/router";
import Link from "next/link";

function ClientsProgjectPage() {
  const router = useRouter();
  console.log(router.query);

  const clients = [
    {
      id: "jinsoo",
      name: "kimjinsoo",
    },
    {
      id: "jinsoo",
      name: "kimjinsoo",
    },
  ];

  // link를 사용해도 되지만은
  // 이렇게 button과 router.push를 사용해도 된다는 것임.
  // Link를 활용하지 않을 경우에는 이렇게 하는 것도 나쁘지 않아보인다.
  // 그냥 다른 방법이 있다 정도로 생각하면 될 것 같다.
  function loadProjectHandler() {
    // load data..
    // router.push("/clinets/max/projecta");
    // router.replace 를 하면은 push가 되는게 아니라 대체되는 것이라고 생각하면 될 것 같다.
    // 이런식으로 해도 무방하다.
    // object를 push에 전달하는 방법도 있다.
    // string으로 바로 줄 것이냐 아니면은 mapping해서 줄 것이냐의 차이인데
    // 나 같은 경우네는 그냥 바로 주는것이 더 깔끔해보이긴 한다.
    router.push({
      pathname: "clients/[id]/[clientprojectid]",
      query: { id: "max", clientprojectid: "projecta" },
    });
  }

  return (
    <div>
      <h1>The Clients Project Page</h1>
      <ul>
        {clients.map((client) => (
          <li key={client.id}>
            {/* 이렇게 href를 string으로 넣어도 되긴 하지만, object로 넘길 수 있음. */}
            {/* <Link href={`/clients/${client.id}`}>{client.name}</Link> */}
            {/* 아래처럼 해도 된다. 어떻게 할지는 알아서 정하도록 하자. */}
            <Link
              href={{ pathname: "/clients/[id]", query: { id: client.id } }}
            >
              {client.name}
            </Link>
          </li>
        ))}
      </ul>
      <button onClick={loadProjectHandler}>Load Project A</button>
    </div>
  );
}

export default ClientsProgjectPage;
