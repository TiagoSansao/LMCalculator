import React from 'react';
import './Total.css';

class Total extends React.Component {
    saveTotal = () => {
        let date = new Date();
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let time = date.toLocaleDateString();
        localStorage.setItem(localStorage.length + 1, `${time} ${hours}:${minutes} - ${this.props.total[0]} ${this.props.total[1]}`);
        this.forceUpdate();
        return
    }
    getRegistrys = () => {
        let registrys = [];
        for (let i = 1; i <= localStorage.length; i++) {
            registrys.push(localStorage.getItem(i));
        };
        return registrys.map((registry) => (
            <li className="registry" key={registry.toString()}> {registry.toString()} </li>
        ))
    }
    deleteRegistrys = () => {
        localStorage.clear();
        this.forceUpdate();
    }
    render() {
        if (localStorage.length === 0) {
            return (
                <section id="results">
                    <h2>Total</h2> <p>{this.props.total}</p>
                    <input type="button" value="SALVAR" onClick={this.saveTotal} id="saveButton"/>
                </section>
                )
        }
        if (localStorage.length > 0) {
            return (
                <div>
                    <section id="results">
                        <h2>Total</h2> <p>{this.props.total}</p>
                        <input type="button" value="SALVAR" onClick={this.saveTotal} id="saveButton"/>
                    </section>
                    <section id="saved-registry">
                        <h2>Registros</h2>
                        <ol>
                            {this.getRegistrys()}
                        </ol>
                        <input type="button" value="DELETAR REGISTROS" onClick={this.deleteRegistrys} id="deleteButton"/>   
                    </section>
                </div>
                )
        }
    }
}

export default Total;