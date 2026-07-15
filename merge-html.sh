#!/bin/bash

# Extract the complete-sections.html content (everything except duplicate sections)
# We need: Case Studies, Testimonials, Pricing, FAQ, Contact, Resources, Footer

# Create backup
cp index.html index.html.backup

# The plan:
# 1. Keep everything in index.html up to line 689 (end of Industries section)
# 2. Insert Case Studies from complete-sections.html (lines 694-837)
# 3. Insert Testimonials from complete-sections.html (lines 840-920)
# 4. Insert Pricing from complete-sections.html (lines 2-155)
# 5. Insert FAQ from complete-sections.html (lines 157-240)
# 6. Insert Contact from complete-sections.html (lines 243-361)
# 7. Insert Resources from complete-sections.html (lines 364-459)
# 8. Insert Footer from complete-sections.html (lines 462-end)
# 9. Keep chatbot widget before closing body tag
# 10. Keep closing script.js and body/html tags

echo "Merging HTML files..."
