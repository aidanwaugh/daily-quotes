export const quoteLibrary = [
  {
    category: 'life',
    index: 0,
    quotes: [
      `0/1 Introversion is a preference for environments that are not overstimulating. - Susan Cain`,
      `1/1 Dare to be truthful. - Jordan Peterson`,
    ],
  },
  {
    category: 'habit',
    index: 1,
    quotes: [
      `0/7 It's easy to get on the path of mastery. The real challenge lies in staying on it. - George Leonard`,
      `1/7 Surrender to your teacher and to the demands of your discipline. Surrender your proficiency to reach a higher level of proficiency. - George Leonard`,
      `2/7 Practice is best conceived of as a noun, not as something you do, but as something you have, something you are. - George Leonard`,
      `3/7 The hacker is willing to stay on the plateau indefinitely. - George Leonard`,
      `4/7 The Obsessive finds themselves on a plateau and won't accept it. He doesn't understand the necessity for periods of development on the plateau - George Leonard`,
      `5/7 The Dabbler loves the newness. Thinks they are a connoiseur of novelty but really just an eternal kid. Dabbler/Obsessive/Hacker - George Leonard`,
    ],
  },
  {
    category: 'mindful',
    index: 2,
    quotes: [
      `It is foolish for us to worry about what other people think of us and particularly foolish for us to seek the approval of people whose values we reject. - Epictetus`,
      `Some things are in our power and some are not. Examples of things not in our power: reputation, power, and the things that are not our own acts. - Epictetus`,
      `Remember, if you think the things that are in the power of others are in your own power, then you will be hindered, frustrated, and annoyed. - Epictetus`,
      `Mindfulness represents an alternative to living reactively. -  Dan Harris`,
    ],
  },
  {
    category: 'misc',
    index: 3,
    quotes: [
      `Who can I meet who can positively influence me? Let their glow rub off on you. Befriend the person you think is the biggest, baddest, most successful person in your field. - Darren Hardy`,
      `It doesn't do any good to try to get rid of our so-called negative aspects, because in that process we also get rid of our basic wonderfulness. - Pema Chodron`,
      `It's part of being human to feel discomfort. We don't even have to call it suffering. - Pema Chodron`,
      `The warrior's journey is often extremely inconvenient. - Pema Chodron`,
      `Without desires we'd become depressed. - Kelly McGonigal`,
      `Things become very clear when there is nowhere to escape. - Pema Chodron`,
      `Thinking that we can find some lasting pleasure and avoid pain is a hopeless cycle that goes round and round endlessly and causes us to suffer greatly. - Pema Chodron`,
      `Blaming others is a very common, ancient, well-perfected device for trying to feel better. Blaming is a way to protect our hearts. - Pema Chodron`,
      `Disappointment, embarrassment, irritation, resentment, anger, jealousy, and fear, instead of being bad news, are actually very clear moments that teach us where it is that we're holding back. They teach us to perk up and lean in when we feel we'd rather collapse and back away. - Pema Chodron`,
      `Meet whatever arises with curiosity and don't make it such a big deal. - Pema Chodron`,
    ],
  },
  {
    category: 'journal',
    index: 4,
    quotes: [
      `If someone could only see my actions and not hear my words, what would they say are my priorities? - James Clear`,
      `What are you putting off out of fear? - Timothy Ferriss`,
      `Which 20% of sources are causing 80% of my problems and unhappiness? Which 20% of sources are resulting in 80% of my desired outcomes and happiness? - Timothy Ferriss`,
      `Fear setting: What is it costing you—financially emotionally and physically—to postpone action?`,
      `What are the core values that drive my life and work? - James Clear`,
      `How am I living and working with integrity right now? - James Clear`,
      `The question you should be asking isn't What do I want? or What are my goals? but What would excite me? - Timothy Ferriss`,
      `How should I spend my energy in a way that is consistent with my deepest values? - Jim Loehr`,
      `Do you know what your own dopamine triggers are? - Kelly McGonigal`,
      `What do you turn to when you're feeling stressed, anxious, or down? - Kelly McGonigal`,
      `How are you feeling? How are you really feeling? - Jerry Colona`,
      `What am I not saying that needs to be said? - Jerry Colona`,
      `What am I saying that's not being heard? - Jerry Colona`,
      `What's being said that I'm not hearing? - Jerry Colona`,
      `How have I complicit in creating the conditions in my life that I say I don't want? - Jerry Colona`,
      `When you worry, ask yourself, 'What am I choosing to not see right now?' - Ryan Holiday`,
      `What is something that you would like to do more of, or stop putting off, because you know that doing it will improve the quality of your life? - Kelly McGonigal`,
      `What is the most important long-term goal you'd like to focus your energy on? What immediate “want” is most likely to distract you or tempt you away from this goal? - Kelly McGonigal`,
      `Do you identify more with your impulses and desires, or with your long-term goals and values? - Kelly McGonigal`,
    ],
  },
];

function quoteLength(categoryName) {
  return quoteLibrary.find((section) => section.category == categoryName).quotes.length - 1;
}

export const quoteIndexTracker = [
  { category: 'life', currentIndex: 0, categoryLength: quoteLength('life') },
  { category: 'habit', currentIndex: 0, categoryLength: quoteLength('habit') },
  {
    category: 'mindful',
    currentIndex: 0,
    categoryLength: quoteLength('mindful'),
  },
  { category: 'misc', currentIndex: 0, categoryLength: quoteLength('misc') },
  {
    category: 'journal',
    currentIndex: 0,
    categoryLength: quoteLength('journal'),
  },
];
