import { mongooseConnect } from '@/lib/mongoose';
import { Category } from '@/models/category.model';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    const { method } = req;
    await mongooseConnect();

    switch (method) {
      case 'GET': {
        const categories = await Category.find().populate('parent');
        res.status(200).json(categories);
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
