const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>byt-e projects</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">

  <style>
   body { font-family: "Raleway", sans-serif; background: #151515; color: #faf8ff; margin: 0; }
   .container { width: 100vw; height: 100vh; display: flex; flex-direction: column; justify-content: center; align-items: center; }
   h1 { margin-top: 0.25rem; margin-bottom: 3rem; font-size: 4rem; }
   h5 { margin: 0; font-size: 2rem; }
   #url:before { content: "8"; animation: nameswitch 3s linear infinite; }
   a { text-decoration: none; color: #535353; }
   .portfolio-card { display: flex; justify-content: space-between; align-items: center; min-width: 350px; padding: 1rem; border-top: 1px solid #535353; border-bottom: 1px solid #535353; margin-top: -1px; position: relative; z-index: 1; transition: .3s ease; }
   .portfolio-card h3 { margin: 0; }
   .portfolio-card .description { transition: .3s ease; }
   .subtitle { color: #aaa9ac; font-variant: small-caps; }
   .portfolio-card:hover { border-color: #aaa9ac; z-index: 9; }
   .portfolio-card:hover .description { color: #aaa9ac; }

   @keyframes nameswitch {
     0% { content: "8"; color: #8685ef; } 50% { content: "eqq"; color: #beaee8; } 100% { content: "egg"; color: #e7c7f5; }
   }
  </style>
</head>
<body>
  <div class="container">
    <h5 style="color: #aaa9ac;">welcome to</h5>
    <h1><span id="url">.byt-e.site</span></h1>
    <a href="https://egg.byt-e.site" class="portfolio-card">
      <span class="title">
        <span class="subtitle">main</span>
        <h3 style="color: #beaee8;">eggbyte</h3>
      </span>
      <span class="description">characters, projects, interests</span>
    </a>
    <a href="https://8.byt-e.site" class="portfolio-card">
      <span class="title">
        <span class="subtitle">dev</span>
        <h3 style="color: #8685ef;">8byte</h3>
      </span>
      <span class="description">web + software dev</span>
    </a>
  </div>
</body>
</html>`;

export default {
  async fetch(request) {
    return new Response(html, {
      headers: { "Content-Type": "text/html" },
    });
  }
};
