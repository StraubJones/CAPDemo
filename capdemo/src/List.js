import React, { Component } from 'react'
import fullRepsList from './reps.json'
// import './App.css'
import {
  Table,
  TableBody,
  // TableHeader,
  // TableHeaderColumn,
  TableRow,
  TableRowColumn
} from 'material-ui/Table'
import AutoComplete from 'material-ui/AutoComplete'

let states = ['AK - Alaska', 'AL - Alabama', 'AR - Arkansas', 'AS - American Samoa', 'AZ - Arizona', 'CA - California', 'CO - Colorado', 'CT - Connecticut', 'DC - District of Columbia', 'DE - Delaware', 'FL - Florida', 'GA - Georgia', 'GU - Guam', 'HI - Hawaii', 'IA - Iowa', 'ID - Idaho', 'IL - Illinois', 'IN - Indiana', 'KS - Kansas', 'KY - Kentucky', 'LA - Louisiana', 'MA - Massachusetts', 'MD - Maryland', 'ME - Maine', 'MI - Michigan', 'MN - Minnesota', 'MO - Missouri', 'MS - Mississippi', 'MT - Montana', 'NC - North Carolina', 'ND - North Dakota', 'NE - Nebraska', 'NH - New Hampshire', 'NJ - New Jersey', 'NM - New Mexico', 'NV - Nevada', 'NY - New York', 'OH - Ohio', 'OK - Oklahoma', 'OR - Oregon', 'PA - Pennsylvania', 'PR - Puerto Rico', 'RI - Rhode Island', 'SC - South Carolina', 'SD - South Dakota', 'TN - Tennessee', 'TX - Texas', 'UT - Utah', 'VA - Virginia', 'VI - Virgin Islands', 'VT - Vermont', 'WA - Washington', 'WI - Wisconsin', 'WV - West Virginia', 'WY - Wyoming']
let updatedRepsList = fullRepsList.map((rep) => {
  rep.imgurl = process.env.PUBLIC_URL + '/Project_Materials/shareable_images/' + rep.imgurl
  return rep
})

class List extends Component {
  constructor (props) {
    super(props)
    console.log(updatedRepsList)
    this.state = {
      shownReps: updatedRepsList
    }
  }
  filterReps (chosen, i) {
    if (chosen.length) {
      let filteredReps = updatedRepsList.filter((rep) => {
        return rep.name.includes(chosen.slice(0, 2))
      })
      this.setState({
        shownReps: filteredReps
      })
    }
  }
  render () {
    return (
      <div>
        <div className='AutoComplete'>
          <h2>Contact your representatives about the Dream Act</h2>
          <AutoComplete
            floatingLabelText='Enter your state by name or abbrev.'
            filter={AutoComplete.fuzzyFilter}
            dataSource={states}
            maxSearchResults={5}
            onNewRequest={(chosen, i) => { this.filterReps(chosen, i) }}
          />
        </div>
        <Table>
          <TableBody>
            {this.state.shownReps.length
              ? this.state.shownReps.map((rep, i) => {
                return (
                  <TableRow key={i}>
                    <TableRowColumn>
                      <img className='RepImage' src={rep.imgurl} />
                      <p>{rep.name}</p>
                    </TableRowColumn>
                    <TableRowColumn>
                      <a href={rep.phoneno}>{rep.phoneno}</a>
                    </TableRowColumn>
                    <TableRowColumn>
                      <a href={rep.tweeturl}>Tweet at this rep!</a>
                    </TableRowColumn>
                  </TableRow>
                )
              }) : <TableRow><TableRowColumn>No reps found for that state!</TableRowColumn></TableRow>
          }
          </TableBody>
        </Table>
      </div>
    )
  }
}

export default List

// <TableHeader>
//   <TableRow>
//     <TableHeaderColumn>ID</TableHeaderColumn>
//     <TableHeaderColumn>Name</TableHeaderColumn>
//     <TableHeaderColumn>Status</TableHeaderColumn>
//   </TableRow>
// </TableHeader>
