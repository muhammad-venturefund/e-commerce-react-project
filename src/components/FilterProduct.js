import React from "react";
import { MdSearch } from "react-icons/md";
import Form from "react-bootstrap/Form";
import { useFilterContext } from "../context/filterContext";
import { RiCheckFill } from "react-icons/ri";
const FilterProduct = () => {
  const {
    filters: { text, category, color },
    updateFilterValue,
    all_products,
  } = useFilterContext();

  const getUniqueData = (data, property) => {
    let newValue = data.map((currentElem) => {
      return currentElem[property];
    });

    if (property === "colors") {
      // return (newValue = ["all", ...new Set([].concat(...newValue))])
      newValue = newValue.flat();
    } 
    return (newValue = ["all", ...new Set(newValue)]);
  };
  const categoryOnlyData = getUniqueData(all_products, "category");
  const companyOnlyData = getUniqueData(all_products, "company");
  const colorsOnlyData = getUniqueData(all_products, "colors");
  console.log(colorsOnlyData);
  return (
    <div className="filter-product">
      <h5>Filter</h5>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="search-box search-filter d-inline-flex align-items-center me-auto">
          <span className="search-icon">
            <MdSearch />
          </span>
          <input
            className="form-input"
            type="text"
            name="text"
            value={text}
            onChange={updateFilterValue}
            placeholder="Search product..."
          />
        </div>
      </form>

      <div className="filter-widget mt-3">
        <h6>Category</h6>
        {categoryOnlyData.map((currentElm, index) => (
          <button
            key={index}
            value={currentElm}
            name="category"
            type="button"
            className="btn btn-link d-block text-capitalize"
            onClick={updateFilterValue}
          >
            {currentElm}
          </button>
        ))}
      </div>

      <div className="filter-widget mt-3">
        <h6>Company</h6>
        <Form.Select
          aria-label="Default select example"
          className="text-capitalize"
          name="company"
          id="company"
          onChange={updateFilterValue}
        >
          {companyOnlyData.map((companyItem, index) => (
            <option value={companyItem} key={index}>
              {companyItem}
            </option>
          ))}
        </Form.Select>
      </div>

      {/* <div className="filter-widget mt-3">
        <h6>Colors</h6>
<div className="d-flex align-items-center">
{colorsOnlyData.map((curColor, index) => {
          if (curColor === "all") {
            return (
              <button
                type="button"
                className="all-colors"
                key={index}
                value={curColor}
                onClick={updateFilterValue}
              >
                All
              </button>
            );
          } else {
            return (
              <button
                className="d-inline-flex color-box-filter"
                type="button"
                key={index}
                style={{ backgroundColor: curColor }}
                value={curColor}
                onClick={updateFilterValue}
              >
               
              </button>
            );
          }
        })}
</div>
     
      </div> */}

      <div className="filter-widget mt-3">
        <h6>Price</h6>
      </div>
    </div>
  );
};

export default FilterProduct;
