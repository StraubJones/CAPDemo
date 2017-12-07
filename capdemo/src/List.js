import React, { Component } from 'react'
import phoneIcon from './phone_icon.png'
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

let states = ['Show All', 'AK - Alaska', 'AL - Alabama', 'AR - Arkansas', 'AS - American Samoa', 'AZ - Arizona', 'CA - California', 'CO - Colorado', 'CT - Connecticut', 'DC - District of Columbia', 'DE - Delaware', 'FL - Florida', 'GA - Georgia', 'GU - Guam', 'HI - Hawaii', 'IA - Iowa', 'ID - Idaho', 'IL - Illinois', 'IN - Indiana', 'KS - Kansas', 'KY - Kentucky', 'LA - Louisiana', 'MA - Massachusetts', 'MD - Maryland', 'ME - Maine', 'MI - Michigan', 'MN - Minnesota', 'MO - Missouri', 'MS - Mississippi', 'MT - Montana', 'NC - North Carolina', 'ND - North Dakota', 'NE - Nebraska', 'NH - New Hampshire', 'NJ - New Jersey', 'NM - New Mexico', 'NV - Nevada', 'NY - New York', 'OH - Ohio', 'OK - Oklahoma', 'OR - Oregon', 'PA - Pennsylvania', 'PR - Puerto Rico', 'RI - Rhode Island', 'SC - South Carolina', 'SD - South Dakota', 'TN - Tennessee', 'TX - Texas', 'UT - Utah', 'VA - Virginia', 'VI - Virgin Islands', 'VT - Vermont', 'WA - Washington', 'WI - Wisconsin', 'WV - West Virginia', 'WY - Wyoming']
let updatedRepsList = fullRepsList.map((rep) => {
  rep.imgurl = process.env.PUBLIC_URL + '/Project_Materials/shareable_images/' + rep.imgurl
  console.log(rep.tweeturl)
  let tweeturlArray = rep.tweeturl.split('%20')
  rep.tweeturl = tweeturlArray[0].split('=')[0] + '=' + 'Lorem ipsum dolor sit met'.split(' ').join('%20')
  rep.facebookurl = 'https://www.facebook.com/dialog/feed?app_id=184683071273&link=http%3A%2F%2Fwww.insert-url-to-share-here.com&picture=http%3A%2F%2Fwww.insert-image-share-url-here.jpg&name=This%20is%20a%20Sample%20Title&caption=%20&description=consectetur%20adipiscing%20elit&redirect_uri=http%3A%2F%2Fwww.facebook.com%2F'
  console.log(rep.tweeturl)
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
    if (chosen.length && chosen !== 'Show All') {
      let filteredReps = updatedRepsList.filter((rep) => {
        return rep.name.includes(chosen.slice(0, 2))
      })
      this.setState({
        shownReps: filteredReps
      })
    } else {
      this.setState({
        shownReps: updatedRepsList
      })
    }
  }
  render () {
    return (
      <div>
        <div className='AutoComplete'>
          <AutoComplete
            floatingLabelText='Enter your state by name or abbrev.'
            filter={AutoComplete.fuzzyFilter}
            dataSource={states}
            maxSearchResults={5}
            onNewRequest={(chosen, i) => { this.filterReps(chosen, i) }}
          />
        </div>
        <Table>
          <TableBody displayRowCheckbox={false} stripedRows>
            {this.state.shownReps.length
              ? this.state.shownReps.map((rep, i) => {
                return (
                  <TableRow key={i}>
                    <TableRowColumn className='TableRow'>
                      {/*
                        <img className='RepImage' src={rep.imgurl} />
                      */}
                      <p>{rep.name}</p>
                    </TableRowColumn>
                    <TableRowColumn className='TableRow'>
                      <a href={rep.phoneno}>
                        <img className='PhoneIcon' alt='telephone' src={phoneIcon} />
                        {rep.phoneno}
                      </a>
                    </TableRowColumn>
                    <TableRowColumn className='TableRow'>
                      <i className='fa fa-twitter' aria-hidden='true' />
                      <a className='TwitterCall' href={rep.tweeturl}>Tweet at this rep!</a>
                      <div className='fb-share-button' data-href='http://localhost:3000/CAP' data-layout='button_count' data-size='small' data-mobile-iframe='true'><a className='fb-xfbml-parse-ignore' target='_blank' href='https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2Flocalhost%3A3000%2FCAP&amp;src=sdkpreparse'>Share</a></div>
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
