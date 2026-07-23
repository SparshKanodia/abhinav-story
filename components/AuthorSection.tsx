'use client';

import React from 'react';

export const AuthorSection: React.FC = () => {
  return (
    <section className="py-24 px-4 md:px-8 relative flex justify-center" id="about">
      <div className="bg-[#fdfbf7] p-8 md:p-12 max-w-2xl w-full colored-pencil-border shadow-[12px_12px_0px_0px_rgba(112,93,0,0.05)] transform rotate-1 paper-edge relative">
        {/* Tape detail */}
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-32 h-8 bg-surface-variant/50 rotate-[-2deg] shadow-sm rounded-sm pointer-events-none" />

        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="w-44 h-44 md:w-48 md:h-48 rounded-full colored-pencil-border overflow-hidden flex-shrink-0 shadow-md">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuA6sigomzLIOLk44al3gbeGmMLt7fcNXdyAniQCShLqm6-YAIA_2Vg-tAhwPOyQhL-YzvfsW8rfb5mBvU8qJn4sGtBY0Kmo_H3UKwLQ_UmwZUDmYSgmWl7LEzCUFNP7tEmcQmb61B9y_AHsVM0pt3lZooLyZYLrp9Xpb3IK6pF4OKPoWdsL9lHAPsCv_tdEGHFNUH2C_UBbdxt11gmM6nu2-_mJyq0Ql6JmH0wy1uUQT5sdMHjYaWpMZDNMWQPxQPeI3LewvrUTxMg"
              alt="Abhinav Mehrotra"
              className="w-full h-full object-cover"
            />
          </div>

          <div>
            <h2 className="font-headline-xl text-3xl md:text-4xl text-secondary mb-4 transform -rotate-1">
              Abhinav Mehrotra
            </h2>
            <p className="font-body-md text-on-surface-variant mb-6 leading-relaxed">
              Hello! I love spinning tales that bring a little magic into everyday life. Grab a cozy blanket, a warm drink, and let&apos;s go on an adventure together!
            </p>
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuApyqv4m6Vc0c-mx4gq1benEyS_r-A1qlJ9yGSrsV-F7NNyq5eUjbOXOyraEz9_mgCegRPreey14zoSDX4OLHfw94RiiL7fnx8Re9rA-dMI74h0qBq3MGL5P3vVLiwMWnC0EsTjnjfZIK2Wuxi3Dq7nRN4LU_ug_2AZzpM_sl5dgGwLXGy2z-UvCZ3aK8DfMTilxK_6KT0PYxAQ99kB1PIt6BnhWFHpX7e16aTLq_HPS-iN-BtdcF00ho9lZjtL2Bi02GbW_UQbt6c"
              alt="Abhinav Mehrotra signature"
              className="h-12 opacity-80 mix-blend-multiply"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
