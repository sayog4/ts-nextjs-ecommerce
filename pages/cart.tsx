import { Alert, Button, Col, Container, ListGroup, Row } from 'react-bootstrap'

import {
  MyCartDocument,
  Cart,
  useMyCartQuery,
  MyCartQuery,
  useRemoveFromCartMutation,
} from '../generated/graphql'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

interface PropsType {
  mycart: Cart
}

const CartPage: React.FC = () => {
  const { data, error, loading } = useMyCartQuery()
  const [removeFromCart] = useRemoveFromCartMutation()

  const router = useRouter()
  return (
    <Container className="pt-5">
      <h3 className="text-center">Cart Items</h3>
      <Row>
        <Col sm={9} md={8}>
          <ListGroup variant="flush">
            {data?.myCart.products!.length === 0 && (
              <Alert variant="danger">Cart is empty</Alert>
            )}
            {data?.myCart.products?.map((p) => (
              <ListGroup.Item key={p?.product.id}>
                <Row>
                  <Col sm={2} md={2}>
                    <Image
                      src={p!.product.image}
                      alt={p?.product.name}
                      layout="intrinsic"
                      width={50}
                      height={50}
                    />
                  </Col>
                  <Col sm={3} md={3}>
                    <Link href={`/product/${p?.product.id}`}>
                      <a>{p?.product.name}</a>
                    </Link>
                  </Col>
                  <Col sm={5} md={5}>
                    $ {p?.product.price} * {p?.quantity}
                  </Col>
                  <Col sm={2} md={2}>
                    <Button
                      onClick={async () => {
                        await removeFromCart({
                          variables: { productId: p!.product.id as string },
                          update(cache, el) {
                            const deletedId = el.data?.removeFromCart
                            console.log(deletedId)
                            const cartItems = cache.readQuery<MyCartQuery>({
                              query: MyCartDocument,
                            })
                            const filteredProds = cartItems?.myCart.products?.filter(
                              (p) => p?.product.id !== deletedId
                            )
                            cache.writeQuery({
                              query: MyCartDocument,
                              data: {
                                myCart: {
                                  ...cartItems,
                                  products: filteredProds,
                                },
                              },
                            })
                          },
                        })
                      }}
                      variant="danger"
                      className="btn-sm"
                    >
                      <svg
                        style={{ width: '10px' }}
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
                  </Col>
                </Row>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
        <Col sm={3} md={4}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <p>
                Sub total:(
                {data?.myCart.products?.reduce(
                  (acc, prod) => acc + prod!.quantity,
                  0
                )}
                ) Items
              </p>
              <p>
                <strong>
                  Total Price : $
                  {data?.myCart.products
                    ?.reduce(
                      (acc, prod) => acc + prod!.quantity * prod!.product.price,
                      0
                    )
                    .toFixed(2)}
                </strong>
              </p>
            </ListGroup.Item>
            <ListGroup.Item>
              <Button
                onClick={() => router.push('/shipping')}
                variant="success"
                disabled={data?.myCart.products!.length === 0}
              >
                Checkout
              </Button>
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </Container>
  )
}

export default CartPage

// export const getServerSideProps: GetServerSideProps = async (context) => {
//   const apolloClient = initializeApollo()
//   const cookie = context.req.headers.cookie

//   const result = await apolloClient.query({
//     query: MyCartDocument,
//     context: {
//       headers: { cookie },
//     },
//   })

//   return {
//     props: {
//       initialApolloState: apolloClient.cache.extract(),
//       mycart: result.data.myCart,
//     },
//   }
// }
