import React, {Component} from 'react';
import api from '../../services/api';

export default class Employee extends Component{

state ={
    employee:{},
};

async componentDidMount(){
    const { id }  = this.props.match.params;

    const response = await api.get(`/employees/${id}`);

    this.setState({ employee: response.data });


}
    render(){
        const { employee }  = this.state;

        return (
            <div className="employee-info">
                <h1>key={employee._id}</h1>
                <p>{employee.name}</p>
                <p>{employee.address}</p>
                <p>{employee.phone}</p>
                <p>{employee.email}</p>
                <p>{employee.zipCode}</p>
                <p>{employee.createdAt}</p>
                
            </div>
        );
    }
}