import React from 'react'

import './index.css'

export default (props) => {
    return (
        <div className="table-wrapper">
            <div className="table-title">{props.title}</div>
            <table className="table">
                <thead>
                    <tr>
                        <th>SKU</th>
                        <th>Channel</th>
                    </tr>
                </thead>
                <tbody>
                    {props.data.map((d, i) => (
                        <tr key={i}>
                            <td>{d.sku}</td>
                            <td>{d.channel}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
