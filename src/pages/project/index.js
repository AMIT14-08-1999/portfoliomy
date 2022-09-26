import { GrGithub } from 'react-icons/gr'
import { TbWorld } from 'react-icons/tb'

import {
  wordleClone,
  gpt3,
  gericht,
} from '../../assets/images'

// projects data
export const projects = [
  {
    id: 1,
    name: 'Job Sharing Application',
    desc:
      'Job Sharing Application Just Link "Apna"',
    stack: 'Flutter Firebase',
    gitHubUrl: {
      icon: <GrGithub />,
      url: 'https://github.com/AMIT14-08-1999/jobSharingApp',
    },
    website: {
      icon: <TbWorld />,
      url: 'https://drive.google.com/file/d/1fmk8vWE0nH9NiUd0FG2QJQ53rKBhLIDo/view?usp=sharing',
    },
    imgUrl: wordleClone,
  },
  {
    id: 2,
    name: 'Photo Sharing App',
    desc: 'photo sharing app Just like pinterest',
    stack: 'Flutter Firebase',
    gitHubUrl: {
      icon: <GrGithub />,
      url: 'https://github.com/AMIT14-08-1999/photo_sharing_app',
    },
    website: {
      icon: <TbWorld />,
      url: 'https://drive.google.com/file/d/1MsxJ1F0nQhnXKBBj2YyBy0D-vG6wwazP/view?usp=sharing',
    },
    imgUrl: gericht,
  },
  {
    id: 3,
    name: 'Amazon Clone(1)',
    desc: 'It is an Amazon Clone with push notification with two types of ADMIN Panel',
    stack: 'Flutter Firebase',
    imgUrl: gpt3,

    gitHubUrl: {
      icon: <GrGithub />,
      url: 'https://github.com/AMIT14-08-1999/amazon_users_app',
    },
    website: {
      icon: <TbWorld />,
      url: 'https://github.com/AMIT14-08-1999/amazon_users_app',
    },
  },
  {
    id: 4,
    name: 'Amazon Clone(2)',
    desc: 'It is an Amazon Clone with Nodejs MongoDB as a Backend with Admin Panel',
    stack: 'Flutter Nodejs ExpressJS MongoDB',
    imgUrl: gpt3,

    gitHubUrl: {
      icon: <GrGithub />,
      url: 'https://github.com/AMIT14-08-1999/amazon',
    },
    website: {
      icon: <TbWorld />,
      url: 'https://github.com/AMIT14-08-1999/amazon',
    },
  },

]
