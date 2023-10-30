import React from 'react';
import { Form } from 'react-bootstrap';
const TextArea = (props) => {
    const {label, rows,type, name, value,onChange,required, validation,className,lg,md,xxl,xl,sm,placeholder }=props;
  return (
      <Form.Group controlId='formBasicTextArea'>
        <Form.Label>{label} </Form.Label>
        <Form.Control
          as="textarea"
          name={name}
          rows={rows}
          value={value}
          type={type}
          placeholder={placeholder}
          onChange={onChange}
          className={className}
          required={required}
          lg={lg}
          md={md}
          xxl={xxl}
          xl={xl}
          sm={sm}
        />
       {validation}
      </Form.Group>
  );
};
export default TextArea