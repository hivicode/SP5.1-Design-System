PROJECT: TUGAS.IN — STUDENT TASK MANAGEMENT WEB APPLICATION

Act as a senior UI/UX designer, design system architect, and experienced Next.js frontend developer.

Your task is to design and develop a complete student task management web application called Tugas.in.

This project is for a university midterm examination (UTS) in Styled Design / Design System.

The final result must demonstrate good design decisions, a reusable component-based design system, clean React architecture, BEM CSS methodology, and responsive web design.

IMPORTANT: This must look like a real product designed by a thoughtful human designer, NOT a generic AI-generated dashboard.

1. PROJECT IDENTITY

Application name: Tugas.in

Application type: Student Task Management Dashboard.

Target users: University students.

Main purpose: Help university students organize assignments, track deadlines, manage priorities, and monitor their academic productivity.

Brand personality:

Modern
Practical
Organized
Friendly
Professional
Minimal but distinctive

Brand tagline: "Atur tugas, fokus masa depan."

Use Indonesian for the main interface language.

The application should feel like a real productivity product that university students would genuinely use.

2. CRITICAL DESIGN RULE — NO GENERIC AI DESIGN

THIS IS THE MOST IMPORTANT REQUIREMENT.

Do not immediately generate a typical AI dashboard template.

Avoid recognizable AI-generated visual patterns.

STRICTLY AVOID:

Purple and blue gradient backgrounds.
Excessive glassmorphism.
Glowing buttons and glowing cards.
Floating decorative abstract shapes.
Excessive rounded corners on every element.
Every section being placed inside identical white cards.
Excessive drop shadows.
Unnecessary colorful icons.
Random decorative illustrations.
Overly symmetrical layouts.
Generic SaaS dashboard templates.
Oversized headings without a purpose.
Too many decorative elements that do not improve usability.
Fake visual complexity just to make the interface look modern.

Do not use the typical AI-generated combination of a purple sidebar, white rounded cards, gradient buttons, and floating statistics.

The result must have a recognizable visual identity.

Before coding, establish a clear visual direction and make deliberate layout decisions.

If the result looks like a generic AI-generated dashboard, redesign it.

3. VISUAL ART DIRECTION

Use this visual direction:

MODERN ACADEMIC PRODUCTIVITY WITH EDITORIAL DESIGN INFLUENCE.

The interface should feel sophisticated, structured, and practical.

Color palette:

Primary: Muted forest green (#355E4B)
Primary hover: Deep green (#284A3A)
Background: Warm off-white (#F7F7F2)
Surface: White (#FFFFFF)
Main text: Charcoal (#252923)
Secondary text: Muted gray (#858A82)
Border: Soft gray (#E5E7E1)
Accent: Soft orange (#E89A52)
Success: Muted green (#4F936C)
Warning: Warm amber (#E6AA4B)
Danger: Muted red (#D96868)

Typography:

Use a modern, readable sans-serif font.
Prefer Inter, Geist, or another suitable modern typeface.
Use strong typography hierarchy.
Headings must be clear, not unnecessarily oversized.
Use different font weights intentionally.

Design characteristics:

Clean editorial layout.
Strong typography hierarchy.
Thin borders.
Restrained shadows.
Moderate border radiuses.
Consistent spacing.
Carefully balanced negative space.
Meaningful visual grouping.

Not every section should be a card.

Use whitespace, typography, subtle background differences, and dividers to organize content.

4. APPLICATION LAYOUT

Create a complete dashboard with the following structure.

A. Sidebar Navigation

Create a distinctive navigation sidebar.

Include:

Tugas.in logo or wordmark.
Dashboard.
Semua Tugas.
Prioritas.
Kalender.
Selesai.
Settings.
Sidebar requirements:

Clear active navigation state.
Simple icons where useful.
Proper spacing.
Clean typography.
Avoid excessive decorative elements.
On mobile, adapt the navigation appropriately.

B. Dashboard Header
Create a personalized greeting section.

Example:

"Selamat pagi, Mahasiswa!" "Yuk, selesaikan tugasmu satu per satu."

Show the current date.

Add a notification icon and a simple profile area.

C. Statistics Overview
Display four important statistics:

Total Tugas.
Belum Dikerjakan.
Sedang Dikerjakan.
Selesai.
Use compact, visually balanced statistics.

Do not make every statistic look like an oversized generic AI card.

D. Main Task List
This is the most important section of the application.

Create a task management list with realistic Indonesian student assignment data.

Example tasks:

Membuat laporan praktikum basis data.
Presentasi UI/UX Design.
Menyelesaikan project pemrograman web.
Mengerjakan tugas analisis sistem.
Membuat rangkuman jaringan komputer.
Each task should contain:

Task title.
Subject or course.
Deadline.
Priority.
Completion status.
Use clear visual hierarchy.

Allow users to distinguish tasks quickly without unnecessary decorative elements.

E. Upcoming Deadlines
Create a separate section displaying upcoming assignments.

Show:

Task title.
Due date.
Remaining time.
Priority indicator.
Use meaningful warning colors for urgent deadlines.

F. Quick Add Task
Provide an interface for adding new assignments.

Fields:

Task title.
Course name.
Deadline.
Priority.
Status.
Include a functional Add Task button.

5. FUNCTIONALITY
The application must not be just a static visual mockup.

Implement the following interactions:

Add a new task.
Display the newly added task in the task list.
Change task completion status.
Delete a task.
Filter tasks by status.
Filter tasks by priority.
Update dashboard statistics dynamically.
Search tasks by title.
Show upcoming deadlines.
Use React state for interactive functionality.

Use localStorage if appropriate to preserve task data after page refresh.

Use realistic sample data as initial content.

Do not create buttons that do nothing.

Keep the functionality understandable and easy to demonstrate.

6. MINI DESIGN SYSTEM
Create a reusable design system.

The project must include design tokens and at least five reusable UI components.

A. Design Tokens
Create CSS variables for:

Colors:

Primary.
Secondary.
Background.
Surface.
Text.
Muted text.
Border.
Success.
Warning.
Danger.
Typography:

Font family.
Font sizes.
Font weights.
Line heights.
Spacing:

4px.
8px.
12px.
16px.
24px.
32px.
48px.
Other tokens:

Border radius.
Border width.
Shadows.
Breakpoints.
Put these variables in a dedicated tokens.css file.

B. Reusable Components
Create at least these components:

Button
Primary.
Secondary.
Outline.
Small and large sizes.
Hover and disabled states.
Card
Default.
Statistics.
Task card.
Consistent padding and borders.
Input
Default.
Focus.
Error.
Disabled.
Badge
Pending.
In Progress.
Completed.
High Priority.
Medium Priority.
Low Priority.
Container
Consistent width.
Responsive padding.
Proper content alignment.
Components must be reusable and must not be duplicated unnecessarily.

Use meaningful component props and variations.

7. BEM CSS METHODOLOGY
Apply BEM naming conventions consistently throughout the project.

Examples:

.button .button--primary .button--secondary .button__icon

.card .card__title .card__content .card--statistics

.badge .badge--success .badge--warning

.task .task__title .task__deadline .task__status .task--completed

.sidebar .sidebar__logo .sidebar__navigation .sidebar__item .sidebar__item--active

Use proper Block, Element, and Modifier naming.

Do not randomly mix naming conventions.

8. NEXT.JS AND REACT IMPLEMENTATION
Technical requirements:

Use Next.js.
Use React Functional Components.
Use JSX.
Use CSS for styling.
Use reusable component architecture.
Use CSS variables for design tokens.
Apply BEM methodology.
Use media queries.
Keep code clean and maintainable.
Avoid unnecessary libraries.
Use semantic HTML where appropriate.
Suggested folder structure:

app/ layout.jsx page.jsx globals.css

components/ Button.jsx Card.jsx Input.jsx Badge.jsx Container.jsx Sidebar.jsx DashboardHeader.jsx TaskList.jsx TaskItem.jsx TaskForm.jsx Statistics.jsx

styles/ tokens.css components.css dashboard.css responsive.css

Make sure the project can run properly using npm run dev.

If the project already exists, inspect its structure before modifying it. Preserve useful existing code and avoid unnecessary rewrites.

9. RESPONSIVE DESIGN
The application must work properly on desktop and mobile.

Desktop:

Full sidebar navigation.
Main dashboard content.
Statistics overview.
Task list and deadline section arranged thoughtfully.
Tablet:

Adjust columns.
Reduce spacing where necessary.
Maintain readability.
Mobile:

Adapt navigation.
Use a single-column layout where appropriate.
Make buttons touch-friendly.
Ensure task information remains readable.
Avoid horizontal overflow.
Reorganize content rather than simply shrinking the desktop layout.
Use CSS media queries.

Test at these viewport sizes:

Desktop: 1440 × 900 px.

Mobile: 375 × 812 px.

Make sure both layouts are visually polished.

10. DESIGN QUALITY CONTROL
Before completing the project, critically evaluate the design.

Ask:

Does this look like a generic AI-generated dashboard?
Are there too many cards?
Are shadows and rounded corners being overused?
Does the interface have a distinctive visual identity?
Is the typography hierarchy clear?
Is the task list easy to understand?
Does the design feel like a real student productivity product?
Does mobile have its own thoughtful layout?
Are all reusable components consistent?
Are all interactions functional?
If the interface looks generic, revise it.

Prioritize design quality and usability over trendy visual effects.

11. UTS DELIVERABLE REQUIREMENTS
The project must be suitable for the following examination requirements:

Mini design system.
Design tokens.
At least four reusable UI components.
JSX and React Functional Components.
BEM naming methodology.
Styling implementation.
Component variations.
Responsive desktop and mobile interface.
Screenshots of two screen sizes.
Runnable source code.
Prepare the source code so it is easy to explain during the examination.

Also prepare documentation of:

Application context.
Design tokens.
Reusable components.
BEM implementation.
Styling approach.
Responsive testing results.
AI assistance must be acknowledged appropriately in the report.

Do not claim that untested features have been tested.

12. FINAL EXECUTION INSTRUCTIONS
Follow this workflow:

STEP 1: Inspect the project directory and existing setup.

STEP 2: Establish the visual art direction before coding.

STEP 3: Build the design tokens.

STEP 4: Create reusable components.

STEP 5: Build the Tugas.in dashboard.

STEP 6: Implement functional interactions.

STEP 7: Implement responsive layouts.

STEP 8: Run the project and fix errors.

STEP 9: Review the desktop and mobile appearance.

STEP 10: Verify that the project meets all examination requirements.

FINAL IMPORTANT INSTRUCTION:

Do not rush into coding with a generic template.

Do not sacrifice visual identity for convenience.

Tugas.in should look like a carefully designed real-world student productivity application with a distinctive visual personality.

The final interface must be clean, intentional, practical, visually consistent, and professionally executed.

A restrained and thoughtfully designed interface is much better than an overdecorated AI-generated dashboard.




