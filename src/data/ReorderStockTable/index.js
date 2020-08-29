import React from 'react'
import reorderStockData from 'data/json/reorderStock'

import Table from 'components/Table'

import './index.css'

export default () => {
    return (
        <div className="reorder-stock-table block-frame">
            <div className="block-title">Re-Order Stock</div>
            <Table data={reorderStockData} />
        </div>
    )
}
