import { useState } from "react";

function FilterSidebar({
  brands,
  selectedBrand,
  setSelectedBrand,
  sortOption,
  setSortOption,
  priceRange,
  setPriceRange
}) {

  const [showFilter, setShowFilter] = useState(false);

  const min = 0;
  const max = 500;

  const handleMinChange = (e) => {
    const value = Math.min(Number(e.target.value), priceRange[1] - 50);
    setPriceRange([value, priceRange[1]]);
  };

  const handleMaxChange = (e) => {
    const value = Math.max(Number(e.target.value), priceRange[0] + 50);
    setPriceRange([priceRange[0], value]);
  };

  const handleClear = () => {
    setSelectedBrand("all");
    setSortOption("default");
    setPriceRange([0, 500]);
  };

  return (
    <>
      <div className="d-md-none mobile-filter">
        <button
          className="filter-btn d-flex justify-content-between align-items-center"
          onClick={() => setShowFilter(!showFilter)}
        >
          <span className="d-flex align-items-center gap-2 me-1">
            <i className="fa-solid fa-filter"></i>
            Filters 
          </span> 

          <i
            className={`fa-solid ${showFilter ? " fa-chevron-up" : " fa-chevron-down"
              }`}
          ></i>
        </button>
      </div>

      <div className={`filter_sidebar ${showFilter ? "show" : ""}`}>

        {/* HEADER */}
        <div className="d-flex justify-content-between mb-3">
          <h4 className="fw-semibold">Filters</h4>
          <button
            className="btn btn-sm btn-link text-danger p-0"
            onClick={handleClear}
          >
            Clear All
          </button>
        </div>

        {/* BRAND */}
        <div className="filter_section mb-4">
          <h5 className="fw-semibold">Brands</h5>
          {brands.map((brand, i) => (
            <div key={i} className="form-check">
              <input
                type="radio"
                className="form-check-input"
                checked={selectedBrand === brand}
                onChange={() => setSelectedBrand(brand)}
              />
              <label className="form-check-label text-capitalize">
                {brand}
              </label>
            </div>
          ))}
        </div>

        {/* SORT */}
        <div className="filter_section mb-4">
          <h5 className="fw-semibold">Sort By</h5>
          {[
            { label: "Default", value: "default" },
            { label: "Price: Low to High", value: "low-high" },
            { label: "Price: High to Low", value: "high-low" },
            { label: "Most Popular", value: "popular" },
          ].map((item, i) => (
            <div key={i} className="form-check">
              <input
                type="radio"
                className="form-check-input"
                checked={sortOption === item.value}
                onChange={() => setSortOption(item.value)}
              />
              <label className="form-check-label">{item.label}</label>
            </div>
          ))}
        </div>

        {/* PRICE */}
        <div className="filter_section">
          <h5 className="fw-semibold">Price Range</h5>

          <div className="slider_container">
            <div className="slider_track"></div>

            <div
              className="slider_range"
              style={{
                left: `${(priceRange[0] / max) * 100}%`,
                right: `${100 - (priceRange[1] / max) * 100}%`
              }}
            ></div>

            <input
              type="range"
              min={min}
              max={max}
              value={priceRange[0]}
              onChange={handleMinChange}
              className="thumb thumb-left w-100"
            />

            <input
              type="range"
              min={min}
              max={max}
              value={priceRange[1]}
              onChange={handleMaxChange}
              className="thumb thumb-right w-100"
            />
          </div>

          <div className="d-flex justify-content-between mt-2">
            <span>£{priceRange[0]}</span>
            <span>£{priceRange[1]}</span>
          </div>
        </div>

      </div>
    </>
  );
}

export default FilterSidebar;