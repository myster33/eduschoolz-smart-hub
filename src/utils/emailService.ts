
// Email service for sending form data to admin
export interface BookDemoFormData {
  name: string;
  email: string;
  schoolName: string;
  position: string;
  phoneNumber: string;
  schoolType: string;
  studentCount: string;
  currentSystem: string;
  specificNeeds: string[];
  preferredContactMethod: string;
  timeframe: string;
  additionalComments: string;
  preferredDemoDate: string;
  preferredDemoTime: string;
  demoMode: string;
  schoolAddress: string;
}

export const sendBookDemoEmail = async (formData: BookDemoFormData): Promise<void> => {
  // Option 1: Using EmailJS (frontend solution)
  // First, you would need to install EmailJS: npm install @emailjs/browser
  // Then set up your EmailJS account and get your service ID, template ID, and public key
  
  /*
  import emailjs from '@emailjs/browser';
  
  const templateParams = {
    to_email: 'admin@eduschools.co.za',
    from_name: formData.name,
    from_email: formData.email,
    school_name: formData.schoolName,
    school_address: formData.schoolAddress,
    position: formData.position,
    phone: formData.phoneNumber,
    school_type: formData.schoolType,
    student_count: formData.studentCount,
    current_system: formData.currentSystem,
    specific_needs: formData.specificNeeds.join(', '),
    contact_method: formData.preferredContactMethod,
    timeframe: formData.timeframe,
    demo_date: formData.preferredDemoDate,
    demo_time: formData.preferredDemoTime,
    demo_mode: formData.demoMode,
    comments: formData.additionalComments,
    submission_date: new Date().toLocaleString()
  };

  await emailjs.send(
    'YOUR_SERVICE_ID', 
    'YOUR_TEMPLATE_ID', 
    templateParams, 
    'YOUR_PUBLIC_KEY'
  );
  */

  // Option 2: Send to your backend API
  const response = await fetch('/api/send-demo-request', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      ...formData,
      adminEmail: 'admin@eduschools.co.za',
      submissionDate: new Date().toISOString()
    }),
  });

  if (!response.ok) {
    throw new Error('Failed to send demo request');
  }

  // Option 3: Using a service like Formspree, Netlify Forms, or similar
  /*
  const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: 'admin@eduschools.co.za',
      subject: `Demo Request from ${formData.name} - ${formData.schoolName}`,
      message: formatEmailMessage(formData)
    }),
  });
  */
};

// Helper function to format the email message
export const formatEmailMessage = (formData: BookDemoFormData): string => {
  return `
Demo Request Details:

PERSONAL INFORMATION:
- Name: ${formData.name}
- Email: ${formData.email}
- Position: ${formData.position}
- Phone: ${formData.phoneNumber || 'Not provided'}

SCHOOL INFORMATION:
- School Name: ${formData.schoolName}
- School Address: ${formData.schoolAddress}
- School Type: ${formData.schoolType}
- Student Count: ${formData.studentCount}
- Current System: ${formData.currentSystem || 'None specified'}

DEMO PREFERENCES:
- Preferred Demo Date: ${formData.preferredDemoDate}
- Preferred Demo Time: ${formData.preferredDemoTime}
- Demo Mode: ${formData.demoMode}
- Preferred Contact Method: ${formData.preferredContactMethod}
- Implementation Timeframe: ${formData.timeframe}
- Specific Features Interested In: ${formData.specificNeeds.length > 0 ? formData.specificNeeds.join(', ') : 'Not specified'}
- Additional Comments: ${formData.additionalComments || 'None'}

Submitted on: ${new Date().toLocaleString()}
  `.trim();
};
