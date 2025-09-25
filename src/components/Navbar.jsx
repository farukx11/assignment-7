export default function Navbar() {
  return (
    <nav className="flex justify-between items-center py-4 px-6 max-w-[1200px] mx-auto shadow">
      <h1 className="text-[18px] md:text-2xl font-bold text-gray-600">
        CS-Ticket System
      </h1>
      <div className="hidden md:flex items-center gap-6">
        <a href="">Home</a>
        <a href="">FAQ</a>
        <a href="">Changelog</a>
        <a href="">Blog</a>
        <a href="">Download</a>
        <a href="">Contact</a>
        <button className="flex gap-2 items-center py-1.5 px-4 bg-gradient-to-r from-[#6d36e5] to-[#9055ee] text-white rounded-sm cursor-pointer">
          + New Ticket
        </button>
      </div>
      <div className="md:hidden">
        <button className="flex gap-2 items-center py-1.5 px-4 bg-gradient-to-r from-[#6d36e5] to-[#9055ee] text-white rounded-sm cursor-pointer">
          + New Ticket
        </button>
      </div>
    </nav>
  );
}
