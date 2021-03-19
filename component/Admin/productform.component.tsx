import { Formik } from 'formik'
import React from 'react'
import Image from 'next/image'
import * as yup from 'yup'
import { Button, Form } from 'react-bootstrap'
import { resizeImage } from '../../lib/resize'
import {
  useCreateProductMutation,
  useUploadImageMutation,
  useUpdateProductMutation,
  AdminDisplayProductDocument,
} from '../../generated/graphql'

const schema = yup.object({
  name: yup.string().required(),
  brand: yup.string().required(),
  countInStock: yup.number().required(),
  price: yup.number().required(),
  description: yup.string().required(),
  image: yup.string().required().url(),
})
interface Props {
  closeModal: () => void
  initial?: any
}
export const ProductFormComponent: React.FC<Props> = ({
  closeModal,
  initial,
}) => {
  const [uploadImage, { data, error, loading }] = useUploadImageMutation()
  const [updateProduct] = useUpdateProductMutation()
  const [createProduct] = useCreateProductMutation()

  return (
    <Formik
      onSubmit={async (values, { setSubmitting, resetForm }) => {
        setSubmitting(true)
        !initial
          ? await createProduct({
              variables: { data: values },
              refetchQueries: [{ query: AdminDisplayProductDocument }],
            })
          : await updateProduct({
              variables: { data: { id: initial.id, ...values } },
            })
        setSubmitting(false)
        closeModal()
        resetForm()
      }}
      validationSchema={schema}
      initialValues={
        initial
          ? {
              image: initial.image,
              brand: initial.brand,
              name: initial.name,
              countInStock: initial.countInStock,
              price: initial.price,
              description: initial.description,
            }
          : {
              image: '',
              brand: '',
              name: '',
              countInStock: 0,
              price: 0,
              description: '',
            }
      }
    >
      {({ handleSubmit, handleChange, values, errors, setFieldValue }) => (
        <Form noValidate onSubmit={handleSubmit} className="card p-2">
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
          <Form.Group controlId="brand">
            <Form.Label>Brand</Form.Label>
            <Form.Control
              type="text"
              name="brand"
              value={values.brand}
              onChange={handleChange}
              isInvalid={!!errors.brand}
            />
            <Form.Control.Feedback type="invalid">
              {errors.brand}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="image">
            <Form.Label>Image</Form.Label>
            <Form.File
              id="image"
              name="image"
              label="Choose Image"
              onChange={async (e: React.ChangeEvent<HTMLInputElement>) => {
                if (!e.target.files) return
                const img = await resizeImage(e.target.files[0])

                const res = await uploadImage({
                  variables: { image: img as string },
                })
                if (res.data) {
                  setFieldValue('image', res.data.uploadImage)
                }
              }}
              isInvalid={!!errors.image}
            />
            {values.image && (
              <Image
                src={values.image}
                alt="uploaded"
                layout="fixed"
                width={120}
                height={120}
              />
            )}
            <Form.Control.Feedback type="invalid">
              {errors.image}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="description">
            <Form.Label>Description</Form.Label>
            <Form.Control
              type="text"
              name="description"
              value={values.description}
              onChange={handleChange}
              isInvalid={!!errors.description}
            />
            <Form.Control.Feedback type="invalid">
              {errors.description}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="price">
            <Form.Label>Price</Form.Label>
            <Form.Control
              type="number"
              name="price"
              value={values.price}
              onChange={handleChange}
              isInvalid={!!errors.price}
            />
            <Form.Control.Feedback type="invalid">
              {errors.price}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="countInStock">
            <Form.Label>Count In Stock</Form.Label>
            <Form.Control
              type="number"
              name="countInStock"
              value={values.countInStock}
              onChange={handleChange}
              isInvalid={!!errors.countInStock}
            />
            <Form.Control.Feedback type="invalid">
              {errors.countInStock}
            </Form.Control.Feedback>
          </Form.Group>
          <Button type="submit">
            {initial ? 'Edit Product' : 'Create Product'}
          </Button>
        </Form>
      )}
    </Formik>
  )
}
