import styles from './App.module.css';
import SearchBar from './SearchBar';
import AddItem from './AddItem';
import { useState, useEffect } from "react";
import ItemsDisplay from './ItemsDisplay';
// import styled from "styled-components";

// const Title = styled.h1`
//   color: blue;
// `;

function App() {
  const [filters, setFilters] = useState({});
  const [data, setData] = useState({ items: [] });

  useEffect(() => {
    fetch("http://localhost:3000/items")
    .then((response) => response.json())
    .then((data) => setData({ items: data}));
  }, []); // only run the effect when the data changes

  const updateFilters = (searchParams) => {
    setFilters(searchParams);
  };

  const deleteItem = (item) => {
    const items = data["items"];
    const requestOptions = {
      method: "DELETE"
    }
    fetch(`http://localhost:3000/items/${item.id}`, requestOptions).then(
      (response) => {
        if (response.ok) {
          const idx = items.indexOf(item);
          items.splice(idx, 1);
          setData({ items: items});
        }
      }
    )
  }

  const addItemToData = (item) => {
    let items = data["items"];

    const requestOption = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(item),
    };
    fetch("http://localhost:3000/items", requestOption)
    .then((response) =>response.json()) //.then means to wait for the previous action to finish
    .then((data) => {
      console.log(data)
      items.push(data);
      setData({ items: items });
    }); //this is a get request
  };

  const filterData = (data) => {
    const filteredData = [];

    if(!filters.name) {
      return data;
    }

    for (const item of data){
      if (filters.name !== "" && item.name !== filters.name){
        continue;
      }

      if (filters.price !== 0 && item.price >= filters.price){
        continue;
      }

      if (filters.type !== "" && item.type !== filters.type){
        continue;
      }

      if (filters.brand !== "" && item.brand !== filters.brand){
        continue;
      }

      filteredData.push(item);
      
    }

    return filteredData;
  }

  return (
    <div className="container">
      {/* <Title> test </Title> */}
      <div className='row mt-3'>
        <ItemsDisplay deleteItem = {deleteItem} items={filterData(data["items"])} />
      </div>

      <div className='row mt-3'>
        <SearchBar updateSearchParams={updateFilters} />
      </div>

      <div className='row mt-3'>
        <AddItem addItem={addItemToData} />
      </div>

    </div>
  );
}




export default App;
