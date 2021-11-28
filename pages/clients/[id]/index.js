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
            <Link href={`/clients/${client.id}`}>{client.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ClientsProgjectPage;
