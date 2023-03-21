import Product from '../models/product';

export const GetAll = async (req, res) => {
  const product = await Product.find();
  return res.json({
    message: 'Lấy ok',
    product,
  });
};
export const Create = async (req, res) => {
  const product = await Product.create(req.body);

  return res.json({
    message: 'Thêm ok',
    product,
  });
};
export const Update = async (req, res) => {
  const product = await Product.findOneAndUpdate(
    { _id: req.params.id },
    req.body
  );
  return res.json({
    message: 'Cập Nhập Done',
    product,
  });
};
export const Delete = async (req, res) => {
  const product = await Product.findByIdAndDelete(req.params.id);
  return res.json({ message: 'Xóa ok', product });
};
