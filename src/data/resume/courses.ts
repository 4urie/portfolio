export interface Course {
  title: string;
  number: string;
  link: string;
  university: string;
}

const courses: Course[] = [
  {
    title: 'National Certificate II in Computer Systems Servicing',
    number: 'NC II CSS',
    link: '#',
    university: 'TESDA',
  },
  {
    title: 'Database Management Systems',
    number: 'BSIT 201',
    link: '#',
    university: 'Davao del Norte State College',
  },
  {
    title: 'Web Development Fundamentals',
    number: 'BSIT 301',
    link: '#',
    university: 'Davao del Norte State College',
  },
  {
    title: 'Programming Logic and Design',
    number: 'BSIT 101',
    link: '#',
    university: 'Davao del Norte State College',
  },
  {
    title: 'Object-Oriented Programming',
    number: 'BSIT 202',
    link: '#',
    university: 'Davao del Norte State College',
  },
  {
    title: 'Data Structures and Algorithms',
    number: 'BSIT 302',
    link: '#',
    university: 'Davao del Norte State College',
  },
];

export default courses;
