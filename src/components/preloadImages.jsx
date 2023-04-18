import { useEffect } from "react";
import Image from "next/image";
import rawItems from "../../public/data/data.json"

const PreloadImages = () => {
  useEffect(() => {
    rawItems.forEach((el) => {
        el.add_files.forEach((fname) => {
          let src = "/imgs/" + fname + ".jpeg"
          const img = new Image(src=src);
        })
      });
  }, []);

  return null;
};

export default PreloadImages;