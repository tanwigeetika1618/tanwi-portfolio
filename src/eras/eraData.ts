export interface Era {
  id: string;
  title: string;
  emoji: string;
  subtitle: string;
  description: string;
  color: string;
  gradientFrom: string;
  gradientTo: string;
  achievements: string[];
  images: string[];
}

export const eras: Era[] = [
  {
    id: 'college-journey',
    title: 'College Journey',
    emoji: '🎓',
    subtitle: 'Where it all began — from curiosity to code',
    description:
      'Sathyabama Institute of Science and Technology was where a curious mind found its calling. From learning the fundamentals of computer science to building projects that actually worked, college laid the foundation for everything that followed. Late-night coding sessions, competitive programming, and the thrill of solving problems became a way of life.',
    color: '#60a5fa',
    gradientFrom: '#2563eb',
    gradientTo: '#60a5fa',
    achievements: [
      'B.Tech in Computer Science & Engineering from Sathyabama Institute',
      'Built strong foundations in DSA, Java, and Python',
      'Developed projects that solved real-world problems',
      'Class XII from Loyola Academy | Class X from Don Bosco, Bandel',
    ],
    images: [],
  },
  {
    id: 'internships',
    title: 'Internship Era',
    emoji: '🚀',
    subtitle: 'First taste of the real world',
    description:
      'Internships at HCL Technologies and OpenText were where classroom knowledge met industry reality. Building ML models for healthcare data at HCL and working on enterprise software at OpenText taught me how real engineering teams operate — code reviews, agile sprints, and the importance of writing code that others can maintain.',
    color: '#f59e0b',
    gradientFrom: '#d97706',
    gradientTo: '#fbbf24',
    achievements: [
      'HCL Technologies — Built ML models (Random Forest, SVM) for healthcare data pipelines',
      'OpenText — Contributed to enterprise software with Java, TestNG, and Cucumber',
      'Learned Agile methodologies and professional software development practices',
      'First experience with CI/CD pipelines and automated testing',
    ],
    images: [],
  },
  {
    id: 'redhat',
    title: 'Red Hat Journey',
    emoji: '🎩',
    subtitle: 'From intern to Software Engineer at the open source giant',
    description:
      "Joining Red Hat's Ansible organization as an intern and growing into a Software Engineer has been the most transformative chapter. Working on tools used by thousands of developers worldwide — vscode-ansible, ansible-lint, ansible-creator — and contributing to the hashicorp.terraform collection taught me what it means to build at scale. Every PR, every code review, every sprint has been a masterclass in open source engineering.",
    color: '#ef4444',
    gradientFrom: '#dc2626',
    gradientTo: '#f87171',
    achievements: [
      'Software Engineer in Ansible Org, Content Integration Team',
      'Built Terraform plan & output modules for hashicorp.terraform collection',
      'Contributed to vscode-ansible — webviews, WSL testing, ansible-creator tools',
      'Worked on ansible-lint, Konflux/Tekton CI, bootc container automation',
    ],
    images: [],
  },
  {
    id: 'open-source',
    title: 'Open Source',
    emoji: '🌍',
    subtitle: 'Code without borders — contributing to the global ecosystem',
    description:
      'Open source is not just a part of my job at Red Hat — it\'s a philosophy. Contributing to projects like vscode-ansible, ansible-lint, and Terraform collections means my code is used by developers across the globe. Every contribution, every review, every discussion in the community has shaped me into a better engineer.',
    color: '#4ade80',
    gradientFrom: '#16a34a',
    gradientTo: '#4ade80',
    achievements: [
      'Core contributions to vscode-ansible extension used by thousands',
      'Wrote modules for hashicorp.terraform Ansible collection',
      'Contributed to ansible-lint — improving developer experience for Ansible authors',
      'Enabled WSL environment testing for vscode-ansible (previously Linux/Mac only)',
    ],
    images: [],
  },
  {
    id: 'ai-ml',
    title: 'AI & ML',
    emoji: '🤖',
    subtitle: 'From automation to intelligence',
    description:
      'AI isn\'t just a buzzword in my journey — it\'s a tool I\'ve built with. From creating an AI-powered issue triage system that classifies GitHub issues in seconds, to building FlowForge — a natural language workflow automation platform powered by Claude — AI has become my force multiplier. Exploring LLMs, RAG, and agentic AI continues to push the boundaries of what I can build.',
    color: '#a78bfa',
    gradientFrom: '#7c3aed',
    gradientTo: '#a78bfa',
    achievements: [
      'Built AI Issue Triage — automated GitHub issue classification using LLMs',
      'Created FlowForge — NL-to-workflow automation platform with Claude',
      'Exploring RAG, Agentic AI, and MCP for next-gen developer tools',
      'Applied ML at HCL for healthcare data analysis and prediction',
    ],
    images: [],
  },
  {
    id: 'devconf',
    title: 'DevConf & Speaking',
    emoji: '🎤',
    subtitle: 'Sharing knowledge, one stage at a time',
    description:
      'Standing on the DevConf stage and presenting "Automate Issue Triage Using AI — From Chaos to Clarity in Seconds" was a defining moment. Turning months of work into a talk that inspired others to think about AI differently was exhilarating. Public speaking transformed from a fear into a passion — and the conversations that followed each talk were even more rewarding than the applause.',
    color: '#f43f5e',
    gradientFrom: '#e11d48',
    gradientTo: '#fb7185',
    achievements: [
      'DevConf 2025 Speaker — "Automate Issue Triage Using AI"',
      'Demonstrated live AI-powered issue classification on stage',
      'Engaged with the open source community on AI + DevOps integration',
      'Inspired peers to explore AI-driven automation in their workflows',
    ],
    images: [],
  },
  {
    id: 'devops-cloud',
    title: 'DevOps & Cloud',
    emoji: '☁️',
    subtitle: 'Infrastructure as code, deployment as art',
    description:
      'From writing Ansible playbooks to orchestrating containers with Podman and Kubernetes, the DevOps journey has been about making deployment invisible. Working with Terraform modules, building bootc container images, setting up CI/CD with Tekton/Konflux and GitHub Actions — every tool in the DevOps arsenal has taught me that great software is only as good as its delivery pipeline.',
    color: '#22d3ee',
    gradientFrom: '#0891b2',
    gradientTo: '#22d3ee',
    achievements: [
      'Ansible, Terraform, Docker, Podman — infrastructure automation expert',
      'Built bootc container workflows with cloud-init and Quadlet',
      'CI/CD with Tekton, Konflux, GitHub Actions, and Jenkins',
      'Working towards AWS Solutions Architect certification',
    ],
    images: [],
  },
  {
    id: 'projects',
    title: 'Projects & Creations',
    emoji: '💡',
    subtitle: 'Ideas turned into reality',
    description:
      'Every project tells a story of a problem that needed solving. FlowForge converts natural language into executable automation workflows. AI Issue Triage brings order to chaotic GitHub repositories. The Terraform modules I built eliminated CLI dependencies for thousands of users. Building things that people actually use is the most rewarding part of being an engineer.',
    color: '#fb923c',
    gradientFrom: '#ea580c',
    gradientTo: '#fb923c',
    achievements: [
      'FlowForge — AI-powered workflow automation (Django + React + Claude)',
      'AI Issue Triage — LLM-based GitHub issue classifier with scikit-learn',
      'hashicorp.terraform modules — plan & output, eliminating CLI dependency',
      'Load testing framework with Locust for automation-portal-bootc-container',
    ],
    images: [],
  },
  {
    id: 'beyond-code',
    title: 'Beyond Code',
    emoji: '✨',
    subtitle: 'The human behind the engineer',
    description:
      "Engineering is what I do, but not all of who I am. Whether it's automating everything so I have more time to watch Friends, hitting the gym to clear my head, or exploring new cuisines to cook — life beyond code keeps me grounded and creative. The best ideas often come when you step away from the keyboard.",
    color: '#e879f9',
    gradientFrom: '#a855f7',
    gradientTo: '#e879f9',
    achievements: [
      'Fitness enthusiast — gym is the best debugger',
      'Home chef — cooking is just following a recipe (like code!)',
      'Friends superfan — could have a conversation entirely in quotes',
      'Believer in work-life balance and continuous self-improvement',
    ],
    images: [],
  },
];
