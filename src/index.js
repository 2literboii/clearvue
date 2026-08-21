export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    
    // Handle quote form POST
    if (url.pathname === '/api/quote' && request.method === 'POST') {
      try {
        const data = await request.json();
        const text = `New Quote Request
Name: ${data.name}
Phone: ${data.phone} 
Vehicle: ${data.year} ${data.make} ${data.model}
VIN: ${data.vin || 'Not provided'}`;
        
        const mailRes = await fetch('https://api.mailchannels.net/tx/v1/send', {
          method: 'POST',
          headers: { 'content-type': 'application/json' },
          body: JSON.stringify({
            personalizations: [{ to: [{ email: 'clearvueauto@yahoo.com' }] }],
            from: { email: 'sender@mailchannels.net', name: 'ClearVue Auto' },
            subject: `Quote: ${data.year} ${data.make} ${data.model}`,
            content: [{ type: 'text/plain', value: text }]
          })
        });
        
        if (!mailRes.ok) {
          return Response.json({ success: false, error: 'Email failed' }, { status: 500 });
        }
        
        return Response.json({ success: true });
      } catch (e) {
        return Response.json({ success: false, error: e.message }, { status: 500 });
      }
    }
    
    // For everything else, redirect to your GitHub Pages or raw HTML
    // TEMP FIX: Just return your site HTML directly
    if (url.pathname === '/' || url.pathname === '/index.html') {
      return new Response(`<!DOCTYPE html>
<html>
<head><title>ClearVue Auto</title></head>
<body>
<h1>ClearVue Auto Glass</h1>
<p>Site is up. Form posts to /api/quote</p>
<!-- Paste your actual index.html content here OR -->
<script>window.location.href='https://2literboii.github.io/clearvue/'</script>
</body>
</html>`, { headers: { 'content-type': 'text/html' } });
    }
    
    return new Response('Not found', { status: 404 });
  }
}
