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
          <div class="search" style="text-align: center;">
          <input
            type="search"
            name="search"
            placeholder="Search books by title..."
            hx-post="/books/search"
            hx-trigger="input changed delay:300ms"
            hx-target=".book-list"
          />
        </div>
        <div class="book-list">
          <!-- book list here later -->
          <button hx-get="/books" hx-target=".book-list" hx-trigger="dblclick">Show Books by double click</button>
          <button hx-get="/books" hx-swap="beforeend" hx-target=".book-list">before end</button>
          <button hx-get="/books" hx-swap="afterend" hx-target=".book-list">after end</button>
          <button hx-get="/books" hx-swap="afterend" hx-target=".book-list"> Books</button>
          <button hx-get="/books" hx-swap="outerHTML">outer</button>
          <button hx-get="/books" hx-swap="innerHTML">inner</button>
        </div>
        <div class="add-book-form">
          <h2>What do you want to read?</h2>
          <!-- form template here later -->
            <form
            hx-post="/books"
            hx-target=".book-list ul"
            hx-swap="beforeend"
            hx-on::after-request="document.querySelector('form').reset()"
          >
            <input
              id="title"
              name="title"
              placeholder="title"
              type="text"
              required
            />
            <input
              id="author"
              name="author"
              placeholder="author"
              type="text"
              required
            />
            <button
              hx-on:click="console.log('new book added', event)"
            >Add</button>
          </form>
        </div>
      </main>
    </body>
  </html>
`;

export default createHomepageTemplate;