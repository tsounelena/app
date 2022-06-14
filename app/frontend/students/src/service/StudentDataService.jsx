import axios from 'axios'

const STUDENTS_API_URL = 'http://localhost:8080'

class StudentDataService {

    retrieveAllStudents() {
        return axios.get(`${STUDENTS_API_URL}/students`);
    }

    retrieveAllGroups() {
        return axios.get(`${STUDENTS_API_URL}/groups`)
    }

    deleteStudent(id) {
        return axios.delete(`${STUDENTS_API_URL}/students/${id}`);
    }

    retrieveStudent(id) {
        return axios.get(`${STUDENTS_API_URL}/students/${id}`);
    }

    updateStudent(id, student) {
        return axios.put(`${STUDENTS_API_URL}/students/${id}`, student);
    }

    createStudent(student) {
        return axios.post(`${STUDENTS_API_URL}/student/`, student);
    }
}

export default new StudentDataService()