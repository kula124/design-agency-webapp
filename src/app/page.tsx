// We hardcode pages here, but you could get this information from some external source (e.g. CMS, DB, config file, etc).
const pages = [
  { title: "Home", path: "/" },
  {
    title: "Showcase",
    path: "/showcase",
  },
  {
    title: "Blog",
    path: "/blog",
  },
  {
    title: "About us",
    path: "/about",
  },
  {
    title: "Contact us",
    path: "/contact",
  },
];

function processPage(page, index) {
  return (
    <li key={index}>
      <a href={page.path}>{page.title}</a>
    </li>
  );
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-10">
      <ul className="flex space-x-4 mb-4">{pages.map(processPage)}</ul>
      <h1 className="text-6xl font-extrabold tracking-tight">Home page</h1>
    </main>
  );
}
