export interface CourseOffer {
  badge: string;
  regularPrice: string;
  currentPrice: string;
  pricePrefix: string;
  features: string[];
  ctaText: string;
  securityBadges: string[];
  checkoutUrl?: string; // Configurable checkout URL
}

export interface ProblemItem {
  id: string;
  icon: 'code' | 'clock' | 'file' | 'briefcase';
  title: string;
  description: string;
}

export interface MethodStage {
  number: string;
  title: string;
  subtitle: string;
  icon: 'book' | 'code' | 'database' | 'rocket';
  description: string;
  practiceDetails: string;
  learningOutcome: string;
  technologies: string[];
  codeSnippet?: {
    filename: string;
    code: string;
  };
}

export interface IncludedResource {
  id: string;
  icon: 'play' | 'folder' | 'fileText' | 'users' | 'award';
  title: string;
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  avatarInitials: string;
  quote: string;
  rating: number;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export const COURSE_OFFER: CourseOffer = {
  badge: 'ACESSO COMPLETO',
  pricePrefix: 'Comece hoje por apenas',
  currentPrice: 'R$ 67',
  regularPrice: 'De R$ 297',
  features: [
    'Acesso imediato',
    'Todos os módulos',
    'Projetos práticos',
    'Suporte na comunidade',
    'Garantia de 7 dias',
  ],
  ctaText: 'QUERO ENTRAR AGORA →',
  securityBadges: [
    'Compra segura',
    'Cartão, Pix e boleto',
    'Garantia de 7 dias',
  ],
  // checkoutUrl: 'https://pay.hotmart.com/exemplo' // Deixe undefined para abrir o modal de "Inscrições em breve"
};

export const PROBLEMS_DATA: ProblemItem[] = [
  {
    id: 'p1',
    icon: 'code',
    title: 'Não sabe por onde começar',
    description: 'Já tentou aprender, mas se perdeu no meio do caminho.',
  },
  {
    id: 'p2',
    icon: 'clock',
    title: 'Muito conteúdo teórico',
    description: 'Assiste aulas, mas não consegue colocar em prática.',
  },
  {
    id: 'p3',
    icon: 'file',
    title: 'Não tem projetos no portfólio',
    description: 'Sente que falta experiência real para conseguir oportunidades.',
  },
  {
    id: 'p4',
    icon: 'briefcase',
    title: 'Quer melhores oportunidades',
    description: 'Deseja um salário mais alto e liberdade geográfica.',
  },
];

export const METHOD_STAGES: MethodStage[] = [
  {
    number: '01',
    title: 'Fundamentos',
    subtitle: 'Lógica de programação, HTML, CSS e base sólida.',
    icon: 'book',
    description: 'Domine o raciocínio lógico algorítmico, a semântica de marcação HTML5 e a estilização responsiva com CSS3.',
    practiceDetails: 'Construção de páginas estruturadas do zero, dominando tags semânticas, seletores, Flexbox, Grid e boas práticas de acessibilidade.',
    learningOutcome: 'Capacidade de transformar qualquer layout visual em uma página web estática, semântica e adaptada para dispositivos móveis.',
    technologies: ['Lógica de Programação', 'HTML5 Semântico', 'CSS3 Moderno', 'Flexbox & Grid', 'Design Responsivo'],
    codeSnippet: {
      filename: 'index.html',
      code: `<!DOCTYPE html>\n<html lang="pt-BR">\n  <head>\n    <title>Minha Aplicação</title>\n    <link rel="stylesheet" href="style.css">\n  </head>\n  <body>\n    <main class="container">\n      <h1>CODE//CORE</h1>\n    </main>\n  </body>\n</html>`,
    },
  },
  {
    number: '02',
    title: 'Front-end',
    subtitle: 'JavaScript moderno e React.',
    icon: 'code',
    description: 'Aprenda JavaScript moderno (ES6+) a fundo e a arquitetura baseada em componentes reativos com React.',
    practiceDetails: 'Desenvolvimento de interfaces dinâmicas, manipulação de estado, consumo de eventos, hooks modernos e modularização de código.',
    learningOutcome: 'Habilidade de criar Single Page Applications completas, interativas e com gerenciamento de estado previsível.',
    technologies: ['JavaScript ES6+', 'React', 'Hooks (useState, useEffect)', 'Componentização', 'Consumo de APIs REST'],
    codeSnippet: {
      filename: 'App.tsx',
      code: `import { useState } from 'react';\n\nexport function Dashboard() {\n  const [projetos, setProjetos] = useState([]);\n  \n  return (\n    <div className="dashboard">\n      <h2>Seus Projetos Ativos</h2>\n    </div>\n  );\n}`,
    },
  },
  {
    number: '03',
    title: 'Back-end',
    subtitle: 'Node.js, APIs e banco de dados.',
    icon: 'database',
    description: 'Compreenda o funcionamento de servidores, criação de rotas RESTful com Node.js e persistência de dados em banco relacional.',
    practiceDetails: 'Criação de rotas, middlewares, regras de autenticação, validação de requisições e integração com banco de dados.',
    learningOutcome: 'Capacidade de estruturar backends robustos, processar dados com segurança e fornecer endpoints para aplicações cliente.',
    technologies: ['Node.js', 'Express', 'APIs RESTful', 'Banco de Dados', 'CRUD Completo', 'JSON Web Tokens'],
    codeSnippet: {
      filename: 'server.js',
      code: `import express from 'express';\nconst app = express();\n\napp.get('/api/projetos', (req, res) => {\n  return res.json({ status: 'sucesso', total: 4 });\n});\n\napp.listen(3333);`,
    },
  },
  {
    number: '04',
    title: 'Projetos reais',
    subtitle: 'Construa e publique seu portfólio.',
    icon: 'rocket',
    description: 'Integre front-end e back-end em aplicações completas de ponta a ponta e publique seus projetos na nuvem.',
    practiceDetails: 'Deploy contínuo, organização de repositórios no GitHub com documentação profissional e projetos reais em produção.',
    learningOutcome: 'Um portfólio real publicado na internet com código limpo e projetos funcionais para demonstrar domínio técnico.',
    technologies: ['Git & GitHub', 'Deploy na Nuvem', 'Projetos Full Stack', 'Documentação README', 'Portfólio Profissional'],
    codeSnippet: {
      filename: 'deploy.sh',
      code: `# Publicando seu portfólio na nuvem\ngit add .\ngit commit -m "feat: adiciona projetos reais"\ngit push origin main\n# Deploy automático executado com sucesso!`,
    },
  },
];

export const INCLUDED_RESOURCES: IncludedResource[] = [
  {
    id: 'res-1',
    icon: 'play',
    title: 'Aulas em vídeo passo a passo',
    description: 'Explicações diretas e sem enrolação, guiando cada linha de código.',
  },
  {
    id: 'res-2',
    icon: 'folder',
    title: 'Projetos práticos para portfólio',
    description: 'Aplicações completas construídas do zero para comprovar suas habilidades.',
  },
  {
    id: 'res-3',
    icon: 'fileText',
    title: 'Materiais downloadáveis',
    description: 'Códigos-fonte, guias de consulta rápida e resumos para acelerar seu estudo.',
  },
  {
    id: 'res-4',
    icon: 'users',
    title: 'Suporte na comunidade',
    description: 'Espaço dedicado para tirar dúvidas técnicas e trocar experiências com outros alunos.',
  },
  {
    id: 'res-5',
    icon: 'award',
    title: 'Certificado de conclusão',
    description: 'Comprovação de conclusão da formação com validação de carga prática.',
  },
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 't1',
    name: 'Bruno Lima',
    role: 'Desenvolvedor Front-end',
    avatarInitials: 'BL',
    quote: 'Consegui meu primeiro emprego como dev 3 meses depois de terminar o curso. O método é simples e funciona.',
    rating: 5,
  },
  {
    id: 't2',
    name: 'Carla Mendes',
    role: 'Estudante de TI',
    avatarInitials: 'CM',
    quote: 'As aulas são muito práticas e os projetos ajudam demais no portfólio. Hoje me sinto confiante para criar minhas próprias aplicações.',
    rating: 5,
  },
  {
    id: 't3',
    name: 'Rafael Costa',
    role: 'Analista de Sistemas',
    avatarInitials: 'RC',
    quote: 'Já tinha tentado aprender programação antes, mas sempre desistia. Esse curso finalmente me mostrou o caminho certo.',
    rating: 5,
  },
];

export const FAQ_DATA: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'Preciso ter experiência?',
    answer: 'Não. O curso começa do absoluto zero, ensinando os fundamentos de raciocínio lógico e estrutura antes de avançar para tópicos complexos.',
  },
  {
    id: 'faq-2',
    question: 'Quanto tempo tenho acesso?',
    answer: 'Você terá acesso completo a todo o conteúdo, aulas, projetos práticos e atualizações da formação.',
  },
  {
    id: 'faq-3',
    question: 'Tem garantia?',
    answer: 'Sim, você tem 7 dias de garantia incondicional. Se por qualquer motivo você achar que a formação não é para você, devolvemos 100% do seu valor investido.',
  },
  {
    id: 'faq-4',
    question: 'Posso estudar pelo celular?',
    answer: 'Você pode assistir às aulas e acompanhar os conteúdos pelo celular ou tablet. Para a prática de escrita de código e projetos, recomendamos o uso de um computador ou notebook.',
  },
];

export const SITE_CONFIG = {
  brandName: 'CODE//CORE',
  tagline: 'Aprenda a programar construindo projetos de verdade.',
  footerSlogan: 'Aprendizado prático. Projetos reais. Um futuro melhor.',
  copyrightYear: new Date().getFullYear(),
  socialLinks: {
    // Redes sociais configuráveis (se omitidas, o componente trata com elegância)
    github: 'https://github.com',
    instagram: 'https://instagram.com',
    youtube: 'https://youtube.com',
    linkedin: 'https://linkedin.com',
  },
};
