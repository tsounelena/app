
import { Component } from "react"
import StudentDataService from "../service/StudentDataService";

class ListStudentsComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            students:[],
            message: null,
            data: null
        }

        this.refreshStudents = this.refreshStudents.bind(this)
        this.deleteStudentClicked = this.deleteStudentClicked.bind(this)
        this.updateStudentClicked = this.updateStudentClicked.bind(this)
        this.addStudentClicked = this.addStudentClicked.bind(this)
    }

    componentDidMount() {
        this.refreshStudents();
    }

    refreshStudents() {
        StudentDataService.retrieveAllStudents()
            .then(
                response => {
                    this.setState({students: response.data})
                }
            )
    }

    deleteStudentClicked(id) {
        StudentDataService.deleteStudent(id)
            .then(
                response => {
                    this.setState({ message: `Delete of student ${id} Successful` })
                    this.refreshStudents()
                }
            )
    }

    updateStudentClicked(id) {
        this.props.history.push(`/students/${id}`)
    }

    addStudentClicked() {
        this.props.history.push(`/students/-1`)
    }

    render() {
        return (
            <div className="container">
                <h3>All Students</h3>
                <div className="container">
                    <table className="table">
                        <thead>
                        <tr>
                            <th>Id</th>
                            <th>Last name</th>
                            <th>Name</th>
                            <th>Middle Name</th>
                            <th>Group</th>
                            <th>Birthday</th>
                            <th>Delete</th>
                            <th>Update</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            this.state.students.map(
                                student =>
                                    <tr key={student.id}>
                                        <td>{student.id}</td>
                                        <td>{student.lastName}</td>
                                        <td>{student.name}</td>
                                        <td>{student.middleName}</td>
                                        <td>{student.group}</td>
                                        <td>{student.birthday}</td>
                                        <td><button className="btn btn-warning" onClick={() => this.deleteStudentClicked(student.id)}>Delete</button></td>
                                        <td><button className ="btn btn-success" onClick={() => this.updateStudentClicked(student.id)}>Update</button></td>
                                    </tr>
                            )
                        }
                        </tbody>
                    </table>
                </div>
                <div className= "row">
                    <button className="btn btn-success" onClick={this.addStudentClicked}>Add</button>
                </div>
            </div>
        )
    }
}

export default ListStudentsComponent