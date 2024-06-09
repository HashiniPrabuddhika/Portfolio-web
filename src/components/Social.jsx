import React from 'react';
import { FaGithub, FaLinkedinIn} from 'react-icons/fa';
import { FaMedium } from 'react-icons/fa6';

const socials = [
  { icon: <FaGithub />, path: "https://github.com/HashiniPrabuddhika" },
  { icon: <FaLinkedinIn />, path: "https://www.linkedin.com/in/hashini-prabuddhika-1547b4210/" },
  { icon: <FaMedium />, path: "https://medium.com/@prabuddhikarph" },
  
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => (
        <a
          key={index}
          href={item.path}
          className={iconStyles}
          target="_blank"
          rel="noopener noreferrer"
        >
          {item.icon}
        </a>
      ))}
    </div>
  );
};

export default Social;
