import { GraphQLClient, gql } from 'graphql-request';
import { NextResponse } from "next/server";

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

/** *************************************************************
* Any file inside the folder pages/api is mapped to /api/* and  *
* will be treated as an API endpoint instead of a page.         *
*************************************************************** */

// export a default function for API route to work
export async function POST(req: any, res: any) {

  const  {key}  = await req.json();
  // console.log("req ", key)

  const graphQLClient = new GraphQLClient((graphqlAPI!), {
    headers: {
      authorization: `Bearer ${process.env.GRAPHCMS_TOKEN}`,
    },
  });

  const query = gql`
    mutation CreateComment($name: String!, $email: String!, $comment: String!, $slug: String!) {
      createComment(data: {name: $name, email: $email, comment: $comment, post: {connect: {slug: $slug}}}) { id }
    }
  `;

  let result: any ;

  try{
    result = await graphQLClient.request(query, {
      name: key.body.name!,
      email: key.body.email!,
      comment: key.body.comment!,
      slug: key.body.slug!,
    });
  }
  catch (error ) {
    console.log("POST error -> ", error)
  }

  return NextResponse.json({ data: result });
}