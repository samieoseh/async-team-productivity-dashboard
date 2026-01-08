# Product Requirements Document (PRD)

## Async Team Productivity Dashboard

### 1. Purpose

The purpose of this product is to provide a frontend-heavy web application that simulates how remote teams manage tasks and communicate asynchronously.

This project is designed to:

- Demonstrate frontend engineering competence
- Showcase ownership and decision-making
- Reflect real-world remote work patterns
- Serve as a portfolio artifact for remote frontend roles

### 2. Problem Statement

Remote teams operate across time zones and schedules, which creates challenges such as:

- Lack of visibility into task progress
- Over-reliance on meetings for status updates
- Loss of context when updates are not documented

The product aims to address these issues by enabling:

- Clear task ownership
- Written, asynchronous updates
- Transparent activity history

### 3. Goals and Non-Goals

#### 3.1 Goals

- Enable users to manage tasks using a Kanban-style interface
- Support asynchronous communication via written comments
- Provide visibility into task activity and ownership
- Demonstrate clean frontend architecture and state management
- Implement real authentication and basic role-based access control

#### 3.2 Non-Goals

- Building a full production-ready SaaS
- Implementing complex permissions or billing
- Supporting large-scale multi-tenant organizations
- Advanced analytics or reporting

### 4. Target Users

#### 4.1 User Personas

**Admin**

- Can create, edit, and delete tasks
- Can assign tasks to users
- Has full visibility into all tasks

**Member**

- Can view assigned tasks
- Can update task status
- Can add comments and async updates

### 5. User Stories

**Authentication**

- As a user, I want to sign up and log in securely
- As a user, I want my session to persist across refreshes
- As a user, I want to log out safely

**Task Management**

- As an admin, I want to create and assign tasks
- As a user, I want to move tasks between statuses
- As a user, I want to view task details

**Async Communication**

- As a user, I want to leave written comments on tasks
- As a user, I want to see a history of updates and actions
- As a user, I want to understand progress without meetings

### 6. Functional Requirements

#### 6.1 Authentication & Authorization (Supabase)

- User authentication handled by Supabase Auth
- Supported auth methods:
  - Email & password
- Role management:
  - admin
  - member
- Role data stored and retrieved via Supabase
- UI rendered conditionally based on user role

#### 6.2 Task Board (Kanban)

- Columns:
  - To Do
  - In Progress
  - Review
  - Done
- Tasks must display:
  - Title
  - Assignee
  - Status
  - Last updated timestamp
- Users can move tasks between columns
- Only admins can create or delete tasks

#### 6.3 Task Detail View

- Task description
- Assigned user
- Status
- Comment thread
- Activity log (status changes, comments)

#### 6.4 Comments & Activity Log

- Users can add text-based comments
- Each comment records:
  - Author
  - Timestamp
- Activity log auto-records:
  - Status changes
  - Task updates

### 7. Non-Functional Requirements

- Performance
- UI should feel responsive under normal usage
- Loading and error states must be handled explicitly
- Usability
- Clear visual hierarchy
- Responsive layout for desktop and tablet
- Accessible color contrast and readable text
- Reliability
- Graceful handling of auth failures
- Clear error messages for users

### 8. Technical Stack

- Frontend
  - React
  - TypeScript
  - Tailwind CSS
  - Material UI
  - React Query
- Backend / Services
  - Supabase Auth
  - Supabase Database (basic usage only)
- Deployment
  - Vercel

### 9. Data Model (High-Level)

- User
  - id
  - email
  - role (admin | member)
- Task

  - id
  - title
  - description
  - status
  - assignee_id
  - created_at
  - updated_at

- Comment
  - id
  - task_id
  - author_id
  - content
  - created_at

### 10. Success Metrics

This is a portfolio project. Success is defined by:

- Feature completeness relative to this PRD
- Code quality and readability
- Clear documentation and commit history
- Demonstrated ownership and follow-through

### 11. Risks & Constraints

**Risks**

- Over-scoping the project
- Spending too much time on backend complexity
- Polishing UI before core functionality

**Constraints**

- Frontend-first focus
- Limited backend logic
- Time-boxed development

### 12. Open Questions (To Be Resolved During Development)

- Should task movement be drag-and-drop or button-based initially?
- Should comments be real-time or refreshed on action?
- How detailed should the activity log be?

### 13. Versioning

v1: Core functionality as defined above

Future versions may expand based on learning goals

## Author

Samuel Oseh
Frontend Engineer (MERN – Frontend Focus)
