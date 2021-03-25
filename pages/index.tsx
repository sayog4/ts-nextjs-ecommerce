import { GetServerSideProps } from 'next'
import { Card, Col, Container, Row } from 'react-bootstrap'
import Image from 'next/image'
import Link from 'next/link'
import {
  useAllProductsQuery,
  useMeQuery,
  AllProductsDocument,
} from '../generated/graphql'
import { initializeApollo } from '../lib/apolloClient'

export default function Home() {
  const { data, error, loading } = useMeQuery()
  const { data: products } = useAllProductsQuery()
  return (
    <>
      <p>Hello {JSON.stringify(data, null, 2)}</p>
      <Container className="pt-5">
        <Row>
          {products?.allProducts.map((p) => (
            <Col sm={6} md={4} key={p.id}>
              <Card
                className="mx-auto shadow p-2 mb-3"
                style={{ maxWidth: '300px' }}
              >
                <Image
                  src={p.image}
                  alt={p.name}
                  width={200}
                  height={200}
                  layout="responsive"
                />
                <Card.Body className="text-center">
                  <Link href={`/product/${p.id}`}>
                    <a>
                      <h4>{p.name}</h4>
                    </a>
                  </Link>
                  <p className="text-muted">{p.brand}</p>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const apolloClient = initializeApollo()
  await apolloClient.query({
    query: AllProductsDocument,
  })
  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
  }
}
