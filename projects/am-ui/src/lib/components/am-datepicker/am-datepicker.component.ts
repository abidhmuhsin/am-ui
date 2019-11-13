import { Component, OnInit, Output, EventEmitter } from '@angular/core';


enum WeekDay { SUNDAY, MONDAY, TUESDAY, WEDNESDAY, THURSDAY, FRIDAY, SATURDAY }
enum Months { January, February, March, April, May, June, July, August, September, October, November, December }

@Component({
  selector: 'am-datepicker',
  templateUrl: './am-datepicker.component.html',
  styleUrls: ['./am-datepicker.component.css']
})
export class AmDatepickerComponent {
/*
The development of this compoenent is in initial stage.
Code cleanup and optimisation is pending.
*/
  @Output()
  private date: EventEmitter<Date> = new EventEmitter();

  constructor() { }

  TODAY = new Date();
  CURRENT_YEAR = +(this.TODAY.getFullYear());
  // Current Month []
  CURRENT_MONTH = +(this.TODAY.getMonth());
  CURRENT_DATE = +(this.TODAY.getDate());
  SELECTED_FULL_DATE = '' + this.CURRENT_YEAR + this.CURRENT_MONTH + this.CURRENT_DATE;

  getDaysInMonth = (month = this.CURRENT_MONTH, year = this.CURRENT_YEAR) => {
    // const months30 = [4, 6, 9, 11];
    const months30 = [3, 5, 8, 10]; // [Apr, June, Aug, Oct]
    const isLeapYear = year % 4 === 0;

    // return month === 2
    return month === 1
      ? isLeapYear
        ? 29
        : 28
      : months30.includes(month)
        ? 30
        : 31;
  }
  getMonthFirstDay = (month = this.CURRENT_MONTH, year = this.CURRENT_YEAR) => {
    // return +(new Date(`${year}-${zeroPad(month, 2)}-01`).getDay()) + 1;
    return (new Date(year, month, 1).getDay());
  }

  // MONTH_DATES = new Array(this.getDaysInMonth()).fill().map((x,i)=>i+1)
  MONTH_DATES_PREV = [];
  MONTH_DATES_NEXT = [];
  MONTH_DATES = [];
  WEEK_DAYS = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']; // = new Array(this.WEEK_DAYS);
  //i>9?i+1:'0'+(i+1) -- zero padding
  // get dateArray(){
  //   return new Array(this.getDaysInMonth()).fill().map((x,i)=>i+1);
  // }


  public data;

  ngOnInit() {
    this.loadMonth();

    this.data = this.CURRENT_MONTH + ' ' + this.CURRENT_YEAR;

    console.log(WeekDay.MONDAY
      , WeekDay[this.getMonthFirstDay()], this.getDaysInMonth())
  }

  loadMonth(month = this.CURRENT_MONTH, year = this.CURRENT_YEAR) {
    //month: 0-11 Jan-Dec
    const daysInMonth = this.getDaysInMonth(month, year);

    this.MONTH_DATES = new Array(daysInMonth).fill(0).map((x, i) => i + 1);

    const monthFirstDay = this.getMonthFirstDay(month);
    const prevMonthDatesLength = monthFirstDay === 0 ? 7 + monthFirstDay : monthFirstDay;
    //monthFirstDay===0 ==>7+ ==> If current month starts on Sunday, Show one week row of prev month before 1st.
    this.MONTH_DATES_PREV = new Array(prevMonthDatesLength).fill(0)
      .map((x, i) => daysInMonth - i).reverse();
    const nextMonthDatesLength = 42 - this.MONTH_DATES.length - this.MONTH_DATES_PREV.length;
    // 6rows always => 6*7cols=42. Fillup rest of rows from next months dates
    this.MONTH_DATES_NEXT = new Array(nextMonthDatesLength).fill(0).map((x, i) => i + 1);

    console.log(Months[month], this.getDaysInMonth(month), this.getMonthFirstDay(month + 1));

    // this.CURRENT_MONTH = month;

  }
  loadPrevMonth() {
    if (this.CURRENT_MONTH == 0) {
      // if month = Jan
      this.CURRENT_MONTH = 11;
      this.CURRENT_YEAR = this.CURRENT_YEAR - 1;
    }
    else this.CURRENT_MONTH = this.CURRENT_MONTH - 1;
    this.loadMonth();

  }

  loadNextMonth() {
    if (this.CURRENT_MONTH == 11) {
      // if december
      this.CURRENT_MONTH = 0;
      this.CURRENT_YEAR = this.CURRENT_YEAR + 1;
    }else {
      this.CURRENT_MONTH = this.CURRENT_MONTH + 1;
    }
    this.loadMonth();

  }

  dateClicked(date) {
    this.CURRENT_DATE = date;
    this.SELECTED_FULL_DATE = '' + this.CURRENT_YEAR + this.CURRENT_MONTH + this.CURRENT_DATE;
    const selectedDate = new Date(this.CURRENT_YEAR, this.CURRENT_MONTH, this.CURRENT_DATE);
    console.log('Date Choosen: ', selectedDate.toString());

    this.date.emit(selectedDate);
  }

  isSelectedDate(date) {
    return this.SELECTED_FULL_DATE === '' + this.CURRENT_YEAR + this.CURRENT_MONTH + date;
  }
}


/*
WEEK_DAYS1 = {
  Sunday: "Sun",
  Monday: "Mon",
  Tuesday: "Tue",
  Wednesday: "Wed",
  Thursday: "Thu",
  Friday: "Fri",
  Saturday: "Sat"
}
CALENDAR_MONTHS = {
  January: "Jan",
  February: "Feb",
  March: "Mar",
  April: "Apr",
  May: "May",
  June: "Jun",
  July: "Jul",
  August: "Aug",
  September: "Sep",
  October: "Oct",
  November: "Nov",
  December: "Dec"
}
CALENDAR_WEEKS = 6; */