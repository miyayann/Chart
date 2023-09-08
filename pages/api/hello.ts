// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type WeightData = {
  date: string;
  weight: number;
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<WeightData[]>
) {
  const data: WeightData[] = [
    { date: '2023-09-06T02:22:51.064Z', weight: 55 },
    { date: '2023-09-06T02:22:51.575Z', weight: 55 },
    { date: '2023-09-06T02:22:52.555Z', weight: 55 },
    { date: '2023-09-06T02:22:51.064Z', weight: 55 },
    { date: '2023-09-06T02:22:51.575Z', weight: 55 },
    { date: '2023-09-06T02:22:52.555Z', weight: 55 },
    { date: '2023-09-07T02:22:51.064Z', weight: 60 },
    { date: '2023-09-07T02:22:51.575Z', weight: 65 },
    { date: '2023-09-07T02:22:52.555Z', weight: 70 },
    { date: '2023-09-06T02:22:51.064Z', weight: 55 },
    { date: '2023-09-06T02:22:51.575Z', weight: 55 },
    { date: '2023-09-06T02:22:52.555Z', weight: 55 },
    { date: '2023-09-07T02:22:51.064Z', weight: 60 },
    { date: '2023-09-07T02:22:51.575Z', weight: 60 },
    { date: '2023-09-07T02:22:51.575Z', weight: 65 },
    { date: '2023-09-07T02:22:52.555Z', weight: 70 },
  ];

  res.status(200).json(data);
}

