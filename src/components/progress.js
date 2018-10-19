import React from 'react';
import { connect } from 'react-redux';

import LinkButton from './LinkButton';
import requiresLogin from './requires-login';
import ReactTable from "react-table";
import 'react-table/react-table.css';
import './progress.css';
import { fetchProgress } from '../actions/users';
import { reset } from '../actions/users';
import { Navbar } from './navbar';

export class Progress extends React.Component{
  componentDidMount(){
    this.props.dispatch(fetchProgress())
  }

  handleReset() {
    this.props.dispatch(reset());
  }

  render(){
    if(!this.props.progress){
      return <p>Loading your progress...</p>
    }

    const data = this.props.progress.map(val => {
      return {
        russian: val.russian,
        english: val.english,
        score: val.score,
        attempts: val.attempts,
        sessionScore: val.sessionScore,
        sessionAttempts: val.sessionAttempts
      }
    })
    
    const columns = 
    [
      {
        Header: 'WORDS',
        columns: [
      {
        Header: 'Portuguese',
        accessor: 'russian'
      }
        ]
      },
      {
        Header: 'CURRENT',
        columns: [
          {
            Header: 'Score',
            accessor: 'sessionScore',
          },
          {
            Header: 'Attempts',
            accessor: 'sessionAttempts'
          }
          ]
        },
        {
          Header: 'OVERALL',
          columns: [
            {
              Header: 'Score',
              accessor: 'score'
            },
            {
              Header: 'Attempts',
              accessor: 'attempts'
            }
          ]
        }
      ]

    return (
      <main>
      <section className='progress-page'>
      <div className='row'>
      <header className='center col-12'>
        <h1 id='progress-table'>Score Sheet</h1>
      </header>
        <main className=' -striped -highlight col-12'>
          <ReactTable
            data={data}
            columns={columns}
            defaultPageSize={5}
            className={'-striped'}
          />
          <div className='col-12 progress-btns right'>
            <button onClick={() => this.handleReset()} className='resetBtn'>Reset Session</button>
            <LinkButton to='/practice' className='right back-btn'>Practice</LinkButton>
          </div>
      </main>
      </div>
      </section>
      </main>
    );
  }
}

const mapStateToProps = state => {
  loggedIn: state.auth.currentUser !== null;
  const progress = state.user.progress;
  return {
    progress
  };
};

export default requiresLogin()(connect(mapStateToProps)(Progress));