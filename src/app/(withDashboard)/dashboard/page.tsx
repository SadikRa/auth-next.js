import { authOptions } from "@/utils/authOptions";
import { getServerSession } from "next-auth";
import Image from "next/image";

const DashboardPage = async () => {
  const session = await getServerSession(authOptions);

  console.log(session);

  return (
    <div>
      {session?.user ? (
        <>
          <h1 className="text-4xl text-center mt-10">
            Welcome To {session?.user?.name}
          </h1>
          <h1>logged in user email: {session?.user?.email}</h1>

          <Image
            src={session?.user?.image}
            alt="github img"
            width={300}
            height={300}
            className="mx-auto rounded-full"
          />
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default DashboardPage;
