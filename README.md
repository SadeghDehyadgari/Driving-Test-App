# 🚗 Driving Theory Test Practice App

You can watch it live on: [Link](https://driving-test-229prnadw-sadeghdehyadegari-4533s-projects.vercel.app/)

A modern, responsive React application for practicing driving theory test questions with a timed quiz format. Features text, image, and video-based questions to help users prepare for their driving theory exam.

## 🌟 Features

- ✅ **20 Timed Questions** - Complete quiz in 20 minutes
- ✅ **Multiple Question Types** - Text, image, and video-based questions
- ✅ **Real-time Timer** - Countdown timer with auto-submit on timeout
- ✅ **Progress Tracking** - Visual progress bar showing completion status
- ✅ **Instant Feedback** - See correct/incorrect answers after submission
- ✅ **Detailed Explanations** - Learn from each question with explanations
- ✅ **Pass/Fail Results** - 70% passing threshold (14/20 correct)
- ✅ **Fully Responsive** - Works seamlessly on desktop, tablet, and mobile
- ✅ **Clean Architecture** - Separated concerns with CSS modules

## 🎯 Demo

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/driving-theory-test-app.git
cd driving-theory-test-app
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 📁 Project Structure

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

## 🎮 How to Use

1. **Start the Quiz** - The app loads with Question 1 and starts the 20-minute timer
2. **Answer Questions** - Select your answer from the multiple choice options
3. **Navigate** - Use Previous/Next buttons to move between questions
4. **Submit** - Click the Submit button (✓) on the last question or wait for timer to expire
5. **Review Results** - See your score and review all questions with correct answers and explanations

## 🎨 Responsive Design

The app is fully responsive with breakpoints at:

- **Desktop**: > 968px (side-by-side layout for questions and media)
- **Tablet**: 768px - 968px (stacked layout with optimized spacing)
- **Mobile**: < 768px (compact layout with touch-friendly buttons)

## 🛠️ Technologies Used

- **React** - UI library
- **React Hooks** - State management (useReducer, useEffect)
- **Lucide React** - Icon library
- **CSS3** - Styling with responsive design
- **Vite** - Build tool and dev server

## 📝 Key Concepts

### State Management
Uses `useReducer` for predictable state updates:
- Answer selection
- Navigation between questions
- Timer countdown
- Quiz submission

### Timer Implementation
- 20-minute countdown timer (1200 seconds)
- Updates every second using `setInterval`
- Auto-submits quiz when time expires
- Cleans up interval on unmount

### Component Architecture
- Separation of concerns with dedicated components
- Reusable UI components (Button, Card)
- CSS modules for scoped styling
- Props drilling for data flow

## 🔧 Customization

### Adding More Questions
Edit `src/data/questions.js`:

```javascript
{
  id: 21,
  type: "text", // "text", "image", or "video"
  question: "Your question here?",
  image: "/path/to/image.jpg", // for type: "image"
  video: "/path/to/video.mp4", // for type: "video"
  options: ["Option 1", "Option 2", "Option 3", "Option 4"],
  correctAnswer: 0, // index of correct option (0-3)
  explanation: "Explanation of the correct answer."
}
```

### Changing Timer Duration
Edit `src/App.jsx`:

```javascript
const initialState = {
  currentQuestion: 0,
  answers: Array(questions.length).fill(null),
  submitted: false,
  timeLeft: 30 * 60, // Change to 30 minutes (in seconds)
};
```

### Adjusting Pass Threshold
Edit `src/components/ScoreSummary.jsx`:

```javascript
const isPass = score > total * 0.8; // Change to 80% passing threshold
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is for educational purposes and is based on one of the modules from the "Complete React 19 Developer Course" on Udemy.

## 🙏 Acknowledgments

- Questions inspired by UK driving theory test format
- Icons provided by [Lucide React](https://lucide.dev/)
- Built with [Vite](https://vitejs.dev/)

---

⭐ If you find this project helpful, please consider giving it a star on GitHub!
