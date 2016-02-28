# Building the skin.

# Beep
exports.config =
  # See http://brunch.io/#documentation for docs.
  files:
    javascripts:
      joinTo: 'app.js'
    stylesheets:
      joinTo:
        'fonts.css': [
          /app[^\/\\]fonts\.css$/
        ]
        'app.css': [
          /\bnormalize-css\b/
          /styles[\/\\]app[\/\\]/
        ]
        'font-awesome.css': [
          /styles[\/\\]font-awesome[\/\\]/
        ]
      order:
        before: [
          /app[^\/\\]fonts\.css$/
        ]
    templates:
      joinTo: 'app.js'
