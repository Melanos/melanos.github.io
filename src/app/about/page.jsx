import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  LinkedInIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/photos/image-3.jpg'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export const metadata = {
  title: 'About',
  description:
    "I'm Igor Matsenko. I live in Ohio, where I build intelligent automation solutions for enterprise operations.",
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
            {/* TODO: Replace src/images/avatar.jpg with your professional photo */}
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            I'm Igor Matsenko. I live in Ohio, where I build intelligent automation solutions for enterprise operations.
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              My journey in IT started over 11 years ago, and it's been a fascinating evolution from 
              hands-on network infrastructure work to leading AI-driven automation initiatives at one 
              of the largest insurance companies in the United States.
            </p>
            <p>
              For years, I worked as a network engineer throughout Northeast Ohio, doing everything from 
              rack and stack installations to complex Cisco switching and routing configurations. I spent 
              countless hours in data centers, managing cable runs, configuring firewalls, and ensuring 
              24/7 uptime for critical business operations. That hands-on experience taught me the 
              importance of reliability, documentation, and thinking three steps ahead.
            </p>
            <p>
              But I've always been driven by a simple principle: <strong>resourcefulness</strong>. If there's 
              a problem, I'll find a solution—whether that means learning a new technology, writing a custom 
              script, or completely reimagining how we approach a challenge. That mindset led me from physical 
              infrastructure into the world of automation.
            </p>
            <p>
              Today, I specialize in AI-driven automation and AIOps. At Progressive Insurance, I've developed 
              AI-powered email assistants using Microsoft Copilot Studio and Power Automate that handle thousands 
              of requests with 94% accuracy. I've built Python and Ansible automation frameworks that saved over 
              1,000 engineering hours by automating Network Access Control deployment across 34,800 ports. I've 
              architected AIOps solutions integrating Splunk and Dynatrace that reduce incident response times 
              by 50-60%.
            </p>
            <p>
              The transition from network engineering to AI automation wasn't a pivot—it was a natural progression. 
              Understanding the infrastructure layer deeply allows me to build automation that actually works in 
              production environments. I know what keeps engineers up at night, because I've been that engineer.
            </p>
            <p>
              I'm passionate about sharing knowledge and helping teams embrace automation. I've conducted advanced 
              Python and Ansible workshops, mentored junior engineers, and built self-service automation portals 
              that empower operations teams to solve problems independently.
            </p>
            <p>
              When I'm not automating enterprise workflows or architecting AIOps solutions, you'll find me exploring 
              new AI technologies, contributing to open-source projects, or writing about automation best practices.
            </p>
            <p>
              I'm currently open for consulting opportunities and always interested in discussing new challenges 
              in AI automation, AIOps, and enterprise workflow optimization. If you're looking to transform your 
              IT operations with intelligent automation, let's talk.
            </p>
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            <SocialLink href="https://github.com/Melanos" icon={GitHubIcon}>
              Follow on GitHub
            </SocialLink>
            <SocialLink href="https://linkedin.com/in/igor-m-20b625102" icon={LinkedInIcon} className="mt-4">
              Follow on LinkedIn
            </SocialLink>
            <SocialLink
              href="mailto:igor@im-ai.tech"
              icon={MailIcon}
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
            >
              igor@im-ai.tech
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  )
}
