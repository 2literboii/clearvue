// Cloudflare Pages Function - POST /api/quote - EMAIL ONLY NO SMS
export async function onRequestOptions() {
  return new Response(null, {
    status: 204,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
      "Access-Control-Max-Age": "86400",
    },
  });
}
export async function onRequestPost(context) {
  const { request } = context;
  try {
    const data = await request.json().catch(() => ({}));
    const name = (data.name || "").trim();
    const phone = (data.phone || "").trim();
    const email = (data.email || "").trim();
    const vin = (data.vin || "").trim();
    const vehicle = (data.vehicle || "").trim();
    const serviceNeeded = data.serviceNeeded || "Windshield Replacement";
    const serviceLocation = data.serviceLocation || "Shop - Vacaville";
    const serviceType = data.serviceType || "FREE Mobile Service";
    const preferredDate = data.preferredDate || "";
    const message = data.message || "";
    if (!name || !phone) {
      return new Response(JSON.stringify({ success: false, error: "Name and phone required" }), {
        status: 400, headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" },
      });
    }
    const city = serviceLocation;
    const subject = `New Quote Request - Clear Vue AutoGlass`;
    const plainText = `New Quote Request - Clear Vue AutoGlass

Name: ${name}
Phone: ${phone}
Email: ${email || "Not provided"}
Vehicle: ${vehicle || "Not provided"}
VIN: ${vin || "Not provided"}
Service: ${serviceNeeded}
City / Service Location: ${city}
Service Type: ${serviceType}
Preferred Date: ${preferredDate || "Not provided"}
Message: ${message || "None"}
Source: clearvueauto.com / Cloudflare Pages - Email Only
Time: ${new Date().toISOString()}

Reply: Call ${phone} or email ${email || "N/A"}
`;
    const htmlContent = `<div style="font-family:Inter,Arial,sans-serif;max-width:600px;margin:0 auto;background:#FFFBF7;border:1px solid #eee;border-radius:16px;overflow:hidden"><div style="background:#000;color:#fff;padding:16px 20px;display:flex;justify-content:space-between;align-items:center"><div style="font-weight:900;font-size:16px">Clear Vue <span style="color:#FF6B00">AutoGlass</span></div><div style="background:#FF6B00;color:#fff;font-size:10px;font-weight:800;letter-spacing:0.12em;padding:4px 10px;border-radius:999px">NEW QUOTE - EMAIL ONLY</div></div><div style="padding:20px"><h2 style="margin:0 0 12px;font-size:18px;font-weight:800">New Quote Request - Clear Vue AutoGlass</h2><table style="width:100%;border-collapse:collapse;font-size:14px"><tr><td style="padding:8px 0;color:#666;font-weight:600;width:150px">Name</td><td style="padding:8px 0;font-weight:700">${name}</td></tr><tr><td style="padding:8px 0;color:#666;font-weight:600">Phone</td><td style="padding:8px 0;font-weight:700">${phone}</td></tr><tr><td style="padding:8px 0;color:#666;font-weight:600">Email</td><td style="padding:8px 0">${email || "Not provided"}</td></tr><tr><td style="padding:8px 0;color:#666;font-weight:600">Vehicle</td><td style="padding:8px 0;font-weight:600">${vehicle || "Not provided"}</td></tr><tr><td style="padding:8px 0;color:#666;font-weight:600">VIN</td><td style="padding:8px 0;font-family:monospace">${vin || "Not provided"}</td></tr><tr><td style="padding:8px 0;color:#666;font-weight:600">Service Needed</td><td style="padding:8px 0">${serviceNeeded}</td></tr><tr><td style="padding:8px 0;color:#666;font-weight:600">City / Location</td><td style="padding:8px 0">${city}</td></tr><tr><td style="padding:8px 0;color:#666;font-weight:600">Service Type</td><td style="padding:8px 0">${serviceType}</td></tr><tr><td style="padding:8px 0;color:#666;font-weight:600">Preferred Date</td><td style="padding:8px 0">${preferredDate || "Not provided"}</td></tr></table><div style="margin-top:16px;padding:12px 14px;background:#fff;border:1px solid #eee;border-radius:12px"><div style="font-size:11px;font-weight:800;letter-spacing:0.12em;color:#999;text-transform:uppercase;margin-bottom:6px">Message</div><div style="font-size:14px;line-height:1.6;white-space:pre-wrap">${message || "None"}</div></div></div></div>`;
    let emailSent = false; let emailError = null;
    try {
      const mailRes = await fetch("https://api.mailchannels.net/tx/v1/send", {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          personalizations: [{ to: [{ email: "clearvueauto@yahoo.com", name: "Clear Vue AutoGlass" }] }],
          from: { email: "noreply@clearvueauto.com", name: "Clear Vue AutoGlass Website" },
          subject, content: [{ type: "text/plain", value: plainText }, { type: "text/html", value: htmlContent }],
        }),
      });
      if (mailRes.status === 202 || mailRes.status === 200 || mailRes.status === 204) emailSent = true;
      else { const errText = await mailRes.text(); emailError = `MailChannels ${mailRes.status}: ${errText.slice(0, 400)}`; }
    } catch (e) { emailError = e.message; }
    return new Response(JSON.stringify({ success: true, emailSent, emailError, message: "Quote Request Sent! We'll contact you within 1 hour" }), { status: 200, headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" } });
  } catch (err) {
    return new Response(JSON.stringify({ success: false, error: err.message }), { status: 500, headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" } });
  }
}
function escapeHtml(str){return String(str).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");}
