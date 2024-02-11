import { useState, useEffect } from "react";

const ProductTableData = ({ data, isChecked, searchInput, setSearchInput }) => {
    const [tableData, setTableData] = useState([])
    console.log(searchInput)

    const organisedData = (data) => {
        const output = data.reduce((result, item) => {
            let categoryEntry = result.find(entry => entry.category_name === item.category);
            if (!categoryEntry) {
                categoryEntry = {
                    category_name: item.category,
                    items: []
                };
                result.push(categoryEntry);
            }
            categoryEntry.items.push({
                price: item.price,
                stocked: item.stocked,
                name: item.name
            });

            return result;
        }, []);
        console.log("output:", output)
        setTableData(output)
    }
    const filteredData = (filterData) => {
        const filteredItems = filterData.map(category =>
            ({ ...category, items: category.items.filter(item => item.stocked === isChecked) })
        );
        console.log("filteredItems:", filteredItems)
        setTableData(filteredItems)
    }

    const searchedData = (searchData) => {
        const searchedItems = searchData.map(
            category => (
                {...category, items: category.items.filter(item => item.name === searchInput)}
            )
        )
        setTableData(searchedItems)
    }

    useEffect(() => {
        organisedData(data)
        if (isChecked) {
            filteredData(tableData)
        }
        if (searchInput !== '') {
            searchedData(tableData)
        }
    }, [isChecked, searchInput])

    return (
        tableData?.map((item) => (
            <table className="tableMain">
                <th colSpan={2}>
                    <tr className="categoryNames">
                        {item.category_name}
                    </tr>
                </th>
                <tr>
                    <td>
                        Name
                    </td>
                    <td>
                        Price
                    </td>
                </tr>
                {item.items.map((single_item) =>
                    <tr className="categoryItems">
                        <td>{single_item.name}</td>
                        <td>{single_item.price}</td>
                    </tr>
                )}
            </table>
        ))
    )
}

export default ProductTableData;