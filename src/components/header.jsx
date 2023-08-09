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
      <main className="flex flex-row w-screen h-1/4 bg-cloth-regular-bg border-4">
        <div className="flex">
          <h1>lkdjlkj</h1>
        </div>
        <div className="flex">
          <h1>lkdjlkj</h1>
        </div>
      </main>
    </>
  );
};

export default Header;
