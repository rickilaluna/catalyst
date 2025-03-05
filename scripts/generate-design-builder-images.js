const fs = require('fs');
const path = require('path');
const https = require('https');

const images = [
  // Main Design Builder
  {
    path: 'design-builder/hero.jpg',
    title: 'Design Builder Hero',
    color: '1a1a1a',
    text: 'Design Builder',
    width: 1200,
    height: 600
  },
  {
    path: 'design-builder/module-overview.jpg',
    title: 'Module Overview',
    color: '2a2a2a',
    text: 'Learning Path',
    width: 1000,
    height: 600
  },
  // Introduction Section
  {
    path: 'design-builder/introduction/hero.jpg',
    title: 'Introduction Hero',
    color: '3a3a3a',
    text: 'Introduction',
    width: 1200,
    height: 600
  },
  {
    path: 'design-builder/introduction/workflow-diagram.jpg',
    title: 'Workflow Diagram',
    color: '4a4a4a',
    text: 'Workflow',
    width: 1000,
    height: 600
  },
  {
    path: 'design-builder/introduction/ai-role.jpg',
    title: 'AI Role',
    color: '5a5a5a',
    text: 'AI Role',
    width: 800,
    height: 400
  },
  {
    path: 'design-builder/introduction/best-practices.jpg',
    title: 'Best Practices',
    color: '6a6a6a',
    text: 'Best Practices',
    width: 800,
    height: 400
  },
  // Component Library Section
  {
    path: 'design-builder/component-library/hero.jpg',
    title: 'Component Library Hero',
    color: '7a7a7a',
    text: 'Component Library',
    width: 1200,
    height: 600
  },
  {
    path: 'design-builder/component-library/examples.jpg',
    title: 'Component Examples',
    color: '8a8a8a',
    text: 'Examples',
    width: 800,
    height: 400
  },
  {
    path: 'design-builder/component-library/implementation.jpg',
    title: 'Implementation Guide',
    color: '9a9a9a',
    text: 'Implementation',
    width: 800,
    height: 400
  },
  // Implementation Section
  {
    path: 'design-builder/implementation/hero.jpg',
    title: 'Implementation Hero',
    color: 'aa1a1a',
    text: 'Implementation',
    width: 1200,
    height: 600
  },
  {
    path: 'design-builder/implementation/steps.jpg',
    title: 'Implementation Steps',
    color: 'bb2a2a',
    text: 'Steps',
    width: 800,
    height: 400
  },
  {
    path: 'design-builder/implementation/ai-tools.jpg',
    title: 'AI Tools in Action',
    color: 'cc3a3a',
    text: 'AI Tools',
    width: 800,
    height: 400
  }
];

const outputDir = path.join(__dirname, '../public/images');

// Create output directory if it doesn't exist
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Function to download image
function downloadImage(url, filepath) {
  return new Promise((resolve, reject) => {
    https.get(url, (response) => {
      if (response.statusCode === 200) {
        response.pipe(fs.createWriteStream(filepath))
          .on('error', reject)
          .once('close', () => resolve(filepath));
      } else {
        response.resume();
        reject(new Error(`Request Failed With a Status Code: ${response.statusCode}`));
      }
    });
  });
}

// Generate and download images
async function generateImages() {
  for (const image of images) {
    const dir = path.join(outputDir, path.dirname(image.path));
    
    // Create directory if it doesn't exist
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    const url = `https://placehold.co/${image.width}x${image.height}/${image.color}/ffffff/png?text=${encodeURIComponent(image.text)}`;
    const filepath = path.join(outputDir, image.path);
    
    try {
      await downloadImage(url, filepath);
      console.log(`Generated image for ${image.title}`);
    } catch (error) {
      console.error(`Error generating image for ${image.title}:`, error);
    }
  }
}

// Run the script
generateImages().then(() => {
  console.log('All images generated successfully!');
}).catch(error => {
  console.error('Error generating images:', error);
}); 