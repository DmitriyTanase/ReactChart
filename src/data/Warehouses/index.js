import React from 'react'
import PieChart from 'components/PieChart'
import warehousesData from 'data/json/warehouses'

import './index.css'

export default () => {
    return (
        <div className="warehouses-chart block-frame">
            <div className="block-title">Warehouses</div>
            <PieChart data={warehousesData} enableTooltip disableLabels />
        </div>
    )
}
