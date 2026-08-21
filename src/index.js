export default {
  async fetch(request) {
    const url = new URL(request.url);
    
    if (url.pathname === '/api/quote' && request.method === 'POST') {
      const data = await request.json();
      await fetch('https://api.mailchannels.net/tx/v1/send', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({
          personalizations: [{ to: [{ email: 'clearvueauto@yahoo.com' }] }],
          from: { email: 'sender@mailchannels.net', name: 'ClearVue Auto' },
          subject: 'Test Quote',
          content: [{ type: 'text/plain', value: JSON.stringify(data) }]
        })
      });
      return Response.json({ success: true });
    }
    
    return new Response('Worker is running. Homepage goes here.', { 
      headers: { 'content-type': 'text/html' } 
    });
  }
}
