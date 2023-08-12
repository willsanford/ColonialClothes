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
      <main className="flex flex-row justify-between w-screen h-1/4 bg-cover bg-cloth-regular-bg">
        <div className="flex">
          <h1>title</h1>
        </div>
        <div className="flex flex-row">
          <h1>about</h1>
          <h1>map</h1>
          <h1>browse</h1>
          <h1>timeline</h1>
        </div>
      </main>
    </>
  );
};

export default Header;
