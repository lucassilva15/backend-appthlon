import app from './app';

app.set('view engine', 'ejs');

app.listen(process.env.PORT || 3333, () =>
  console.log(`App listening in localhost:3333`)
);
