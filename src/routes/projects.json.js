import projects from '../data/trabajos.json'

export async function get({ params }) {
  return {
    status: 200,
    body: {
      data: projects
    }
  }
}