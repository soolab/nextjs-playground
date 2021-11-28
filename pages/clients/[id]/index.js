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

  return (
    <div>
      <h1>The Clients Project Page</h1>
      <ul>
        {clients.map((client) => (
          <li key={client.id}>
            {/* 이렇게 href를 string으로 넣어도 되긴 하지만, object로 넘길 수 있음. */}
            {/* <Link href={`/clients/${client.id}`}>{client.name}</Link> */}
            <Link
              href={{ pathname: "/clients/[id]", query: { id: client.id } }}
            >
              {client.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ClientsProgjectPage;
