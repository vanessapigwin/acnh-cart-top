/* ----------------- CATEGORIES TABLE --------------------- */
with category_list as (
	select distinct category
	from raw_csv.combined 
)
insert into categories (category_name)
select 
	category
from category_list
order by category asc

/* -------------------PRODUCT table -----------------------*/
insert into product (product_name, price, style_name, category_id)
select distinct
	co.product_name,
	co.price,
	co.style_name,
	c.category_id 
from raw_csv.combined co
join categories c on co.category = c.category_name
order by c.category_id asc, co.product_name asc

/* ---------------- VARIANTS table ----------------------- */
insert into product_variants (color, filename, description, product_id)
select 
c.color,
c.filename, 
c.description,
p.product_id
from raw_csv.combined c 
join product p on c.product_name = p.product_name