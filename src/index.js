export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    
    // Handle your quote form
    if (url.pathname === '/api/quote' && request.method === 'POST') {
      const data = await request.json();
      const text = `New Quote Request
Name: ${data.name}
Phone: ${data.phone} 
Vehicle: ${data.year} ${data.make} ${data.model}
VIN: ${data.vin || 'Not provided'}`;
      
      await fetch('https://api.mailchannels.net/tx/v1/send', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({
          personalizations: [{ to: [{ email: 'clearvueauto@yahoo.com' }] }],
          from: { email: 'noreply@clearvueauto.com', name: 'ClearVue Auto' },
          subject: `Quote: ${data.year} ${data.make} ${data.model}`,
          content: [{ type: 'text/plain', value: text }]
        })
      });
      
      return Response.json({ success: true });
    }
    
    // Serve index.html and other files
    return env.ASSETS.fetch(request);
  }
}
