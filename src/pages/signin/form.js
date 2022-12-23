import React from 'react'
import TextInputWithLabel from '../../components/TextInputWithLabel';
import SButton from '../../components/Button';
import { Form } from 'react-bootstrap';


export default function form({form, handleChange, isLoading, handleSubmit}) {
  return (
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

      <SButton
        loading={isLoading}
        disabled={isLoading}
        action={handleSubmit}
        variant="primary"
      >
        Submit
      </SButton>
    </Form>
  );
}
