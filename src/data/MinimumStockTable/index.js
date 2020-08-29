import React from 'react'
import minimumStockLevelData from 'data/json/minimumStockLevel'

import Table from 'components/Table'

import './index.css'

export default () => {
    return (
        <div className="minimum-stock-table block-frame">
            <div className="block-title">Minimum Stock Level</div>
            <Table data={minimumStockLevelData} />
        </div>
    )
}
