import React from 'react';

export default class About extends React.Component{
    render(){
        return(
            <div>
                <h3>Info</h3>
                <p>This is some info about the company</p>
                <form>
                    <h3>Contact Us</h3>
                    <p>Name</p>
                    <input type="text"/>
                    <p>Message</p>
                    <textarea name="message" id="message" cols="30" rows="10"/>
                </form>
            </div>
        );
    }
}