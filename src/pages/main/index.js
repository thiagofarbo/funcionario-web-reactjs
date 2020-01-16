import React, {Component} from 'react';
import api from '../../services/api';
import { Link } from 'react-router-dom';
import './styles.css';

export default class Main extends Component {

    state ={
        employees: [],
        employeeInfo:{},
        page: 1,
    }

    componentDidMount(){
        this.loadEmployees();
    }

    loadEmployees = async (page = 1) => {
        const response = await api.get(`/employees?page=${page}`);

        const {docs, ...employeeInfo} = response.data;

        this.setState({employees: docs, employeeInfo, page });
    };

    prevPage = () =>{
        const { page } =  this.state;

        if(page === 1) return;

        const pageNumber = page -1;

        this.loadEmployees(pageNumber);

    }
    nextPage = () =>{
        const { page, employeeInfo} =  this.state;
        
        if(page === employeeInfo.pages) return;

        const pageNumber = page + 1;

        this.loadEmployees(pageNumber);
    }

    render(){
       
        const { employees, page, employeeInfo} = this.state;

        return (
            <div className="employee-list">
                {employees.map(employee => (
                    <article key={employee._id}>
                        <strong>{employee.name}</strong>
                        <p>{employee.address}</p>
                        <p>{employee.phone}</p>
                        <p>{employee.email}</p>
                        <p>{employee.zipCode}</p>
                        <p>{employee.createdAt}</p>
                        <Link to={`/employees/${employee._id}`}>Employee Details</Link>
                    </article>
                ))}
                <div className="actions">
                    <button disabled={page === 1} onClick={this.prevPage}>
                        Preview
                    </button>
                    <button disabled={page === employeeInfo.pages} onClick={this.nextPage}> 
                        Next
                    </button>
                </div>
            </div>
        );
    }
}