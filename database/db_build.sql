BEGIN;

-- resource table
DROP TABLE IF EXISTS resources CASCADE;
CREATE TABLE resources (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  type VARCHAR(10) NOT NULL,
  skill VARCHAR(12) NOT NULL,
  level VARCHAR(10) NOT NULL,
  location TEXT NOT NULL
);

INSERT INTO resources (name, type, skill, level, location) VALUES
('online html', 'online', 'html','easy', 'www.html.com'),
('online css', 'online', 'css','hard', 'www.css.com'),
('book html', 'book', 'html','medium', 'fac'),
('harry', 'human', 'html','easy', 'pub'),
('css', 'book', 'css','easy', 'fac'),
('NodeJs', 'book', 'css','easy', 'fac');

-- type table

DROP TABLE IF EXISTS type CASCADE;
CREATE TABLE type (
  name VARCHAR(10) NOT NULL,
  index INTEGER NOT NULL
);

INSERT INTO type (name, index) VALUES
('All', 1),
('Book', 2),
('Human', 3),
('Online', 4);

-- skill table

DROP TABLE IF EXISTS skill CASCADE;
CREATE TABLE skill (
  name VARCHAR(12) NOT NULL,
  index INTEGER NOT NULL,
  level VARCHAR(12)
);

INSERT INTO skill (name, index, level) VALUES
('All', 1, ''),
('CSS', 2, 'beginner'),
('JavaScript', 3, 'medium'),
('HTML', 4, 'beginner'),
('NodeJS', 5, 'advanced');

-- level table

DROP TABLE IF EXISTS level CASCADE;
CREATE TABLE level (
  name VARCHAR(10) NOT NULL,
  index INTEGER NOT NULL
);

INSERT INTO level (name, index) VALUES
('All', 1),
('Easy', 2),
('Medium', 3),
('Hard', 4);

COMMIT;
