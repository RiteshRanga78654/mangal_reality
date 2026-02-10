"use client";
import { useState, useEffect } from "react";

const CRM_LEAD_SOURCE_ID = "6900666be2ae86b62b3c6a7d";
const CRM_API_URL = "https://crm-service.svsconstructions.com/v1/create-leads";
const EMAIL_API_URL = "https://crm-service.svsconstructions.com/v1/email";
const NOTIFICATION_EMAIL = "svsconstructions.marketing@gmail.com";

export default function Pop() {
  const [formData, setFormData] = useState({ 
    name: "", 
    email: "", 
    phone: "", 
    message: "",
    url: "https://svsconstructions.com/contact"
  });
  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);

  // Auto-open popup after 10 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Function to check for duplicates
  const checkForDuplicates = async (email, phone) => {
    try {
      const response = await fetch("/api/v1/check-duplicates", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": "mySuperSecretApiKey123",
        },
        body: JSON.stringify({ email, phone })
      });
      
      if (!response.ok) {
        console.warn("Duplicate check failed, proceeding with submission");
        return { emailExists: false, phoneExists: false };
      }
      
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error checking duplicates:", error);
      return { emailExists: false, phoneExists: false };
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isSubmitting) return;

    // Validate required fields
    if (!formData.name || !formData.email || !formData.phone) {
      setStatusMessage("❌ Please fill in all required fields.");
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatusMessage("❌ Please enter a valid email address.");
      return;
    }

    // Phone validation (10 digits)
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(formData.phone.replace(/\D/g, ''))) {
      setStatusMessage("❌ Please enter a valid 10-digit phone number.");
      return;
    }

    setIsSubmitting(true);
    setLoading(true);
    setStatusMessage("");

    try {
      // 1️⃣ Check for duplicates
      const duplicateCheck = await checkForDuplicates(formData.email, formData.phone);

      if (duplicateCheck.emailExists || duplicateCheck.phoneExists) {
        setStatusMessage("ℹ️ We have already received your query. We'll revert to you shortly!");
        setIsSubmitting(false);
        setLoading(false);
        return;
      }

      // 2️⃣ Save Contact to your own API
      try {
        await fetch("/api/v1/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "x-api-key": "mySuperSecretApiKey123",
          },
          body: JSON.stringify(formData),
        });
        console.log("✅ Contact saved to local API");
      } catch (error) {
        console.error("Error saving contact:", error);
        // Continue with submission even if this fails
      }

      // 3️⃣ Send Email Notification via CRM-Service
      try {
        const emailPayload = {
          project: "SVS Belmond",
          name: formData.name,
          headMail: NOTIFICATION_EMAIL,
          email: formData.email,
          mobile: formData.phone,
          message: formData.message || "Pop-up Contact Form Submission",
          generatedBy: "Website Pop-up",
          url: typeof window !== 'undefined' ? window.location.href : formData.url,
          leadSource: "Website Pop-up Form",
        };

        const emailResponse = await fetch(EMAIL_API_URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(emailPayload),
        });

        if (!emailResponse.ok) {
          const errText = await emailResponse.text();
          console.error("Email API Error:", errText);
        } else {
          console.log("✅ Email notification sent successfully");
        }
      } catch (error) {
        console.error("Error sending email:", error);
        // Continue even if email fails
      }

      // 4️⃣ Create Lead in CRM with Lead Source ID
      try {
        const crmPayload = {
          name: formData.name,
          mobile: formData.phone,
          emailId: formData.email,
          Notes: formData.message || "Pop-up Contact Form Submission - SVS Belmond",
          Source: `Website Pop-up: ${typeof window !== 'undefined' ? window.location.href : formData.url}`,
          leadSourceId: CRM_LEAD_SOURCE_ID,
          
          // Email template configuration
          sendUserConfirmation: true,
          templateName: "SVS_BELMOND_CONFIRMATION",
          emailTemplate: {
            subject: "Thank You for Your Interest in SVS Belmond",
            body: `Dear @{Lead:FirstName,},

Thank you for expressing your interest in SVS Belmond, our premium plotted development near Bhogapuram Airport, Vizag.

SVS Belmond is thoughtfully designed to offer strategic location benefits, steady appreciation potential, and a serene living environment — making it ideal for both investment and future residential plans. With rapid infrastructure growth in the region, now is an excellent time to explore this opportunity.

Our team will be in touch with you shortly to share more details and help you plan a site visit at your convenience. Should you have any immediate queries, feel free to contact us at +91 799 555 5559.

We look forward to welcoming you to Belmond.

Warm regards,
Team SVS Constructions
www.svsconstructions.com`,
            attachBrochure: true
          }
        };

        console.log("Sending to CRM:", crmPayload);

        const crmResponse = await fetch(CRM_API_URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
          },
          body: JSON.stringify(crmPayload),
        });

        console.log("CRM Response status:", crmResponse.status);

        if (!crmResponse.ok) {
          const crmError = await crmResponse.text();
          console.error("CRM API Error:", crmError);
          throw new Error(`CRM API failed with status: ${crmResponse.status}`);
        }

        // Try to parse response
        const responseText = await crmResponse.text();
        console.log("CRM Response:", responseText);

        let crmResult;
        if (responseText && responseText.trim().length > 0) {
          try {
            crmResult = JSON.parse(responseText);
          } catch (e) {
            console.log("CRM response was not JSON, treating as success");
            crmResult = { success: true };
          }
        } else {
          crmResult = { success: true };
        }

        // Check for duplicate
        if (crmResult.isDuplicate || crmResult.message?.toLowerCase().includes("duplicate")) {
          setStatusMessage("ℹ️ We have already received your query. We'll revert to you shortly!");
        } else {
          console.log("✅ Lead created in CRM successfully");
        }

      } catch (error) {
        console.error("CRM Error:", error);
        // Don't fail the entire submission if CRM fails
      }

      // ✅ Success - Show thank you message
      setStatusMessage("✅ Thank you! Form submitted successfully!");
      setIsSubmitted(true);
      setShowThankYou(true);

      // Redirect to thank you page after delay
      setTimeout(() => {
        if (typeof window !== 'undefined') {
          window.location.replace("/thank-you");
        }
      }, 1500);

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
        url: "https://svsconstructions.com/contact",
      });

    } catch (error) {
      console.error("Error submitting form:", error);
      setStatusMessage("❌ There was a problem submitting the form. Please try again or call us at +91 799 555 5559.");
    } finally {
      setIsSubmitting(false);
      setLoading(false);
    }
  };

  const handleClose = () => {
    setIsOpen(false);
    setShowThankYou(false);
    setStatusMessage("");
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-2xl overflow-hidden relative flex">
        
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-3 right-3 text-white hover:text-gray-300 text-2xl font-bold z-20 cursor-pointer bg-black/20 rounded-full w-8 h-8 flex items-center justify-center"
          aria-label="Close popup"
        >
          ×
        </button>
        
        {/* Form Layout */}
        <>
          {/* Left Side - Form */}
          <div className="w-1/2 p-4">
            <h2 className="text-xl font-semibold text-center text-[#62796f] mb-4">
              Get in Touch
            </h2>
            {statusMessage && (
              <p className={`mb-3 text-center text-sm ${
                statusMessage.includes('✅') ? 'text-green-600' : 
                statusMessage.includes('ℹ️') ? 'text-blue-600' : 
                'text-red-600'
              }`}>
                {statusMessage}
              </p>
            )}
            <form onSubmit={handleSubmit} className="space-y-3">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your name*"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#62796f]"
                  required
                  disabled={isSubmitting}
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email*"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#62796f]"
                  required
                  disabled={isSubmitting}
                />
              </div>
              <div>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone number*"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#62796f]"
                  required
                  disabled={isSubmitting}
                  pattern="[0-9]{10}"
                  title="Please enter a valid 10-digit phone number"
                />
              </div>
              <div>
                <textarea
                  name="message"
                  placeholder="Your Query"
                  value={formData.message}
                  onChange={handleChange}
                  rows={2}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#62796f] resize-none"
                  disabled={isSubmitting}
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting || loading || isSubmitted}
                className={`w-full rounded-md py-2 text-sm font-semibold transition-all duration-300 cursor-pointer ${
                  isSubmitted 
                    ? 'bg-green-500 text-white' 
                    : 'bg-gradient-to-r from-[#62796f] to-[#8fa98c] text-white hover:opacity-90 disabled:opacity-50'
                }`}
              >
                {isSubmitted ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Submitted Successfully
                  </span>
                ) : isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Submitting...
                  </span>
                ) : (
                  "Submit Query"
                )}
              </button>
            </form>
          </div>
          
          {/* Right Side - Image */}
          <div className="w-1/2 relative">
            <img 
              src="/Assets/svspop-img.png" 
              alt="SVS Belmond - Real Estate" 
              className="w-full h-full object-cover"
            />
          </div>
        </>
        
      </div>
    </div>
  );
}