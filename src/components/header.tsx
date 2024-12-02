import { Navigation } from "@/components/navigation";
import { getMainNavigation } from "@/lib/api";
import { getSession } from "@/auth";

export const Header = async () => {
  // Fetch data from Contentful
  const data = await getMainNavigation();
  const pages = data.fields.navItems
    ?.map((navItem) => navItem?.fields)
    .filter((navItem) => navItem !== undefined);

  const session = await getSession();

  return (
    <>
      <Navigation pages={pages} session={session} />
    </>
  );
};
