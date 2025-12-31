import { client } from './sanity'
import { urlFor } from './sanity'

export interface Agent {
  _id: string
  name: string
  title?: string
  realEstateLicense: string
  phone: string
  email: string
  bio?: string
  slug: {
    current: string
  }
  image?: {
    asset: {
      _ref: string
      _type: string
    }
    alt?: string
  }
}

// Fetch all agents from Sanity
export async function getAllAgents(): Promise<Agent[]> {
  const query = `*[_type == "agent"] | order(name asc){
    _id,
    name,
    title,
    realEstateLicense,
    phone,
    email,
    bio,
    slug,
    image {
      asset {
        _ref,
        _type
      },
      alt
    }
  }`
  
  try {
    return await client.fetch(query)
  } catch (error) {
    console.error('Error fetching agents:', error)
    return []
  }
}

// Fetch single agent by slug
export async function getAgentBySlug(slug: string): Promise<Agent | null> {
  const query = `*[_type == "agent" && slug.current == $slug][0]{
    _id,
    name,
    title,
    realEstateLicense,
    phone,
    email,
    bio,
    slug,
    image {
      asset {
        _ref,
        _type
      },
      alt
    }
  }`
  
  try {
    return await client.fetch(query, { slug })
  } catch (error) {
    console.error('Error fetching agent:', error)
    return null
  }
}

// Get agent image URL
export function getAgentImageUrl(agent: Agent): string | null {
  if (!agent.image?.asset) return null
  return urlFor(agent.image).url() || null
}



