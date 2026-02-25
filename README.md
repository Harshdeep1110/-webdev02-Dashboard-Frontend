# Kanban Collaboration Board

A powerful, standalone Kanban board designed for seamless project collaboration. This lightweight application provides a complete visual workflow management system built with pure Vanilla JavaScript, HTML5, and CSS3.

## Features

- **Dynamic Columns**: Create, edit, and delete columns to fit your specific workflow.
- **Card Management**: Add detailed cards with titles, descriptions, priorities, and custom colors.
- **Visual Drag & Drop**: Intuitively move tasks between stages with smooth drag-and-drop interactions.
- **Real-time Search**: Quickly find tasks across all columns using the integrated search filter.
- **Dark Mode**: Toggle between light and dark themes for optimal viewing in any environment.
- **Activity Monitoring**: Keep track of all changes with the built-in activity log and notification system.
- **Persistence**: Your work is automatically saved to LocalStorage, ensuring no data loss between sessions.
- **Responsive Design**: Fully functional on desktop, tablet, and mobile devices.

## Setup Instructions

This is a frontend-only application with zero dependencies. No installation or build steps are required.

1. Clone the repository or download the source files.
2. Open `index.html` in any modern web browser (Chrome, Firefox, Safari, or Edge).
3. Start managing your projects immediately!

## Project Architecture

The application is built using a modular architecture to ensure scalability:

- `index.html`: Main entry point and structural layout.
- `style.css`: Comprehensive design system and responsive styles.
- `state.js`: Centralized state management for columns, cards, and activity.
- `render.js`: Optimized DOM rendering engine.
- `drag.js`: Advanced drag-and-drop interaction logic.
- `modal.js`: Interactive UI management for forms and confirmations.
- `storage.js`: LocalStorage persistence layer.
- `utils.js`: Shared utility functions.
- `app.js`: Application initialization and event orchestration.

## License

This project is open-source and available under the MIT License.
