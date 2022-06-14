import React, {Component} from 'react'
import {Modal} from "antd";
import 'antd/dist/antd.css';
import {
    Form,
    Input,
    DatePicker,
} from 'antd';
import moment from "moment";


class Student extends Component<> {

    formRef = React.createRef();

    onOk = () => {
        const data = this.formRef.current.getFieldsValue(true)
        this.props.onSubmit(data);
    }

    render() {

        const {isModalVisible, onCancel, initialValues} = this.props
        initialValues.birthday = initialValues.birthday ? moment(initialValues.birthday) : undefined


        return (
            <div>
                <div className="container">
                    <Modal destroyOnClose={true} title="Create Student" visible={isModalVisible} onOk={this.onOk}
                           onCancel={onCancel}>
                        <Form ref={this.formRef}
                              layout="horizontal"
                              initialValues={initialValues}
                        >
                            <Form.Item hidden={true}>
                                <Input/>
                            </Form.Item>
                            <Form.Item name='name' label="Name">
                                <Input/>
                            </Form.Item>
                            <Form.Item name='lastName' label="Last Name">
                                <Input/>
                            </Form.Item>
                            <Form.Item name='middleName' label="Middle Name">
                                <Input/>
                            </Form.Item>
                            <Form.Item name='birthday' label="Birthday">
                                <DatePicker/>
                            </Form.Item>
                            <Form.Item  name='studyingGroup' label="Group">
                                <Input/>
                            </Form.Item>
                        </Form>
                    </Modal>
                </div>
            </div>
        )
    }
}

export default Student