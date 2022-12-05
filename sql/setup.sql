-- Use this file to define your SQL tables
-- The SQL in this file will be executed when you run `npm run setup-db`

DROP table if exists shoes;
--- board (company, material, size)
--- wheels (company, duro, size )
--- trucks (company, bushing, size)
--- bearings (company, abec)
DROP TABLE IF EXISTS cities;

DROP TABLE IF EXISTS tacos;

DROP TABLE IF EXISTS animals;

DROP TABLE IF EXISTS dogs;

CREATE TABLE shoes (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  brand VARCHAR,
  sole VARCHAR,
  cost INT
);

INSERT INTO shoes (brand, sole, cost) VALUES
('Converse', 'vulcanized', 60),
('AB', 'vulcanized', 90),
('Adidas', 'vulcanized',  80),
('Nike', 'cupsole',  100);

CREATE TABLE cities (
    id bigint generated always AS identity PRIMARY KEY,
    name varchar,
    population int,
    weather varchar
);

INSERT INTO
    cities (name, population, weather)
VALUES
    ('toronto', 124, 'cold'),
    ('ottawa', 2338, 'cold'),
    ('montreal', 608, 'cold'),
    ('vancouver', 1242134, 'cold'),
    ('saskatchewan', 252, 'cold'),
    ('regina', 14, 'cold');

    CREATE TABLE tacos (
    id bigint generated always AS identity PRIMARY KEY,
    name varchar,
    rating int NOT NULL,
    spice varchar
);

INSERT INTO
    tacos (name, rating, spice)
VALUES
    ('Carnitas', 10, 'meh'),
    ('Barbacoa', 7, 'meh'),
    ('Al Pastor', 10, 'meh'),
    ('Mole', 7, 'meh'),
    ('Poblano', 9, 'meh');

    CREATE TABLE dogs (
    id bigint generated always AS IDENTITY PRIMARY KEY,
    name varchar,
    breed varchar,
     int 
);

INSERT INTO
    dogs (name, breed, age)
VALUES
    ('Alf', 'mastiffe', 6),
    ('Rauf', 'great dane', 1),
    ('Trauf', 'chupicabra', 12),
    ('Mauf', 'labrador', 8),
    ('Lauf', 'pug', 5),
    ('Tauf', 'malemieux', 12);

    CREATE TABLE animals (
    id bigint generated always AS IDENTITY PRIMARY KEY,
    name varchar,
    location varchar,
    remaining int NOT NULL
);

INSERT INTO
    animals (name, location, remaining)
VALUES
    ('Dog', 'everywhere', 30),
    ('fish', 'water', 300),
    ('birds', 'sky', 2),
    ('turtles', 'everywhere', 9),
    ('deer', 'woods', 15),
    ('ants', 'ground', 11);