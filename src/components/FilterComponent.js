import React from 'react';

function FilterComponent(props) {
    if (typeof props.options[0] === 'string') {
        return (
            <li className='filter-component'>
                <h4>
                    <button data-toggle="collapse" href={'#' + props.field} aria-expanded="false" aria-controls={props.field} >
                        {props.field.replace(/_/g, ' ').toUpperCase()}
                        <i className="fas fa-angle-down" style={{float:'right'}}></i>
                    </button>
                </h4>
                <div className="el-row collapse multi-collapse" id={props.field}>
                    <div className='el-select'>
                        <select name={props.field} type="text" readOnly="readonly" autoComplete="off" placeholder="Select" className="browser-default custom-select" onChange={props.handleFilterChange}>
                            <option value="">Select...</option>
                            {props.generateOptions(props.options)}
                        </select>
                    </div>
                </div>
            </li>
        )
    } else {
        return (
            <li className="filter-component">
                <h4>
                    <button data-toggle="collapse" href={'#' + props.field} aria-expanded="false" aria-controls={props.field}>
                    {props.field.replace(/_/g, ' ').toUpperCase()}
                    <i className="fas fa-angle-down" style={{float:'right'}}></i>
                    </button>
                </h4>
                <div className="el-row collapse multi-collapse" id={props.field}>
                    <div className='el-input' onChange={props.handleFilterChange}>
                        <input name={props.field} type="text" autoComplete="off" placeholder="Min" className="el-input_inner" />
                        <input name={props.field} type="text" autoComplete="off" placeholder="Max" className="el-input_inner" />
                    </div>
                </div>
            </li>
        )
    }
}

export default FilterComponent;