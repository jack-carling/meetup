import { add, format, sub } from 'date-fns';

export function generateEvents() {
  const events = [
    {
      date: getFutureDate(1),
      id: 0,
      location: 'Yoga Centrum',
      name: 'Free Yoga Class',
      street: '2524 Libby Street',
      time: '7:00 PM',
    },
    {
      date: getFutureDate(1),
      id: 1,
      location: 'Burlington Carpenters',
      name: 'Wood Workshop',
      street: '876 Ryder Avenue',
      time: '11:00 AM',
    },
    {
      date: getFutureDate(2),
      id: 2,
      location: 'Green Park',
      name: 'Coffee walk',
      street: '1100 Green Park',
      time: '9:00 AM',
    },
    {
      date: getFutureDate(2),
      id: 3,
      location: 'Arch Cinema',
      name: 'Movies',
      street: '331 Star Route',
      time: '8:00 PM',
    },
    {
      date: getFutureDate(2),
      id: 4,
      location: 'Language Café',
      name: 'French language group',
      street: '2429 Ryder Avenue',
      time: '3:00 PM',
    },
    {
      date: getFutureDate(3),
      id: 5,
      location: 'Language Café',
      name: 'Spanish language group',
      street: '2429 Ryder Avenue',
      time: '3:00 PM',
    },
    {
      date: getFutureDate(4),
      id: 6,
      location: 'Culinary Campus',
      name: 'French cooking class',
      street: '987 Argonne Street',
      time: '6:00 PM',
    },
    {
      date: getFutureDate(4),
      id: 7,
      location: 'Starbucks',
      name: 'Code & Coffee',
      street: '291 Quincy Street',
      time: '4:00 PM',
    },
    {
      date: getFutureDate(6),
      id: 8,
      location: 'Museum of Art',
      name: 'Paint workshop',
      street: '667 Skips Lane',
      time: '1:00 PM',
    },
    {
      date: getFutureDate(8),
      id: 9,
      location: 'University of Electrodynamics',
      name: 'What is electricity? – Lecture',
      street: '2231 Emerson Road',
      time: '10:00 AM',
    },
    {
      date: getFutureDate(9),
      id: 10,
      location: 'Food Court',
      name: 'Lunch meetup – Street food',
      street: '3595 Cambridge Place',
      time: '12:30 PM',
    },
    {
      date: getFutureDate(9),
      id: 11,
      location: 'Concert Hall',
      name: 'Orchestra',
      street: '4742 Melody Lane',
      time: '7:00 PM',
    },
  ];
  return events;
}

export function generateHistory() {
  const events = [
    {
      comments: [
        {
          comment: 'Amazing performance!',
          name: 'John',
          time: getPastDate(1) + ' @ 4:39 PM',
        },
      ],
      date: getPastDate(2),
      location: 'Concert Hall',
      name: 'Orchestra',
      rating: { like: 5, dislike: 1, vote: null },
      street: '4742 Melody Lane',
      time: '7:30 PM',
    },
    {
      comments: [
        {
          comment: 'Been learning so much! See you next week.',
          name: 'James',
          time: getPastDate(6) + ' @ 11:48 AM',
        },
        {
          comment: 'I did not enjoy it, too crowded!',
          name: 'Alice',
          time: getPastDate(7) + ' @ 3:14 PM',
        },
      ],
      date: getPastDate(9),
      location: 'Language Café',
      name: 'French language group',
      rating: { like: 7, dislike: 3, vote: null },
      street: '2429 Ryder Avenue',
      time: '3:00 PM',
    },
    {
      comments: [
        {
          comment: 'Brilliant! Would suggest another location though, it gets busy...',
          name: 'Sara',
          time: getPastDate(10) + ' @ 8:59 PM',
        },
        {
          comment: 'Shout out to Mark for helping me so much!',
          name: 'Martin',
          time: getPastDate(14) + ' @ 9:05 AM',
        },
      ],
      date: getPastDate(16),
      location: 'Starbucks',
      name: 'Code & Coffee',
      rating: { like: 3, dislike: 1, vote: null },
      street: '291 Quincy Street',
      time: '5:30 PM',
    },
  ];
  return events;
}

function getFutureDate(days) {
  return format(add(new Date(), { days }), 'dd/MM/yyyy');
}

function getPastDate(days) {
  return format(sub(new Date(), { days }), 'dd/MM/yyyy');
}
