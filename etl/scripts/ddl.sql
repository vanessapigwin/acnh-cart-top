--select table_name from information_schema.tables
--where table_schema='raw_csv'

create table if not exists categories (
	category_id serial primary key,
	category_name varchar(50) not null
);

create table if not exists product (
	product_id serial primary key,
	product_name varchar(50) not null,
	price integer not null,
	style_name varchar(50) not null,
	category_id integer references categories (category_id) on delete cascade
);

create table if not exists product_variants (
	variant_id serial primary key,
	color varchar(50) not null,
	filename varchar(100) not null,
	description varchar(200),
	product_id integer references product (product_id) on delete cascade
);