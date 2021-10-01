import { add, format, sub } from 'date-fns';

export function generateEvents() {
  const events = [
    {
      date: getFutureDate(1),
      location: 'Yoga Centrum',
      name: 'Free Yoga Class',
      street: '2524 Libby Street',
      time: '7:00 PM',
    },
    {
      date: getFutureDate(1),
      location: 'Burlington Carpenters',
      name: 'Wood Workshop',
      street: '876 Ryder Avenue',
      time: '11:00 AM',
    },
    {
      date: getFutureDate(2),
      location: 'Green Park',
      name: 'Coffee walk',
      street: '1100 Green Park',
      time: '9:00 AM',
    },
    {
      date: getFutureDate(2),
      location: 'Arch Cinema',
      name: 'Movies',
      street: '331 Star Route',
      time: '8:00 PM',
    },
    {
      date: getFutureDate(2),
      location: 'Language Café',
      name: 'French language group',
      street: '2429 Ryder Avenue',
      time: '3:00 PM',
    },
    {
      date: getFutureDate(3),
      location: 'Language Café',
      name: 'Spanish language group',
      street: '2429 Ryder Avenue',
      time: '3:00 PM',
    },
    {
      date: getFutureDate(4),
      location: 'Culinary Campus',
      name: 'French cooking class',
      street: '987 Argonne Street',
      time: '6:00 PM',
    },
    {
      date: getFutureDate(4),
      location: 'Starbucks',
      name: 'Code & Coffee',
      street: '291 Quincy Street',
      time: '4:00 PM',
    },
    {
      date: getFutureDate(6),
      location: 'Museum of Art',
      name: 'Paint workshop',
      street: '667 Skips Lane',
      time: '1:00 PM',
    },
    {
      date: getFutureDate(8),
      location: 'University of Electrodynamics',
      name: 'What is electricity? – Lecture',
      street: '2231 Emerson Road',
      time: '10:00 AM',
    },
    {
      date: getFutureDate(9),
      location: 'Food Court',
      name: 'Lunch meetup – Street food',
      street: '3595 Cambridge Place',
      time: '12:30 PM',
    },
    {
      date: getFutureDate(9),
      location: 'Concert Hall',
      name: 'Orchestra',
      street: '4742 Melody Lane',
      time: '7:00 PM',
    },
  ];
  return events;
}

export function generatePastEvents() {
  const events = [
    {
      date: getPastDate(2),
      location: 'Concert Hall',
      name: 'Orchestra',
      rating: [5, 4, 5, 4, 4],
      street: '4742 Melody Lane',
      time: '7:30 PM',
    },
    {
      date: getPastDate(9),
      location: 'Language Café',
      name: 'French language group',
      rating: [5, 4, 5, 2, 3, 5, 3],
      street: '2429 Ryder Avenue',
      time: '3:00 PM',
    },
    {
      date: getPastDate(16),
      location: 'Starbucks',
      name: 'Code & Coffee',
      rating: [1, 3, 5, 5, 2, 5],
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
