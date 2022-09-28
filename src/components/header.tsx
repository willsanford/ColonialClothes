import type { NextComponentType } from "next";

const Header: NextComponentType = () => {
  return (
    <>
      <main className="flex h-10 bg-gray-200 justify-center">
        <h1 className="text-purple-300">Header</h1>
      </main>
    </>
  );
};

export default Header;
