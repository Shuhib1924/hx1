const createHomepageTemplate = () => /*html*/`
  <!DOCTYPE html>
  <html>
    <head>
      <title>My Reading List</title>
      <script src="https://unpkg.com/htmx.org@1.9.12"></script>
      <link rel="stylesheet" href="/styles.css">
    </head>
    <body>
      <header>
        <h1>My Reading List</h1>
      </header>
      <main>
        <div class="book-list">
          <!-- book list here later -->
          <button hx-get="/books" hx-target=".book-list">Show Books</button>
          <button hx-get="/books" hx-swap="beforeend" hx-target=".book-list">before end</button>
          <button hx-get="/books" hx-swap="afterend" hx-target=".book-list">after end</button>
          <button hx-get="/books" hx-swap="afterend" hx-target=".book-list"> Books</button>
          <button hx-get="/books" hx-swap="outerHTML">outer</button>
          <button hx-get="/books" hx-swap="innerHTML">inner</button>
        </div>
        <div class="add-book-form">
          <h2>What do you want to read?</h2>
          <!-- form template here later -->
            <form>
            <input
              id="title"
              name="title"
              placeholder="title"
              type="text"
            />
            <input
              id="author"
              name="author"
              placeholder="author"
              type="text"
            />
            <button hx-post="/books" hx-target=".book-list ul" hx-swap="beforeend">Add</button>
          </form>
        </div>
      </main>
    </body>
  </html>
`;

export default createHomepageTemplate;