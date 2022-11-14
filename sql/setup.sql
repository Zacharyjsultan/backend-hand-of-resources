-- Use this file to define your SQL tables
-- The SQL in this file will be executed when you run `npm run setup-db`

DROP table if exists shoes;
--- board (company, material, size)
--- wheels (company, duro, size )
--- trucks (company, bushing, size)
--- bearings (company, abec)


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