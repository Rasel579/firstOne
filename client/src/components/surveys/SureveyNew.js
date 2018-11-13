//Surevey shows SurveyForm and SurveyReview
import React, {Component} from 'react';
import { reduxForm } from 'redux-form';
import SurveyReview from './SurveyFormReview';
import SurveyForm from './SurveyForm';


class SureveyNew extends Component{  
    state = {showFormReview: false}; 
    renderContent(){
        if( this.state.showFormReview ){
           return <SurveyReview onCancel = {() => this.setState({showFormReview: false})}/>
        }
       return <SurveyForm onSurveySubmit = {() => this.setState({showFormReview: true})}/>;
    }

    render(){
        return(
            <div>
                {this.renderContent()}
            </div>
        );
    }
}

export default reduxForm({
    form: 'surveyForm'
   })(SureveyNew);