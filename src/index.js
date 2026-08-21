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
          subject: 'New Quote Request',
          content: [{ type: 'text/plain', value: JSON.stringify(data, null, 2) }]
        })
      });
      return Response.json({ success: true });
    }
    
    return new Response('<!DOCTYPE html><html><head><title>ClearVue Auto</title></head><body><h1>Site is up</h1><p>API works at /api/quote</p></body></html>', { 
      headers: { 'content-type': 'text/html' } 
    });
  }
}
