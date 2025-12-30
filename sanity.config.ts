import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './sanity/schemas'

export default defineConfig({
  name: 'default',
  title: 'Legendary Real Estate Services',

  projectId: 'asgbwpeo',
  dataset: 'production',
  
  apiVersion: '2024-01-01',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})

