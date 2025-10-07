export interface Degree {
  school: string;
  degree: string;
  link: string;
  year: number;
}

const degrees: Degree[] = [
  {
    school: 'Davao del Norte State College',
    degree: 'Bachelor of Science in Information Technology (3rd Year)',
    link: 'https://dnsc.edu.ph',
    year: 2026,
  },
  {
    school: 'San Vicente National High School',
    degree: 'Senior High School Graduate',
    link: '#',
    year: 2023,
  },
  {
    school: 'San Vicente Elementary School',
    degree: 'Elementary Graduate',
    link: '#',
    year: 2019,
  },
];

export default degrees;
