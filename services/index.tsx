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

const MASTER_URL = "https://ap-south-1.cdn.hygraph.com/content/cmaxsyp1300do07wc1bji9kg9/master"
export const getCarsList = async () => {
  const query = gql`
    query CarLists {
      carLists(first: 50) {
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
  const result = await request<CarListResponse>(MASTER_URL, query);
  return result.carLists;
};

export const getStoreLocation = async () => {
  const query = gql`
    query storeLocation {
      storesLocations {
        address
      }
    }
  `;
  const result = await request(MASTER_URL, query);
  return result;
};

export const createBooking = async (formValue: any) => {
  const mutationQuery = gql`
    mutation CreateBooking($data: BookingCreateInput!) {
      createBooking(data: $data) {
        id
      }
    }
  `;

  const variables = {
    data: {
      carId: formValue.carId, // This is already in the correct format: { connect: { id: "..." } }
      dropOffDate: formValue.dropOffDate,
      dropOffTime: formValue.dropOffTime,
      userName: formValue.userName,
      pickUpDate: formValue.pickUpDate,
      pickUpTime: formValue.pickUpTime,
      contactNumber: formValue.contactNumber,
      location: formValue.location,
    },
  };

  console.log("Mutation variables:", variables);
  const result = await request(MASTER_URL, mutationQuery, variables);
  return result;
};
