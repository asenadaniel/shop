import React from 'react';
import { Facebook, Instagram, LinkedIn, Twitter } from '@mui/icons-material';

function Footer() {
  const socialMedia = [
    { Icon: Facebook, label: 'Facebook' },
    { Icon: Instagram, label: 'Instagram' },
    { Icon: Twitter, label: 'Twitter' },
    { Icon: LinkedIn, label: 'LinkedIn' },
  ];

  const sections = [
    {
      title: 'Company',
      links: ['About', 'Contact Us'],
    },
    {
      title: 'Quick Link',
      links: ['Share Location', 'Orders Tracking'],
    },
    {
      title: 'Legal',
      links: ['Terms & Conditions', 'Privacy Policy'],
    },
  ];

  return (
    <footer className='px-[4%] py-[5%] bg-green-900 text-white'>
      <div className='flex flex-col md:flex-row justify-between gap-8'>
        <div className='flex flex-col gap-8 md:w-1/2'>
          <img src="./logo2.png" alt="Company Logo" className='w-32 md:w-52' />
          <p className='text-lg md:text-2xl'>
            Retain an Organic and healthy lifestyle while shopping from us
          </p>
          <div className='flex gap-3'>
            {socialMedia.map(({ Icon, label }, index) => (
              <div
                key={index}
                className='bg-white text-green-800 w-9 h-9 rounded-full flex items-center justify-center'
                aria-label={label}
              >
                <Icon />
              </div>
            ))}
          </div>
        </div>
        <div className='flex flex-col md:flex-row gap-8 md:gap-12 w-full md:w-auto'>
          {sections.map((section, index) => (
            <div key={index} className='flex flex-col gap-4 text-base md:text-xl'>
              <p className='font-bold'>{section.title}</p>
              {section.links.map((link, i) => (
                <p key={i}>{link}</p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
