import React from 'react'
import ProgressChart from 'components/ProgressChart'
import totalProductsData from 'data/json/totalProducts'

import './index.css'

export default () => {
    return (
        <div className="total-products-chart block-frame">
            <div className="block-title">Total Products</div>
            <ProgressChart data={totalProductsData} label="With active Listing" />
        </div>
    )
}
