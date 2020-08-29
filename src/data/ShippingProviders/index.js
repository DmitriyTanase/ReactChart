import React from 'react'
import PieChart from 'components/PieChart'
import shippingProvidersData from 'data/json/shippingProviders'

import './index.css'

export default () => {
    return (
        <div className="shipping-providers-chart block-frame">
            <div className="block-title">Shipping Providers</div>
            <PieChart data={shippingProvidersData} enableTooltip disableLabels />
        </div>
    )
}
