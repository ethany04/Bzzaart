CREATE DATABASE compensation;

CREATE TABLE IF NOT EXISTS compensation.artists_data(
  artist_id SMALLINT(10) UNSIGNED,
  username VARCHAR(50),
  pronouns VARCHAR(50),
  city VARCHAR(100),
  us_state VARCHAR(30),
  genre VARCHAR(50),
  artwork_id_list TEXT(65535),
  customer_id_list TEXT(65535),
  available_for_custom BOOLEAN(),
);

LOAD DATA LOCAL INFILE '/docker-entrypoint-initdb.d/data_files/artists.csv'
INTO TABLE compensation.artists_data
FIELDS TERMINATED BY ','
ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 LINES
(artist_id,'name',pronouns,city,'state',genre,artwork_id_list,customer_id_list,available_for_custom);

CREATE TABLE IF NOT EXISTS compensation.artworks_data(
  artwork_id SMALLINT(10) UNSIGNED,
  genre VARCHAR(50),
  artist_id SMALLINT(10) UNSIGNED,
  price SMALLINT(10) UNSIGNED,
  art_url NVARCHAR(65535),
);

LOAD DATA LOCAL INFILE '/docker-entrypoint-initdb.d/data_files/artworks.csv'
INTO TABLE compensation.artworks_data
FIELDS TERMINATED BY ','
ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 LINES
(art_id,genre,artist_id,price,art_url);

CREATE TABLE IF NOT EXISTS compensation.customers_data(
  cid SMALLINT(10) UNSIGNED,
  username VARCHAR(50),
  pronouns VARCHAR(50),
  city VARCHAR(100),
  us_state VARCHAR(30),
  interested_genres TEXT(65535),
  low_price SMALLINT(10) UNSIGNED,
  high_price SMALLINT(10) UNSIGNED,
  artist_id_list TEXT(65535),
  artwork TEXT(65535)
);

LOAD DATA LOCAL INFILE '/docker-entrypoint-initdb.d/data_files/customers.csv'
INTO TABLE compensation.customers_data
FIELDS TERMINATED BY ','
ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 LINES
(cid,name,pronouns,city,state,interested_genres,low_price,high_price,artist_id_list,artwork_id_list);


/*
CREATE TABLE favorite_colors (
  name VARCHAR(20),
  color VARCHAR(10)
);

INSERT INTO favorite_colors
  (name, color)
VALUES
  ('Lancelot', 'blue'),
  ('Galahad', 'yellow');
  */