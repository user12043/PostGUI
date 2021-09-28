create or replace function public.get_distinct(table_name text, column_name text)
returns setof text as $$
	begin
		return query execute 'select distinct cast( ' || column_name || ' as text) from ' || table_name;
	end
$$ language plpgsql;
