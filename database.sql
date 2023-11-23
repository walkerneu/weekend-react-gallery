CREATE TABLE "gallery" (
  "id" SERIAL PRIMARY KEY,
  "url" VARCHAR,
  "title" VARCHAR,
  "description" TEXT,
  "likes" INTEGER DEFAULT 0
);

INSERT INTO "gallery" 
  ("url", "title", "description")
  VALUES
  ('images/cello1.jpg', 'Cello!', 'Photo of my cat, Cello, practicing sideways boxing.');
  ('images/cello2.jpg', 'Cello!', 'Photo of my cat, Cello, being a haunted entity in need of exorcism.');
  ('images/exit1.jpg', 'Exit!', 'Photo of my cat, Exit, looking like a heavenly angel.');
  ('images/exit2.jpg', 'Exit!', 'Photo of my cat, Exit, looking at a bug on the ceiling.');
  ('images/goat_small.jpg', 'Goat!', 'Photo of a goat taken at Glacier National Park.');
  