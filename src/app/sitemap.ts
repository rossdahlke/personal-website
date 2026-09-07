import fs from 'fs'
import path from 'path'
import type { MetadataRoute } from 'next'
import { courseData } from '@/data/courses'
import { pastTalks, upcomingTalks } from '@/data/lab'

const siteUrl = 'https://rossdahlke.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  const pages = [
    '',
    '/cv',
    '/research',
    '/teaching',
    '/media',
    '/resources',
    '/code-lab',
  ].map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified,
  }))

  const courses = Object.keys(courseData).map((slug) => ({
    url: `${siteUrl}/teaching/${slug}`,
    lastModified,
  }))

  const talks = [...upcomingTalks, ...pastTalks].map((talk) => ({
    url: `${siteUrl}/code-lab/talks/${talk.slug}`,
    lastModified,
  }))

  const resourceDir = path.join(process.cwd(), 'content/resources')
  const resources = fs
    .readdirSync(resourceDir)
    .filter((filename) => filename.endsWith('.md'))
    .map((filename) => ({
      url: `${siteUrl}/resources/${filename.replace(/\.md$/, '')}`,
      lastModified,
    }))

  return [...pages, ...courses, ...talks, ...resources]
}
