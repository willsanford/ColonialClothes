import type { NextComponentType } from "next";
import React from "react";
import Select, { SelectChangeEvent } from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import Input from '@mui/material/Input';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import { Button } from "@mui/material";

const selectorClass:string = "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500";
const Filter: NextComponentType = (props) => {
  const [ startDate, setStartDate ] = React.useState(1700);
  const [ startDateError, setStartDateError ] = React.useState(false);
  const [ endDate, setEndDate ] = React.useState(1800);
  const [ endDateError, setEndDateError ] = React.useState(false);

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
  function isNumeric(value) {
    return /^\d+$/.test(value);
  }

  const applyFilter = () => {
    let filter = {}
    let end_error = !isNumeric(endDate) || startDate == "";
    let start_error = !isNumeric(startDate) || endDate == "";
    setStartDateError(start_error);
    setEndDateError(end_error);
    if (start_error || end_error) return;

    filter['class'] = classification.length == 0 ? uniqueClassification : classification;
    filter['locOfOrigin'] = locOfOrigin.length == 0 ? uniqueLocationOfOrigin : locOfOrigin;
    filter['s_date'] = Number(startDate);
    filter['e_date'] = Number(endDate);

    props.filterFunc(filter);
  };

  const resetFilter = () => {
    setClassification([]);
    setLocOfOrigin([]);
    props.filterFunc({
    	'class': uniqueClassification,
	'locOfOrigin': uniqueLocationOfOrigin,
	's_date': 0,
	'e_date': 99999,
    });
  }

  // Classification
  const [classification, setClassification] = React.useState<string[]>([]);
  const handleClassificationChange = (event: SelectChangeEvent<typeof classification>) => {
    const {
      target: { value },
    } = event;
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
    setLocOfOrigin(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };
  return (
    <>
        <main className="container flex flex-col justify-start divide-y w-1/5 h-full bg-stone-300 rounded">
            <div className="flex-col justify-start p-1">
              <h1 className="text-3xl font-extrabold text-gray-700">Filter</h1>
              <h3 className=" font-extrabold text-gray-700">{props.numItems} items available</h3>
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


            <div className="flex-col justify-end p-1">
              <h1 className="text-xl font-extrabold text-gray-700">Date Range</h1>
	      <TextField id="outlined-basic" label="Start" defaultValue="1700" variant="outlined" onChange={event => setStartDate(event.target.value) } error={startDateError}/>
              <TextField id="outlined-basic" label="End" defaultValue="1800" variant="outlined"  onChange={event => setEndDate(event.target.value)} error={endDateError}/>
            </div>
            <div className="flex-col justify-center p-1">
              <Button onClick={applyFilter} variant="contained">Apply Filter</Button>
              <Button onClick={resetFilter} variant="contained">Reset Filter</Button>
            </div>
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
