import { auth } from "@/auth";
import { Button } from "@/components/ui/button";
import ROUTES from "@/constants/routes";
import { signOut } from "@/auth";

const Home = async () => {
  const session = await auth();
  console.log(session);

  return (
    <>
      <h1 className="h1-bold">Well come to the world of nextjs</h1>
      <form
        className="px-10 pt-20"
        action={async () => {
          "use server";
          await signOut({ redirectTo: ROUTES.SIGN_IN });
        }}
      >
        <Button type="submit">Log out</Button>
      </form>
    </>
  );
};

export default Home;
