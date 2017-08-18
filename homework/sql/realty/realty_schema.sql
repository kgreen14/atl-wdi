drop table if exists apartment;
drop table if exists storefront;
drop table if exists office;


CREATE TABLE apartment (
  number INT UNIQUE PRIMARY KEY,
  apartment_num INT,
  num_bedrooms INT,
  num_bathrooms INT,
  address VARCHAR NOT NULL,
  tenant VARCHAR,
  occupied BOOLEAN,
  sqfoot INT,
  price INT,
);

CREATE TABLE office (
    number INT UNIQUE PRIMARY KEY,
    office_num INT,
    address VARCHAR,
    occupied BOOLEAN,
    price INT,
    kitchen_avail BOOLEAN,
    sqfoot INT,
    owner VARCHAR,
    outdoor_seating BOOLEAN NOT NULL DEFAULT FALSE
);

CREATE TABLE storefront (
    number INT UNIQUE PRIMARY KEY,
    address VARCHAR,
    occupied BOOLEAN,
    price INT,
    kitchen_avail BOOLEAN,
    sqfoot INT,
    owner VARCHAR,
    outdoor_seating BOOLEAN NOT NULL DEFAULT FALSE
);