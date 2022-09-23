import React, { Component } from 'react'

export default class SeatsRow extends Component {

  renderGhe = () => {
    return this.props.seatRow.danhSachGhe.map((chairNumber, index) => {
      let cssBookedChair = '';
      let disabled = false;
      if(chairNumber.daDat){
        cssBookedChair = 'gheDuocChon';
        disabled = true;
      }

      return <button disabled={disabled} className={`ghe ${cssBookedChair}`} key={index}>
        {chairNumber.soGhe}
      </button>
    })
  }

  renderFirstRow = () => {
    return this.props.seatRow.danhSachGhe.map((hang, index) => {
      return <button className='rowNumber'>
        {hang.soGhe}
    </button>
    }) 
  }

  renderSeatRow = () => {
    if(this.props.rowNumber === 0){
      return <div style={{marginLeft:'30px'}}>
        {this.props.seatRow.hang} {this.renderFirstRow()}
      </div>
    } else{
      return <div>
          {this.props.seatRow.hang} {this.renderGhe()}
        </div>
    }
  }
  
  render() {
    return (
      <div className='text-light text-start mt-1' style={{fontSize:'30px'}}>
        {this.renderSeatRow()}
      </div>
    )
  }
}
