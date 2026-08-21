const HTML = String.raw`
PASTE YOUR ENTIRE index.html FILE HERE
`;

export default {
  async fetch(request) {
    const url = new URL(request.url);
    
    if (url.pathname === '/api/quote' && request.method === 'POST') {
      try {
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
            from: { email: 'sender@mailchannels.net', name: 'ClearVue Auto' },
            subject: `Quote: ${data.year} ${data.make} ${data.model}`,
            content: [{ type: 'text/plain', value: text }]
          })
        });
        
        return Response.json({ success: true });
      } catch (e) {
        return Response.json({ success: false, error: e.message }, { status: 500 });
      }
    }
    
    return new Response(HTML, { 
      headers: { 'content-type': 'text/html' } 
    });
  }
}
