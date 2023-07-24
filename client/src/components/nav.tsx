import Link from "next/link";

export default () => (
  <nav className="w-full p-20 flex justify-between items-center">
    <div className="flex items-center">
      <div className="p-6 mr-6 bg-zinc-800"></div>
      <Link href="#" className="pr-6">
        Link 1
      </Link>
      <Link href="#" className="pr-6">
        Link 2
      </Link>
    </div>

    <Link
      href="#"
      className="bg-zinc-300 text-zinc-800 py-2 px-4 border-4 border-indigo-500 rounded hover:text-zinc-400 hover:bg-zinc-600 hover:scale-90 ease-out duration-100"
    >
      Login
    </Link>
  </nav>
);
