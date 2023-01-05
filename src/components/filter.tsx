import type { NextComponentType } from "next";
import React from "react";
import Select, { SelectChangeEvent } from '@mui/material/Select';

import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';

const selectorClass:string = "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500";
const Filter: NextComponentType = (props) => {

  const uniqueClassification = [...new Set(props.rawItems.map(item => item.classification))]; 
  const uniqueLocationOfOrigin = [...new Set(props.rawItems.map(item => item.loc_origin))];
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

  let num_items = 3;

  // Different 

  // Classification
  const [classification, setClassification] = React.useState<string[]>([]);
  const handleClassificationChange = (event: SelectChangeEvent<typeof classification>) => {
    const {
      target: { value },
    } = event;
    console.log(value);
    props.setFunction([props.rawItems[0]])
    setClassification(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  // Location of Origin
  const [locOfOrigin, setLocOfOrigin] = React.useState<string[]>([]);
  const handleLocOfOriginChange = (event: SelectChangeEvent<typeof locOfOrigin>) => {
    const {
      target: { value },
    } = event;
    props.setFunction([props.rawItems[0]])
    setLocOfOrigin(
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
                className="flex-initial w-48"
                labelId="demo-multiple-checkbox-label"
                id="demo-multiple-checkbox"
                multiple
                value={classification}
                onChange={handleClassificationChange}
                renderValue={(selected) => selected.join(', ')}
                MenuProps={MenuProps}
              >
                {uniqueClassification.map((name) => (
                  <MenuItem key={name} value={name}>
                    <Checkbox checked={classification.indexOf(name) > -1} />
                    <ListItemText primary={name} />
                  </MenuItem>
                ))}
              </Select>
            </div>

            <div className="flex-col justify-start p-1">
              <h1 className="text-xl font-extrabold text-gray-700">Location of Origin</h1>
              <Select
                className="flex-initial w-48"
                labelId="demo-multiple-checkbox-label"
                id="demo-multiple-checkbox"
                multiple
                value={locOfOrigin}
                onChange={handleLocOfOriginChange}
                renderValue={(selected) => selected.join(', ')}
                MenuProps={MenuProps}
              >
                {uniqueLocationOfOrigin.map((name) => (
                  <MenuItem key={name} value={name}>
                    <Checkbox checked={locOfOrigin.indexOf(name) > -1} />
                    <ListItemText primary={name} />
                  </MenuItem>
                ))}
              </Select>
            </div>
            {/* <filterSelector changefunc={handleLocOfOriginChange} name={"Location Of Origin"} uniquevalues={uniqueLocationOfOrigin} value={locOfOrigin}/> */}
      </main>
    </>
  );
};

const filterSelector = (props) => {
  return (
    <div className="flex-col justify-start p-1">
      <h1 className="text-xl font-extrabold text-gray-700">{props.name}</h1>
      <Select
        className="flex-initial w-48" 
        labelId="demo-multiple-checkbox-label"
        id="demo-multiple-checkbox"
        multiple
        value={props.value}
        onChange={props.changefunc}
        renderValue={(selected) => selected.join(', ')}
        MenuProps={MenuProps}
      >
        {props.uniquevalues.map((name) => (
          <MenuItem key={name} value={name}>
            <Checkbox checked={props.value.indexOf(name) > -1} />
            <ListItemText primary={name} />
          </MenuItem>
        ))}
      </Select>
    </div>
  )
}
export default Filter ;
