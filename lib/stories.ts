export interface StoryPage {
  pageLeftNum: number;
  pageRightNum: number;
  chapterTitle: string;
  leftParagraphs: string[];
  rightParagraphs: string[];
  illustrationUrl: string;
  illustrationAlt: string;
  leftDoodleIcon?: string;
  rightDoodleIcon?: string;
}

export interface Story {
  id: string;
  title: string;
  subtitle: string;
  coverImage: string;
  description: string;
  pages: StoryPage[];
}

export const STORIES: Story[] = [
  {
    id: 'rachits-magical-car',
    title: "Rachit’s Magical Car",
    subtitle: 'Romans Grocery',
    coverImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD7sQABOc8GNaN96MVovQCakQrDH8O36UPJ62IH1tyJ-C5jGIt25jcBMloV6AFZ65-Mn2Lc8eRRSRd8e_SZrF2H2vWrMCkQh8h2QVxImyex1ckBRpbtT33b4bBYv59ty3lzrFZ7h56qyETg9dwWmIYPGK19Nzwv3mpM9yT0t_atHM5tflLhJbVHSI1z4ywf2vKiKVCK2bA1i06yDjBi_63q5Z28dqVDIkvbzDvdTz9JYehB8VYQ031AiHlyEOapeiN1bA7VlyyXqhM',
    description: 'How a 25-year-old shopkeeper in Mumbai discovered the incredible power parked right outside Romans Grocery.',
    pages: [
      {
        pageLeftNum: 2,
        pageRightNum: 3,
        chapterTitle: 'Chapter One: Romans Grocery',
        leftParagraphs: [
          'Once upon a time, there was a boy named Rachit. He was 25 years old and lived with his parents in Mumbai. He was very poor.',
          'A few years later, on 12 May 2014, he opened a new business, his own shop, and named it "Romans Grocery."',
          'He bought a new car with the money he had earned from his shop, but he didn\'t know about the magical car parked quietly outside.'
        ],
        rightParagraphs: [
          'One day, he opened his shop and parked his car nearby. He waited for a few hours, but that day nobody came to his shop.',
          'He said to himself, "Why has nobody come to my shop?" and the moment he said this line, suddenly a crowd of people stood near his shop!'
        ],
        illustrationUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD7sQABOc8GNaN96MVovQCakQrDH8O36UPJ62IH1tyJ-C5jGIt25jcBMloV6AFZ65-Mn2Lc8eRRSRd8e_SZrF2H2vWrMCkQh8h2QVxImyex1ckBRpbtT33b4bBYv59ty3lzrFZ7h56qyETg9dwWmIYPGK19Nzwv3mpM9yT0t_atHM5tflLhJbVHSI1z4ywf2vKiKVCK2bA1i06yDjBi_63q5Z28dqVDIkvbzDvdTz9JYehB8VYQ031AiHlyEOapeiN1bA7VlyyXqhM',
        illustrationAlt: 'A charming red car parked near a cozy shop on a sunny day',
        leftDoodleIcon: 'storefront',
        rightDoodleIcon: 'auto_awesome'
      },
      {
        pageLeftNum: 4,
        pageRightNum: 5,
        chapterTitle: 'Chapter Two: The Miracle Outside',
        leftParagraphs: [
          'This happened to him again. He then said to himself, "I want to be very rich."',
          'The next day when he opened his shop, again a crowd of people came, and in this way, he got rich.',
          'Many times this happened with Rachit, so he realized that these miracles were happening because of his magical car.'
        ],
        rightParagraphs: [
          'From that day on, whatever he wanted, he would talk to himself near the car and he would get it.',
          'And so, Rachit and his magical car lived happily, fulfilling every good wish with joy!'
        ],
        illustrationUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCRU_1F_jg-TC6tceBLXuPEHbCP6vPgX95rhah5dFAU1PnRKjUkHZWqzoUseQTq9QPrd912D2Z8hgM9_d8E1qs5qSG8bniGNWz9xtQjFekadUrxdhBKUtNotmQJH6w3wGpiBiwP9SN52i63wKYM9yEz4ZHyos9OwwtqujXEW3-IyBqgUBT2-aaLDl8cX6LYyBlXrqwWbEtI4rrRvimjmY6saUKUsqnbEQjG-gB9KQSOwJIXSO3EIulb91hNZPVbixOi0M8oBNigAwI',
        illustrationAlt: 'A fairytale castle symbolizing prosperity and magical wishes granted',
        leftDoodleIcon: 'payments',
        rightDoodleIcon: 'stars'
      }
    ]
  },
  {
    id: 'rohits-spooky-road-trip',
    title: "Rohit’s Spooky Road Trip",
    subtitle: 'The Phantom Petrol Pump',
    coverImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCdtbTpMZTq3TsQRyUdzbSQGvyQ3wLCt_7MDQ24bccUZiS6SoG4w3LOMgq4Ba7rzfUP3Nx_5IhEqUiVP7-i-9RVZfPtEoq8vhjrqky_5haWSaB6DAj9gsTMk0_fJmsKtEeQz3gktmdukubuECY5BZIc8E_Tq2qumhlelzx-IYTY0m8FfN4SQxbUSK_cl5SSaqL_X0q7WhtxOI7XJoqzKR0pDJLhaamWfelrYGB9dI-7j43I2y5YcBmWB0aWUS-tuz86djM7_8daZa0',
    description: 'A 1:00 am highway adventure with hostel friends Rohit, Arham, and Raman that turned hair-raisingly mysterious.',
    pages: [
      {
        pageLeftNum: 2,
        pageRightNum: 3,
        chapterTitle: 'Chapter One: The 1:00 AM Drive',
        leftParagraphs: [
          'Once upon a time, there lived a 22-year-old hostel boy who wanted to explore horror places.',
          'Two of his best friends, Arham and Raman, also wanted to explore those places. They were very excited to visit, but they didn\'t know what was going to come in their future adventure.',
          'So they went off by road at 1:00 am.'
        ],
        rightParagraphs: [
          'After two hours of driving (at 3:00 am), their fuel almost ran out, so they stopped at an empty petrol pump.',
          'Arham and Raman went to the toilet while Rohit sat in the car.'
        ],
        illustrationUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCdtbTpMZTq3TsQRyUdzbSQGvyQ3wLCt_7MDQ24bccUZiS6SoG4w3LOMgq4Ba7rzfUP3Nx_5IhEqUiVP7-i-9RVZfPtEoq8vhjrqky_5haWSaB6DAj9gsTMk0_fJmsKtEeQz3gktmdukubuECY5BZIc8E_Tq2qumhlelzx-IYTY0m8FfN4SQxbUSK_cl5SSaqL_X0q7WhtxOI7XJoqzKR0pDJLhaamWfelrYGB9dI-7j43I2y5YcBmWB0aWUS-tuz86djM7_8daZa0',
        illustrationAlt: 'A boy holding a lantern in a misty, dark forest on a midnight adventure',
        leftDoodleIcon: 'time_to_leave',
        rightDoodleIcon: 'local_gas_station'
      },
      {
        pageLeftNum: 4,
        pageRightNum: 5,
        chapterTitle: 'Chapter Two: Statues in the Night',
        leftParagraphs: [
          'After a while, they came back. Raman sat in the car. While filling the petrol, Arham saw a car and noticed that the people inside were like statues.',
          'He went near the car. Meanwhile, Rohit and Raman were talking when they saw Arham rushing back to the car.',
          'He drove off at a speed of 249 km/hr!'
        ],
        rightParagraphs: [
          'Rohit and Raman asked him what happened, so he parked later and told them what he saw; he told them that when he went near the car, he saw that the people inside didn\'t have faces.',
          'Rohit and Raman were terrified.'
        ],
        illustrationUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBW3nQAH5-Cwd_WjieYa_sGotCTkDk6XPTpSjo4gRlDcLakPZCBGskImOMAFjENvktdgLL3CbzrzWkj01_Ormo-3tRM5fmb__xeM5n-pFCITXOHC9W2uPgiyBHDTeQ_BDsy26Is1ZTv10LKggZt8bHl_cVIeVQKD40iRJc7JFtJpe3ffofU4R-yXg0mlMAo-QlUlB9LntJhX0iYGntTHxCgSaijVjM58menanrTpATZTlxDHP9lZRUbRpIUDpAWyfhYsXa9eGSmfdk',
        illustrationAlt: 'A mysterious ghostly spirit floating in the starry night',
        leftDoodleIcon: 'speed',
        rightDoodleIcon: 'visibility_off'
      },
      {
        pageLeftNum: 6,
        pageRightNum: 7,
        chapterTitle: 'Chapter Three: The Disappearing Pump',
        leftParagraphs: [
          'After they were far enough from the petrol pump, they saw a car owner standing near his vehicle asking for petrol.',
          'They saw him and noticed there was a petrol pump 100m away, but the car owner said there had been no petrol pump in the past 200km.',
          'Rohit, Raman, and Arham were terrified, so they took a U-turn and headed back towards the hostel.'
        ],
        rightParagraphs: [
          'After 100m of driving back, they did not see the petrol pump and realized that the petrol pump never existed!',
          'Safe back at their hostel, the three friends vowed never to take midnight shortcuts again.'
        ],
        illustrationUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD7sQABOc8GNaN96MVovQCakQrDH8O36UPJ62IH1tyJ-C5jGIt25jcBMloV6AFZ65-Mn2Lc8eRRSRd8e_SZrF2H2vWrMCkQh8h2QVxImyex1ckBRpbtT33b4bBYv59ty3lzrFZ7h56qyETg9dwWmIYPGK19Nzwv3mpM9yT0t_atHM5tflLhJbVHSI1z4ywf2vKiKVCK2bA1i06yDjBi_63q5Z28dqVDIkvbzDvdTz9JYehB8VYQ031AiHlyEOapeiN1bA7VlyyXqhM',
        illustrationAlt: 'A quiet road winding back towards safety through the trees',
        leftDoodleIcon: 'u_turn_left',
        rightDoodleIcon: 'nightlight'
      }
    ]
  },
  {
    id: 'india-independence-day',
    title: 'The Day India Got Independence',
    subtitle: 'जय हिन्द वन्दे मातरम्',
    coverImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDUVGQhn6EOe-syHjsrPckhthAoPZhiPe-L-KIJEOd8zmdDCTWZiNeByQnsrZNWb3ACPtLTmFAPZfKEmJEJH1LjxNiiG6raloCYTSJm-Gm_1rnJ1nI39jetlAfEtmsWOAATH_wTF1sWtxBovIPdz2NWMALJxoIFVt3iD5JECt3E8mL0gAlBaSwkw4_YlURShmNaDzRWhVEW68XWQVJ-1Z3MQEHC_xebtxo4b8RqNKkaAuySlOT2BYEcPwbpWfTyZkF2Hu-Y9CRZFic',
    description: 'A homage to 15 August 1947 and our brave freedom fighters who sacrificed everything for the nation.',
    pages: [
      {
        pageLeftNum: 2,
        pageRightNum: 3,
        chapterTitle: 'Chapter One: १५ अगस्त १९४७',
        leftParagraphs: [
          'भारत को १५ अगस्त १९४७ में स्वतंत्रता मिली।',
          'इस चीज़ के लिए हमारे स्वतंत्रता सेनानियों ने लड़ाई करी, जैसे—भगत सिंह, सुभाष चंद्र बोस, रानी लक्ष्मी बाई और सरदार वल्लभ भाई पटेल भी सेना में शामिल थे।',
          'उन्होंने अपने देश के लिए अपनी जान गवाई।'
        ],
        rightParagraphs: [
          'इन जैसे लोगों के लिए सैल्यूट होना चाहिए:',
          'जय हिन्द वन्दे मातरम्',
          'जय हिन्द वन्दे मातरम्',
          'जय हिन्द वन्दे मातरम्'
        ],
        illustrationUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDUVGQhn6EOe-syHjsrPckhthAoPZhiPe-L-KIJEOd8zmdDCTWZiNeByQnsrZNWb3ACPtLTmFAPZfKEmJEJH1LjxNiiG6raloCYTSJm-Gm_1rnJ1nI39jetlAfEtmsWOAATH_wTF1sWtxBovIPdz2NWMALJxoIFVt3iD5JECt3E8mL0gAlBaSwkw4_YlURShmNaDzRWhVEW68XWQVJ-1Z3MQEHC_xebtxo4b8RqNKkaAuySlOT2BYEcPwbpWfTyZkF2Hu-Y9CRZFic',
        illustrationAlt: 'A grand celebration with children holding the national flag at sunrise',
        leftDoodleIcon: 'flag',
        rightDoodleIcon: 'military_tech'
      }
    ]
  }
];

