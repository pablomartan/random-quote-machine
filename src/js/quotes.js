const quoteList = [
  {
    quote: "The unexamined life is not worth living",
    author: "Socrates",
  },
  {
    quote: "Whereof one cannot speak, thereof one must be silent",
    author: "Ludwig Wittgenstein",
  },
  {
    quote: "Entities should not be multiplied unnecessarily",
    author: "William of Ockham",
  },
  {
    quote:
      "The life of man (in a state of nature) is solitary, poor, nasty, brutish, and short",
    author: "Thomas Hobbes",
  },
  {
    quote: '"I think therefore I am" ("Cogito, ergo sum")',
    author: "René Descartes",
  },
  {
    quote: "He who thinks great thoughts, often makes great errors",
    author: "Martin Heidegger",
  },
  {
    quote: "We live in the best of all possible worlds",
    author: "Gottfried Wilhelm Leibniz",
  },
  {
    quote: "What is rational is actual and what is actual is rational",
    author: "G. W. F. Hegel",
  },
  {
    quote: "God is dead! He remains dead! And we have killed him.",
    author: "Friedrich Nietzsche",
  },
  {
    quote:
      "There is but one truly serious philosophical problem, and that is suicide",
    author: "Albert Camus",
  },
  {
    quote: "One cannot step twice in the same river",
    author: "Heraclitus",
  },
  {
    quote:
      "The greatest happiness of the greatest number is the foundation of morals and legislation",
    author: "Jeremy Bentham",
  },
  {
    quote: '"To be is to be perceived" ("Esse est percipi")',
    author: "Bishop George Berkeley",
  },
  {
    quote: "Happiness is not an ideal of reason but of imagination",
    author: "Immanuel Kant",
  },
  {
    quote: "No man's knowledge here can go beyond his experience",
    author: "John Locke",
  },
  {
    quote:
      "God is not willing to do everything, and thus take away our free will and that share of glory which belongs to us",
    author: "Niccolo Machiavelli",
  },
  {
    quote: "Liberty consists in doing what one desires",
    author: "John Stuart Mill",
  },
  {
    quote:
      "It is undesirable to believe a proposition when there is no ground whatever for supposing it true",
    author: "Bertrand Russell",
  },
  {
    quote: "Even while they teach, men learn",
    author: "Seneca the Younger",
  },
  {
    quote: "There is only one good, knowledge, and one evil, ignorance",
    author: "Socrates",
  },
  {
    quote: "If God did not exist, it would be necessary to invent Him",
    author: "Voltaire",
  },
  {
    quote:
      "This is patently absurd; but whoever wishes to become a philosopher must learn not to be frightened by absurdities",
    author: "Bertrand Russell",
  },
  {
    quote:
      "One cannot conceive anything so strange and so implausible that it has not already been said by one philosopher or another",
    author: "René Descartes",
  },
  {
    quote: "Leisure is the mother of philosophy",
    author: "Thomas Hobbes",
  },
  {
    quote:
      "Philosophy is a battle against the bewitchment of our intelligence by means of language",
    author: "Ludwig Wittgenstein",
  },
  {
    quote:
      "There is only one thing a philosopher can be relied upon to do, and that is to contradict other philosophers",
    author: "William James",
  },
  {
    quote:
      "We are what we repeatedly do. Excellence, then, is not an act, but a habit",
    author: "Aristotle",
  },
  {
    quote: "Only one man ever understood me, and he didn’t understand me",
    author: "G. W. F. Hegel",
  },
  {
    quote: "The mind is furnished with ideas by experience alone",
    author: "John Locke",
  },
  {
    quote: "Life must be understood backward. But it must be lived forward ",
    author: "Søren Kierkegaard",
  },
  {
    quote: "Science is what you know. Philosophy is what you don't know",
    author: "Bertrand Russell",
  },
  {
    quote:
      "Metaphysics is a dark ocean without shores or lighthouse, strewn with many a philosophic wreck",
    author: "Immanuel Kant",
  },
  {
    quote:
      "Philosophy is at once the most sublime and the most trivial of human pursuits",
    author: "William James",
  },
  {
    quote: "History is Philosophy teaching by examples",
    author: "Thucydides",
  },
  {
    quote:
      "He who is unable to live in society, or who has no need because he is sufficient for himself, must be either a beast or a god",
    author: "Aristotle",
  },
  {
    quote:
      "You can discover more about a person in an hour of play than in a year of conversation",
    author: "Plato",
  },
  {
    quote:
      "Things alter for the worse spontaneously, if they be not altered for the better designedly",
    author: "Francis Bacon",
  },
  {
    quote:
      "All that is necessary for the triumph of evil is that good men do nothing",
    author: "mistakenly attributed to Edmund Burke",
  },
  {
    quote:
      "Is man merely a mistake of God's? Or God merely a mistake of man's?",
    author: "Friedrich Nietzsche",
  },
  {
    quote: "I would never die for my beliefs because I might be wrong",
    author: "Bertrand Russell",
  },
  {
    quote:
      "Religion is the sign of the oppressed ... it is the opium of the people",
    author: "Karl Marx",
  },
  {
    quote: "Happiness is the highest good",
    author: "Aristotle",
  },
  {
    quote:
      "If men were born free, they would, so long as they remained free, form no conception of good and evil",
    author: "Baruch Spinoza",
  },
  {
    quote: "The greater the difficulty, the more glory in surmounting it",
    author: "Epicurus",
  },
  {
    quote: "Whatever is reasonable is true, and whatever is true is reasonable",
    author: "G. W. F. Hegel",
  },
  {
    quote:
      "Morality is not the doctrine of how we may make ourselves happy, but of how we may make ourselves worthy of happiness",
    author: "Immanuel Kant",
  },
  {
    quote: "Man is condemned to be free",
    author: "Jean-Paul Sartre",
  },
  {
    quote:
      "It is one thing to show a man that he is in error, and another to put him in possession of truth",
    author: "John Locke",
  },
  {
    quote:
      "I don’t know why we are here, but I’m pretty sure it is not in order to enjoy ourselves",
    author: "Ludwig Wittgenstein",
  },
  {
    quote:
      "That man is wisest who, like Socrates, realizes that his wisdom is worthless",
    author: "Plato",
  },
  {
    quote: "The only thing I know is that I know nothing",
    author: "Socrates",
  },
  {
    quote: "All is for the best in the best of all possible worlds",
    author: "Voltaire (in parody of Leibniz)",
  },
  {
    quote:
      "The function of prayer is not to influence God, but rather to change the nature of the one who prays",
    author: "Søren Kierkegaard",
  },
  {
    quote: "Man is born free, but is everywhere in chains",
    author: "Jean-Jacques Rousseau",
  },
  {
    quote:
      "Man will never be free until the last king is strangled with the entrails of the last priest",
    author: "Denis Diderot",
  },
  {
    quote:
      "If you would be a real seeker after truth, it is necessary that at least once in your life you doubt, as far as possible, all things",
    author: "René Descartes",
  },
  {
    quote:
      "Happiness lies in virtuous activity, and perfect happiness lies in the best activity, which is contemplative",
    author: "Aristotle",
  },
  {
    quote:
      "I can control my passions and emotions if I can understand their nature",
    author: "Spinoza",
  },
  {
    quote:
      "Philosophers have hitherto only interpreted the world in various ways; the point, however, is to change it",
    author: "Karl Marx",
  },
  {
    quote:
      "It is wrong always, everywhere and for everyone, to believe anything upon insufficient evidence",
    author: "W. K. Clifford",
  },
  {
    quote: "Virtue is nothing else than right reason",
    author: "Seneca the Younger",
  },
  {
    quote:
      "Freedom is secured not by the fulfilling of one's desires, but by the removal of desire",
    author: "Epictetus",
  },
  {
    quote: "In everything, there is a share of everything",
    author: "Anaxagoras",
  },
  {
    quote:
      "A little philosophy inclineth man's mind to atheism; but depth in philosophy bringeth men’s minds about to religion",
    author: "Sir Francis Bacon",
  },
  {
    quote:
      "The brave man is he who overcomes not only his enemies but his pleasures",
    author: "Democritus",
  },
  {
    quote:
      "Good and evil, reward and punishment, are the only motives to a rational creature",
    author: "John Locke",
  },
  {
    quote:
      "To do as one would be done by, and to love one's neighbor as oneself, constitute the ideal perfection of utilitarian morality",
    author: "John Stuart Mill",
  },
  {
    quote:
      "Everything that exists is born for no reason, carries on living through weakness, and dies by accident",
    author: "Jean-Paul Sartre",
  },
  {
    quote: "Man is the measure of all things",
    author: "Protagoras",
  },
  {
    quote: "We are too weak to discover the truth by reason alone",
    author: "St. Augustine",
  },
  {
    quote: "The mind is furnished with ideas by experience alone",
    author: "John Locke",
  },
];

export default function getQuote() {
  const newQuote = quoteList[Math.floor(Math.random() * quoteList.length)];

  return newQuote;
}
