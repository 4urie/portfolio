export interface Project {
  title: string;
  subtitle?: string;
  link?: string;
  image: string;
  date: string;
  desc: string;
}

const data: Project[] = [
  {
    title: 'Django-React-Oauth',
    subtitle: 'Full-Stack Authentication System',
    link: 'https://github.com/4urie/Django-React-Oauth',
    image: '/images/projects/oauth.png',
    date: '2024-10-01',
    desc:
      'A comprehensive authentication system built with Django backend and React frontend. ' +
      'Implements OAuth integration for secure user authentication and authorization. ' +
      'Features include user registration, login, token management, and protected routes. ' +
      'This project showcases my full-stack development skills combining Django REST API with React.',
  },
  {
    title: 'Laravel Chatify',
    subtitle: 'Real-time Chat Application',
    link: 'https://github.com/4urie/laravel-chatify',
    image: '/images/projects/1.png',
    date: '2024-08-15',
    desc:
      'A real-time messaging application built with Laravel framework. ' +
      'Features include instant messaging, user management, message history, and responsive design. ' +
      "Implemented using Laravel's broadcasting capabilities and WebSocket technology. " +
      'This project demonstrates my Laravel expertise and real-time communication implementation.',
  },
  {
    title: 'Laravel POS System',
    subtitle: 'Point of Sale Management System',
    link: 'https://github.com/4urie/laravel-pos',
    image: '/images/projects/pos.png',
    date: '2024-06-20',
    desc:
      'A comprehensive Point of Sale system built with Laravel for small to medium businesses. ' +
      'Features include inventory management, sales tracking, customer management, and reporting. ' +
      'Implements role-based access control, transaction processing, and data analytics dashboard. ' +
      'This project showcases my ability to build complex business applications with Laravel.',
  },
];

export default data;
