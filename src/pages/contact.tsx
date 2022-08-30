import React from 'react';
import { Helmet } from 'react-helmet';
import ContactContent from '../components/ContactContent';

const ContactPage: React.FC = () => {
  return (
    <div className="mx-auto max-w-[1920px] pt-16">
      <Helmet>
        <title>Contact - Freddy Liu</title>
        <meta property="og:title" content="Contact - Freddy Liu" />
        <meta property="og:url" content="https://www.freddyliu.me/" />
        <link rel="canonical" href="https://www.freddyliu.me/" />
      </Helmet>
      <ContactContent />
    </div>
  );
};

export default ContactPage;
