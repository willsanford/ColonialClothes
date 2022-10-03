import type { NextComponentType } from "next";
import React from "react";
import Select, { SelectChangeEvent } from '@mui/material/Select';

import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';

const selectorClass:string = "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500";
const Filter: NextComponentType = (props) => {

  const uniqueClassification = [...new Set(props.rawItems.map(item => item.classification))]; // [ 'A', 'B']

  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };

  const names = [
    'Org1', 
    'Org2',
    'Org3'
  ];
  
  const locs_of_origin = [
    "Boston",
    "Connecticut",
    "Colonial New England"
  ]

  let num_items = 3;

  const [personName, setPersonName] = React.useState<string[]>([]);
  const handleChange = (event: SelectChangeEvent<typeof personName>) => {
    const {
      target: { value },
    } = event;
    props.setFunction([props.rawItems[0]])
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };
  return (
    <>
        <main className="container flex flex-col justify-between divide-y w-1/5 h-full bg-stone-300 rounded">
            <div className="flex-col justify-start p-1">
              <h1 className="text-3xl font-extrabold text-gray-700">Filter</h1>
              <h3 className=" font-extrabold text-gray-700">{num_items} items available</h3>
            </div>
            <div className="flex-col justify-start p-1">
              <h1 className="text-xl font-extrabold text-gray-700">Classification</h1>
              <Select
                labelId="demo-multiple-checkbox-label"
                id="demo-multiple-checkbox"
                multiple
                value={personName}
                onChange={handleChange}
                renderValue={(selected) => selected.join(', ')}
                MenuProps={MenuProps}
              >
                {uniqueClassification.map((name) => (
                  <MenuItem key={name} value={name}>
                    <Checkbox checked={personName.indexOf(name) > -1} />
                    <ListItemText primary={name} />
                  </MenuItem>
                ))}
              </Select>
            </div>

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
            <h1 className="text-3xl font-extrabold text-gray-700 ">Location of Origin</h1>
            <h1 className="text-3xl font-extrabold text-gray-700 ">Location of Creation</h1>
            <h1 className="text-3xl font-extrabold text-gray-700 ">Creator</h1>
      </main>
    </>
  );
};

export default Filter ;
