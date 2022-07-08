import React, { useEffect, useState } from 'react'
import SideBar from '~/features/Product/components/SideBar'
import productApi from '~/apis/productApi'
import ItemSort from '../components/ItemSort'
import Item from '../components/Item'
const Product = () => {
    const [productList, setProductList] = useState([])
    const [count, setCount] = useState(0)

    const [filters, setFilters] = useState({
      sort: 'sort=-rating'
  });
    useEffect(() => {
      const  fetchProductList = async () => {
          try {
                const res = await productApi.getAllCategory()
                setProductList(res.product)
                setCount(res.count)
            } catch (error) {
                console.log('Failed to fetch category list: ',error)
            }

        }
        fetchProductList()
    }, [filters])
  
  const handleSortChange = (newSoftValue) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      sort: newSoftValue
    }))
  }
console.log("product: ", productList)
  const handleFiltersChange = (newFilters) => {
  console.log("check new cate: ", newFilters);
  setFilters((prevFilters)=> ({
    ...prevFilters,
    ...newFilters
  }))
}
  return (
    <div className="container">
      <ItemSort currentSoft={filters.sort} onchange={handleSortChange} />
      <div className="product">
        <div className="product-list">
          <div className="product-sidebar">
            <SideBar filters={filters} onChange={handleFiltersChange} />
          </div>
          <div className="product-showproduct">
            <h2>RESULTS</h2>
            <Item data={productList} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product