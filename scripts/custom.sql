-- Need to implement the function below for all tables
create or replace function public.get_distinct_actor(column_name text, other_columns text)
returns setof actor as $$
	begin
		return query execute 
	'select ACTOR_ID, FIRST_NAME, LAST_NAME, LAST_UPDATE from (select distinct on (' || column_name || ') ' || column_name || ', '|| other_columns ||' from actor) t';
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
