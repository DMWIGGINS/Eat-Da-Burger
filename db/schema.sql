-- creating our burgers database
DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;
USE burgers_db;

-- creating our burgers table

CREATE TABLE burgers (

    id INT NOT NULL AUTO_INCREMENT,
    burger_name varchar
    (50) NOT NULL,
    devoured BOOLEAN DEFAULT FALSE,
    date TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    primary key
    (id)
);





   