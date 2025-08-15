
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface BookDemoEmailRequest {
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
  adminEmail: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const bookingData: BookDemoEmailRequest = await req.json();

    console.log("Received booking data:", bookingData);

    // Format the email content
    const emailContent = `
      <h2>New Demo Booking Request</h2>
      
      <h3>Personal Information:</h3>
      <ul>
        <li><strong>Name:</strong> ${bookingData.name}</li>
        <li><strong>Email:</strong> ${bookingData.email}</li>
        <li><strong>Position:</strong> ${bookingData.position}</li>
        ${bookingData.phoneNumber ? `<li><strong>Phone:</strong> ${bookingData.phoneNumber}</li>` : ''}
      </ul>

      <h3>School Information:</h3>
      <ul>
        <li><strong>School Name:</strong> ${bookingData.schoolName}</li>
        <li><strong>School Address:</strong> ${bookingData.schoolAddress}</li>
        <li><strong>School Type:</strong> ${bookingData.schoolType}</li>
        <li><strong>Student Count:</strong> ${bookingData.studentCount}</li>
        ${bookingData.currentSystem ? `<li><strong>Current System:</strong> ${bookingData.currentSystem}</li>` : ''}
      </ul>

      <h3>Demo Preferences:</h3>
      <ul>
        <li><strong>Preferred Demo Date:</strong> ${bookingData.preferredDemoDate}</li>
        <li><strong>Preferred Demo Time:</strong> ${bookingData.preferredDemoTime}</li>
        <li><strong>Demo Mode:</strong> ${bookingData.demoMode}</li>
        <li><strong>Preferred Contact Method:</strong> ${bookingData.preferredContactMethod}</li>
        <li><strong>Implementation Timeframe:</strong> ${bookingData.timeframe}</li>
        ${bookingData.specificNeeds.length > 0 ? `<li><strong>Interested Features:</strong><br>${bookingData.specificNeeds.map(feature => `• ${feature}`).join('<br>')}</li>` : ''}
        ${bookingData.additionalComments ? `<li><strong>Additional Comments:</strong> ${bookingData.additionalComments}</li>` : ''}
      </ul>

      <p><strong>Submitted on:</strong> ${new Date().toLocaleString()}</p>
    `;

    // Send email to admin
    const emailResponse = await resend.emails.send({
      from: "EduSchools Demo <onboarding@resend.dev>",
      to: [bookingData.adminEmail],
      subject: `New Demo Request from ${bookingData.name} - ${bookingData.schoolName}`,
      html: emailContent,
    });

    console.log("Email sent successfully:", emailResponse);

    return new Response(JSON.stringify({ success: true, emailId: emailResponse.data?.id }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-demo-email function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
