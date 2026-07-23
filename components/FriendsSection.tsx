'use client';

import React, { useState } from 'react';

interface Friend {
  id: string;
  name: string;
  avatarUrl?: string;
  iconName?: string;
  quote: string;
  role: string;
}

const FRIENDS: Friend[] = [
  {
    id: 'ghost',
    name: 'Ghost',
    avatarUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBW3nQAH5-Cwd_WjieYa_sGotCTkDk6XPTpSjo4gRlDcLakPZCBGskImOMAFjENvktdgLL3CbzrzWkj01_Ormo-3tRM5fmb__xeM5n-pFCITXOHC9W2uPgiyBHDTeQ_BDsy26Is1ZTv10LKggZt8bHl_cVIeVQKD40iRJc7JFtJpe3ffofU4R-yXg0mlMAo-QlUlB9LntJhX0iYGntTHxCgSaijVjM58menanrTpATZTlxDHP9lZRUbRpIUDpAWyfhYsXa9eGSmfdk',
    quote: '"Boo! Just kidding... I prefer cuddles and warm marshmallow tea!"',
    role: 'Gentle Spirit of Meadowbrook',
  },
  {
    id: 'wand',
    name: 'Wand',
    iconName: 'auto_fix',
    quote: '"With a flicker and a flare, magic sparkles in the air!"',
    role: 'Wish Granting Companion',
  },
  {
    id: 'car',
    name: 'Car',
    avatarUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuD7sQABOc8GNaN96MVovQCakQrDH8O36UPJ62IH1tyJ-C5jGIt25jcBMloV6AFZ65-Mn2Lc8eRRSRd8e_SZrF2H2vWrMCkQh8h2QVxImyex1ckBRpbtT33b4bBYv59ty3lzrFZ7h56qyETg9dwWmIYPGK19Nzwv3mpM9yT0t_atHM5tflLhJbVHSI1z4ywf2vKiKVCK2bA1i06yDjBi_63q5Z28dqVDIkvbzDvdTz9JYehB8VYQ031AiHlyEOapeiN1bA7VlyyXqhM',
    quote: '"Beep beep! The road ahead is filled with stars and smiles!"',
    role: 'Little Red Traveler',
  },
  {
    id: 'castle',
    name: 'Castle',
    avatarUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCRU_1F_jg-TC6tceBLXuPEHbCP6vPgX95rhah5dFAU1PnRKjUkHZWqzoUseQTq9QPrd912D2Z8hgM9_d8E1qs5qSG8bniGNWz9xtQjFekadUrxdhBKUtNotmQJH6w3wGpiBiwP9SN52i63wKYM9yEz4ZHyos9OwwtqujXEW3-IyBqgUBT2-aaLDl8cX6LYyBlXrqwWbEtI4rrRvimjmY6saUKUsqnbEQjG-gB9KQSOwJIXSO3EIulb91hNZPVbixOi0M8oBNigAwI',
    quote: '"Welcome inside my teapot towers! Bedtime stories are served daily."',
    role: 'Starlight Sanctuary',
  },
];

export const FriendsSection: React.FC = () => {
  const [activeFriend, setActiveFriend] = useState<Friend | null>(null);

  return (
    <section className="py-20 px-4 md:px-8 bg-surface-container overflow-hidden relative" id="characters">
      <div className="absolute inset-0 doodle-bg opacity-30 pointer-events-none" />
      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="font-headline-xl text-4xl md:text-5xl text-center text-tertiary mb-12 transform rotate-2">
          Meet the Friends
        </h2>

        <div className="flex flex-wrap justify-center gap-8 md:gap-12">
          {FRIENDS.map((friend, idx) => (
            <div
              key={friend.id}
              onClick={() => setActiveFriend(friend)}
              className={`flex flex-col items-center group cursor-pointer bounce-button ${
                idx % 2 === 1 ? 'mt-6 md:mt-10' : ''
              }`}
            >
              <div className="w-28 h-28 md:w-36 md:h-36 rounded-full colored-pencil-border overflow-hidden mb-4 transform group-hover:rotate-12 transition-transform duration-300 shadow-md bg-tertiary-container flex items-center justify-center">
                {friend.avatarUrl ? (
                  <img
                    src={friend.avatarUrl}
                    alt={friend.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <span className="material-symbols-outlined text-4xl md:text-5xl text-tertiary">
                    {friend.iconName}
                  </span>
                )}
              </div>
              <span className="font-headline-lg text-2xl md:text-3xl text-primary">
                {friend.name}
              </span>
            </div>
          ))}
        </div>

        {/* Friend Popup Modal */}
        {activeFriend && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm animate-fade-in">
            <div className="bg-surface p-8 max-w-md w-full colored-pencil-border shadow-2xl rounded-3xl paper-edge text-center relative">
              <button
                onClick={() => setActiveFriend(null)}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-surface-container text-tertiary transition-colors"
                aria-label="Close modal"
              >
                <span className="material-symbols-outlined">close</span>
              </button>

              <div className="w-24 h-24 mx-auto rounded-full colored-pencil-border overflow-hidden mb-4 bg-tertiary-container flex items-center justify-center shadow-md">
                {activeFriend.avatarUrl ? (
                  <img
                    src={activeFriend.avatarUrl}
                    alt={activeFriend.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <span className="material-symbols-outlined text-4xl text-tertiary">
                    {activeFriend.iconName}
                  </span>
                )}
              </div>

              <h3 className="font-headline-lg text-3xl text-primary mb-1">
                {activeFriend.name}
              </h3>
              <p className="font-label-md text-secondary mb-4">{activeFriend.role}</p>

              <div className="bg-surface-container-low p-4 rounded-xl colored-pencil-border mb-6">
                <p className="font-headline-lg text-2xl text-tertiary italic">
                  {activeFriend.quote}
                </p>
              </div>

              <button
                onClick={() => setActiveFriend(null)}
                className="bounce-button bg-primary text-on-primary font-label-md py-3 px-6 rounded-full colored-pencil-border"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
