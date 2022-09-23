import React, { Component, Fragment } from "react";
import "./ExerciseBookingTicket.css";
import SeatBookingInfo from "./SeatBookingInfo";
import danhSachGhe from "../../Data/danhSachGhe.json";
import SeatsRow from "./SeatsRow";

export default class ExerciseBookingTicket extends Component {

  renderSeatRow = () => {
    return danhSachGhe.map((seatRow, index) => {
      return <div key={index}>
        <SeatsRow seatRow={seatRow} rowNumber={index}/>
      </div>
    })
  }

  render() {
    return (
      <div
        className="bookingMovie"
        style={{
          position: "fixed",
          width: "100%",
          height: "100%",
          backgroundImage: "url(./img/bgmovie.jpg)",
          backgroundSize: "100%",
        }}
      >
        <div
          style={{
            position: "fixed",
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0,0,0,0.7)",
          }}
        >
          <div className="container-fluid">
            <div className="row mt-2">
              <div className="col-8 text-center">
                <h1 className="text-warning">ĐẶT VÉ XEM PHIM CYBERLEARN.VN</h1>
                <h3 className="text-light mt-3">Màn Hình</h3>
                <div
                  className="mt-3"
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                  }}
                >
                  <div className="screen">
                  </div>
      
                </div>
                {this.renderSeatRow()}
                
                
              </div>
              <div className="col-4 mt-3">
                <h3 className="text-light pb-5">DANH SÁCH GHẾ BẠN CHỌN</h3>
                <SeatBookingInfo />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
