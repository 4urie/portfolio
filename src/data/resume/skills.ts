export interface Skill {
  title: string;
  competency: number;
  category: string[];
}

export interface Category {
  name: string;
  color: string;
}

const skills: Skill[] = [
  {
    title: 'SQL',
    competency: 4,
    category: ['Database', 'Languages'],
  },
  {
    title: 'Laravel',
    competency: 3,
    category: ['Web Development', 'PHP', 'Backend'],
  },
  {
    title: 'Django',
    competency: 3,
    category: ['Web Development', 'Python', 'Backend'],
  },
  {
    title: 'React',
    competency: 2,
    category: ['Web Development', 'Javascript', 'Frontend'],
  },
  {
    title: 'Vite',
    competency: 2,
    category: ['Web Development', 'Tools', 'Build Tools'],
  },
  {
    title: 'Arduino',
    competency: 3,
    category: ['Hardware', 'Programming', 'Electronics'],
  },
  {
    title: 'PHP',
    competency: 3,
    category: ['Web Development', 'Languages', 'Backend'],
  },
  {
    title: 'Python',
    competency: 3,
    category: ['Web Development', 'Languages', 'Backend'],
  },
  {
    title: 'Javascript',
    competency: 2,
    category: ['Web Development', 'Languages', 'Frontend'],
  },
  {
    title: 'HTML/CSS',
    competency: 4,
    category: ['Web Development', 'Frontend', 'Languages'],
  },
  {
    title: 'MySQL',
    competency: 4,
    category: ['Database', 'Backend'],
  },
  {
    title: 'Git',
    competency: 3,
    category: ['Tools', 'Version Control'],
  },
  {
    title: 'VS Code',
    competency: 4,
    category: ['Tools', 'IDE'],
  },
  {
    title: 'Data Entry',
    competency: 4,
    category: ['Administrative', 'Office Skills'],
  },
  {
    title: 'CSS',
    competency: 4,
    category: ['Web Development', 'Frontend', 'Styling'],
  },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

// this is a list of colors that I like. The length should be === to the
// number of categories. Re-arrange this list until you find a pattern you like.
const colors: string[] = [
  '#6968b3',
  '#37b1f5',
  '#40494e',
  '#515dd4',
  '#e47272',
  '#cc7b94',
  '#3896e2',
  '#c3423f',
  '#d75858',
  '#747fff',
  '#64cb7b',
];

const categories: Category[] = Array.from(new Set(skills.flatMap(({ category }) => category)))
  .sort()
  .map((category, index) => ({
    name: category,
    color: colors[index],
  }));

export { categories, skills };
