import React from 'react';
import { connect } from 'react-redux';
import 'react-dates/initialize';
import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from '../actions/filters';

class ExpenseListFilters extends React.Component {
  state = {
    calendarFocused: null
  };
  onDatesChange = ({ startDate , endDate}) => {
    this.props.dispatch(setStartDate(startDate));
    this.props.dispatch(setEndDate(endDate));
  };
  onFocusChange = (calendarFocused) => {
    this.setState(() => ({ calendarFocused }));
  }

  render () {
    return  (
      <div>
        <input 
          type="text" 
          value={this.props.filters.text} 
          onChange={(e) => {
            this.props.dispatch(setTextFilter(e.target.value));
          }}
        />
        <select value={this.props.filters.sortBy} onChange={ (e) => {
          if (e.target.value === 'date') {
            this.props.dispatch(sortByDate());
          } else if ( e.target.value === 'amount') {
            this.props.dispatch(sortByAmount());
          }
        }} >
          <option value="date">Date</option>
          <option value="amount">Amount</option>
          {console.log('that', this.props.filters)}
        </select>
        <DateRangePicker 
          startDate={this.props.filters.startDate}
          startDateId="MyDatePicker"
          endDate={this.props.filters.endDate}
          endDateId="MyDatePicker2"
          onDatesChange={this.onDatesChange}
          focusedInput={this.state.calendarFocused}
          showClearDates={true}
          onFocusChange={this.onFocusChange}
          numberOfMonths={1}
          isOutsideRange={() => false}
        />
      </div>
    )
  }
}



const mapStateToProps = (state) => {
  return {
    filters: state.filters
  };
};

export default connect(mapStateToProps)(ExpenseListFilters);