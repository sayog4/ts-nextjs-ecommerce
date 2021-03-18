import { useMeQuery } from '../generated/graphql'

export default function Home() {
  const { data, error, loading } = useMeQuery()
  return <p>Hello {JSON.stringify(data, null, 2)}</p>
}
