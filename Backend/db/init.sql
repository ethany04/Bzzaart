CREATE DATABASE compensation;
use compensation

CREATE TABLE IF NOT EXISTS artists_data(
  artist_id SMALLINT(10) UNSIGNED NOT NULL,
  username VARCHAR(50),
  pronouns VARCHAR(50),
  city VARCHAR(100),
  us_state VARCHAR(30),
  genre VARCHAR(50),
  artwork_id_list TEXT(65535),
  customer_id_list TEXT(65535),
  available_for_custom SMALLINT(1),
  profile_pic_url TEXT(65535)
);

LOAD DATA LOCAL INFILE '/docker-entrypoint-initdb.d/data_files/Artists.csv'
INTO TABLE artists_data
FIELDS TERMINATED BY ','
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 LINES
(artist_id,username,pronouns,city,us_state,genre,artwork_id_list,customer_id_list,available_for_custom,profile_pic_url);

CREATE TABLE IF NOT EXISTS artworks_data(
  artwork_id SMALLINT(10) UNSIGNED,
  art_name VARCHAR(100),
  genre VARCHAR(50),
  artist_id SMALLINT(10) UNSIGNED,
  price SMALLINT(10) UNSIGNED,
  descrip TEXT(65535),
  art_url TEXT(65535)
);

LOAD DATA LOCAL INFILE '/docker-entrypoint-initdb.d/data_files/Artworks.csv'
INTO TABLE artworks_data
FIELDS TERMINATED BY ','
ENCLOSED BY '"'
LINES TERMINATED BY '\r'
IGNORE 1 LINES
(artwork_id,art_name,genre,artist_id,price,descrip,art_url);

CREATE TABLE IF NOT EXISTS customers_data(
  cid SMALLINT(10) UNSIGNED,
  username VARCHAR(50),
  pronouns VARCHAR(50),
  city VARCHAR(100),
  us_state VARCHAR(30),
  interested_genres TEXT(65535),
  low_price SMALLINT(10) UNSIGNED,
  high_price SMALLINT(10) UNSIGNED,
  artist_id_list TEXT(65535),
  artwork_id_list TEXT(65535)
);

LOAD DATA LOCAL INFILE '/docker-entrypoint-initdb.d/data_files/Customers.csv'
INTO TABLE customers_data
FIELDS TERMINATED BY ','
ENCLOSED BY '"'
LINES TERMINATED BY '\r'
IGNORE 1 LINES
(cid,username,pronouns,city,us_state,interested_genres,low_price,high_price,artist_id_list,artwork_id_list);