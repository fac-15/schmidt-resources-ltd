BEGIN;

DROP TABLE IF EXISTS resources CASCADE;
CREATE TABLE resources (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  type VARCHAR(10) NOT NULL,
  skill VARCHAR(12) NOT NULL,
  level VARCHAR(10) NOT NULL,
  location TEXT NOT NULL
);

INSERT INTO resources (name, type, skill, level) VALUES
('online html', 'online', 'html','easy', 'www.html.com'),
('online css', 'online', 'css','hard', 'www.css.com'),
('book html', 'book', 'html','medium', 'fac'),
('harry', 'human', 'html','easy', 'pub'),
('css', 'book', 'css','easy', 'fac');


COMMIT;
