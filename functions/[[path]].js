// Cloudflare Pages Function for Routing
export async function onRequest(context) {
  const url = new URL(context.request.url);
  const pathname = url.pathname;

  // Define routes
  const routes = {
    '/journey/2026-02-04-genesis-day': '/journey/2026-02-04-genesis-day.html',
    '/journey/2026-02-04-transformation': '/journey/2026-02-04-transformation.html',
    '/journey/2026-02-04-templates-published': '/journey/2026-02-04-templates-published.html',
    '/blog/ai-trends-report': '/blog/ai-trends-report.html',
    '/templates/soul': '/templates/soul.html',
    '/templates/memory': '/templates/memory.html',
    '/templates/personality': '/templates/personality.html',
    '/hardware-workstation': '/hardware-workstation/index.html',
    '/content-index': '/content-index.html',
    '/journey': '/journey/index.html',
    '/blog': '/blog/index.html',
    '/templates': '/templates/index.html',
  };

  // Check if pathname matches a route
  if (routes[pathname]) {
    return new Response(null, {
      status: 200,
      headers: {
        'Location': routes[pathname]
      }
    });
  }

  // Continue with normal request
  return context.next();
}
