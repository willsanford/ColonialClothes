import Link from "next/link";
import TextField from "@mui/material/TextField";

const Footer = () => {
  return (
    <>
      <main className="flex flex-row bg-gray-200 justify-between border p-4">
        <div className="flex flex-col w-64">
          <h1 className="text-black text-lg">About</h1>
          <Link href="https://google.com" className="text-black text-base">About this site</Link>
          <Link href="https://google.com" className="text-black text-base">Selection guidance and criterion</Link>
          <Link href="https://google.com" className="text-black text-base">Creators</Link>
          <Link href="https://google.com" className="text-black text-base">Contact us</Link>

        </div>
        <div className="flex flex-col w-32">
          <h1 className="text-black text-lg">Pages</h1>
          <Link href="view/browse" className="text-black text-base">Browse</Link>
          <Link href="view/timeline" className="text-black text-base">Timeline</Link>
          <Link href="view/map" className="text-black text-base">Map</Link>
        </div>
        <div className="flex flex-col">
          <h1 className="text-black text-lg">Resources</h1>
          <Link href="https://google.com" className="text-black text-base">Bibliography</Link>
          <Link href="https://google.com" className="text-black text-base">Other Resources</Link>
          <Link href="https://google.com" className="text-black text-base">Contributors</Link>
        </div>
        <div className="flex flex-col">
          <TextField
          id="outlined-basic"
          onChange={(e) => {console.log(e.target.value.toLowerCase())}}
          variant="outlined"
          fullWidth
          label="Search"
        />
        </div>
      </main>
    </>
  );
};

export default Footer;
