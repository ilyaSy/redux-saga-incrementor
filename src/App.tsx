import React from "react";
import "./styles.css";
import { Value } from "./components/Value";
import { Button } from "./components/Button";
import {
  incrementAsync,
  decrementAsync,
  incrementByValueAsync,
  decrementByValueAsync
} from "./ducks/actions";
import { connect } from "react-redux";

const mapDispatchToProps = (dispatch: any) => ({
  increment: () => dispatch(incrementAsync()),
  decrement: () => dispatch(decrementAsync()),
  incrementByValue: (value: number) => dispatch(incrementByValueAsync(value)),
  decrementByValue: (value: number) => dispatch(decrementByValueAsync(value))
});

const mapStateToProps = (state: any) => ({
  isLoading: state.isLoading
})

interface AppProps {
  increment: () => any;
  decrement: () => any;
  incrementByValue: (value: number) => any;
  decrementByValue: (value: number) => any;
  isLoading: boolean;
};

interface AppState {
  value: string;
};

class App extends React.Component<AppProps, AppState> {
  constructor(props : any){
    super(props);
    this.state = {
      value: "0"
    };
  }

  setValue = (value : string) => this.setState({value});
  handleChange = (e : React.ChangeEvent<HTMLInputElement>) => {
    if (/^\d*$/.test(e.target.value)) {
      this.setValue(e.target.value);
    } else {
      alert('Разрешено вводить только цифры!');
    }
  }

  render(){
    const {value} = this.state;
    return (
      <div className="App">
        <Value />
        <div style={{ marginBottom: 16 }}>
          <Button text="Увеличить" onClick={this.props.increment} disabled={this.props.isLoading} />
          <Button text="Уменьшить" onClick={this.props.decrement} disabled={this.props.isLoading}/>
        </div>
        <div>
          <input
            placeholder="изменить на значение"
            value={value}
            onChange={this.handleChange}
          />
          <div>
            <Button
              text="Увеличить на значение"
              onClick={() => {
                this.props.incrementByValue(+value);
              }}
              disabled={this.props.isLoading}
            />
            <Button
              text="Уменьшить на значение"
              onClick={() => {
                this.props.decrementByValue(+value);
              }}
              disabled={this.props.isLoading}
            />
          </div>
        </div>
      </div>
    );
  }
  
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
