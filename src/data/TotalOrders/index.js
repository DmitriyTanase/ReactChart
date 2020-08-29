import React from 'react'
import PieChart from 'components/PieChart'
import totalOrdersData from 'data/json/totalOrders'

import './index.css'

export default () => {
    return (
        <div className="total-orders-chart block-frame">
            <div className="block-title">Total Orders</div>
            <PieChart data={totalOrdersData} />
        </div>
    )
}
