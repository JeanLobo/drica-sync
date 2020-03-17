import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Container, Form, InputGroup, Button } from "react-bootstrap";

export default Login => {
  const LoginSchema = Yup.object().shape({
    email: Yup.string()
      .email("Necessário informar um e-mail válido.")
      .required("É necessário informar um e-mail."),
    password: Yup.string().required("É necessário informar uma senha.")
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: ""
    },
    validationSchema: LoginSchema,
    onSubmit: values => {
      alert(values.email + " => " + values.password);
    }
  });

  return (
    <Container>
      <h3>Login</h3>
      <Form>
        <Form.Group controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Informe o email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          <span>{formik.errors.email}</span>
        </Form.Group>

        <Form.Group controlId="password">
          <Form.Label>Senha</Form.Label>
          <Form.Control
            type="password"
            placeholder="Informe a senha"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
          <span>{formik.errors.password}</span>
        </Form.Group>

        <Button type="submit" onClick={formik.handleSubmit}>
          Entrar
        </Button>
      </Form>
    </Container>
  );
};
