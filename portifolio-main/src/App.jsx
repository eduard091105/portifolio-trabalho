import { useState } from 'react';
import profileImage from '../img/profile-pick.png';
import cssLogo from '../img/techs/CSS3-logo.png';
import htmlLogo from '../img/techs/HTML-logo.png';
import javascriptLogo from '../img/techs/image.png';
import pythonLogo from '../img/techs/python-logo.png';

const skills = [
  { name: 'HTML5', image: htmlLogo },
  { name: 'CSS3', image: cssLogo },
  { name: 'JavaScript', image: javascriptLogo },
  { name: 'Python', image: pythonLogo },
];

const projects = [
  {
    title: 'Este portfólio',
    category: 'Em desenvolvimento',
    description:
      'Estou montando esta página para reunir um pouco sobre mim e o que venho aprendendo.',
    details:
      'Foi feito com React e Vite. Ainda quero adicionar outros projetos conforme for desenvolvendo.',
    technologies: ['React', 'Vite', 'CSS'],
  },
];

function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="#inicio" aria-label="Ir para o início">
        Dev.Eduardo
      </a>
      <nav className="main-nav" aria-label="Navegação principal">
        <a href="#sobre">Sobre mim</a>
        <a href="#habilidades">Tecnologias</a>
        <a href="#projetos">Projetos</a>
      </nav>
      <a className="header-contact" href="#contato">
        Contato <span aria-hidden="true">↗</span>
      </a>
    </header>
  );
}

function SkillCard({ name, image }) {
  return (
    <li className="skill-card">
      <img src={image} alt="" />
      <span>{name}</span>
    </li>
  );
}

function ProjectCard({ project }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <article className={`project-card${isExpanded ? ' is-expanded' : ''}`}>
      <div className="project-card-top">
        <span className="project-category">{project.category}</span>
        <span className="project-number" aria-hidden="true">
          01
        </span>
      </div>
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      {isExpanded && (
        <div className="project-details">
          <p>{project.details}</p>
          <ul className="tag-list" aria-label="Tecnologias do projeto">
            {project.technologies.map((technology) => (
              <li key={technology}>{technology}</li>
            ))}
          </ul>
        </div>
      )}
      <button
        className="details-button"
        type="button"
        aria-expanded={isExpanded}
        onClick={() => setIsExpanded((expanded) => !expanded)}
      >
        {isExpanded ? 'Mostrar menos' : 'Ver detalhes'}
        <span aria-hidden="true">{isExpanded ? '−' : '+'}</span>
      </button>
    </article>
  );
}

function App() {
  return (
    <>
      <Header />
      <main>
        <section className="hero section-wrap" id="inicio">
          <div className="hero-copy">
            <p className="eyebrow">Estudante de ADS</p>
            <h1>
              Olá, eu sou
              <br />
              <span>Eduardo Gonçalves.</span>
            </h1>
            <p className="hero-description">
              Sou estudante de Análise e Desenvolvimento de Sistemas e gosto de
              aprender coisas novas sobre tecnologia. Aqui vou mostrar um pouco
              do que estudo e dos projetos que faço.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projetos">
                Ver meus projetos <span aria-hidden="true">↓</span>
              </a>
              <a className="text-link" href="#sobre">
                Sobre mim <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
          <div className="hero-visual">
            <div className="portrait-frame">
              <img
                src={profileImage}
                alt="Avatar ilustrativo; substitua por uma foto sua"
              />
            </div>
            <p className="visual-caption">Neves Paulista, SP</p>
          </div>
        </section>

        <section className="about section-wrap section-block" id="sobre">
          <div className="section-heading">
            <p className="eyebrow">Sobre mim</p>
            <h2>Um pouco sobre mim</h2>
          </div>
          <div className="about-copy">
            <p>
              Meu nome é Eduardo Cesar Gonçalves, sou de Neves Paulista, SP, e
              estudo Análise e Desenvolvimento de Sistemas. Tenho interesse em
              trabalhar na área e ganhar experiência.
            </p>
            <p>
              Gosto de aprender novas tecnologias e quero continuar melhorando
              meus conhecimentos, colocando em prática o que aprendo no curso.
            </p>
          </div>
        </section>

        <section
          className="skills section-wrap section-block"
          id="habilidades"
        >
          <div className="section-heading">
            <p className="eyebrow">Tecnologias</p>
            <h2>O que estou aprendendo</h2>
            <p className="section-intro">
              Ferramentas e linguagens que conheço ou estou estudando.
            </p>
          </div>
          <ul className="skills-grid">
            {skills.map((skill) => (
              <SkillCard key={skill.name} {...skill} />
            ))}
          </ul>
        </section>

        <section className="projects section-wrap section-block" id="projetos">
          <div className="section-heading">
            <p className="eyebrow">Projetos</p>
            <h2>Projetos e atividades</h2>
            <p className="section-intro">
              Este portfólio está em desenvolvimento. Depois posso adicionar
              outros projetos que fizer.
            </p>
          </div>
          <div className="projects-grid">
            {projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </section>

        <section className="contact section-wrap" id="contato">
          <p className="eyebrow">Contato</p>
          <h2>Me encontre por aqui</h2>
          <div className="social-links">
            <a
              href="https://www.linkedin.com/in/eduardo-cesar-gon%C3%A7alves-689a2a30a/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn <span aria-hidden="true">↗</span>
            </a>
            <a
              href="https://github.com/eduard091105"
              target="_blank"
              rel="noreferrer"
            >
              GitHub <span aria-hidden="true">↗</span>
            </a>
          </div>
        </section>
      </main>
      <footer className="site-footer">
        <span>© {new Date().getFullYear()} Eduardo Cesar Gonçalves</span>
        <a href="#inicio">Voltar ao topo ↑</a>
      </footer>
    </>
  );
}

export default App;
