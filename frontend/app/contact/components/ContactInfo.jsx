import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import ContactForm from './ContactForm';

export default function ContactInfo() {
  const contactDetails = [
    { 
      icon: MapPin, 
      title: 'Our Location', 
      text: 'KMCT College of Legal Studies, Near KCA Stadium, Mundodu, Ullody P.O., Manya, Kasaragod, Kerala 671321' 
    },
    { 
      icon: Phone, 
      title: 'Phone Number', 
      text: (
        <a href="https://wa.me/918086634000" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
          +91 80866 34000
        </a>
      )
    },
    { 
      icon: Mail, 
      title: 'Email Address', 
      text: (
        <a href="mailto:kmctcls@kmct.org" className="hover:text-primary transition-colors">
          kmctcls@kmct.org
        </a>
      )
    },
    { 
      icon: Clock, 
      title: 'Working Hours', 
      text: 'Monday – Saturday: 9:00 AM – 4:30 PM' 
    },
  ];

  return (
    <div className="space-y-12 mt-12">
      {/* Contact Details Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {contactDetails.map((info, idx) => {
          const IconComp = info.icon;
          return (
            <div key={idx} className="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                <IconComp className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{info.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{info.text}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Form and Google Map */}
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
        <ContactForm />
        
        {/* Google Map */}
        <div className="w-full h-full min-h-[500px] rounded-2xl overflow-hidden shadow-lg border border-slate-200">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15664.129379659021!2d76.012586!3d10.844781!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba7ba004cfb92d5%3A0xc3f8e547df607684!2sKMCT%20Law%20College%2C%20Kuttippuram!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0, minHeight: '500px' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="KMCT College of Legal Studies Location"
            className="w-full h-full grayscale-[20%] contrast-[95%]"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
