import React, { Component } from "react";

class PersonBio extends Component {
    constructor (props) {
        super (props);
        this.state = {
            persons: [
        {
            name: "Mary",
            description: "Am an energetic person who loves adventure",
        },
        {
            name: "Nathaniel",
            description: "Bright gentleman who loves to eat,sleep and code",
        },
        {
            name: "Bertha",
            description: "A quiet lady who loves codetrain",
        },
    ],

         name:"",
         description:"",
    };
}


handleChange = (e) => {
    e.preventDefault();
    this.setState({ [e.target.name] : e.target.value});
};

handleSubmit = (e) => {
    e.preventDefault();
    const newPerson = {
        name: this.state.name,
        description: this.state.description

    }

    this.setState({
        persons: [...this.persons, newPerson]

    })

};

render() {
    return (
    <section Style={{ margin: "2rem"}}>
        <form onSubmit={this.handleSubmit}>

            <div>
            <label>Name</label>
            <br />

            <input type="text" name="name" value= {this.state.name} onChange = {this.handleChange}></input>

            </div>

            <div>


            <label>description</label>

            <br />

            <textarea name= "description" value = {this.state.description}></textarea>

            </div>
            

            <button>Submit</button>

            </form>
            
            
        
        {this.state.persons.map((item,index) => {
            return( 
        <div key={index}>
            <h4> Name: {item.name}</h4>
            <p>{item.description}</p>
            <hr />
        </div>
            );
        })}
    </section>

    );

 }

}

export default PersonBio;