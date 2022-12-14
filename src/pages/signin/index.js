import React, { useState } from 'react';
import { Container, Card, Form } from 'react-bootstrap';
import TextInputWithLabel from '../../components/TextInputWithLabel';
import SButton from '../../components/Button';
import SAlert from '../../components/Alert';
import axios from 'axios';

function PageSignin() {
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');

  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      const res = await axios.post(
        'http://localhost:9000/api/v1/cms/auth/signin',
        {
          email: form.email,
          password: form.password,
        }
      );

      console.log(res)
    } catch (err) {
      console.log(err.response.data.msg)
    }
    
  }
  return (
    <Container md={12}>
      <Card style={{ width: '50%' }} className="m-auto mt-5">
        <Card.Body>
          <Card.Title>Form Login</Card.Title>
          <SAlert variant="danger" message='test' />
          <Form>
            <TextInputWithLabel
              label="Email Address"
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Enter Email"
            />

            <TextInputWithLabel
              label="Password"
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="Enter Password"
            />

            <SButton action={handleSubmit} variant="primary">
              Submit
            </SButton>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default PageSignin;
