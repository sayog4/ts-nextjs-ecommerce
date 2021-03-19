import { Button, Col, Container, Modal, Row, Table } from 'react-bootstrap'
import Image from 'next/image'
import { useState } from 'react'
import {
  AdminDisplayProductDocument,
  useAdminDisplayProductQuery,
  useSingleProductLazyQuery,
  useDeleteProductMutation,
} from '../../generated/graphql'
import { ModalComponent } from './modal.component'
import { ProductFormComponent } from './productform.component'

export const AdminComponent: React.FC = () => {
  const { data } = useAdminDisplayProductQuery()
  const [deleteProduct] = useDeleteProductMutation()
  const [
    singleProduct,
    { data: singleProductData, loading },
  ] = useSingleProductLazyQuery()
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <Container className="pt-5">
      <ModalComponent />
      <Row className="justify-content-center py-5">
        <Col md={9}>
          <h3 className="text-center">Products</h3>
          <Table striped={true} bordered hover className="table-sm pt-5">
            <thead>
              <tr>
                <th>IMG</th>
                <th>NAME</th>
                <th>PRICE</th>
                <th>COUNT</th>
                <th>BRAND</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {data &&
                data.allProducts?.map((p) => (
                  <tr key={p.id} className="justify-content-center text-center">
                    <td>
                      <Image
                        src={p.image}
                        alt={p.name}
                        layout="responsive"
                        width={40}
                        height={30}
                      />
                    </td>
                    <td>{p.name}</td>
                    <td>{p.price}</td>
                    <td>{p.countInStock}</td>
                    <td>{p.brand}</td>
                    <td>
                      <Button
                        className="btn-sm"
                        onClick={async () => {
                          await singleProduct({ variables: { id: p.id! } })

                          handleShow()
                        }}
                      >
                        <svg
                          style={{
                            width: '15px',
                          }}
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                          />
                        </svg>
                      </Button>
                      <Button
                        className="btn-sm btn-danger ml-2"
                        onClick={async () => {
                          await deleteProduct({
                            variables: { id: p.id! },
                            refetchQueries: [
                              { query: AdminDisplayProductDocument },
                            ],
                          })
                        }}
                      >
                        <svg
                          style={{ width: '15px' }}
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                          />
                        </svg>
                      </Button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </Table>

          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Edit Product</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {singleProductData && (
                <ProductFormComponent
                  initial={singleProductData && singleProductData.singleProduct}
                  closeModal={handleClose}
                />
              )}
            </Modal.Body>
            <Modal.Footer>
              <Button variant="danger" onClick={handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </Col>
      </Row>
    </Container>
  )
}
