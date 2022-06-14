import {Component} from "react";
import StudentDataService from "../service/StudentDataService";
import {Table, Space, Button} from 'antd';
import 'antd/dist/antd.css';
import Student from "./Student";


class StudentsTable extends Component {

    columns = [
        {
            title: 'Id',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: 'Last name',
            dataIndex: 'lastName',
            key: 'lastName',
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Middle name',
            dataIndex: 'middleName',
            key: 'middleName',
        },
        {
            title: 'Birthday',
            dataIndex: 'birthday',
            key: 'birthday',
        },
        {
            title: 'Group',
            dataIndex: 'studyingGroup',
            key: 'group',
        }, {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <Space size="middle">
                    <a onClick={() => this.updateStudentClicked(record)}>Update</a>
                    <a onClick={() => this.deleteStudentClicked(record.id)}>Delete</a>
                </Space>
            ),
        },];

    state = {
        students: [],
        message: null,
        data: null,
        isModalVisible: false,
        initialValues: {},
    }

    componentDidMount() {
        this.refreshStudents();
    }

    refreshStudents = () => {
        StudentDataService.retrieveAllStudents()
            .then(
                response => {
                    this.setState({students: response.data})
                }
            )
    }

    deleteStudentClicked = (id) => {
        console.log(id)
        StudentDataService.deleteStudent(id)
            .then(
                response => {
                    this.setState({message: `Delete of student ${id} Successful`})
                    this.refreshStudents()
                }
            )
    }

    addStudentClicked = () => {
        this.setState({isModalVisible: true, initialValues: {id: -1}})
    }

    updateStudentClicked = (record) => {
        this.setState({isModalVisible: true, initialValues: record})
    }

    onSubmit = (student) => {

        this.setState({isModalVisible: false})
        console.log(student)
        if (this.state.id === -1) {
            StudentDataService.createStudent(student)
                .then(this.refreshStudents)
        } else {
            StudentDataService.updateStudent(student.id, student)
                .then(this.refreshStudents)
        }

    }

    onCancel = () => {
        this.setState({isModalVisible: false})
    }

    render() {
        return (
            <div className='container'>
                <h3>All Students</h3>
                <div className="container">
                    <Table dataSource={this.state.students} columns={this.columns} rowKey='id'/>
                </div>
                <div className="row">
                    <Button onClick={this.addStudentClicked}>Add</Button>
                </div>
                <Student
                    onSubmit={this.onSubmit}
                    initialValues={this.state.initialValues}
                    isModalVisible={this.state.isModalVisible}
                    onCancel={this.onCancel}
                    student={this.state.initialValues}
                />
            </div>
        );
    }

}

export default StudentsTable