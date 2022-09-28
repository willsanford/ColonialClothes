import type { NextComponentType } from "next";

const selectorClass:string = "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500";
const Filter: NextComponentType = () => {
  return (
    <>
        <main className="container flex flex-col justify-between divide-y w-1/5 h-full bg-stone-300 rounded">
            <div className="flex-col justify-start p-1">
            <h1 className="text-3xl font-extrabold text-gray-700">Filter</h1>
            <h3 className=" font-extrabold text-gray-700">200 items available</h3>
            </div>

            {/* Dropdown selector */}
            <select id="orginizationSelector" className={selectorClass}>
                <option defaultValue="Org">Orginization</option>
                <option value="US">Org1</option>
                <option value="CA">Org2</option>
                <option value="FR">Org3</option>
                <option value="DE">Germany</option>
            </select>   
            
            <select id="classificationSelector" className={selectorClass}>
                <option defaultValue="class">Classification</option>
                <option value="US">Dress</option>
                <option value="CA">Shoe</option>
                <option value="FR">Painting</option>
                <option value="DE">Germany</option>
            </select>   
            
            <h1 className="text-3xl font-extrabold text-gray-700 ">Date</h1>
            <h1 className="text-3xl font-extrabold text-gray-700 ">Classification</h1>
            <h1 className="text-3xl font-extrabold text-gray-700 ">Object Name</h1>
            <h1 className="text-3xl font-extrabold text-gray-700 ">Title</h1>
            <h1 className="text-3xl font-extrabold text-gray-700 ">Location of Origin</h1>
            <h1 className="text-3xl font-extrabold text-gray-700 ">Location of Creation</h1>
            <h1 className="text-3xl font-extrabold text-gray-700 ">Creator</h1>
            <h1 className="text-3xl font-extrabold text-gray-700 ">Proveance</h1>
      </main>
    </>
  );
};

export default Filter ;
