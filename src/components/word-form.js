import React from 'react';
import './word-form.css';

export default class WordForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      value: '', 
      disabled: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleNext = this.handleNext.bind(this);
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.handleSubmit(this.state.value);
    this.setState({ disabled: true}, () => {
      this.nextBtn.focus();
    });
  }

  handleNext(e){
    e.preventDefault();
    this.props.handleNext();
    this.setState({ value: '', disabled: false }, () => {
      this.textInput.focus();
    });
  }

  render(){
    const nextBtnDisplay = this.props.nextBtn ? '' : 'hidden';
    const submitBtnDisplay = this.props.submitBtn ? '' : 'hidden';

    return (
      <section className='word-section row'>
        <div className='col-12'>
          <div className='language'>
            <p>English</p>
          </div>
          <form className='word-form' onSubmit={this.handleSubmit}>
            <label>
              <input
                className='user-answer'
                type="text"
                disabled={this.state.disabled}
                value={this.state.value}
                onChange={this.handleChange}
                ref={(ref) => this.textInput = ref}
              />
            </label>
            <button
              className={`answer-submit-btn ${submitBtnDisplay}`}
              type="submit"
            >
              Submit
            </button>
            <button
              className={`next-btn ${nextBtnDisplay}`}
              onClick={this.handleNext}
              ref={(ref) => this.nextBtn = ref}
            >
              Next
            </button>
          </form>
        </div>
      </section>
    );
  }
}