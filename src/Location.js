import React, { Component } from 'react'
import request from 'superagent';

export default class Location extends Component {
    state = {
        select: 8,
        allLocations: []
    }
    handleSelect = (e) => {
        this.setState({ select: e.target.value })
    }
    handleSearch = async (e) => {
        e.preventDefault();
        const data = await request.get(`https://covid-19-stat-dev.herokuapp.com/api/signup/${this.state.select}`)
        this.setState({
            allLocations: data.body.states,
        });
    }
    render() {
        return (
            <div className="state-container">
                <form id="states">
                    <select onChange={this.handleSelect} id="states" name="states">
                        <option value="AL">Alabama</option>
	                    <option value="AK">Alaska</option>
	                    <option value="AZ">Arizona</option>
	                    <option value="AR">Arkansas</option>
	                    <option value="CA">California</option>
	                    <option value="CO">Colorado</option>
	                    <option value="CT">Connecticut</option>
	                    <option value="DE">Delaware</option>
	                    <option value="DC">District Of Columbia</option>
	                    <option value="FL">Florida</option>
	                    <option value="GA">Georgia</option>
                        <option value="GU">Guam (GU)</option>
	                    <option value="HI">Hawaii</option>
	                    <option value="ID">Idaho</option>
	                    <option value="IL">Illinois</option>
	                    <option value="IN">Indiana</option>
	                    <option value="IA">Iowa</option>
	                    <option value="KS">Kansas</option>
	                    <option value="KY">Kentucky</option>
	                    <option value="LA">Louisiana</option>
	                    <option value="ME">Maine</option>
	                    <option value="MD">Maryland</option>
	                    <option value="MA">Massachusetts</option>
	                    <option value="MI">Michigan</option>
	                    <option value="MN">Minnesota</option>
	                    <option value="MS">Mississippi</option>
	                    <option value="MO">Missouri</option>
	                    <option value="MT">Montana</option>
	                    <option value="NE">Nebraska</option>
	                    <option value="NV">Nevada</option>
	                    <option value="NH">New Hampshire</option>
	                    <option value="NJ">New Jersey</option>
	                    <option value="NM">New Mexico</option>
	                    <option value="NY">New York</option>
	                    <option value="NC">North Carolina</option>
	                    <option value="ND">North Dakota</option>
                        <option value="MP">Northern Mariana Islands (MP)</option>
	                    <option value="OH">Ohio</option>
	                    <option value="OK">Oklahoma</option>
	                    <option value="OR">Oregon</option>
	                    <option value="PA">Pennsylvania</option>
                        <option value="PR">Puerto Rico (PR)</option>
	                    <option value="RI">Rhode Island</option>
	                    <option value="SC">South Carolina</option>
	                    <option value="SD">South Dakota</option>
	                    <option value="TN">Tennessee</option>
	                    <option value="TX">Texas</option>
                        <option value="UM">United States Minor Outlying Islands (UM)</option>
	                    <option value="UT">Utah</option>
	                    <option value="VT">Vermont</option>
	                    <option value="VA">Virginia</option>
                        <option value="VI">Virgin Islands (VI)</option>
	                    <option value="WA">Washington</option>
	                    <option value="WV">West Virginia</option>
	                    <option value="WI">Wisconsin</option>
	                    <option value="WY">Wyoming</option>
                        <option value="AS">American Samoa (AS)</option>
                    </select>
                </form>
            </div>
        )
    }
}