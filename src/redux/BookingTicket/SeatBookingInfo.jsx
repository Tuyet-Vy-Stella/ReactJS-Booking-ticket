import React, { Component } from "react";

export default class SeatBookingInfo extends Component {
  render() {
    return (
      <div>
        <div className="mt-5">
          <button className="gheDuocChon"></button>
          <span className="text-light mx-3" style={{ fontSize: "30px" }}>
            Ghế đã đặt
          </span>
          <br />
          <button className="gheDangChon"></button>
          <span className="text-light mx-3" style={{ fontSize: "30px" }}>
            Ghế đang đặt
          </span>
          <br />
          <button className="ghe" style={{ marginLeft: "0px" }}></button>
          <span className="text-light mx-3" style={{ fontSize: "30px" }}>
            Ghế chưa đặt
          </span>
        </div>

        <div className="mt-4">
          <table className="table" border="2">
            <thead>
              <tr className="text-light" style={{fontSize:'25px'}}>
                <th style={{borderWidth:'1px', padding:'0.75rem'}}>Số ghế</th>
                <th style={{borderWidth:'1px', padding:'0.75rem'}}>Giá</th>
                <th style={{borderWidth:'1px', padding:'0.75rem'}}></th>
              </tr>
            </thead>
            <tbody>
            
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
