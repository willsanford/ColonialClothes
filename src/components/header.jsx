import {useRouter} from 'next/router';
import Image from "next/image";

import { Libre_Caslon_Text} from "next/font/google";
import Link from "next/link";
const f = Libre_Caslon_Text({ weight: '700', subsets: ['latin'] } );

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
        <div className="flex flex-row text-3xl text-center w-1/3 ">
          <div className="flex flex-col justify-center items-center w-full">
            <div className="flex text-xl invisible">
              <h1>skjdhfjks</h1>
            </div>
            <div className="flex text-center">
              <h1 className={f.className}>FASHIONING COLONIAL</h1>
            </div>
            <div className="flex">
              <h1 className={f.className}>NEW ENGLAND</h1>
            </div>
            <div className="flex text-xl invisible">
              <h1>skjdhfjks</h1>
            </div>
          </div>
          <div className="flex w-full">
            <div className="h-100 w-4/5 relative">
              <Image
                  src={"/bg/ladies_.png"}
                  layout="fill" // required
                  objectFit="contain" // change to suit your needs
              />
            </div>
          </div>
        </div>
        <div className="flex flex-row w-1/2 text-3xl space-x-10 justify-center items-center">
          {["ABOUT", "RESOURCES", "MAP", "TIMELINE", "GALLERY"].map((name, i) => <NavLink name={name}/>)}
        </div>
      </main>
    </>
  );
};

const name_map = {
  'ABOUT': '/about',
  'RESOURCES': '/resources',
  'GALLERY': '/view/browse',
  'TIMELINE': '/view/timeline',
  'MAP': '/view/map',
}
const NavLink = ({name,}) => {
  return (
      <Link href={ name_map[name] }>
        <div className="hover:underline">
          <h1 className={f.className}>{name}</h1>
        </div>
      </Link>
  );
};
export default Header;
