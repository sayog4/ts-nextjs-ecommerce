import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { Formik } from 'formik'
import * as yup from 'yup'
import { useRouter } from 'next/router'

import { useSignupMutation } from '../../generated/graphql'

const schema = yup.object({
  name: yup.string().required().min(5),
  email: yup.string().required().email(),
  password: yup.string().required().min(6),
  phone: yup
    .string()
    .required()
    .matches(
      /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/,
      'Phone number is not valid!!'
    ),
})

export const SignUpComponent: React.FC = () => {
  const router = useRouter()
  const [signUp, { loading, error }] = useSignupMutation()

  return (
    <Container>
      <Row className="justify-content-md-center pt-5">
        <Col md={5}>
          <Formik
            onSubmit={async (values, { setSubmitting, resetForm }) => {
              setSubmitting(true)
              await signUp({ variables: { data: values } })
              resetForm()
              setSubmitting(false)
              router.push('/')
            }}
            validationSchema={schema}
            initialValues={{
              name: '',
              email: '',
              password: '',
              phone: '',
            }}
          >
            {({ handleSubmit, handleChange, values, errors }) => (
              <Form
                noValidate
                onSubmit={handleSubmit}
                className="card p-3 shadow"
              >
                <h3>Sign Up</h3>
                <Form.Group controlId="name">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    value={values.name}
                    onChange={handleChange}
                    isInvalid={!!errors.name}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.name}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="text"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    isInvalid={!!errors.email}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.email}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId="password">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    name="password"
                    value={values.password}
                    onChange={handleChange}
                    isInvalid={!!errors.password}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.password}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId="phone">
                  <Form.Label>Phone Number</Form.Label>
                  <Form.Control
                    type="text"
                    name="phone"
                    value={values.phone}
                    onChange={handleChange}
                    isInvalid={!!errors.phone}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.phone}
                  </Form.Control.Feedback>
                </Form.Group>
                <Button type="submit">Sign Up</Button>
              </Form>
            )}
          </Formik>
        </Col>
      </Row>
    </Container>
  )
}
