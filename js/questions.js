/**
 * Question data and configuration for Valentine Quiz Application
 * Customize these questions to personalize your quiz
 */

export const questions = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'Where do you want to travel next?',
    options: [
      { text: 'Paris, France', points: 10, emoji: '🗼' },
      { text: 'Santorini, Greece', points: 10, emoji: '🏖️' },
      { text: 'Kyoto, Japan', points: 10, emoji: '🏯' },
      { text: 'Maldives', points: 10, emoji: '🏝️' }
    ]
  },
  {
    id: 2,
    type: 'image-choice',
    question: 'Where is this picture taken?',
    image: './assets/images/couple.JPG',
    options: [
      { text: 'Pune', points: 5 },
      { text: 'Vizag', points: 15, correct: true },
      { text: 'Hyderabad', points: 5 },
      { text: 'Coorg', points: 5 }
    ]
  },
  {
    id: 3,
    type: 'playful-choice',
    question: 'Will you be my valentine?',
    options: [
      { text: 'Yes! ❤️', points: 20, action: 'accept' },
      { text: 'No', points: 0, action: 'escape' }
    ]
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'When did I first tell you those three words?',
    options: [
      { text: '19th Feb', points: 5 },
      { text: '20th Feb', points: 15, correct: true },
      { text: '21st Feb', points: 5 },
      { text: '22nd Feb', points: 5 },
      { text: '23rd Feb', points: 5 }
    ]
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'Where should we have our next date night?',
    options: [
      { text: 'Fancy Restaurant', points: 10, emoji: '🍽️' },
      { text: 'Movie Theater', points: 10, emoji: '🎬' },
      { text: 'Beach Sunset', points: 10, emoji: '🌅' },
      { text: 'Cozy Home Dinner', points: 10, emoji: '🏠' }
    ]
  }
];

export const scoreMessages = [
  { min: 0, max: 30, message: 'Every moment with you is perfect! ❤️' },
  { min: 31, max: 50, message: 'You know me so well, my love! 💕' },
  { min: 51, max: 70, message: 'We are meant to be together! 💖' },
  { min: 71, max: 100, message: 'You are my soulmate! Forever and always! We are a perfect match made in heaven! 💝✨' }
];
