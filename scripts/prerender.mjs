import Prerenderer from '@prerenderer/prerenderer';
import PuppeteerRenderer from '@prerenderer/renderer-puppeteer';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// All routes to prerender
const routes = [
  '/',
  '/platforms',
  '/platforms/finlink',
  '/platforms/coursify',
  '/platforms/Qualvo',
  '/platforms/facentra',
  '/services',
  '/services/fullstack-development',
  '/services/ai-genai',
  '/services/data-cloud',
  '/services/infra-security',
  '/services/elearning',
  '/services/lowcode-nocode',
  '/services/workplace-transformation',
  '/services/staff-augmentation',
  '/solutions',
  '/about',
  '/privacy-policy',
  '/terms-of-service',
  '/contact',
];

async function prerender() {
  const staticDir = path.join(__dirname, '..', 'dist');

  console.log('Starting prerender...');
  console.log(`Static directory: ${staticDir}`);
  console.log(`Routes to prerender: ${routes.length}`);

  const prerenderer = new Prerenderer({
    staticDir,
    renderer: new PuppeteerRenderer({
      headless: true,
      renderAfterTime: 3000, // Wait 3 seconds for React to fully render
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
    }),
  });

  try {
    await prerenderer.initialize();

    const renderedRoutes = await prerenderer.renderRoutes(routes);

    for (const route of renderedRoutes) {
      const outputDir = path.join(staticDir, route.route);
      const outputFile = path.join(outputDir, 'index.html');

      // Create directory if it doesn't exist
      if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
      }

      // Write the prerendered HTML
      fs.writeFileSync(outputFile, route.html);
      console.log(`Prerendered: ${route.route}`);
    }

    console.log('Prerendering complete!');
  } catch (error) {
    console.error('Prerendering failed:', error);
    process.exit(1);
  } finally {
    await prerenderer.destroy();
  }
}

prerender();
