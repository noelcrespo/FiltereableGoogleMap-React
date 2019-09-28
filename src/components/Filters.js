import React, { Component } from 'react';
import FilterComponent from './FilterComponent';

class Filters extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentFilters: {}
        }
    }

    // generate options for select dropdowns
    generateOptions = (arr) => {
        let options = [];
        arr.forEach(val => {
            (val && options.push(
                <option value={val} key={val} >{val}</option>
            ))
        })
        return options;
    }

    // handles changes to the categorical filters (Select inputs)
    handleFilterChange =(e) => {
        let field = e.target.name;
        let type = e.target.placeholder || null;
        let value = e.target.value;
        let filterExists = false;
        let newFilters = { ...this.state.currentFilters };
        // check to see if filter has already been added and if so, reassign the value
        if (newFilters[field]) {
            // delete filter if they've reset input
            if (value === '') {
                delete newFilters[field];
                filterExists = true;
            } else {
                // check to see if select or min-max input and update accordingly
                (type ? newFilters[field][type] = value : newFilters[field] = value);
                filterExists = true;
            }
        }
        // if filter hadnt already been added
        if(!filterExists ) {
            // check to see if select or min-max input and insert accordingly
            (type ? newFilters[field]= {[type]: value} : newFilters[field] = value);
        }
        this.setState(prevState => ({
            currentFilters: newFilters 
        }))
    }

    render() {
        let filters = [];
        Object.keys(this.props.filters)
            .sort()
            .forEach(filter => {
            filters.push(
                <FilterComponent field={filter} options={this.props.filters[filter]} key={filter} generateOptions={this.generateOptions} handleFilterChange={this.handleFilterChange} />
            )
        });
        return (
            <div id='filters-container'>
                <div id='filters-header'>
                    <h3 style={{textAlign:'center'}}>Filters</h3>
                </div>
                <div id="filters">
                    <ul>
                        {filters}
                    </ul>
                </div>
                <div id="submit-container">
                    <button type='button' className='el-button el-button-primary' onClick={() => this.props.handleFilterSubmit(this.state.currentFilters)}>Filter</button>
                </div>
            </div>
        )
    }
}

export default Filters;
