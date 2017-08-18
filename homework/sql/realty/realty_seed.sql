TRUNCATE TABLE APARTMENT;
TRUNCATE TABLE OFFICE;
TRUNCATE TABLE STOREFRONT;

ALTER SEQUENCE apartment_id_seq RESTART WITH 1;
ALTER SEQUENCE office_id_seq RESTART WITH 1;
ALTER SEQUENCE storefront_id_seq RESTART WITH 1;

INSERT INTO apartment(apartment_num, num_bedrooms, num_bathrooms, address, tenant, occupied, sqfoot, price) VALUES (1000, 1, 1, '740 Bona Ave', 'Kris Green', TRUE, 1000, 1250);
INSERT INTO apartment(apartment_num, num_bedrooms, num_bathrooms, address, tenant, occupied, sqfoot, price) VALUES (1001, 2, 2, '850 Ponce Ave', 'Joe Rogan', TRUE, 2000, 2250);

INSERT INTO office(office_num, address, occupied, price, kitchen_avail, sqfoot, owner, outdoor_seating) VALUES (14, '30306 Buckhead Rd', FALSE, 4000, TRUE, 4000, 'Nancy Jane', FALSE);
INSERT INTO office(office_num, address, occupied, price, kitchen_avail, sqfoot, owner, outdoor_seating) VALUES (15, '20204 Peachtree Rd', TRUE, 5000, FALSE, 5000, 'Billy Bob', TRUE);

INSERT INTO storefront(address, occupied, price, kitchen_avail, sqfoot, owner, outdoor_seating) VALUES ('1337 Skeet Rd', TRUE, 1500, TRUE, 2000, 'Jon Strickland', FALSE);
INSERT INTO storefront(address, occupied, price, kitchen_avail, sqfoot, owner, outdoor_seating) VALUES ('8998 Savannah Rd', FALSE, 2300, FALSE, 4000, 'Suzy Que', TRUE);


