import React, { Component } from 'react';
import './ExerciseBookingTicket.css';
import SeatBookingInfo from './SeatBookingInfo';

export default class ExerciseBookingTicket extends Component {
  render() {
    return (
      <div className='bookingMovie' style={{position:'fixed', width:'100%', height:'100%', backgroundImage:'url(./img/bgmovie.jpg)', backgroundSize:'100%'}}>
        <div style={{position:'fixed', width:'100%', height:'100%', backgroundColor:'rgba(0,0,0,0.7)'}}>
          <div className='container'>
            <div className='row mt-3'>
              <div className='col-8 text-center'>
                <h1 className='text-warning'>ĐẶT VÉ XEM PHIM CYBERLEARN.VN</h1>
                <h3 className='text-light mt-5'>Màn Hình</h3>
                <div className='mt-3' style={{display:'flex', flexDirection:'row', justifyContent:'center'}}>
                  <div className='screen'>
                </div>
                  
                </div>
              </div>
              <div className='col-4 mt-3'>
                <h3 className='text-light pb-5'>DANH SÁCH GHẾ BẠN CHỌN</h3>
                <SeatBookingInfo/>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
