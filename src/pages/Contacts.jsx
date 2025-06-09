import React from 'react';
import MainContacts from '../components/MainContacts';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Contacts = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-grow flex items-center justify-center">
        <MainContacts />
      </div>
      <Footer />
    </div>
  );
};

export default Contacts;

