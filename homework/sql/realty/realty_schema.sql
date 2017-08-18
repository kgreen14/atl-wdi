drop table if exists storefront;
drop table if exists office;
drop table if exists apartment;

CREATE TABLE apartment (
  number INT UNIQUE PRIMARY KEY,
  apartment_num INT,
  num_bedrooms INT,
  num_bathrooms INT,
  address VARCHAR(255) NOT NULL,
  tenant VARCHAR(255),
  occupied BOOLEAN,
  sqfoot INT,
  price INT,
);

CREATE TABLE office (
    id serial primary key,
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
    id serial primary key,
    address VARCHAR,
    occupied BOOLEAN,
    price INT,
    kitchen_available BOOLEAN,
    sq_ft INT,
    owner VARCHAR,
    outdoor_seating BOOLEAN NOT NULL DEFAULT FALSE
);