'use client';

import Image from 'next/image';

// const handleDownload = () => {
//   const fileUrl = 'https://drive.google.com/file/d/1ZYtLTrQDMOaeEjVlm3yFB1JtBTlPhDoM/view?usp=sharing';

//   // Create a temporary anchor element
//   const anchorElement = document.createElement('a');
//   anchorElement.href = fileUrl;
//   anchorElement.download = 'downloaded-file.pdf'; // Specify the filename
//   anchorElement.style.display = 'none';

//   // Append the anchor element to the body
//   document.body.appendChild(anchorElement);

//   // Trigger a click event on the anchor element
//   anchorElement.click();

//   // Remove the anchor element from the body
//   document.body.removeChild(anchorElement);
// };


import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail, Sparkles, Code2, Layers3, Rocket } from 'lucide-react';

export default function Home() {
  const projects = [
    {
      title: 'Guess the Song',
      tag: 'Featured Project',
      desc: 'A multiplayer music game where players join rooms, listen to short clips, and compete in real time with live scoring.',
      stack: 'React Native · Node.js · WebSocket · MongoDB',
      repo: 'https://github.com/Basu30/guess-the-song',
      demo: "/demo/guessSong.mp4",
      screenShots: [
        "/screenShots/guessTheSong.png", 
        "/screenShots/GuessTheSong-1.png", 
        "/screenShots/GuessTheSong-3.png", 
        "/screenShots/GuessTheSong-2.png",  
      ]
    },
    {
      title: "BasuNews",
      tag: "Web App", 
      desc: "React web application that fetches and displays news articles using the NewsAPI service.",
      stack: "React · REST API",
      repo: 'https://github.com/Basu30/project-news',
      demo: "https://project-basunews.vercel.app/",
      screenShots: [
        "/screenShots/basuNews.png", 
      ]
    },
    {
      title: 'WorkNet Platform',
      tag: 'Full-Stack Platform',
      desc: "Full-stack company platform where organizations publish news, announcements, and posts while employees interact through likes and content sharing.",
      stack: 'React · Node.js · PostgreSQL · REST API',
      repo: "https://github.com/Basu30/worknet-frontend",
      demo: "https://worknet-frontend.vercel.app/",
      screenShots: [
        "/screenShots/workNet.png"
      ]
    },
    {
      title: 'University CMS',
      tag: 'Admin System',
      desc: "Multilingual university website with an admin content management system for managing pages, news, and structured content.",
      stack: 'Next.js · Node.js · PostgreSQL · Tailwind',
      repo: 'https://github.com/Basu30/MBUniversity',
      demo: "https://zbum-frontend.vercel.app/",
      screenShots: [
        "/screenShots/ZBUM.png"
      ]
    },
    
    {
      title: "SSWD Quoting WebApp",
      tag: "Capstone Project",
      desc: "Role-based quoting and ordering web application developed as a capstone project for Southern Shade Windows and Doors.",
      stack: "React · Node.js · MongoDB",
      repo: "https://github.com/Basu30/quoting-app",
      demo: "https://quoting-app-ten.vercel.app/",
      screenShots: [
        "/screenShots/capstone.png"
      ]
    },
  ];

  const learning = [
    {
      title: "AWS Certification",
      tag: "Professional Development",
      desc: "Studying for the AWS Certified Solutions Architect - Associate certification to strength cloud architecture skills.",
      stack: "",
    },
    {
      title: "Python Development",
      tag: "Expanding Expertise",
      desc: "Expanding backend development skills using Python for machine learning, automation and backend systems."
    },
    {
      title: "Guess the Song",
      tag: "In Development",
      desc: "Developing a multiplayer music guessing mobile game using React Native, Node.js, and WebSockets."
    }
  ]

  const skills = [
    'JavaScript',
    'TypeScript',
    'React',
    'Next.js',
    'React Native',
    'Node.js',
    'PostgreSQL',
    'MongoDB',
    'Render',
    'Vercel',
    'Supabase',
    'AWS (Learning)',
    'Tailwind CSS',
    'Playwright',
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.12),transparent_55%),radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.14),transparent_22%),linear-gradient(180deg,#020617_0%,#0f172a_45%,#111827_100%)] text-white">
      <div className="pointer-events-none absolute inset-12.5">
        <div className="absolute left-[-8rem] top-[-6rem] h-80 w-80 rounded-full bg-cyan-400/15 blur-3xl" />
        <div className="absolute right-[-6rem] top-20 h-96 w-96 rounded-full bg-fuchsia-500/10 blur-3xl" />
        <div className="absolute bottom-[-8rem] left-1/3 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:72px_72px] opacity-20" />
      </div>

      <main className="relative z-10 mx-auto max-w-7xl px-6 py-8 md:px-10 lg:px-12">
        <motion.header
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.5 }}
          className="mb-12 flex items-center justify-between rounded-full border border-white/10 bg-white/5 px-5 py-3 shadow-2xl shadow-cyan-500/5 backdrop-blur-xl"
        >
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-500 text-sm font-bold text-slate-950 shadow-lg shadow-cyan-500/25">
              B
            </div>
            <div>
              <p className="text-sm font-semibold tracking-wide">Basu</p>
              <p className="text-xs text-white/50">Software Developer</p>
            </div>
          </div>

          <nav className="hidden gap-7 text-sm text-white/70 md:flex">
            <a href="#projects" className="transition hover:text-white">Projects</a>
            <a href="#skills" className="transition hover:text-white">Stack</a>
            <a href="#about" className="transition hover:text-white">About</a>
            <a href="#current" className="transition hover:text-white">Focusing</a>
            <a href="#contact" className="transition hover:text-white">Contact</a>
          </nav>

          <a
            href="#contact"
            className="rounded-full border border-cyan-300/20 bg-gradient-to-r from-cyan-400 to-blue-500 px-5 py-2 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/25 transition hover:scale-105"
          >
            Let’s Talk
          </a>
        </motion.header>

        <section className="grid gap-12 py-10 lg:grid-cols-[1.08fr_0.92fr] lg:py-[60px] xl:mt-20">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.55, delay: 0.05 }}
          >
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-400/10 xl:px-4 px-1 xl:py-1.5 py-1 text-sm text-cyan-200 backdrop-blur-md">
              <Sparkles className="h-4 w-4" />
              Building real-world web and mobile applications
            </div>

            <h1 className="max-w-4xl text-5xl font-black leading-[1.02] tracking-tight md:text-7xl xl:text-[5.5rem]">
              Full-Stack 
              <span className="block bg-gradient-to-r from-cyan-300 via-blue-400 to-fuchsia-400 bg-clip-text text-transparent">
                {/* Building modern web and mobile application */}Software Developer
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-white/70 md:text-lg">
            I’m Batsuren Damdinsuren (Basu), a Calgary-based software developer specializing in full-stack web and mobile development using React, Node.js, and modern cloud technologies. I enjoy building real-world applications including content platforms, admin systems, and interactive products.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-2xl bg-white px-6 py-3 font-semibold text-slate-950 shadow-xl shadow-white/10 transition hover:-translate-y-0.5"
              >
                View Projects
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </a>
              <a
                href="#contact"
                className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 font-semibold text-white backdrop-blur-md transition hover:bg-white/10"
              >
                Contact Me
              </a>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {[
                [`${projects.length}+`, 'Projects'],
                [`${skills.length}+`, 'Core Technologies'],
                ['1 Goal', 'Build useful software'],
              ].map(([value, label], i) => (
                <motion.div
                  key={label}
                  initial="hidden"
                  animate="visible"
                  variants={fadeUp}
                  transition={{ duration: 0.45, delay: 0.15 + i * 0.08 }}
                  className="rounded-3xl border border-white/10 bg-white/[0.06] p-5 shadow-xl shadow-black/10 backdrop-blur-xl"
                >
                  <div className="text-2xl font-bold text-white">{value}</div>
                  <div className="mt-1 text-sm text-white/55">{label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="relative"
          >
            <div className="absolute -left-4 top-12 h-28 w-28 rounded-full bg-cyan-400/20 blur-3xl" />
            <div className="absolute -right-6 bottom-8 h-32 w-32 rounded-full bg-fuchsia-500/20 blur-3xl" />

            <div className="rounded-[2rem] border border-white/10 bg-white/[0.07] p-5 shadow-2xl shadow-cyan-500/10 backdrop-blur-2xl">
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <p className="text-sm text-white/45">Live Preview</p>
                  <h2 className="text-xl font-semibold">Featured Showcase</h2>
                </div>
                <div className="flex gap-2">
                  <span className="h-3 w-3 rounded-full bg-rose-400" />
                  <span className="h-3 w-3 rounded-full bg-amber-300" />
                  <span className="h-3 w-3 rounded-full bg-emerald-400" />
                </div>
              </div>

              <div className="space-y-4">
                {projects.slice(0, 3).map((project, idx) => (
                  <motion.div
                    key={project.title}
                    whileHover={{ y: -4, scale: 1.01 }}
                    className="group rounded-[1.6rem] border border-white/10 bg-slate-950/50 p-5 transition duration-300 hover:border-cyan-300/30 hover:shadow-xl hover:shadow-cyan-500/10"
                  >
                    <div className="mb-4 flex items-start justify-between gap-4">
                      <div>
                        <p className="text-sm text-cyan-300">0{idx + 1}</p>
                        <h3 className="text-xl font-semibold">{project.title}</h3>
                        <p className="mt-1 text-xs uppercase tracking-[0.2em] text-white/45">{project.tag}</p>
                      </div>
                      <div className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/60">
                        Case Study
                      </div>
                    </div>

                    <div className="mb-4 flex h-32 items-en rounded-[1.4rem] border border-white/5 bg-gradient-to-br from-cyan-500/10 via-slate-900 to-fuchsia-500/10 p-4">
                      <div className='flex flex-row w-full justify-evenly '>
                
                        {project.screenShots.map((s, i) => ( 
                            <Image
                              key={i}
                              src={s}
                              alt={project.title}
                              width={50}
                              height={80}
                              className='object-cover h-24 w-max rounded-lg bg-white/10'
                          />
                        ))}
                      </div>
                    </div>

                    <p className="text-sm leading-6 text-white/65">{project.desc}</p>
                    <p className="mt-4 text-xs text-cyan-200/80">{project.stack}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </section>

        <motion.section
          id="about"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          transition={{ duration: 0.55 }}
          className="grid gap-6 py-8 lg:grid-cols-3"
        >
          {[
            {
              icon: <Code2 className="h-5 w-5" />,
              title: 'Full-Stack Development',
              text: 'Building complete applications from frontend UI to backend APIs, databases, and deployment.',
            },
            {
              icon: <Layers3 className="h-5 w-5" />,
              title: 'Real-World Applications',
              text: 'Experience building company platforms, CMS systems, and interactive applications used in real environments.',
            },
            {
              icon: <Rocket className="h-5 w-5" />,
              title: 'Continuous Learning',
              text: 'Always improving skills in cloud computing, software architecture, and modern development tools.',
            },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="rounded-[1.8rem] border border-white/10 bg-white/[0.06] p-6 shadow-xl shadow-black/10 backdrop-blur-xl"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400/25 to-blue-500/25 text-cyan-200">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="mt-3 leading-7 text-white/65">{item.text}</p>
            </motion.div>
          ))}
        </motion.section>


    {/* PROJECTS */}
        <section id="projects" className="py-14 md:py-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            transition={{ duration: 0.55 }}
            className="mb-8 flex items-end justify-between gap-4"
          >
            <div>
              <p className="text-sm uppercase tracking-[0.28em] text-cyan-300/80">Selected Projects</p>
              <h2 className="mt-2 text-3xl font-bold md:text-5xl">My Work</h2>
            </div>
          </motion.div>

          <div className="grid gap-6 lg:grid-cols-3">
            {projects.map((project, i) => (
              <motion.article
                key={project.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
                variants={fadeUp}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                whileHover={{ y: -6 }}
                className="group rounded-[2rem] border border-white/10 bg-white/[0.06] p-5 shadow-2xl shadow-black/10 backdrop-blur-xl"
              >
                <div className="relative mb-5 h-52 overflow-hidden rounded-[1.5rem] border border-white/10 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.18),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.16),transparent_35%)]" />
                  <div className="flex items-center justify-center absolute inset-2 gap-2 opacity-90">
                    <div className='relative w-full h-40'>
                      {project.screenShots.slice(0, 4).map((s, i) => ( 
                        <Image
                          key={i}
                          src={s}
                          alt={project.title}
                          // width={160}
                          // height={80}
                          fill
                          className='rounded-xl object-contain '
                        />
                      ))}
                    </div>                    
                  </div>
                </div>

                <div className="mb-3 flex items-center justify-between gap-3">
                  <h3 className="text-2xl font-semibold">{project.title}</h3>
                  <span className="rounded-full border border-cyan-300/20 bg-cyan-400/10 px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-cyan-200">
                    {project.tag}
                  </span>
                </div>
                <p className="mb-4 text-sm leading-6 text-white/65">{project.desc}</p>
                <p className="text-xs text-cyan-200/80">{project.stack}</p>

                <div className="mt-6 flex gap-3">
                  <a href={project.demo} target='_blank' rel='noopener noreferrer'>
                    <button className="rounded-xl bg-white px-4 py-2 text-sm font-medium text-slate-950 transition hover:scale-105">             
                      Live Demo
                    </button>
                  </a>
                  <a href={project.repo} target='_blank' rel='noopener noreferrer'>
                    <button className="rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/10">              
                      GitHub  
                    </button>
                  </a>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <motion.section
          id="skills"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          transition={{ duration: 0.55 }}
          className="grid gap-6 py-10 lg:grid-cols-[0.9fr_1.1fr]"
        >
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-6 shadow-xl shadow-black/10 backdrop-blur-xl">
            <p className="text-sm uppercase tracking-[0.28em] text-fuchsia-300/75">About me</p>
            <h2 className="mt-2 text-3xl font-bold">Building useful software</h2>
            <p className="mt-5 leading-8 text-white/68">
              I enjoy building full-stack web and mobile applications that solve real problems. My work focuses on modern UI, backend systems, content platforms, and interactive user experiences.
            </p>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-6 shadow-xl shadow-black/10 backdrop-blur-xl">
            <div className="mb-5 flex items-center justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.28em] text-cyan-300/80">Tech Stack</p>
                <h2 className="mt-2 text-3xl font-bold">Core Tools</h2>
              </div>
              <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/55">Modern UI</div>
            </div>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-2xl border border-white/10 bg-slate-950/40 px-4 py-2 text-sm text-white/80 transition hover:border-cyan-300/30 hover:bg-white/10"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </motion.section>

        <section id="current" className="py-14 md:py-20">
          <div className="max-w-7xl mx-auto px-6">
           
            <div className="mb-10">
              <p className="text-sm uppercase tracking-[0.28em] text-cyan-300/80">
                Current Focus
              </p>

              <h2 className="mt-2 text-3xl font-bold md:text-5xl">
                What I'm Working On
              </h2>

              <p className="mt-4 max-w-2xl text-white/70">
                I continuously improve my skills by building real applications and studying modern software technologies.
              </p>
            </div>
            
           
              <div className="grid gap-6 md:grid-cols-3">
                {learning.map((learn, i) => (
                  <div key={i} className="rounded-[1.8rem] border border-white/10 bg-white/[0.06] p-6 shadow-xl shadow-black/10 backdrop-blur-xl">

                    <h3 className="text-xl font-semibold mb-3">
                      {learn.title}
                    </h3>

                    <p className="text-white/65 leading-7">
                      {learn.desc}
                    </p>

                    <p className="text-xs text-cyan-300 mt-4">
                      {learn.tag}
                    </p>

                  </div>
                ))}
              </div>
         
            

          </div>
        </section>



        <motion.section
          id="contact"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          transition={{ duration: 0.55 }}
          className="py-14 md:py-20"
        >
          <div className="relative overflow-hidden rounded-[2.2rem] border border-cyan-300/15 bg-[linear-gradient(135deg,rgba(255,255,255,0.08),rgba(255,255,255,0.04))] p-8 shadow-2xl shadow-cyan-500/10 backdrop-blur-2xl md:p-12">
            <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full bg-cyan-400/15 blur-3xl" />
            <div className="absolute -bottom-10 -left-10 h-36 w-36 rounded-full bg-fuchsia-500/15 blur-3xl" />

            <div className="relative z-10 text-center">
              <p className="text-sm uppercase tracking-[0.28em] text-cyan-200/80">Contact</p>
              <h2 className="mt-3 text-3xl font-bold md:text-5xl">Let’s build something meaningful</h2>
              <p className="mx-auto mt-4 max-w-2xl leading-7 text-white/68">
               If you’re interested in working together or discussing opportunities, feel free to reach out.
              </p>

              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <a href="mailto:Batsurenb30@gmail.com" target="_blank" rel="noopener noreferrer"  className="inline-flex items-center gap-2 rounded-2xl bg-white px-6 py-3 font-semibold text-slate-950 transition hover:scale-105">
                  <Mail className="h-4 w-4" />
                  Email
                </a>
                <a href="https://github.com/Basu30" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-6 py-3 font-semibold text-white transition hover:bg-white/10">
                  <Github className="h-4 w-4" />
                  GitHub
                </a>
                <a href="https://www.linkedin.com/in/batsuren-d-94837222a/" target="_blank" rel="noopener noreferrer"  className="inline-flex items-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-6 py-3 font-semibold text-white transition hover:bg-white/10">
                  <Linkedin className="h-4 w-4" />
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </motion.section>
      </main>
    </div>
  );
}
