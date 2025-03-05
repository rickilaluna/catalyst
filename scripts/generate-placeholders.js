const fs = require('fs');
const path = require('path');
const https = require('https');

const accelerators = [
  {
    id: 'intro-ai-ux',
    title: 'AI and UX Design Fundamentals',
    color: '1a1a1a',
    text: 'AI & UX'
  },
  {
    id: 'design-builder',
    title: 'Design to Implementation with AI',
    color: '2a2a2a',
    text: 'Design Builder'
  },
  {
    id: 'analysis-iteration',
    title: 'UX Analysis and Iteration with AI',
    color: '3a3a3a',
    text: 'Analysis'
  },
  {
    id: 'generative-design',
    title: 'Generative Design with AI',
    color: '4a4a4a',
    text: 'Gen Design'
  },
  {
    id: 'ai-ethics',
    title: 'Ethics in AI-Assisted Design',
    color: '5a5a5a',
    text: 'AI Ethics'
  },
  {
    id: 'ai-collaboration',
    title: 'AI Collaboration in Design Teams',
    color: '6a6a6a',
    text: 'Collaboration'
  }
];

const outputDir = path.join(__dirname, '../public/images/accelerators');

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
  for (const accelerator of accelerators) {
    const url = `https://placehold.co/800x400/${accelerator.color}/ffffff/png?text=${encodeURIComponent(accelerator.text)}`;
    const filepath = path.join(outputDir, `${accelerator.id}.jpg`);
    
    try {
      await downloadImage(url, filepath);
      console.log(`Generated image for ${accelerator.title}`);
    } catch (error) {
      console.error(`Error generating image for ${accelerator.title}:`, error);
    }
  }
}

// Run the script
generateImages().then(() => {
  console.log('All images generated successfully!');
}).catch(error => {
  console.error('Error generating images:', error);
}); 