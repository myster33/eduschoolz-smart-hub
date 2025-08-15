
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
  // Send booking data to Supabase edge function
  const response = await fetch('https://cywhqczjppupwiliofbo.supabase.co/functions/v1/send-demo-email', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN5d2hxY3pqcHB1cHdpbGlvZmJvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTUxNzUwNzgsImV4cCI6MjA3MDc1MTA3OH0.nNib6UdaoCaYH8jWoZAwQUbnCN0D_KcATG3ucG5ZcQk`,
    },
    body: JSON.stringify({
      ...formData,
      adminEmail: 'admin@eduschools.co.za',
      submissionDate: new Date().toISOString()
    }),
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({ error: 'Unknown error' }));
    console.error('Email sending failed:', errorData);
    throw new Error(`Failed to send demo request: ${errorData.error || 'Unknown error'}`);
  }

  const result = await response.json();
  console.log('Email sent successfully:', result);
};

// Helper function to format the email message (kept for compatibility)
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
