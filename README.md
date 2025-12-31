# Driving Theory Test Practice App - Refactored

## Changes Made

### 1. **Separated Inline Styles into CSS Files**

- All inline styles have been moved to dedicated CSS files
- Created a `/styles` folder for component-specific styles
- UI components (Button, Card) have their own CSS files in `/components/ui`
- Better maintainability and reusability

### 2. **Reduced Questions to 20**

- Reduced from 50 to 20 questions
- Timer adjusted to 20 minutes (20 \* 60 seconds)
- Pass threshold updated to 70% (14+ correct answers)

### 3. **Removed "in this video/photo" Phrases**

- Cleaned up question text for better clarity
- Questions now directly ask what needs to be done

### 4. **Working Timer**

- Implemented useEffect hooks in App.jsx to:
  - Decrement timer every second using TICK action
  - Auto-submit quiz when timer reaches 0
- Timer is properly displayed and updates in real-time

### 5. **Fully Responsive Design**

- Mobile-first approach with breakpoints at 768px and 968px
- Stack layout on mobile (media displays below questions)
- Side-by-side layout on desktop
- Responsive typography and spacing
- Touch-friendly button sizes on mobile

## Project Structure

```
src/
├── App.jsx                    # Main app component with timer logic
├── App.css                    # App-level styles
├── main.jsx                   # React entry point
├── index.css                  # Global styles
│
├── components/
│   ├── QuestionView.jsx       # Question display component
│   ├── ResultView.jsx         # Results/review component
│   ├── AppBanner.jsx          # App header banner
│   ├── AppBanner.css
│   ├── ProgressBar.jsx        # Top progress bar
│   ├── ProgressBar.css
│   ├── QuestionHeader.jsx     # Question number & timer
│   ├── QuestionText.jsx       # Question text display
│   ├── AnswerOptions.jsx      # Answer buttons list
│   ├── AnswerFeedback.jsx     # Correct/wrong feedback
│   ├── MediaDisplay.jsx       # Image/video display
│   ├── NavigationControls.jsx # Prev/Next/Submit buttons
│   ├── ScoreSummary.jsx       # Final score card
│   ├── ExplanationText.jsx    # Answer explanation
│   │
│   └── ui/
│       ├── Button.jsx         # Reusable button component
│       ├── Button.css
│       ├── Card.jsx           # Reusable card wrapper
│       └── Card.css
│
├── data/
│   └── questions.js           # 20 quiz questions
│
├── state/
│   └── quizReducer.js         # State management reducer
│
├── utils/
│   └── formatTime.js          # Time formatter utility
│
└── styles/
    ├── QuestionView.css
    ├── ResultView.css
    ├── QuestionHeader.css
    ├── QuestionText.css
    ├── AnswerOptions.css
    ├── AnswerFeedback.css
    ├── MediaDisplay.css
    ├── NavigationControls.css
    ├── ScoreSummary.css
    └── ExplanationText.css
```

## Key Features

- ✅ 20-minute countdown timer
- ✅ Auto-submit when time expires
- ✅ Progress bar showing quiz completion
- ✅ Text, image, and video questions
- ✅ Answer selection with visual feedback
- ✅ Navigation between questions
- ✅ Detailed results with explanations
- ✅ Pass/fail threshold (70%)
- ✅ Fully responsive design

## Responsive Breakpoints

- **Desktop**: > 968px (side-by-side layout)
- **Tablet**: 768px - 968px (stacked layout)
- **Mobile**: < 768px (stacked, smaller text)

## Installation

```bash
npm install
npm run dev
```

## Dependencies

- React
- lucide-react (for icons)
