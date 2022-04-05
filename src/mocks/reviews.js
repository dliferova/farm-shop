import {nanoid} from "nanoid";
import dayjs from 'dayjs';

const reviews = [
  {
    id: nanoid(),
    reviewMessage: 'Замечательное продукт. 100% натуральный.',
    date: dayjs(),
    authorName: 'Елена Кубракова',
    avatarUrl: '/src/assets/avatar.svg',
  },
  {
    id: nanoid(),
    reviewMessage: '100% натуральный.',
    date: dayjs(),
    authorName: 'Петр Иванов',
    avatarUrl: '/src/assets/avatar.svg',
  },
  {
    id: nanoid(),
    reviewMessage: 'Замечательное продукт.',
    date: dayjs(),
    authorName: 'Степан Степанов',
    avatarUrl: '/src/assets/avatar.svg',
  },
  {
    id: nanoid(),
    reviewMessage: 'Постоянно покупаю.',
    date: dayjs(),
    authorName: 'Степан Степанов',
    avatarUrl: '/src/assets/avatar.svg',
  },
]

export default reviews;
