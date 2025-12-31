/**
 * Script to update author names in Sanity CMS
 * 
 * Updates:
 * - arohm@dmrmedia.org -> Chris De
 * - team@dmrmedia.org -> Chris De
 * - jade@legendaryrealestateservices.com -> Jade
 * 
 * Usage:
 *   npx tsx scripts/update-author-names.ts
 * 
 * Requires SANITY_API_TOKEN environment variable with write permissions
 * (set in .env.local file)
 */

import dotenv from 'dotenv';
import { resolve } from 'path';

// Load environment variables from .env.local
dotenv.config({ path: resolve(process.cwd(), '.env.local') });

import { createClient } from '@sanity/client';

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'asgbwpeo',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
});

// Author email to name mappings
const authorMappings: Record<string, string> = {
  'arohm@dmrmedia.org': 'Chris De',
  'team@dmrmedia.org': 'Chris De',
  'jade@legendaryrealestateservices.com': 'Jade',
};

async function updateAuthorNames() {
  console.log('Starting author name updates...\n');

  if (!process.env.SANITY_API_TOKEN) {
    console.error('ERROR: SANITY_API_TOKEN environment variable is required');
    console.error('Please set it with write permissions before running this script.');
    process.exit(1);
  }

  try {
    // Fetch all agents
    const agents = await client.fetch(`
      *[_type == "agent"] {
        _id,
        name,
        email
      }
    `);

    console.log(`Found ${agents.length} agents in Sanity\n`);

    let updatedCount = 0;
    let skippedCount = 0;

    for (const agent of agents) {
      // Check both email field and name field (some agents have email as name)
      const agentEmail = agent.email || '';
      const agentName = agent.name || '';
      
      // Try to find mapping by email first, then by name if name looks like an email
      let newName = authorMappings[agentEmail.toLowerCase()];
      if (!newName && agentName.includes('@')) {
        // Name field contains an email address
        newName = authorMappings[agentName.toLowerCase()];
      }
      
      if (newName && agentName !== newName) {
        const identifier = agentEmail || agentName;
        console.log(`Updating agent: ${identifier}`);
        console.log(`  Current name: ${agentName}`);
        console.log(`  New name: ${newName}`);

        try {
          await client
            .patch(agent._id)
            .set({ name: newName })
            .commit();

          console.log(`  ✓ Successfully updated\n`);
          updatedCount++;
        } catch (error) {
          console.error(`  ✗ Error updating: ${error}\n`);
        }
      } else if (newName && agentName === newName) {
        const identifier = agentEmail || agentName;
        console.log(`Skipping ${identifier} - already has correct name: ${agentName}\n`);
        skippedCount++;
      } else {
        const identifier = agentEmail || agentName || 'unknown';
        console.log(`Skipping ${identifier} - no mapping found (current name: ${agentName})\n`);
        skippedCount++;
      }
    }

    console.log('\n=== Summary ===');
    console.log(`Updated: ${updatedCount}`);
    console.log(`Skipped: ${skippedCount}`);
    console.log(`Total agents: ${agents.length}`);

    if (updatedCount > 0) {
      console.log('\n✓ Author name updates completed successfully!');
    } else {
      console.log('\nNo updates were needed.');
    }
  } catch (error) {
    console.error('Error fetching or updating agents:', error);
    process.exit(1);
  }
}

// Run the script
updateAuthorNames()
  .then(() => {
    console.log('\nScript completed.');
    process.exit(0);
  })
  .catch((error) => {
    console.error('Script failed:', error);
    process.exit(1);
  });

