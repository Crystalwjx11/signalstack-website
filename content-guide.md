# SignalStack Content Update Guide

This guide shows you exactly where to find and edit the main content sections in your website.

## Main File Location
All content is in: `src/app/page.tsx`

## Key Content Sections to Edit

### 1. Hero Section (Lines ~60-70)
**What visitors see first**
```tsx
<h1 className="text-6xl md:text-7xl font-bold leading-tight mb-8">
  <span className="block text-white">Building</span>
  <span className="block bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
    Human-Centered AI
  </span>
</h1>
```

**Main description** (Lines ~61-68):
```tsx
<p className="mb-6">
  As a program manager in tech, I bring human-centered thinking to AI development. 
  My focus is building AI systems that understand and serve human needs, not just optimize metrics.
</p>
<p className="text-lg text-gray-400">
  Through data annotation work, I discovered how subjective "good AI" really is. This insight drives my work on 
  preference modeling, human values in AI systems, and creating technology that truly serves people.
</p>
```

### 2. Focus Areas (Lines ~100-155)
**Three main expertise cards:**

#### Human Preference Modeling (Lines ~103-113)
- **Title**: "Human Preference Modeling"
- **Description**: Main paragraph about developing frameworks
- **Key Insight**: The purple box with your core insight

#### AI Quality & Human Values (Lines ~124-134)
- **Title**: "AI Quality & Human Values" 
- **Description**: About expert disagreement and human values
- **Real Example**: The blue box with annotation example

#### Human-Centered AI Strategy (Lines ~145-155)
- **Title**: "Human-Centered AI Strategy"
- **Description**: Product management principles
- **Strategy Framework**: The green box with your approach

### 3. About Section (Lines ~254-278)
**Personal story and background**
```tsx
<p className="text-gray-300 mb-6 leading-relaxed">
  Program manager with deep experience in tech, now focused on the intersection of human psychology and AI systems. 
  My journey from traditional PM work to AI began through data annotation—where I discovered that "good AI" is fundamentally about understanding human values, not just optimizing metrics.
</p>
```

### 4. Contact Information (Lines ~300-315)
**Email and contact details:**
- Email: `crystal@signalstack.ai` 
- LinkedIn description
- Calendar description

### 5. Project Showcase (Lines ~165-240)
**Four featured work cards:**
- Data Annotation Case Study
- Preference Modeling Framework  
- AI Strategy Work
- Tech Industry Insights

## Quick Edit Tips

1. **Find the section**: Use Ctrl+F (or Cmd+F) to search for the text you want to change
2. **Edit carefully**: Only change the text content, not the HTML tags or className attributes
3. **Keep structure**: Don't remove the `<p>`, `<h1>`, `<h3>` tags - just edit what's inside them
4. **Save and refresh**: After editing, save the file and refresh your browser at localhost:3001

## Most Common Updates

**Change your tagline**: Search for "Building Human-Centered AI" (line ~54)
**Update your bio**: Search for "Program manager with deep experience" (line ~255)  
**Modify contact email**: Search for "crystal@signalstack.ai" (line ~300)
**Edit key insights**: Look for the colored boxes with "Key Insight:", "Real Example:", "Strategy Framework:"

## Safe Editing Rules
- ✅ Change text inside quotes: `"Your text here"`
- ✅ Update email addresses, names, descriptions
- ✅ Modify the colored insight boxes
- ❌ Don't change className attributes
- ❌ Don't remove HTML tags like `<div>`, `<p>`, `<h1>`
- ❌ Don't modify the CSS classes (the long strings after `className=`)