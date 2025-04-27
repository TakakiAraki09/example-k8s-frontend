import { graphql } from "@/generated/gql"
import { urqlClient } from "@/libs/urql"

const hogeQuery = graphql(`
query HogeQuery {
  todos {
    id
  }
}
  `)

export async function Index (){
  const data = await urqlClient.query(hogeQuery, {});
  return (
    <div>
      <pre>
        {JSON.stringify(data.data, null, 2)}
      </pre>
    </div>
  )
}
