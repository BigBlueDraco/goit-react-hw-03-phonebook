import React from "react";
import nextId from "react-id-generator";

import { Contacts } from "components/Contacts/Contacts";
import { FormAddContacts } from "components/FormAddContacts/FormAddContacts";

export class Phonebook  extends React.Component{

    state = {
        contacts: [],
        filter: '',
        options: {
          name: "", 
          number: '', 
        }    
    }

    changeHandler = (e) =>{
        const {name, value} = e.target;
        this.setState( state =>({ options:{ ...state.options, [name]: value}}));
        
    }
    searcheHandler = (e) =>{
        this.setState(state=>({filter: e.target.value}))
    }
    onSubmit = (e) => {
        e.preventDefault();
        if(this.state.contacts.findIndex(elem => elem.name === this.state.options.name) !== -1){
            alert("Contact already exists")
            return
        }
        this.setState( state => {
            return(
            {
                contacts: [...state.contacts, {id: nextId(), name: state.options.name, number: state.options.number}],
            })
        })
    }

    deleteContact = (e) =>{
        console.log(e.target.dataset.id);
        const index = this.state.contacts.findIndex(elem => elem.id === e.target.dataset.id)
        console.log(index)

        this.setState( state => {
            const contacts = state.contacts;
            contacts.splice(index, 1);
            console.log(contacts);
            return(
            {
                contacts: [...contacts],
            })
        })
    }

    render(){
        return(
            <>
            <FormAddContacts  inputFunc={this.changeHandler} submitFunc = {this.onSubmit}/>
            <Contacts contacts={this.state.contacts} 
            filter={this.state.filter} 
            searcheFunc = {this.searcheHandler}
            deletFunc = {this.deleteContact}/>
            </>
            
        )
    }
}