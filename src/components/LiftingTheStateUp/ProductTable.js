import React from "react";
import sampleData from "./utils/mockedData";
import ProductTableData from "./ProductTableData";

const ProductTable = ({ isChecked, searchInput, setSearchInput }) => {
    return (
        <div className="table-container">
            <table className="table">
                <ProductTableData
                    data={sampleData}
                    isChecked={isChecked}
                    searchInput={searchInput}
                    setSearchInput={setSearchInput}
                />
            </table>
        </div>
    )
}

export default ProductTable;