import { css, cx } from 'emotion'
import React, { Component, PropTypes } from 'react'
import Display from 'components/display'
import Input from 'components/input'
import DisplaySignature from 'components/displaySignature'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Actions from 'actions'
import moment from 'moment'
const color = 'white'


function Flights({ flights }) {
  return (
    <div>
      <h1>Past Flights</h1>
      { flights.flights.map((flight, idx) => {
        return (
          <div key={idx}>
            <div>
              <Display
                label='Date'
                value={moment(flight.date).format('l')}
                type='date'
              />
              <Display
                label='Aircraft'
                value={flight.aircraft}
              />
              <Display
                label='Departing Airport'
                value={flight.departingAirport}
              />
              <Display
                label='Arriving Airport'
                value={flight.arrivalAirport}
              />
              <Display
                label='Durration'
                value={flight.durration}
                type='number'
              />
              <Display
                label='Takeoffs'
                value={flight.takeoffs}
                type='number'
              />
              <Display
                label='Landings'
                value={flight.landings}
                type='number'
              /> 
              <Display
                label='Remarks'
                value={flight.remarks}
              />
            </div>
            <DisplaySignature
              signature={flight.signature}
            />
          </div>
          )
      })}
    </div>
  )
}


function mapStateToProps(state) {
  return {
    flights: state.flights
  }
}


export default connect(
  mapStateToProps
)(Flights)
