import {ProductService} from "../../../service/ProductService.ts";

function createData(id, name, created_at) {
  return {
    id,
    name,
    created_at,
  };
}

export const productData = [
  createData("1", "Mitchell-Predovic", "2021-09-01"),
  createData("2", "Mitchell-Predovic", "2021-09-01"),
];


