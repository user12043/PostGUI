create or replace function public.get_distinct(table_name text, column_name text)
returns setof text as $$
	begin
		return query execute 'select distinct cast( ' || column_name || ' as text) from ' || table_name;
	end
$$ language plpgsql;

create or replace function public.get_distinct_count(table_name text, column_name text)
returns integer as $$
	declare
	c integer;
	begin
		 execute 'select count(distinct ' || column_name || ') from ' || table_name into c;
		 perform set_config('response.headers', '[{"content-range": "*/'|| c ||'"}]', true);
		return c;
	end
$$ language plpgsql;

CREATE SCHEMA arcanor;

CREATE ROLE arcanor NOSUPERUSER NOCREATEDB NOCREATEROLE NOINHERIT LOGIN PASSWORD 'arcanor';

CREATE TABLE arcanor.param (
	id serial,
	code varchar NULL,
	value varchar NULL,
	CONSTRAINT param_pk PRIMARY KEY (id)
);

GRANT ALL ON TABLE arcanor.param TO arcanor;

GRANT USAGE ON SCHEMA arcanor TO arcanor;

INSERT INTO arcanor.param (code,value)
	VALUES ('param1','value1');
