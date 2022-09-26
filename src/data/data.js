import React from 'react'

// react icons
import { FiGrid, FiLinkedin } from 'react-icons/fi'

import { VscProject } from 'react-icons/vsc'
import {
  BsPersonLinesFill,
  BsGithub,
  BsCloud,
} from 'react-icons/bs'
import { RiComputerLine, RiContactsLine } from 'react-icons/ri'
import {
  SiExpress,
} from 'react-icons/si'

import { GrGithub, GrMysql } from 'react-icons/gr'
import { DiAndroid, DiMongodb, DiPostgresql } from 'react-icons/di'
import { FaNodeJs, FaGit } from 'react-icons/fa'

// sidebar menu list and icons
const sideBarMenu = [
  {
    text: 'Home',
    icon: <FiGrid className="link-icon" />,
    url: '/',
  },
  {
    text: 'About',
    icon: <BsPersonLinesFill className="link-icon" />,
    url: '/about',
  },
  {
    text: 'Projects',
    icon: <VscProject className="link-icon" />,
    url: '/project',
  },
  {
    text: 'Contacts',
    icon: <RiContactsLine className="link-icon" />,
    url: '/contact',
  },
  
  
]
// social media icons and url
const socialIcons = [
  {
    icon: <GrGithub className="icon switch__color" />,
    url: 'https://github.com/AMIT14-08-1999',
  },
  {
    icon: <FiLinkedin className="icon switch__color" />,
    url: 'https://www.linkedin.com/in/amit-ghosh-4626b21b1/',
  },
]
// programming lanuages (spanText), icons and url
const skillSet = [
  {
    icon: <DiAndroid className="skills-icon switch__color" />,
    spanText: 'Flutter',
    url: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
  },
  {
    icon: <BsCloud className="skills-icon switch__color" />,
    spanText: 'Firebase',
    url: '',
  },
  {
    icon: <RiComputerLine className="skills-icon switch__color" />,
    spanText: 'C',
    url: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
  },
  {
    icon: <RiComputerLine className="skills-icon switch__color" />,
    spanText: 'C++',
    url: 'https://developer.mozilla.org/en-US/docs/Learn/JavaScript',
  },

  {
    icon: <RiComputerLine className="skills-icon switch__color" />,
    spanText: 'DSA',
    url: '',
  },
  {
    icon: <FaGit className="skills-icon switch__color" />,
    spanText: 'GIT',
    url:
      'https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/GitHub',
  },
  {
    icon: <BsGithub className="skills-icon switch__color" />,
    spanText: 'GITHUB',
    url:
      'https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/GitHub',
  },

  {
    icon: <FaNodeJs className="skills-icon switch__color" />,
    spanText: 'NODE',
    url:
      'https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs',
  },

  {
    icon: <DiMongodb className="skills-icon switch__color" />,
    spanText: 'MONGO DB',
    url: '',
  },
  {
    icon: <SiExpress className="skills-icon switch__color" />,
    spanText: 'EXPRESS JS',
    url:
      'https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Express',
  },
  {
    icon: <GrMysql className="skills-icon switch__color" />,
    spanText: 'MySQL',
    url: 'https://redux.js.org/introduction/getting-started',
  },
  {
    icon: <DiPostgresql className="skills-icon switch__color" />,
    spanText: 'PostgreSQL',
    url: 'https://figma.com',
  },
]

export { sideBarMenu, socialIcons, skillSet }
