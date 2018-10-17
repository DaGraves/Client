import React from 'react'
import {deleteDog,deleteCat} from '../actions'
import {connect} from 'react-redux'
function Pet(props){
    if(props.catToAdopt){
        return(
            <section className="toAdopt">
              <header>
                <span>Name: {props.catToAdopt.name}</span>
                <img src={`${props.catToAdopt.imageURL}`} alt={`${props.catToAdopt.imageDescription}`} />
              </header>
              <main>
                <dl>
                  <dt>Age: {props.catToAdopt.age}</dt>
                  <dt>Sex: {props.catToAdopt.sex}</dt>
                  <dt>Breed: {props.catToAdopt.breed}</dt>
                  <dt>Story: {props.catToAdopt.story}</dt>
                </dl>
                <button onClick={()=>{props.dispatch(deleteCat())}}>Adopt</button>
              </main>
            </section>
        )    
    }else if(props.dogToAdopt){
        return(
            <section className="toAdopt">
              <header>
                <span>Name: {props.dogToAdopt.name}</span>
                <img src={`${props.dogToAdopt.imageURL}`} alt={`${props.dogToAdopt.imageDescription}`} />
              </header>
              <main>
                <dl>
                  <dt>Age: {props.dogToAdopt.age}</dt>
                  <dt>Sex: {props.dogToAdopt.sex}</dt>
                  <dt>Breed: {props.dogToAdopt.breed}</dt>
                  <dt>Story: {props.dogToAdopt.story}</dt>
                </dl>
                <button onClick={()=>{props.dispatch(deleteDog())}}>Adopt</button>
              </main>
            </section>
        )
    }else{
        return(
            <div>Loading...</div>
        )
    }
    
}

export default connect()(Pet)