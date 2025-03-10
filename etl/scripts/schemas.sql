--create schema if not exists raw_csv authorization tomnook;
--alter default privileges in raw_csv grant all privileges on tables to pigwin;
--alter role pigwin in database acnh set search_path to public,raw_csv;
show search_path;