import Product from "../model/product.schema.js";
export const getProducts_controller = async (request, response) => {
  const products = await Product.find({});
  response.status(200).json(products);
  try {
  } catch (error) {
    response.status(500).json({ message: error.message });
  }
};

export const getProductDetails_controller = async (request, response) => {
  const products = await Product.findOne({ id: request.params.id });
  response.status(200).json(products);
  try {
  } catch (error) {
    response.status(500).json({ message: error.message });
  }
};
