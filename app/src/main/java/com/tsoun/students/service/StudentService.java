package com.tsoun.students.service;

import com.tsoun.students.entity.Student;

import java.util.List;

public interface StudentService {

    /**
     * Get all students
     * @return list of Student
     */
    List<Student> getAllStudents();

    /**
     * Delete student
     * @param id of student
     */
    void deleteStudent(Integer id);

    /**
     * Save student to database
     * @return student
     */
    Student saveStudent(Student student);

    /**
     * Get student by id
     * @param id of student
     * @return student
     */
    Student getStudentById(Integer id);



}
