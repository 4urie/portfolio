/**
 * Conforms to https://jsonresume.org/schema/
 */
export interface Position {
  name: string;
  position: string;
  url: string;
  startDate: string;
  endDate?: string;
  summary?: string;
  highlights?: string[];
}

const work: Position[] = [
  {
    name: 'Barangay Office',
    position: 'OJT - Data Encoder',
    url: '#',
    startDate: '2023-03-01',
    endDate: '2023-05-01',
    summary:
      'Completed On-the-Job Training as a data encoder in my local barangay office, gaining practical experience in data management and administrative tasks.',
    highlights: [
      'Encoded and managed various administrative documents and records',
      'Assisted in digitizing paper-based records for better data organization',
      'Learned proper data handling and office administration procedures',
    ],
  },
];

export default work;
