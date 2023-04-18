import {useRouter} from 'next/router';

const Header = () => {
  let headerNote = "Unknown Path";
  switch (useRouter().asPath){
    case "/":
      headerNote = "";
      break;
    case "/view/timeline":
      headerNote = "Timeline: 1700-1775";
      break;
    case "/view/map":
      headerNote = "Map: Location of Origin and Creation";
      break;
    case "/view/browse":
      headerNote = "Browse";
      break;
  }
  return (
    <>
      <main className="flex flex-row h-20 bg-gray-400 justify-between p-4 rounded">
        <h1 className="text-black text-2xl">{headerNote}</h1>
        <h1 className="text-white text-2xl">Refashioning Colonial America</h1>
      </main>
    </>
  );
};

export default Header;
