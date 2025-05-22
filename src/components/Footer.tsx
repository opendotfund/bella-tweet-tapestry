
import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full bg-gray-100 py-6 mt-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center">
          <img 
            src="https://www.canva.com/design/DAGoMt4Ng-Q/DkibSJaC4DjXaZSAZwgBMg/view?utm_content=DAGoMt4Ng-Q&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hec036c2936" 
            alt="BellaBuysDips Footer" 
            className="max-w-full h-auto mb-4"
          />
          <p className="text-sm text-gray-600 text-center">
            © {new Date().getFullYear()} BellaBuysDips. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
