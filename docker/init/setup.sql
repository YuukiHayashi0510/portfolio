-- must change your name and databasename, passward.
CREATE ROLE sample_admin LOGIN PASSWORD 'sample_psql';
CREATE DATABASE sample_dev;
CREATE DATABASE sample_test;
GRANT ALL PRIVILEGES ON DATABASE sample_dev TO sample_admin;
GRANT ALL PRIVILEGES ON DATABASE sample_test TO sample_admin;
ALTER ROLE sample_admin WITH CREATEROLE CREATEDB SUPERUSER;
