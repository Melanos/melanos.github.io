import Image from 'next/image'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import logoProgressive from '@/images/logos/progressive-3.svg'
import logoPython from '@/images/logos/python.svg'
import logoAnsible from '@/images/logos/ansible.svg'
import logoSplunk from '@/images/logos/splunk.svg'
import logoCisco from '@/images/logos/cisco-2.svg'

const projects = [
  {
    name: 'AI-Powered Email Assistant',
    description:
      'Enterprise-scale AI agent built with Microsoft Copilot Studio and Power Automate that intelligently routes and responds to thousands of email requests. Achieves 94%+ accuracy in incident classification with human-in-the-loop workflow design, reducing response times by 50-60% and automating 60% of routine requests.',
    link: { href: '#', label: 'Progressive Insurance' },
    logo: logoProgressive,
  },
  {
    name: 'Network Access Control (NAC) Automation',
    description:
      'Python-based automation framework leveraging multithreading to deploy Network Access Control across 800+ switches and 34,800 ports. Estimated savings of 1,000+ engineering hours through intelligent automation, automated notifications to Microsoft Teams, and standardized configuration management.',
    link: { href: '#', label: 'Python + Ansible' },
    logo: logoPython,
  },
  {
    name: 'Self-Service ACL Playbook',
    description:
      'Ansible automation platform playbook enabling test servers to perform printer testing through self-service ACL updates. Features scheduling constraints for execution outside business hours, change request integration, and automated deployment via Ansible Automation Platform (AAP).',
    link: { href: '#', label: 'Ansible AAP' },
    logo: logoAnsible,
  },
  {
    name: 'AIOps Incident Classification System',
    description:
      'End-to-end AIOps solution integrating Splunk, Dynatrace, and Azure Monitor for AI-powered incident classification and response. Implements alert correlation, noise reduction, and telemetry analysis with predictive analytics to dramatically improve system reliability and operational performance.',
    link: { href: '#', label: 'Splunk + Dynatrace' },
    logo: logoSplunk,
  },
  {
    name: 'Automated Configuration Backup System',
    description:
      'Daily automated configuration backups for 800+ network devices with intelligent retention policies (15-day rolling window). Includes automated lab device configuration restoration using Ansible, ensuring no changes are made when configurations match golden standards.',
    link: { href: '#', label: 'Python + Ansible' },
    logo: logoCisco,
  },
]

function LinkIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  )
}

export const metadata = {
  title: 'Projects',
  description: 'Automation projects that have saved thousands of engineering hours and transformed enterprise IT operations.',
}

export default function Projects() {
  return (
    <SimpleLayout
      title="Automation projects that solve real enterprise problems."
      intro="Over the years, I've worked on numerous automation initiatives that have dramatically improved operational efficiency, reduced response times, and saved thousands of engineering hours. Here are some of the key projects I'm most proud of—each one solving real problems for Fortune 500 enterprise operations."
    >
      <ul
        role="list"
        className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
      >
        {projects.map((project) => (
          <Card as="li" key={project.name}>
            <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
              <Image
                src={project.logo}
                alt=""
                className="h-8 w-8"
                unoptimized
              />
            </div>
            <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
              <Card.Link href={project.link.href}>{project.name}</Card.Link>
            </h2>
            <Card.Description>{project.description}</Card.Description>
            <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
              <LinkIcon className="h-6 w-6 flex-none" />
              <span className="ml-2">{project.link.label}</span>
            </p>
          </Card>
        ))}
      </ul>
    </SimpleLayout>
  )
}
