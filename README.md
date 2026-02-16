# Angular Projects

A collection of Angular applications showcasing various features and use cases.

## 📋 Table of Contents

- [Overview](#overview)
- [Projects](#projects)
  - [SeoClient](#seoclient)
  - [TestCreator](#testcreator)
- [Technology Stack](#technology-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Contributing](#contributing)

## 🔍 Overview

This repository contains two Angular-based applications:
1. **SeoClient** - An SEO-focused client application
2. **TestCreator** - An interactive test/quiz creation and management application

## 📦 Projects

### SeoClient

An Angular application focused on SEO (Search Engine Optimization) features.

**Location:** `./SeoClient`

#### Features
- SEO-focused component architecture (Seo1, Seo2, Seo3)
- Text service integration
- Angular Material UI components
- Drag and Drop functionality (CDK)

#### Technology Stack
- Angular 10.2+
- Angular Material 10.2
- Angular CDK (Component Dev Kit)
- TypeScript 4.0+
- RxJS 6.6+

#### Getting Started
```bash
cd SeoClient
npm install
npm start
```

The application will run at `http://localhost:4200/`

#### Build
```bash
# Development build
npm run build

# Production build
npm run build:prod
```

#### Available Scripts
- `npm start` - Run development server
- `npm run build` - Build the project
- `npm run build:prod` - Production build with AOT compilation
- `npm test` - Run unit tests via Karma
- `npm run lint` - Lint the code
- `npm run e2e` - Run end-to-end tests via Protractor

---

### TestCreator

An interactive Angular application for creating and managing various types of test questions and exercises.

**Location:** `./TestCreator`

#### Features
- **Multiple Question Types:**
  - Single/Multiple Select Questions
  - Radio Button Questions
  - Spell Check Questions
  - Card-based Questions
  - Word Order Questions
  - Character Order Questions
- Exercise service for managing test data
- Shuffle functionality for randomizing questions
- Angular Material UI components
- Drag and Drop functionality for ordering questions
- Reusable question components

#### Technology Stack
- Angular 10.2
- Angular Material 10.2
- Angular CDK (Component Dev Kit)
- TypeScript 4.0+
- RxJS 6.6+

#### Application Structure
The application uses a modular component architecture:
- **QuestionComponent** - Base question component
- **SelectQuestionComponent** - Multiple select questions
- **SingleSelectQuestionComponent** - Single select questions
- **RadioQuestionComponent** - Radio button questions
- **CardQuestionComponent** - Card-based questions
- **SpellQuestionComponent** - Spelling questions
- **WordOrderQuestionComponent** - Word ordering exercises
- **CharOrderQuestionComponent** - Character ordering exercises

#### Data Models
- **Test Interface:**
  ```typescript
  {
    Id: number;
    Title: string;
    Question: string;
    Solution: string;
    SolutionList?: string[];
    Image?: string;
    Icon?: string;
    Type?: QuestionType;
  }
  ```
- **QuestionType Enum:** Question, SelectMultiple, Select, Radio, Spell, Card, Order, CharOrder

#### Getting Started
```bash
cd TestCreator
npm install
npm start
```

The application will run at `http://localhost:4200/`

#### Build
```bash
# Development build
npm run build

# Production build
npm run build --prod
```

#### Available Scripts
- `npm start` - Run development server
- `npm run build` - Build the project
- `npm test` - Run unit tests via Karma
- `npm run lint` - Lint the code
- `npm run e2e` - Run end-to-end tests via Protractor

---

## 🛠️ Technology Stack

Both projects share common technologies:

- **Framework:** Angular 10.2
- **UI Library:** Angular Material 10.2
- **Language:** TypeScript 4.0+
- **Reactive Programming:** RxJS 6.6+
- **Testing:** 
  - Karma for unit tests
  - Jasmine as testing framework
  - Protractor for E2E tests
- **Build Tools:** Angular CLI 10.2
- **Linting:** TSLint

## 🚀 Getting Started

### Prerequisites
- Node.js (v12 or higher recommended)
- npm (v6 or higher)
- Angular CLI: `npm install -g @angular/cli`

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Robfeb/AngularProjects.git
cd AngularProjects
```

2. Choose the project you want to work with and navigate to its directory:
```bash
cd SeoClient
# OR
cd TestCreator
```

3. Install dependencies:
```bash
npm install
```

4. Start the development server:
```bash
npm start
```

5. Open your browser and navigate to `http://localhost:4200/`

## 📁 Project Structure

```
AngularProjects/
├── SeoClient/              # SEO Client Application
│   ├── src/
│   │   ├── app/
│   │   │   ├── seo1/       # SEO Component 1
│   │   │   ├── seo2/       # SEO Component 2
│   │   │   ├── seo3/       # SEO Component 3
│   │   │   └── ...
│   │   ├── services/       # Application services
│   │   └── ...
│   ├── package.json
│   └── README.md
│
├── TestCreator/            # Test Creator Application
│   ├── src/
│   │   ├── app/
│   │   │   ├── question/               # Base question component
│   │   │   ├── select-question/        # Multiple select
│   │   │   ├── single-select-question/ # Single select
│   │   │   ├── radio-question/         # Radio buttons
│   │   │   ├── card-question/          # Card-based
│   │   │   ├── spell-question/         # Spelling
│   │   │   ├── word-order-question/    # Word ordering
│   │   │   ├── char-order-question/    # Character ordering
│   │   │   └── shared/
│   │   │       ├── models/             # Data models
│   │   │       ├── services/           # Services
│   │   │       └── helpers/            # Helper utilities
│   │   └── ...
│   ├── package.json
│   └── README.md
│
└── README.md               # This file
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open source and available for educational purposes.
