import {nanoid} from "nanoid";
import dayjs from 'dayjs';
import avatarSvg from "/src/assets/avatar.svg";

const reviews = [
  {
    id: nanoid(),
    reviewMessage: 'Замечательное продукт. 100% натуральный.',
    date: dayjs(),
    authorName: 'Елена Кубракова',
    avatarUrl: avatarSvg,
  },
  {
    id: nanoid(),
    reviewMessage: '100% натуральный.',
    date: dayjs(),
    authorName: 'Петр Иванов',
    avatarUrl: avatarSvg,
  },
  {
    id: nanoid(),
    reviewMessage: 'Замечательное продукт.',
    date: dayjs(),
    authorName: 'Степан Степанов',
    avatarUrl: avatarSvg,
  },
  {
    id: nanoid(),
    reviewMessage: 'Постоянно покупаю.',
    date: dayjs(),
    authorName: 'Степан Степанов',
    avatarUrl: avatarSvg,
  },
]

export default reviews;
