export default function Header() {
  return (
    <header className="flex flex-col items-center mb-6">
      <p className="text-sm text-gray-500 italic">
        Developed by{" "}
        <a
          href="https://www.linkedin.com/in/gabriel-abreu-de-carvalho-862a3626b/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-blue-600 hover:underline"
        >
          Gabriel Carvalho
        </a>
      </p>
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold mb-5 tracking-[.08em]">
        To-Do List - Next.js
      </h1>
    </header>
  );
}
