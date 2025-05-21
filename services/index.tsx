import request, { gql } from "graphql-request";

interface Car {
  name: string;
  id: string;
  carAvg: number;
  carType: string;
  carBrand: string;
  price: number;
  seat: number;
  createdAt: string;
  publishedAt: string;
  updatedAt: string;
}

interface CarListResponse {
  carLists: Car[];
}

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
        
        image {
          url
        }
      }
    }
  `;
  const result = await request<CarListResponse>(
    "https://ap-south-1.cdn.hygraph.com/content/cmaxsyp1300do07wc1bji9kg9/master",
    query
  );
  return result.carLists;
};
