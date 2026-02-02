import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ConferenceSection({ children, ...props }) {
  return (
    <Section {...props}>
      <div className="space-y-16">{children}</div>
    </Section>
  )
}

function Conference({ conference }) {
  return (
    <Card as="article">
      <Card.Title as="h3" href={conference.link}>
        {conference.name}
      </Card.Title>
      <Card.Eyebrow decorate>{conference.date}</Card.Eyebrow>
      <Card.Description>{conference.description}</Card.Description>
      {conference.talk && (
        <p className="relative z-10 mt-2 text-sm font-medium text-teal-500">
          Talk: {conference.talk}
        </p>
      )}
      {conference.role && (
        <p className="relative z-10 mt-2 text-sm font-medium text-zinc-600 dark:text-zinc-400">
          {conference.role}
        </p>
      )}
    </Card>
  )
}

export const metadata = {
  title: 'Conferences',
  description:
    'Conferences, events, and speaking engagements focused on AI automation, DevOps, and enterprise technology.',
}

export default function Conferences() {
  const attendedConferences = [
    {
      name: 'Microsoft Ignite 2025',
      date: 'November 2025',
      description:
        'Attended sessions on Microsoft Copilot Studio, Power Automate enterprise features, and Azure AI services. Networked with enterprise automation professionals and explored latest developments in AI-powered workflow automation.',
      link: 'https://ignite.microsoft.com/',
      role: 'Attendee',
    },
    {
      name: 'PyCon US 2025',
      date: 'May 2025',
      description:
        'Participated in workshops on Python automation frameworks, enterprise integration patterns, and AI/ML model deployment. Connected with the Python community to discuss automation best practices.',
      link: 'https://us.pycon.org/',
      role: 'Attendee',
    },
    {
      name: 'AnsibleFest 2024',
      date: 'October 2024',
      description:
        'Deep dive into Ansible automation platform, network automation, and infrastructure as code. Learned advanced techniques for enterprise-scale automation deployments.',
      link: 'https://www.ansible.com/ansiblefest',
      role: 'Attendee',
    },
  ]

  const upcomingConferences = [
    {
      name: 'AWS re:Invent 2026',
      date: 'November 2026',
      description:
        'Planning to attend sessions on AWS AI services, serverless automation, and cloud infrastructure optimization. Interested in exploring AWS integration with enterprise automation workflows.',
      link: 'https://reinvent.awsevents.com/',
      role: 'Planning to Attend',
    },
    {
      name: 'DevOps Enterprise Summit 2026',
      date: 'October 2026',
      description:
        'Looking forward to learning about enterprise DevOps transformations, AIOps implementations, and organizational change management in large-scale automation projects.',
      link: 'https://events.itrevolution.com/',
      role: 'Planning to Attend',
    },
    {
      name: 'Microsoft Build 2026',
      date: 'May 2026',
      description:
        'Excited to explore the latest Microsoft developer tools, Azure AI updates, and enterprise automation platform enhancements. Planning to network with other Power Platform professionals.',
      link: 'https://build.microsoft.com/',
      role: 'Planning to Attend',
    },
  ]

  return (
    <SimpleLayout
      title="Conferences & Speaking Engagements"
      intro="I believe in continuous learning and knowledge sharing. Here are the conferences I've attended and those I'm planning to participate in, focusing on AI automation, DevOps, and enterprise technology."
    >
      <div className="space-y-20">
        <ConferenceSection title="Upcoming Conferences">
          {upcomingConferences.map((conference) => (
            <Conference key={conference.name} conference={conference} />
          ))}
        </ConferenceSection>
        <ConferenceSection title="Past Conferences">
          {attendedConferences.map((conference) => (
            <Conference key={conference.name} conference={conference} />
          ))}
        </ConferenceSection>
      </div>
    </SimpleLayout>
  )
}
