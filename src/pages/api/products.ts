import { mongooseConnect } from '@/lib/mongoose';
import { Product } from '@/models/product.model';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    const { method, query } = req;
    await mongooseConnect();

    switch (method) {
      case 'GET': {
        if (query.id) {
          const product = await Product.findById(query.id).populate('category');
          if (product) {
            res.status(200).json(product);
          } else {
            res.status(404).json({
              data: 'Not found',
            });
          }
        } else {
          const all = await Product.find({}, 'title images price').populate(
            'category',
          );
          const products = all.map((pr) => ({
            _id: pr._id,
            title: pr.title,
            price: pr.price,
            image: pr.images[0],
          }));
          res.status(200).json(products);
        }
        break;
      }

      default:
        res.status(400).send({ data: 'Bad Request' });
    }
  } catch (e: any) {
    res.status(500).send({
      data: e.message,
    });
  }
}
