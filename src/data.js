const base = import.meta.env.BASE_URL

export const RESUME_URL = `${base}Sharmila_Resume_2026.pdf`
export const PHOTO_URL = `${base}profile.jpg`

export const profile = {
  name: 'Sharmila Banu J.H.',
  email: 'sharminelofar786@gmail.com',
  roles: ['Online Educator', 'Python Mentor', 'MySQL Instructor', 'CBSE Computer Science Teacher', 'Aspiring ML & Data Science Professional'],
  summary:
    "Dedicated, results-driven educator with 14+ years of experience teaching Python, MySQL and Computer Science to CBSE Class 11 & 12 students. Founder of Sha Curriculum Spot, an online tuition centre with consistent 98%+ pass rates. I pair a B.E. in Computer Science (Anna University) with a knack for simplifying complex ideas. I'm actively upskilling in Machine Learning & Data Science and am open to remote roles in education, curriculum development, EdTech or the private sector.",
}

export const stats = [
  { value: 14, suffix: '+', label: 'Years Teaching' },
  { value: 98, suffix: '%+', label: 'Student Pass Rate' },
  { value: 4, suffix: '', label: 'Live Web Projects' },
  { value: 84, suffix: '%', label: 'B.E. CSE Score' },
]

export const skills = [
  { group: 'Programming & Databases', items: [['Python', 95], ['MySQL / SQL', 92], ['C / C++', 80], ['VB.NET', 75]] },
  { group: 'Web Development (Ongoing)', ongoing: true, items: [['HTML', 0], ['CSS', 0], ['Bootstrap', 0], ['Tailwind CSS', 0], ['React', 0], ['Django', 0]] },
  { group: 'Teaching & Pedagogy', items: [['CBSE Curriculum (CS)', 97], ['Online & Offline Tutoring', 96], ['Curriculum Design', 90], ['Study Material Creation', 92]] },
  { group: 'Tools & Platforms', items: [['MS Office Suite', 90], ['Google Workspace', 88], ['YouTube Content Creation', 85], ['Windows OS (XP–10)', 90]] },
]

export const experience = {
  role: 'Founder & Lead Educator',
  org: 'Sha Curriculum Spot',
  period: '2012 – Present',
  type: 'Online Private Tuition Centre · Remote',
  points: [
    'Founded and run an online tuition centre teaching Python, MySQL and CBSE Computer Science to Class 11 & 12 students across India.',
    'Consistently achieved 98%+ pass rates year after year across all enrolled students.',
    'Designed e-study materials, lecture notes and practicals tailored to the CBSE syllabus, making concepts exam-ready.',
    'Launched TechBox 247, a free YouTube channel for beginner Python learners and CBSE students.',
    'Delivered personalised one-on-one and group sessions on Python, MySQL and Python–MySQL interfacing.',
    'Provided homework support, test-preparation strategies and mock assessments to build student confidence.',
    'Kept strong student and parent communication to ensure steady academic progress.',
  ],
}

export const projects = [
  {
    title: 'Wedding Card',
    tag: 'Invitation Website',
    desc: 'An elegant digital wedding invitation website, shareable with guests as a single link.',
    url: 'https://weddingcard-lyart.vercel.app/',
    gradient: 'from-rose-500/80 via-pink-500/70 to-fuchsia-600/80',
    icon: 'heart',
  },
  {
    title: 'Vetri E-Commerce',
    tag: 'E-Commerce Website',
    desc: 'An online store front-end with product browsing and a clean shopping experience.',
    url: 'https://vetri-website-azure.vercel.app/',
    gradient: 'from-amber-500/80 via-orange-500/70 to-red-500/80',
    icon: 'cart',
  },
  {
    title: 'Construction Website',
    tag: 'Python Full-Stack',
    desc: 'A business website for a construction company, built as a Python full-stack project.',
    url: 'https://sharmi-python-fullstack-constructio.vercel.app/',
    gradient: 'from-emerald-600/80 via-green-600/70 to-teal-700/80',
    icon: 'building',
  },
  {
    title: 'Food Blog',
    tag: 'Blog Website',
    desc: 'A food blog website with a clean layout for recipes and food stories.',
    url: 'https://foodblog-dusky.vercel.app/',
    gradient: 'from-red-800/80 via-rose-800/70 to-red-900/80',
    icon: 'utensils',
  },
]

export const education = [
  { title: 'B.E. in Computer Science & Engineering', place: 'Anna University · First Class', year: '2011', score: '84%' },
  { title: 'Higher Secondary (Class 12)', place: 'Matriculation', year: '2007', score: '71%' },
]

export const certifications = [
  { name: 'Machine Learning & Data Science — Certificate Course', status: 'In Progress' },
  { name: 'Cloud Computing Workshop', status: 'Seminar' },
  { name: 'Artificial Intelligence', status: 'Seminar' },
  { name: 'Logistics & Supply Chain Management', status: 'Seminar' },
  { name: 'Computer Networking', status: 'Seminar' },
]

export const papers = [
  'Project paper at the National Conference on Emerging Computing & Communication Technologies (NECCT), Kongu Engineering College, Erode',
  'Software Engineering — SDLC Models · Angel College of Engineering and Technology',
  'Computer Networks and its Layers · Angel College of Engineering and Technology',
  'Mobile Computing — GSM Technology (paper & project) · Angel College of Engineering and Technology',
]

export const academicProjects = [
  ['Mobile Computing System', 'GSM-based network solution using Visual Basic and C++.'],
  ['Hotel Management System', 'Full-stack application built with VB.NET and C++.'],
  ['Library Management System', 'Database-driven application using SQL.'],
]

export const highlights = [
  'Selected for a Technical Support Engineer role at CSS Corp (now Movate) through on-campus placement in 2011.',
  'Self-taught Python and MySQL out of passion, then turned that skill into a 14-year teaching career.',
  'TechBox 247 on YouTube offers free Python tutorials to CBSE students and beginners.',
]
