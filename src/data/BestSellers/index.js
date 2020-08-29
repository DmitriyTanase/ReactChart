import React from 'react'
import BarChart from 'components/BarChart'
import bestSellersData from 'data/json/bestSellers'

import './index.css'

export default () => {
    return (
        <div className="best-sellers-chart block-frame">
            <div className="block-title">Best Sellers</div>
            <BarChart data={bestSellersData} />
        </div>
    )
}
