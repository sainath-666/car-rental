import request, { gql } from "graphql-request";

export const getCarsList = async () => {
  const query = gql`
    query CarLists {
      carLists {
        name
        id
        carAvg
        carType
        carBrand
        seat
        price
        createdAt
        publishedAt
        updatedAt
      }
    }
  `;
  const result = await request(
    "https://ap-south-1.cdn.hygraph.com/content/cmaxsyp1300do07wc1bji9kg9/master",
    query
  );
};
