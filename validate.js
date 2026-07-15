const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');

console.log('=== HTML VALIDATION ===\n');

// Check for all required sections
const sections = [
    'home', 'services', 'industries', 'case-studies',  
    'pricing', 'faq', 'contact', 'resources'
];

sections.forEach(id => {
    if (html.includes(`id="${id}"`)) {
        console.log(`✓ Section "${id}" found`);
    } else {
        console.log(`✗ Section "${id}" MISSING`);
    }
});

// Check for key components
const components = [
    { name: 'Navigation', pattern: '<nav' },
    { name: 'Hero Section', pattern: 'AI-First Cybersecurity' },
    { name: 'Services (9 cards)', pattern: 'Penetration Testing' },
    { name: 'AI Workflow', pattern: 'AI-Powered Security Workflow' },
    { name: 'Industries', pattern: 'Financial Services' },
    { name: 'Case Studies', pattern: 'Proven Results' },
    { name: 'Testimonials', pattern: 'Trusted by Leaders' },
    { name: 'Pricing', pattern: 'Transparent, Scalable Pricing' },
    { name: 'FAQ', pattern: 'Frequently Asked Questions' },
    { name: 'Contact Form', pattern: 'contact-form' },
    { name: 'Resources/Blog', pattern: 'Latest Insights' },
    { name: 'Footer', pattern: '<footer' },
    { name: 'Chatbot Widget', pattern: 'chatbot-trigger' },
    { name: 'JavaScript', pattern: 'script.js' }
];

console.log('\n=== COMPONENT CHECK ===\n');
components.forEach(comp => {
    if (html.includes(comp.pattern)) {
        console.log(`✓ ${comp.name}`);
    } else {
        console.log(`✗ ${comp.name} MISSING`);
    }
});

// Check for duplicate IDs
const ids = html.match(/id="([^"]*)"/g) || [];
const idMap = {};
let hasDuplicates = false;

ids.forEach(id => {
    if (idMap[id]) {
        console.log(`\n✗ DUPLICATE ID: ${id}`);
        hasDuplicates = true;
    }
    idMap[id] = true;
});

if (!hasDuplicates) {
    console.log('\n✓ No duplicate IDs found');
}

console.log(`\n=== STATISTICS ===`);
console.log(`Total lines: ${html.split('\n').length}`);
console.log(`Total sections: ${(html.match(/<section/g) || []).length}`);
console.log(`Total unique IDs: ${Object.keys(idMap).length}`);

console.log('\n✅ Validation complete!');
