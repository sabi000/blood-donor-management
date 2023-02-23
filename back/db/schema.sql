create table if not exists donor(
    id serial primary key, 
    name varchar(50),
    address varchar(50),
    bloodgroup varchar(3),
    email varchar(30),
    phone varchar(10),
    password varchar(60),
    available boolean default 1
);

create table if not exists org(
    id serial primary key, 
    name varchar(50),
    address varchar(50),
    PAN varchar(9),
    email varchar(30),
    phone varchar(10),
    password varchar(60)
);

create table if not exists events(
    id serial primary key,
    name varchar(80),
    location varchar(60),
    date date,
    stime time,
    etime time,
    contact varchar(10),
    description text
)



