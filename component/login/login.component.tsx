import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { Formik } from 'formik'
import * as yup from 'yup'
import { useRouter } from 'next/router'
import { useLoginMutation } from '../../generated/graphql'

const schema = yup.object({
  email: yup.string().required().email(),
  password: yup.string().required().min(6),
})

export const LoginComponent: React.FC = () => {
  const router = useRouter()
  const [logIn, { data, error, loading }] = useLoginMutation()
  return (
    <Container>
      <Row className="justify-content-md-center pt-5">
        <Col md={5}>
          <Formik
            validationSchema={schema}
            onSubmit={async (values, { setSubmitting, resetForm }) => {
              setSubmitting(true)
              await logIn({ variables: { data: values } })
              setSubmitting(false)
              resetForm()
              router.push('/')
            }}
            initialValues={{
              email: '',
              password: '',
            }}
          >
            {({ handleSubmit, handleChange, values, errors }) => (
              <Form
                noValidate
                onSubmit={handleSubmit}
                className="card p-3 shadow"
              >
                <h3>Log in</h3>

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

                <Button type="submit">Log In</Button>
              </Form>
            )}
          </Formik>
        </Col>
      </Row>
    </Container>
  )
}
