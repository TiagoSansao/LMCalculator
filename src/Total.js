import React from 'react';
import './Total.css';

class Total extends React.Component {
    constructor(props) {
        super(props)
        this.speedType = React.createRef();
    }
    saveTotal = (e) => {
        e.preventDefault();
        let date = new Date();
        let time = date.toLocaleDateString();
        let jsonData = JSON.stringify([time, this.props.total, this.speedType.current.value]);
        localStorage.setItem(localStorage.length + 1, jsonData);
        this.forceUpdate();
        return
    }
    getRegistrys = () => {
        let registrys = []
        for (let i = 1; i <= localStorage.length; i++) {
            registrys.push(JSON.parse(localStorage.getItem(i)));
        };
        return registrys.map((registry) => <tr key={registry}><td>{registry[0]}</td><td>{registry[1]}</td><td>{registry[2]}</td></tr>)
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
                    <form>
                        <select ref={this.speedType} className="speed-type">
                            <option>Padrão</option>
                            <option>Pesquisa</option>
                            <option>Treino</option>
                            <option>Fusão</option>
                            <option>Cura</option>
                        </select> <br/>
                        <input type="submit" value="SALVAR" onClick={this.saveTotal} id="saveButton"/>
                    </form>
                </section>
                )
        }
        if (localStorage.length > 0) {
            return (
                <div>
                    <section id="results">
                        <h2>Total</h2> <p>{this.props.total}</p>
                        <form>
                            <select ref={this.speedType} className="speed-type">
                                <option>Padrão</option>
                                <option>Pesquisa</option>
                                <option>Treino</option>
                                <option>Fusão</option>
                                <option>Cura</option>
                            </select> <br/>
                            <input type="submit" value="SALVAR" onClick={this.saveTotal} id="saveButton"/>
                        </form>
                    </section>
                    <section id="saved-registry">
                        <table>
                            <caption>REGISTROS</caption>
                            <tbody>
                                <tr>
                                    <th>DATA</th>
                                    <th>TEMPO</th>
                                    <th>TIPO</th>
                                </tr>
                                {this.getRegistrys()}
                            </tbody>
                        </table>
                        <input type="button" value="DELETAR REGISTROS" onClick={this.deleteRegistrys} id="deleteButton"/>   
                    </section>
                </div>
                )
        }
    }
}

export default Total;