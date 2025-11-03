import React, { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import {
  Github, Linkedin, Youtube, Mail, Smartphone, Download,
  Cpu, GitCommit, ExternalLink, Link as LinkIcon, Globe
} from 'lucide-react';

/* =========================
   PALETA
========================= */
const palette = {
  bgDark: '#1B123F',
  cardDark: '#251C52',
  lilac: '#B8A3FF',
  cyan: '#47CFFF',
  textLight: '#E6E6FF',
  textDark: '#0E0E1A',
};


/* =========================
   LOGOS (SVG)
========================= */
const LogoTech = ({ size = 48, fg = '#0f172a', accent = palette.lilac }) => (
    <img src="/public/images/logo.svg" alt="Logo Anete Neto" width="128" />

);


/* =========================
   DADOS
========================= */
const defaultSocial = {
  github: 'https://github.com/AneteNeto',
  linkedin: 'https://www.linkedin.com/in/anete-neto/',
  youtube: 'https://www.youtube.com/@aneteneto',
  email: 'mailto:anetebuconeto@gmail.com',
};

const baseProjects = [
  {
    id: 1,
    key: 'campus',
    tech: ['Cisco IOS', 'VLAN', 'OSPF', 'Packet Tracer'],
    screenshot: '/images/teste.jpeg',
    links: {
      github: 'https://github.com/aneteneto/campus-lan',
      youtube: 'https://youtu.be/XXXXXXXXXXX',
      linkedin: 'https://www.linkedin.com/posts/XXXXXXXXXXX',
      demo: '#',
      report: '/samples/campus-lan-report.pdf',
    },
  },
  {
    id: 2,
    key: 'vpn',
    tech: ['AWS', 'Terraform', 'BGP', 'Python'],
    screenshot: '/images/teste.jpeg',
    links: {
      github: 'https://github.com/aneteneto/cloud-vpn-hybrid',
      youtube: 'https://youtu.be/XXXXXXXXXXX',
      linkedin: 'https://www.linkedin.com/posts/XXXXXXXXXXX',
      demo: '#',
      report: '/samples/cloud-vpn-report.pdf',
    },
  },
  {
    id: 3,
    key: 'pfsense',
    tech: ['pfSense', 'Suricata', 'Scapy'],
    screenshot: '/images/teste.jpeg',
    links: {
      github: 'https://github.com/aneteneto/pfsense-ids-lab',
      youtube: 'https://youtu.be/XXXXXXXXXXX',
      linkedin: 'https://www.linkedin.com/posts/XXXXXXXXXXX',
      demo: '#',
      report: '/samples/pfsense-lab-report.pdf',
    },
  },
  {
    id: 4,
    key: 'pfsense',
    tech: ['pfSense', 'Suricata', 'Scapy'],
    screenshot: '/images/teste.jpeg',
    links: {
      github: 'https://github.com/aneteneto/pfsense-ids-lab',
      youtube: 'https://youtu.be/XXXXXXXXXXX',
      linkedin: 'https://www.linkedin.com/posts/XXXXXXXXXXX',
      demo: '#',
      report: '/samples/pfsense-lab-report.pdf',
    },
  },
  {
    id: 5,
    key: 'pfsense',
    tech: ['pfSense', 'Suricata', 'Scapy'],
    screenshot: '/images/teste.jpeg',
    links: {
      github: 'https://github.com/aneteneto/pfsense-ids-lab',
      youtube: 'https://youtu.be/XXXXXXXXXXX',
      linkedin: 'https://www.linkedin.com/posts/XXXXXXXXXXX',
      demo: '#',
      report: '/samples/pfsense-lab-report.pdf',
    },
  },
];

/* =========================
   TRADUÇÕES
========================= */
const t = {
  fr: {
    nav: { projects: 'Projets', skills: 'Compétences', about: 'À propos', contact: 'Contact', cv: 'Télécharger CV' },
    hero: {
      hi: 'Bonjour, je suis',
      role: 'Réseaux & Télécommunications',
      p1: "Je conçois des réseaux résilients et des solutions télécom élégantes. J’aime dessiner des LAN campus et de la connectivité cloud, automatiser avec Python, et explorer l’optimisation RF & wireless.",
      ctaProjects: 'Voir les projets',
      ctaContact: 'Me contacter',
      stack: 'Stack : Cisco · AWS · Python',
      certs: 'CCNA (en cours) · Net+',
     // who: 'Qui je suis',
      place: 'Étudiante en Réseaux & Télécommunications — orientée vers l’IoT, la cybersécurité et le cloud. Actuellement à la recherche d’un stage de 4 à 6 mois.',
      quick: 'Liens rapides pour découvrir mon travail et me contacter.',
    },
    sections: {
      selected: 'Projets sélectionnés',
      selectedDesc: 'Labs et projets concrets qui démontrent mes compétences.',
      skillsTitle: 'Compétences & Outils',
      skillsDesc: 'Un aperçu de mes points forts techniques.',
      aboutTitle: 'À propos de moi',
      aboutP: "J’aime transformer des problèmes réseau en solutions déterministes, documentées et élégantes — qu’il s’agisse d’un LAN de campus, d’une VPN cloud ou d’automations qui font gagner du temps.",
      aboutBtns: { resume: 'Télécharger le CV', reports: 'Rapports' },
      contactTitle: 'Me contacter',
      contactDesc: 'Intéressé·e pour collaborer ou recruter ? Laissez un message, je réponds rapidement.',
      contactForm: { name: 'Votre nom', email: 'Votre e-mail', subject: 'Objet', message: 'Message', send: 'Envoyer' },
      quickContact: 'Contact rapide',
      openTo: "Ouverte aux stages, part-time et projets collaboratifs.",
    },
    projects: {
      campus: {
        title: 'Conception LAN Campus (Cisco Packet Tracer)',
        desc: 'LAN résiliente avec STP, VLANs et OSPF. QoS voix, documentation et topologie commentée.'
      },
      vpn: {
        title: 'VPN Cloud & Connectivité Hybride (AWS)',
        desc: 'Site-to-Site VPN, Transit VPC et supervision BGP en Python. Terraform state et IaC modulaire.'
      },
      pfsense: {
        title: 'Lab Firewall pfSense & IDS',
        desc: 'pfSense en edge FW, NAT, port-forward. Suricata IDS et simulations Scapy + rapport.'
      },
      code: 'Code',
      video: 'Vidéo',
      post: 'Post',
      demo: 'Démo',
      report: 'Rapport',
    },
    footer: (y) => `© ${y} Anete Neto — Réseaux & Télécommunications`,
    langBtn: 'EN',
  },
  en: {
    nav: { projects: 'Projects', skills: 'Skills', about: 'About', contact: 'Contact', cv: 'Download CV' },
    hero: {
      hi: 'Hi, I’m',
      role: 'Network & Telecommunications',
      p1: 'I build resilient networks and elegant telecom solutions. I enjoy campus LAN design and cloud connectivity, automate with Python, and explore RF/wireless optimization.',
      ctaProjects: 'View Projects',
      ctaContact: 'Contact me',
      stack: 'Stack: Cisco · AWS · Python',
      certs: 'CCNA (in progress) · Net+',
     // who: 'Who I am',
      place: 'Graduating in Networks & Telecommunications engineering— interested in IoT systems, cybersecurity, and cloud infrastructures. Currently seeking a 4–6 month internship.',
      quick: 'Quick links to explore my work and get in touch.',
    },
    sections: {
      selected: 'Selected Projects',
      selectedDesc: 'Hands-on labs and projects that showcase my skills.',
      skillsTitle: 'Skills & Tools',
      skillsDesc: 'A snapshot of my technical strengths.',
      aboutTitle: 'About me',
      aboutP: 'I like turning network problems into deterministic, well-documented, beautiful solutions — from campus LANs to cloud VPNs and time-saving automations.',
      aboutBtns: { resume: 'Download CV', reports: 'Reports' },
      contactTitle: 'Get in touch',
      contactDesc: 'Interested in collaborating or hiring? Send a short message and I’ll reply soon.',
      contactForm: { name: 'Your name', email: 'Your email', subject: 'Subject', message: 'Message', send: 'Send' },
      quickContact: 'Quick Contact',
      openTo: 'Open to internships, part-time and collaborative projects.',
    },
    projects: {
      campus: {
        title: 'Campus LAN Design (Cisco Packet Tracer)',
        desc: 'Resilient campus LAN with STP, VLANs and OSPF. Voice QoS, documentation and annotated topology.'
      },
      vpn: {
        title: 'Cloud VPN & Hybrid Connectivity (AWS)',
        desc: 'Site-to-Site VPN, Transit VPC and BGP monitoring with Python. Terraform state and modular IaC.'
      },
      pfsense: {
        title: 'pfSense Firewall & IDS Lab',
        desc: 'pfSense as edge FW, NAT, port-forward. Suricata IDS and Scapy simulations + report.'
      },
      code: 'Code',
      video: 'Video',
      post: 'Post',
      demo: 'Demo',
      report: 'Report',
    },
    footer: (y) => `© ${y} Anete Neto — Networks & Telecommunications`,
    langBtn: 'FR',
  },
};

/* =========================
   HELPERS
========================= */
const SoftBadge = ({ children }) => (
  <span className="px-2 py-0.5 rounded-md text-xs bg-white/10 dark:bg-black/10 border border-white/10">
    {children}
  </span>
);

const IconLink = ({ href, label, children }) => (
  <a
    href={href}
    aria-label={label}
    target="_blank"
    rel="noreferrer noopener"
    className="inline-flex items-center gap-1.5 text-xs px-2.5 py-1.5 rounded-md border border-white/10 hover:border-white/20 hover:bg-white/5 transition"
  >
    {children}
  </a>
);

/* =========================
   COMPONENTE
========================= */
export default function PortfolioAneteI18n({ social = defaultSocial, defaultLang = 'fr' }) {
  const [theme, setTheme] = useState('dark'); // 'dark' | 'light'
  const [lang, setLang] = useState(defaultLang); // 'fr' | 'en'

  const tr = t[lang];

  const isDark = theme === 'dark';
  const bgGrad = isDark
  ? 'from-[#1B123F] via-[#1D1445] to-[#0E0A2A]'
  : 'from-[#F6F4FF] via-[#ECE9FF] to-[#E6E3FF]';

  const cardBg = isDark ? 'bg-white/5 ring-white/10' : 'bg-black/5 ring-black/10';
  const softText = isDark ? 'text-slate-300' : 'text-slate-700';

  // projects com títulos/descrições traduzidos
  const projects = baseProjects.map((p) => ({
    ...p,
    title: tr.projects[p.key].title,
    desc: tr.projects[p.key].desc,
  }));

  return (
    <div className={`min-h-screen ${isDark ? 'text-slate-100' : 'text-slate-900'} bg-gradient-to-b ${bgGrad}`}>
      {/* Header */}
      <header className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className={`w-12 h-12 rounded-xl flex items-center justify-center shadow-lg ${isDark ? 'bg-white/10' : 'bg-black/5'}`}>
            <LogoTech size={28} fg={isDark ? '#e6e6ff' : '#2b1b3a'} accent={palette.lilac} />  
          </div>
          <div>
            <h1 className="text-2xl font-semibold tracking-tight">Anete Neto</h1>
            <p className="text-sm">{tr.hero.role}</p>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          <a href="#projects" className="hover:underline">{tr.nav.projects}</a>
          <a href="#skills" className="hover:underline">{tr.nav.skills}</a>
          <a href="#about" className="hover:underline">{tr.nav.about}</a>
          <a href="#contact" className="hover:underline">{tr.nav.contact}</a>
          <a href="/CV/NetoAneteStage.pdf" className={`flex items-center gap-2 px-3 py-2 rounded-md ${isDark ? 'bg-white/10 hover:bg-white/15' : 'bg-black/5 hover:bg-black/10'}`}>
            <Download className="w-4 h-4" /> {tr.nav.cv}
          </a>

        </nav>

        {/* Controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setLang(lang === 'fr' ? 'en' : 'fr')}
            className={`px-3 py-1 rounded-md text-sm border inline-flex items-center gap-2 ${isDark ? 'border-white/10 hover:bg-white/10' : 'border-black/10 hover:bg-black/5'}`}
            aria-label="Toggle language"
            title="Toggle language"
          >
            <Globe className="w-4 h-4" /> {tr.langBtn}
          </button>
          <button
            onClick={() => setTheme(isDark ? 'light' : 'dark')}
            className={`px-3 py-1 rounded-md text-sm border ${isDark ? 'border-white/10 hover:bg-white/10' : 'border-black/10 hover:bg-black/5'}`}
            aria-label="Toggle theme"
          >
            {isDark ? 'Light' : 'Dark'}
          </button>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 pb-24">
        {/* Hero */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center py-10">
          <motion.div initial={{ x: -40, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.6 }}>
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
              {tr.hero.hi}{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#b48ead] via-[#a277ff] to-[#f0abfc]">
                Anete Neto
              </span>.
            </h2>
            <p className={`mt-4 ${softText}`}>
              {tr.hero.p1}
            </p>
            <div className="mt-6 flex gap-3">
              <a href="#projects" className="px-5 py-3 rounded-md bg-gradient-to-r from-[#b48ead] to-[#f0abfc] text-slate-900 font-medium">
                {tr.hero.ctaProjects}
              </a>
              <a href="#contact" className={`px-5 py-3 rounded-md border ${isDark ? 'border-white/15 text-slate-200' : 'border-black/15 text-slate-800'}`}>
                {tr.hero.ctaContact}
              </a>
            </div>
            <div className={`mt-6 text-sm flex items-center gap-4 ${softText}`}>
              <span className="inline-flex items-center gap-2"><Cpu className="w-4 h-4" /> {tr.hero.stack}</span>
              <span className="inline-flex items-center gap-2"><GitCommit className="w-4 h-4" /> {tr.hero.certs}</span>
            </div>
          </motion.div>

          {/* Quick card */}
         <motion.div
            initial={{ x: 40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div
              className={`rounded-2xl p-8 ring-1 ${cardBg} shadow-lg
              hover:ring-[#a277ff]/40 hover:shadow-[0_0_20px_rgba(162,119,255,0.15)] transition-all duration-500`}
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                {/* Texto à esquerda */}
                <div className="flex-1 space-y-3">
                  <p
                    className={`text-sm leading-relaxed ${
                      isDark ? 'text-slate-300' : 'text-slate-700'
                    }`}
                  >
                    {tr.hero.place}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {['Networking', 'Cloud', 'IoT', 'Python', 'Telecom'].map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1 rounded-full bg-gradient-to-r from-[#b48ead]/20 to-[#a277ff]/20 text-xs text-[#c8b3ff] border border-[#a277ff]/30 hover:from-[#b48ead]/30 hover:to-[#a277ff]/30 transition-all"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="mt-4 flex flex-wrap gap-3">
                    <IconLink href={social.github} label="GitHub">
                      <Github className="w-4 h-4" /> GitHub
                    </IconLink>
                    <IconLink href={social.linkedin} label="LinkedIn">
                      <Linkedin className="w-4 h-4" /> LinkedIn
                    </IconLink>
                    <IconLink href={social.email} label="Email">
                      <Mail className="w-4 h-4" /> Email
                    </IconLink>
                  </div>
                </div>

                {/* Foto à direita */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                  className="relative"
                >
                  <img
                    src="/images/ANETE.jpg"
                    alt="Anete Neto"
                    className="w-[110px] h-[110px] md:w-[130px] md:h-[130px] rounded-full object-cover ring-2 ring-[#a277ff]/60 shadow-[0_0_20px_rgba(162,119,255,0.25)] hover:ring-[#caa3ff] hover:shadow-[0_0_25px_rgba(202,163,255,0.35)] transition-all duration-500"
                  />
                  {/* Círculo de brilho subtil */}
                  <div className="absolute inset-0 rounded-full ring-4 ring-[#a277ff]/10 blur-2xl animate-pulse"></div>
                </motion.div>
              </div>
            </div>
          </motion.div>
          
        </section>


        {/* Skills */}
        <section id="skills" className="mt-16">
        <div className={`rounded-xl p-6 ring-1 ${cardBg}`}>
            <h4 className="font-semibold text-lg">Compétences Techniques</h4>
            <p className={`text-sm mt-1 ${softText}`}>
            Les domaines dans lesquels j’aime travailler et me perfectionner :
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-6">
            {[
                { icon: '🌐', title: 'Network Design', desc: 'LAN/WAN, VLANs, OSPF, VPNs' },
                { icon: '☁️', title: 'Cloud', desc: 'AWS, Terraform, BGP, IaC' },
                { icon: '🐍', title: 'Automatisation', desc: 'Python scripting, APIs REST' },
                { icon: '📡', title: 'IoT Systems', desc: 'ESP32, MQTT, sensors' },
                { icon: '🛡️', title: 'Sécurité', desc: 'pfSense, Suricata, firewalls' },
                { icon: '📊', title: 'Supervision', desc: 'Grafana, SNMP, documentation' },
            ].map((s) => (
                <div
                key={s.title}
                className="flex flex-col items-center justify-center p-4 rounded-xl bg-white/5 hover:bg-white/10 transition text-center"
                >
                <span className="text-3xl">{s.icon}</span>
                <h6 className="mt-2 font-medium text-sm">{s.title}</h6>
                <p className={`text-xs mt-1 ${softText}`}>{s.desc}</p>
                </div>
            ))}
            </div>
        </div>
        </section>

        {/* Projects */}
        <section id="projects" className="mt-4">
        <h3 className="text-2xl font-bold">{tr.sections.selected}</h3>
        <p className={`mt-1 ${softText}`}>{tr.sections.selectedDesc}</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            {projects.map((p) => (
            <motion.article
                key={p.id}
                whileHover={{ y: -6, scale: 1.01 }}
                transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                className={`rounded-2xl overflow-hidden ring-1 ${cardBg} shadow-lg hover:shadow-xl transition`}
            >
                {/* Imagem de topo */}
                {p.screenshot && (
                <div className="relative h-44 overflow-hidden">
                    <img
                    src={p.screenshot}
                    alt={p.title}
                    className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-2 right-2 flex gap-2">
                    {p.links.github && (
                        <a
                        href={p.links.github}
                        target="_blank"
                        rel="noreferrer"
                        className="bg-black/60 backdrop-blur-sm p-1.5 rounded-md hover:bg-black/80 transition"
                        aria-label="GitHub"
                        >
                        <Github className="w-4 h-4 text-white" />
                        </a>
                    )}
                    {p.links.youtube && (
                        <a
                        href={p.links.youtube}
                        target="_blank"
                        rel="noreferrer"
                        className="bg-black/60 backdrop-blur-sm p-1.5 rounded-md hover:bg-black/80 transition"
                        aria-label="Demo vídeo"
                        >
                        <Youtube className="w-4 h-4 text-white" />
                        </a>
                    )}
                    {p.links.demo && (
                        <a
                        href={p.links.demo}
                        target="_blank"
                        rel="noreferrer"
                        className="bg-black/60 backdrop-blur-sm p-1.5 rounded-md hover:bg-black/80 transition"
                        aria-label="Demo"
                        >
                        <ExternalLink className="w-4 h-4 text-white" />
                        </a>
                    )}
                    </div>
                </div>
                )}

                {/* Conteúdo */}
                <div className="p-5">
                <h4 className="text-lg font-semibold leading-snug">{p.title}</h4>
                <p className={`mt-2 text-sm ${softText}`}>{p.desc}</p>

                {/* Badges */}
                <div className="mt-3 flex flex-wrap gap-2">
                    {p.tech.map((t) => (
                    <SoftBadge key={t}>{t}</SoftBadge>
                    ))}
                </div>
                </div>
            </motion.article>
            ))}
        </div>
        </section>

        {/* Experience */}
        <section id="experience" className="mt-16">
        <h3 className="text-2xl font-bold">{lang === 'fr' ? 'Expérience Professionnelle' : 'Professional Experience'}</h3>
        <p className={`mt-1 ${softText}`}>
            {lang === 'fr'
            ? 'Mes stages et projets pratiques dans le domaine des réseaux et télécoms.'
            : 'My internships and hands-on projects in networking and telecommunications.'}
        </p>

        <div className="mt-6 space-y-6">
            {[
            {
                title: lang === 'fr'
                ? 'Stagiaire Réseaux & Télécommunications — UAN, Luanda'
                : 'Networks & Telecom Intern — UAN, Luanda',
                period: '2023 · 3 mois',
                tasks: lang === 'fr'
                ? [
                    'Assistance à la configuration de routeurs et commutateurs Cisco.',
                    'Participation à la mise en place de VLANs et l’analyse de trafic réseau.',
                    'Documentation des topologies et dépannage basique.',
                    ]
                : [
                    'Assisted in configuring Cisco routers and switches.',
                    'Helped set up VLANs and performed network traffic analysis.',
                    'Documented topologies and handled basic troubleshooting.',
                    ],
            },
            {
                title: lang === 'fr'
                ? 'Projet académique : Infrastructure LAN Campus simulée'
                : 'Academic project: Simulated Campus LAN Infrastructure',
                period: '2024',
                tasks: lang === 'fr'
                ? [
                    'Conception d’un réseau campus avec STP, VLAN et OSPF sur Packet Tracer.',
                    'Création de la documentation technique et du diagramme de topologie.',
                    ]
                : [
                    'Designed a campus network using STP, VLAN, and OSPF on Packet Tracer.',
                    'Produced full technical documentation and topology diagrams.',
                    ],
            },
            ].map((exp, i) => (
            <motion.div
                key={i}
                whileHover={{ scale: 1.02 }}
                className={`rounded-xl p-6 ring-1 ${cardBg} shadow-lg transition`}
            >
                <h4 className="font-semibold">{exp.title}</h4>
                <div className={`text-sm ${softText}`}>{exp.period}</div>
                <ul className={`mt-3 list-disc ml-6 text-sm ${softText}`}>
                {exp.tasks.map((t, idx) => (
                    <li key={idx}>{t}</li>
                ))}
                </ul>
            </motion.div>
            ))}
        </div>
        </section>

        {/* Certificats */}
        <section id="certificats" className="mt-16">
        <h3 className="text-2xl font-bold">{lang === 'fr' ? 'Certificats' : 'Certificates'}</h3>
        <p className={`mt-1 ${softText}`}>
            {lang === 'fr'
            ? 'Quelques certifications obtenues en ligne et en formation technique.'
            : 'Some of the certifications I’ve earned through online and technical training.'}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
            {[
            {
                id: 1,
                title: 'Introduction to Networks — Cisco NetAcad',
                image: '/certificats/teste.jpeg',
                link: 'https://www.netacad.com/',
            },
            {
                id: 2,
                title: 'Python for Everybody — Coursera',
                image: '/certificats/teste.jpeg',
                link: 'https://coursera.org/',
            },
            {
                id: 3,
                title: 'AWS Cloud Practitioner — AWS Academy',
                image: '/certificats/teste.jpeg',
                link: 'https://aws.amazon.com/training/',
            },
            {
                id: 4,
                title: 'Introduction to Networks — Cisco NetAcad',
                image: '/certificats/teste.jpeg',
                link: 'https://www.netacad.com/',
            },
            {
                id: 5,
                title: 'Python for Everybody — Coursera',
                image: '/certificats/teste.jpeg',
                link: 'https://coursera.org/',
            },
            {
                id: 6,
                title: 'AWS Cloud Practitioner — AWS Academy',
                image: '/certificats/teste.jpeg',
                link: 'https://aws.amazon.com/training/',
            },
            ].map((c) => (
            <div
                key={c.id}
                className="rounded-xl overflow-hidden ring-1 ring-white/10 hover:ring-white/20 transition group"
            >
                <img
                    src={c.image}
                    alt={c.title}
                    className="object-cover w-full h-48 group-hover:scale-105 transition-transform duration-500"
                />
                <div className="p-3 text-center">
                    <h4 className="text-sm font-medium">{c.title}</h4>
                    <a
                        href={c.link}
                        target="_blank"
                        rel="noreferrer"
                        className="text-xs text-[#a277ff] underline hover:text-[#f0abfc]"
                    >
                        {lang === 'fr' ? 'Voir le certificat' : 'View Certificate'}
                    </a>
                </div>
            </div>

            ))}
        </div>
        </section>
        
        {/* Tech Stack */}
        <section id="stack" className="mt-16">
        <h3 className="text-2xl font-bold">
            {lang === 'fr' ? 'Stack Technique' : 'Tech Stack'}
        </h3>
        <p className={`mt-1 ${softText}`}>
            {lang === 'fr'
            ? 'Les outils, langages et technologies que j’utilise régulièrement.'
            : 'The tools, languages and technologies I use most often.'}
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-8">
            {[
            { name: 'Cisco IOS', icon: '🌐' },
            { name: 'AWS Cloud', icon: '☁️' },
            { name: 'Python', icon: '🐍' },
            { name: 'Terraform', icon: '🧱' },
            { name: 'pfSense', icon: '🛡️' },
            { name: 'Linux', icon: '🐧' },
            { name: 'Wireshark', icon: '🔍' },
            { name: 'Git / GitHub', icon: '🌱' },
            { name: 'ESP32 / IoT', icon: '📡' },
            { name: 'MQTT', icon: '📶' },
            { name: 'Grafana', icon: '📊' },
            { name: 'VLAN / OSPF', icon: '🔗' },
            ].map((tech) => (
            <div
                key={tech.name}
                className="flex flex-col items-center justify-center p-4 rounded-xl bg-white/5 hover:bg-gradient-to-r hover:from-[#b48ead]/20 hover:to-[#a277ff]/20 ring-1 ring-white/10 hover:ring-[#a277ff]/40 transition text-center"
            >
                <div className="text-3xl">{tech.icon}</div>
                <div className="mt-2 text-sm font-medium">{tech.name}</div>
            </div>
            ))}
        </div>
        </section>

        {/* Contact */}
        <section id="contact" className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className={`md:col-span-2 rounded-xl p-6 ring-1 ${cardBg}`}>
            <h4 className="font-semibold">{tr.sections.contactTitle}</h4>
            <p className={`mt-1 ${softText}`}>{tr.sections.contactDesc}</p>

            <form
              className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4"
              onSubmit={(e) => {
                e.preventDefault();
                window.location.href = 'mailto:anetebuconeto@gmail.com?subject=Contact%20—%20Portfolio%20Anete%20Neto';
              }}
            >
              <input required className={`p-3 rounded-md ${isDark ? 'bg-white/5' : 'bg-black/5'}`} placeholder={tr.sections.contactForm.name} />
              <input required type="email" className={`p-3 rounded-md ${isDark ? 'bg-white/5' : 'bg-black/5'}`} placeholder={tr.sections.contactForm.email} />
              <input className={`p-3 rounded-md md:col-span-2 ${isDark ? 'bg-white/5' : 'bg-black/5'}`} placeholder={tr.sections.contactForm.subject} />
              <textarea required className={`p-3 rounded-md md:col-span-2 ${isDark ? 'bg-white/5' : 'bg-black/5'}`} rows={6} placeholder={tr.sections.contactForm.message} />

              <div className="md:col-span-2 flex items-center justify-between">
                <div className={`text-xs ${softText}`}>
                  {lang === 'fr' ? 'Ou e-mail direct :' : 'Or direct e-mail:'}{' '}
                  <a href="mailto:anetebuconeto@gmail.com" className="underline">anetebuconeto@gmail.com</a>
                </div>
                <button className="px-5 py-3 rounded-md bg-gradient-to-r from-[#b48ead] to-[#f0abfc] text-slate-900">
                  {tr.sections.contactForm.send}
                </button>
              </div>
            </form>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-16 border-t border-white/10 pt-8 pb-16 text-sm">
          <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <div>{(lang === 'fr' ? t.fr.footer : t.en.footer)(new Date().getFullYear())}</div>
            <div className="flex items-center gap-3">
              <a className="underline" href={social.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
              <a className="underline" href={social.github} target="_blank" rel="noreferrer">GitHub</a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
