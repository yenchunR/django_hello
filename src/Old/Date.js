import React from "react";
import DatePicker from "react-datepicker";
import { getMonth, getYear, getDate } from 'date-fns';
import "react-datepicker/dist/react-datepicker.css";
import 'bootstrap/dist/css/bootstrap.min.css';

// CSS Modules, react-datepicker-cssmodules.css
//import 'react-datepicker/dist/react-datepicker-cssmodules.css';

export default class DatePick extends React.Component{
    
    constructor(props){
        super(props);
        
        this.state = {
            value: "民國110年 5月 21日",
            startDate: new Date(2021, 4, 21),
        }
    }
    handleChange = date =>{
        var Year = getYear(date);
        if(Year > 1911)
            Year = Year - 1911;
            
            var Mon = getMonth(date) + 1;
            var Day = getDate(date);
        var NewDate = "民國"+Year.toString()+"年 "+Mon.toString()+"月 "+Day.toString()+"日"
        this.setState({
            startDate: date,
            value: NewDate,
          });
    }
  render(){
    return (
        <div>
            <br></br>
            <label>阿公店開店日選擇</label><br></br>
            <DatePicker 
                value = {this.state.value}
                selected={this.state.startDate} 
                onChange={this.handleChange}
            />
        </div>
      );
  }
};

