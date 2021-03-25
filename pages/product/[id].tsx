import { GetServerSideProps } from 'next'
import { useState } from 'react'
import Image from 'next/image'
import {
  Button,
  ButtonGroup,
  Card,
  Col,
  Container,
  ListGroup,
  Row,
} from 'react-bootstrap'
import {
  SingleProductDocument,
  Product,
  useAddToCartMutation,
} from '../../generated/graphql'
import { initializeApollo } from '../../lib/apolloClient'
interface Props {
  product: Product
}
const Details: React.FC<Props> = ({ product }) => {
  const [quantity, setQuantity] = useState(1)
  const [addToCart, { error }] = useAddToCartMutation()

  const handleAddingCart = async () => {
    await addToCart({
      variables: { data: { productId: product.id!, quantity } },
    })
  }

  return (
    <Container className="pt-5">
      <h2 className="text-center text-uppercase">{product.name}</h2>
      <Row className="pt-3">
        <Col md={4} className="mb-3">
          <Image
            src={product.image}
            alt={product.name}
            width={300}
            height={300}
            layout="intrinsic"
          />
        </Col>
        <Col md={8}>
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <Row>
                  <Col>Name: </Col>
                  <Col>
                    <h4>{product.name}</h4>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Brand:</Col>
                  <Col>
                    <h5>{product.brand}</h5>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Price: </Col>
                  <Col>
                    <span className=" p-2 badge badge-info ">
                      $ {product.price}
                    </span>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Status: </Col>
                  <Col>
                    <strong>
                      {product.countInStock > 0 ? 'Available' : 'Out of Stock'}
                    </strong>{' '}
                  </Col>
                </Row>
              </ListGroup.Item>
              {product.countInStock > 0 && (
                <ListGroup.Item>
                  <Row>
                    <Col>Quantity:</Col>
                    <Col>
                      <ButtonGroup aria-label="Incement Quantity">
                        <Button
                          onClick={() => setQuantity(quantity - 1)}
                          variant="outline-dark"
                          disabled={quantity === 1}
                        >
                          <strong>-</strong>
                        </Button>
                        <Button variant="light" disabled>
                          {quantity}
                        </Button>
                        <Button
                          onClick={() => setQuantity(quantity + 1)}
                          variant="outline-dark"
                          disabled={
                            product.countInStock <= quantity || quantity === 5
                          }
                        >
                          <strong>+</strong>
                        </Button>
                      </ButtonGroup>
                    </Col>
                  </Row>
                </ListGroup.Item>
              )}
              {product.countInStock > 0 && (
                <ListGroup.Item>
                  <Button onClick={handleAddingCart} variant="success">
                    Add To Cart
                  </Button>
                </ListGroup.Item>
              )}
            </ListGroup>
          </Card>
        </Col>
      </Row>
      <Row className="pt-2">
        <Col>
          <article className="card card-body">
            <h3>Description</h3>
            <p className="lead">{product.description}</p>
          </article>
        </Col>
      </Row>
    </Container>
  )
}

export default Details

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.query
  const apolloClient = initializeApollo()

  const res = await apolloClient.query({
    query: SingleProductDocument,
    variables: { id: id },
  })

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
      product: res.data.singleProduct,
    },
  }
}
