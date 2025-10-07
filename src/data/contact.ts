import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons/faFacebookF';
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons/faEnvelope';

export interface ContactItem {
  link: string;
  label: string;
  icon: IconDefinition;
}

const data: ContactItem[] = [
  {
    link: 'https://github.com/4urie',
    label: 'Github',
    icon: faGithub,
  },
  {
    link: 'https://facebook.com/aurie.nellas',
    label: 'Facebook',
    icon: faFacebookF,
  },
  {
    link: 'nellas.aurie@dnsc.edu.ph',
    label: 'Email',
    icon: faEnvelope,
  },
];

export default data;
