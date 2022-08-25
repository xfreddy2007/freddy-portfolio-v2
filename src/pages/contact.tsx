import React from 'react';
import { Helmet } from 'react-helmet';
import ContactContent from '../components/ContactContent';

const ContactPage: React.FC = () => {
  return (
    <div className="mx-auto max-w-[1920px] bg-white pt-16 dark:bg-black dark:text-white">
      <Helmet>
        <title>Contact - Freddy Liu</title>
        <meta property="og:title" content="Contact - Freddy Liu" />
        <meta property="og:url" content="https://www.freddyliu.io/" />
        <link rel="canonical" href="https://www.freddyliu.io/" />
      </Helmet>
      <ContactContent />
    </div>
  );
};

export default ContactPage;
