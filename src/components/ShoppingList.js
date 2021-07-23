import React, { useState } from "react";
import Item from "./Item";
import Filter from './Filter'

function ShoppingList({ items }) {
      const [selectedCategory, setSelectedCategory] = useState("");

      function handleCategoryChange(event) {
        setSelectedCategory(event.target.value);
      }

      const itemsFilter = items.filter((item) => {
        if (selectedCategory === "") return true;

        return item.category === selectedCategory;
      });

      let itemsMap = itemsFilter.map((item) => (
        <Item key={item.id} name={item.name} category={item.category} />
      ))

      return (
        <div className="ShoppingList">
          <div className="Filter">
            <Filter onCategoryChange={handleCategoryChange} />
          </div>
          <ul className="Items">
            {itemsMap}
          </ul>
        </div>
      );
}

export default ShoppingList;