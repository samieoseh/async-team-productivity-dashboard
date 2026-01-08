# Async Team Productivity Dashboard (Frontend)

## Overview

The Async Team Productivity Dashboard is a frontend web application designed to simulate how remote teams manage tasks and communicate progress asynchronously without relying on meetings.

The goal of this project is to demonstrate frontend engineering skills, ownership, and an understanding of remote-first workflows through a realistic, production-style UI.

This is a **frontend-heavy project** built with React, emphasizing state management, UI architecture, and clear written communication.

## Problem Statement

Remote teams often struggle with:

- Tracking task progress across time zones
- Understanding context without synchronous meetings
- Maintaining visibility into who is working on what

Many tools exist, but this project focuses on the core async workflows that matter most:

- Task ownership
- Status updates
- Written progress communication
- Activity visibility

**Key Features (Planned)**

- Task Management
- Kanban-style board with task statuses:
  - To Do
  - In Progress
  - Review
  - Done
- Create, update, and move tasks between columns
- Assign tasks to users

**Task Details**

- Task description and metadata
- Comment thread for async updates
- Status history and activity log

**Activity Feed**

- Centralized feed showing:
- Task status changes
- Comments added
- Ownership updates

**User Roles**

- Admin: can create and manage tasks
- Member: can update assigned tasks and add comments

## Tech Stack

- Frontend
- React
- TypeScript
- Tailwind CSS
- React Query
- Data / Backend (Supabase)

## Deployment

Vercel (planned)

## Architecture & Design Decisions (Initial)

Async communication is represented through written comments and activity logs, mirroring real remote team workflows.
State management is designed to handle loading, error, and empty states explicitly.
These decisions may evolve as the project progresses.

## Current Status

🚧 In Progress – v1

Completed:

- Project planning
- Initial README
- Repository setup

Next Steps:

- User authentication and role management
- Basic Kanban board UI
- Static task data
- Core component structure

## Future Improvements

- Drag-and-drop task movement
- Filtering and search
- Improved accessibility
- Supabase data persistence

## Why This Project Exists

This project exists to:

- Demonstrate end-to-end ownership of a frontend application
- Show clear written communication and documentation
- Simulate real-world remote work patterns
- Serve as a portfolio artifact for remote frontend roles

## Author

Built by Samuel Oseh
Frontend Engineer (MERN – Frontend Focus)
